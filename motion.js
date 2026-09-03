// Allus — shared motion language (derived from the Home "How it works" pipeline).
// Runs on every page. One 900ms clock drives: sequential chip light-up, step-rail sweep,
// numbered-list progress, and a soft glow on the card that holds the active item.
(function () {
  'use strict';
  var BLUE = '#3f7afe', BLUE_D = '#2459d3', TINT = '#eef3ff', GLOW = '0 0 0 1px rgba(63,122,254,.35), 0 18px 44px rgba(36,89,211,.14)';
  var TICK = 900;
  var groups = [];

  function isPipeline(el) { return !!el.closest('section[aria-labelledby="how-title"] a[href*="allusone"], section[aria-labelledby="how-title"] div[style*="220px 64px"]'); }

  // Collect "chip rows": flex/grid containers whose children are small pill/tag items.
  function collectChipRows(root) {
    var out = [];
    root.querySelectorAll('ul, div, dl').forEach(function (c) {
      if (c.closest('header, footer, nav, form, [data-drawer]') || isPipeline(c)) return;
      var kids = Array.prototype.filter.call(c.children, function (k) { return k.matches('li, span, a, div, dd'); });
      if (kids.length < 3 || kids.length > 8) return;
      var cs = getComputedStyle(kids[0]);
      var r = parseFloat(cs.borderRadius) || 0;
      var pill = r >= 10 && (cs.borderStyle !== 'none' || cs.backgroundColor !== 'rgba(0, 0, 0, 0)');
      var h = kids[0].getBoundingClientRect().height;
      if (!pill || h < 28 || h > 96) return;
      if (kids.some(function (k) { return k.querySelector('img, video, h2, h3'); })) return;
      out.push({ items: kids, kind: 'chips' });
    });
    return out;
  }

  // Collect numbered step rails: containers with children starting with 01/02 mono numbers or a/b/c.
  function collectStepRails(root) {
    var out = [];
    root.querySelectorAll('ol, ul, div').forEach(function (c) {
      if (c.closest('header, footer, nav, form, [data-drawer]') || isPipeline(c)) return;
      var kids = Array.prototype.filter.call(c.children, function (k) { return k.matches('li, article, div, a, button'); });
      if (kids.length < 3 || kids.length > 7) return;
      var nums = kids.filter(function (k) { var t = (k.querySelector('span, b, i') || {}).textContent || ''; return /^\s*(0[1-9]|[a-f])\s*$/.test(t); });
      if (nums.length !== kids.length) return;
      if (kids.some(function (k) { return k.matches('[role="tab"]') || k.querySelector('[role="tab"]'); })) return; // steppers already animate
      out.push({ items: kids, kind: 'rail' });
    });
    return out;
  }

  function prep(g) {
    g.items.forEach(function (k) {
      if (k.__mprep) return; k.__mprep = true;
      k.style.transition = (k.style.transition ? k.style.transition + ', ' : '') + 'background .35s ease, border-color .35s ease, box-shadow .45s ease, color .3s ease';
      var num = k.querySelector('span, b, i');
      if (g.kind === 'rail' && num) { num.style.transition = 'color .3s ease'; }
    });
    g.phase = 0;
    g.base = g.items.map(function (k) { return { bg: k.style.background, bd: k.style.borderColor, sh: k.style.boxShadow, nc: (k.querySelector('span, b, i') || {}).style ? k.querySelector('span, b, i').style.color : '' }; });
  }

  function paint(g) {
    var n = g.items.length, span = n + 2; // items + 2 rest beats
    var p = g.phase % span;
    g.items.forEach(function (k, i) {
      var on = p >= i && p < n;           // fill up sequentially, then reset together
      var lead = p === i;
      if (g.kind === 'chips') {
        k.style.background = on ? TINT : g.base[i].bg;
        k.style.borderColor = on ? BLUE : g.base[i].bd;
        k.style.boxShadow = lead ? GLOW : g.base[i].sh;
      } else {
        var num = k.querySelector('span, b, i');
        if (num) { num.style.color = on ? BLUE_D : g.base[i].nc; num.style.fontWeight = on ? '600' : ''; }
        k.style.boxShadow = lead ? GLOW : g.base[i].sh;
        k.style.borderColor = lead ? BLUE : g.base[i].bd;
      }
    });
    g.phase++;
  }

  function scan() {
    var found = collectChipRows(document).concat(collectStepRails(document));
    found.forEach(function (g) {
      var key = g.items[0];
      if (key.__mgroup) return;
      key.__mgroup = true; prep(g); groups.push(g);
    });
  }

  var started = false;
  function start() {
    if (started) return; started = true;
    scan();
    setInterval(function () { groups.forEach(function (g) { if (g.items[0].isConnected) paint(g); }); }, TICK);
    // late-mounted content (templates hydrate after load)
    var mo = new MutationObserver(function () { clearTimeout(mo.__t); mo.__t = setTimeout(scan, 400); });
    mo.observe(document.body, { childList: true, subtree: true });
    setTimeout(scan, 1500); setTimeout(scan, 4000);
  }
  if (document.readyState === 'complete') setTimeout(start, 600); else window.addEventListener('load', function () { setTimeout(start, 600); });
})();
