// Shared launch behaviour: cookie consent, analytics loader, form submission, external-link hardening.
(function () {
  const cfg = window.ALLUS_CONFIG || {};
  const KEY = 'allus-consent';

  function loadAnalytics() {
    if (cfg.ga4Id) {
      const s = document.createElement('script'); s.async = true; s.src = 'https://www.googletagmanager.com/gtag/js?id=' + cfg.ga4Id; document.head.appendChild(s);
      window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
      window.gtag('js', new Date()); window.gtag('config', cfg.ga4Id, { anonymize_ip: true });
    }
    if (cfg.plausibleDomain) {
      const s = document.createElement('script'); s.defer = true; s.dataset.domain = cfg.plausibleDomain; s.src = 'https://plausible.io/js/script.js'; document.head.appendChild(s);
    }
  }
  window.allusTrack = function (name, params) {
    if (window.gtag) window.gtag('event', name, params || {});
    if (window.plausible) window.plausible(name, { props: params || {} });
  };

  function banner() {
    if (!(cfg.ga4Id || cfg.plausibleDomain)) return; // no trackers → no banner needed
    const choice = localStorage.getItem(KEY);
    if (choice === 'accept') return loadAnalytics();
    if (choice === 'reject') return;
    const el = document.createElement('div');
    el.setAttribute('role', 'dialog'); el.setAttribute('aria-label', 'Cookie notice');
    el.style.cssText = 'position:fixed;left:24px;right:24px;bottom:24px;z-index:60;display:flex;flex-wrap:wrap;gap:14px 24px;align-items:center;justify-content:space-between;max-width:760px;margin-inline:auto;padding:16px 18px 16px 22px;border:1px solid rgba(16,24,40,.14);border-radius:16px;background:rgba(255,255,255,.96);box-shadow:0 24px 60px rgba(16,24,40,.16);backdrop-filter:blur(10px);font:14px/1.5 Manrope,"Avenir Next",sans-serif;color:#101828';
    el.innerHTML = '<span style="flex:1 1 320px">We use analytics cookies to understand how the site is used. <a href="privacy.html" style="color:#2459d3">Privacy Policy</a></span><span style="display:flex;gap:8px"><button type="button" data-c="reject" style="height:38px;padding:0 14px;border:1px solid rgba(17,19,24,.22);border-radius:10px;background:transparent;font:inherit;font-weight:600;cursor:pointer">Decline</button><button type="button" data-c="accept" style="height:38px;padding:0 16px;border:0;border-radius:10px;background:#111318;color:#fff;font:inherit;font-weight:600;cursor:pointer">Accept</button></span>';
    el.addEventListener('click', e => { const b = e.target.closest('[data-c]'); if (!b) return; localStorage.setItem(KEY, b.dataset.c); el.remove(); if (b.dataset.c === 'accept') loadAnalytics(); });
    document.body.appendChild(el);
  }

  // Contact form: called from connect page. Returns a promise resolving true on success.
  window.allusSubmitForm = async function (form) {
    const data = Object.fromEntries(new FormData(form).entries());
    if (data.website) return true; // honeypot filled → silently "succeed"
    delete data.website;
    data.page = location.href; data.submittedAt = new Date().toISOString();
    window.allusTrack('form_submit', { intent: data.intent || 'demo' });
    if (cfg.formEndpoint) {
      const r = await fetch(cfg.formEndpoint, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(data) });
      if (!r.ok) throw new Error('Form endpoint returned ' + r.status);
      return true;
    }
    // Fallback: open the visitor's mail client with the message pre-filled
    const body = Object.entries(data).map(([k, v]) => k + ': ' + v).join('\n');
    location.href = 'mailto:' + (cfg.formFallbackEmail || 'contact@allus.ai') + '?subject=' + encodeURIComponent('Website inquiry — ' + (data.intent || 'demo')) + '&body=' + encodeURIComponent(body);
    return true;
  };

  // CTA click tracking + rel hardening for external links
  document.addEventListener('click', e => {
    const a = e.target.closest('a[href]'); if (!a) return;
    if (/^https?:/.test(a.href) && !a.href.startsWith(location.origin)) { a.rel = 'noopener noreferrer'; a.target = a.target || '_blank'; }
    if (/connect\.html/.test(a.getAttribute('href') || '')) window.allusTrack('cta_click', { label: a.textContent.trim().slice(0, 60), page: location.pathname });
  }, true);

  // ── Accessibility: skip link, pause-motion toggle, feature-detect fallbacks ──
  function a11y() {
    if (!document.getElementById('skip-link')) {
      const skip = document.createElement('a'); skip.id = 'skip-link'; skip.href = '#main'; skip.textContent = 'Skip to content';
      skip.style.cssText = 'position:fixed;top:-100px;left:16px;z-index:100;padding:10px 14px;border-radius:10px;background:#111318;color:#fff;font:600 14px Manrope,sans-serif;transition:top .2s';
      skip.addEventListener('focus', () => skip.style.top = '12px'); skip.addEventListener('blur', () => skip.style.top = '-100px');
      document.body.prepend(skip);
      const main = document.querySelector('main'); if (main && !main.id) { main.id = 'main'; main.tabIndex = -1; }
    }
    const MKEY = 'allus-motion';
    const reduce = () => { document.documentElement.classList.add('reduce-motion'); document.querySelectorAll('video').forEach(v => { v.pause(); v.removeAttribute('autoplay'); }); };
    const pref = localStorage.getItem(MKEY) || (matchMedia('(prefers-reduced-motion: reduce)').matches ? 'off' : 'on');
    if (pref === 'off') reduce();
    if (!document.getElementById('motion-toggle')) {
      const b = document.createElement('button'); b.id = 'motion-toggle'; b.type = 'button';
      b.setAttribute('aria-pressed', pref === 'off'); b.title = 'Pause animations';
      b.style.cssText = 'position:fixed;right:20px;bottom:20px;z-index:55;display:inline-flex;align-items:center;gap:8px;height:36px;padding:0 12px;border:1px solid rgba(16,24,40,.16);border-radius:10px;background:rgba(255,255,255,.92);backdrop-filter:blur(8px);color:#101828;font:600 12px Manrope,sans-serif;cursor:pointer;box-shadow:0 8px 24px rgba(16,24,40,.1)';
      const label = () => b.innerHTML = (localStorage.getItem(MKEY) || pref) === 'off' ? '<span aria-hidden="true">▶</span> Motion off' : '<span aria-hidden="true">❚❚</span> Motion on';
      label();
      b.addEventListener('click', () => { const cur = (localStorage.getItem(MKEY) || pref) === 'off' ? 'on' : 'off'; localStorage.setItem(MKEY, cur); b.setAttribute('aria-pressed', cur === 'off'); label(); if (cur === 'off') reduce(); else location.reload(); });
      document.body.appendChild(b);
    }
    // Feature fallbacks: browsers without scroll-driven animations must not hide "rise-in" content
    if (!CSS.supports('animation-timeline: view()')) document.documentElement.classList.add('no-scroll-timeline');
    // Cheaper ambient effects when the device asks for it
    if (matchMedia('(prefers-reduced-transparency: reduce)').matches || (navigator.deviceMemory && navigator.deviceMemory <= 4)) document.documentElement.classList.add('lite');
  }
  const boot = () => { banner(); a11y(); };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
})();
