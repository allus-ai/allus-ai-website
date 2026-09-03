// Allus — mobile layout patches applied via element.style.
// Some runtime-rendered nodes keep their inline React styles pinned, so stylesheet overrides don't land; we patch the DOM directly.
(function () {
  var mq = window.matchMedia('(max-width: 900px)');
  function S(el, o) { if (el) for (var k in o) el.style[k] = o[k]; }
  // ── Accordions (FAQ etc.), all viewports: runtime pins grid-template-rows so 0fr never collapses → drive open/closed via max-height/opacity ──
  function accordions() {
    document.querySelectorAll('button[aria-expanded]').forEach(function (b) {
      if (b.closest('header, nav, [data-nav-toggle]') || b.hasAttribute('data-nav-toggle')) return;
      var body = b.nextElementSibling; if (!body || body.tagName === 'BUTTON' || body.getAttribute('role') === 'dialog') return;
      var inner = body.firstElementChild; if (!inner) return;
      var open = b.getAttribute('aria-expanded') === 'true';
      var h = inner.scrollHeight;
      var mh = open ? (h + 24) + 'px' : '0px'; if (body.style.maxHeight === mh && body.style.opacity === (open ? '1' : '0')) return;
      S(body, { display: 'block', gridTemplateRows: 'none', overflow: 'hidden', maxHeight: mh, opacity: open ? '1' : '0', transition: 'max-height .38s cubic-bezier(.16,1,.3,1), opacity .25s ease' });
      S(b, { cursor: 'pointer' });
    });
  }
  var busy = false;
  function fix() {
    if (busy) return; busy = true; try { fixInner(); } finally { setTimeout(function () { busy = false; }, 0); }
  }
  function fixInner() {
    accordions();
    document.querySelectorAll('[data-marquee]').forEach(function (m) { m.style.animationPlayState = 'running'; m.style.animationName = m.style.animationName || (m.getAttribute('style').indexOf('marquee-right') > -1 ? 'marquee-right' : 'marquee-left'); });
    if (!mq.matches) return;
    // industry: entry cards → snap carousel (re-parent into a fresh scroller)
    document.querySelectorAll('main section > div[style*="margin-top: 64px"][style*="repeat(4"]').forEach(function (g) {
      if (g.getAttribute('data-mob-carousel')) return; g.setAttribute('data-mob-carousel', '1');
      var sc = document.createElement('div'); sc.setAttribute('data-mob-scroller', '1');
      S(sc, { display: 'flex', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', gap: '10px', margin: '0 -20px', padding: '0 20px 6px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' });
      while (g.firstChild) sc.appendChild(g.firstChild);
      g.appendChild(sc);
      S(g, { display: 'block', margin: '40px 0 0', padding: '0', overflow: 'visible', scrollSnapType: 'none' });
      S(g, { gridTemplateColumns: '1fr', marginTop: '32px', overflow: 'visible' });
      sc.querySelectorAll(':scope > a').forEach(function (c) { S(c, { flex: '0 0 62%', scrollSnapAlign: 'start', height: '220px', minHeight: '220px', padding: '16px', borderRadius: '18px', boxSizing: 'border-box' }); });
    });
    // industry: 8-bar chart mock keeps 8 columns + fixed height
    document.querySelectorAll('section[aria-labelledby="ops-title"] div[style*="repeat(8"]').forEach(function (c) { S(c, { gridTemplateColumns: 'repeat(8, minmax(0, 1fr))', height: '150px', gap: '6px' }); });
    // company: mission carousel → rebuild as owned cards (runtime buttons keep their styles pinned)
    document.querySelectorAll('section[aria-labelledby="mission-title"] div[style*="repeat(3"]').forEach(function (c) {
      if (c.getAttribute('data-mob-rebuilt')) return; c.setAttribute('data-mob-rebuilt', '1');
      var sc = document.createElement('div'); sc.setAttribute('data-mob-scroller', '1');
      var pl = parseFloat(getComputedStyle(c.parentElement).paddingLeft) || 0;
      S(sc, { display: 'flex', overflowX: 'auto', overflowY: 'hidden', scrollSnapType: 'x mandatory', gap: '10px', margin: '0 -' + pl + 'px', padding: '0 ' + (pl || 20) + 'px 6px', scrollbarWidth: 'none' });
      if (!pl) S(sc, { margin: '0' });
      c.querySelectorAll(':scope > button').forEach(function (btn) {
        var spans = Array.prototype.slice.call(btn.querySelectorAll('span')).filter(function (s) { return !s.querySelector('span') && s.textContent.trim(); }); var num = spans[0], title = btn.querySelector('strong'), note = spans.filter(function (s) { return s !== num && !/^\d+$/.test(s.textContent.trim()) && s.textContent.trim() !== (title ? title.textContent.trim() : ''); })[0];
        var card = document.createElement('div'); card.setAttribute('data-mob-card', '');
        card.innerHTML = '<span>' + (num ? num.textContent : '') + '</span><strong>' + (title ? title.textContent : '') + '</strong><span>' + (note ? note.textContent : '') + '</span>';
        sc.appendChild(card);
      });
      while (c.firstChild) c.removeChild(c.firstChild);
      c.appendChild(sc);
      S(c, { display: 'block', border: '0', background: 'transparent', borderRadius: '0', overflow: 'visible' });
    });
    // company: drop 112px spacer in "why we exist"
    document.querySelectorAll('main section > div[style="height: 112px;"]').forEach(function (d) { S(d, { height: '32px' }); });
    // model detail: step chips — hide note, mark active (runtime pins inline styles)
    document.querySelectorAll('section[aria-labelledby="how-title"] ol[role="tablist"] > li > button').forEach(function (b) {
      var spans = b.querySelectorAll(':scope > span:last-of-type > span'); spans.forEach(function (s) { S(s, { display: 'none', maxHeight: '0' }); });
      var active = !!b.querySelector(':scope > span[aria-hidden]') || b.getAttribute('aria-selected') === 'true';
      if (active) b.setAttribute('data-mob-active', ''); else b.removeAttribute('data-mob-active');
      S(b, { minHeight: '56px', height: 'auto', maxHeight: 'none' });
      var num = b.querySelector(':scope > span:first-child'); if (num) S(num, { color: active ? '#2459d3' : '#5f687a' });
    });
    // roi wave: seamless loop + compact card
    document.querySelectorAll('section[aria-labelledby="nar-title"] span').forEach(function (lab) {
      if (lab.textContent.trim() !== 'Year-one ROI') return;
      var card = lab.parentElement; while (card && !(card.style && /hidden/.test(card.style.overflow))) card = card.parentElement; if (!card) return;
      S(card, { minHeight: '0', height: '168px' });
      var wave = card.querySelector(':scope > div[aria-hidden]'); if (wave) S(wave, { maxHeight: '70%' });
      card.querySelectorAll(':scope > div[aria-hidden] svg').forEach(function (svg) { S(svg, { width: '300%', maxWidth: 'none', animationName: /bob/.test(svg.style.animation || svg.style.animationName) ? 'wave-m, bob' : 'wave-m' }); });
    });
    // inline text links → tap targets
    document.querySelectorAll('main a[href], footer a[href], a[href^="mailto:"]').forEach(function (a) {
      if (a.closest('nav[aria-label="Primary navigation"], nav[aria-label="Breadcrumb"], [role="dialog"]') || a.querySelector('img')) return;
      var r = a.getBoundingClientRect();
      if ((r.height > 0 && r.height < 40) || a.href.indexOf('mailto:') === 0) S(a, { display: 'inline-flex', alignItems: 'center', minHeight: a.closest('footer') ? '40px' : '44px' });
    });
  }
  var t; function schedule() { clearTimeout(t); t = setTimeout(fix, 80); }
  fix(); [300, 900, 1800, 3500].forEach(function (ms) { setTimeout(fix, ms); });
  window.addEventListener('load', fix); window.addEventListener('resize', schedule);
  new MutationObserver(function (muts) { for (var i = 0; i < muts.length; i++) { if (muts[i].addedNodes.length) { schedule(); return; } } }).observe(document.documentElement, { childList: true, subtree: true });
  document.addEventListener('click', function (e) { if (e.target.closest && e.target.closest('button[aria-expanded]')) { requestAnimationFrame(accordions); setTimeout(accordions, 60); } }, true);
  window.__allusMobileFix = fix;
})();
