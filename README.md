# Allus AI — website (static export)

Static, clickable site. Serve the folder over HTTP — `file://` will not work because pages load `support.js` and `allus-content.js` as modules.

## Deploy
Upload the whole folder to any static host (Vercel, Netlify, S3 + CloudFront, GitHub Pages, nginx). No build step. `index.html` is the entry.

Local preview:

    npx serve .            # or: python3 -m http.server 8080

## Routes
- index.html — Home
- model.html — Model overview
- model-detail.html?model=allusone | allusflow | allusedge
- solutions.html — Solutions overview
- solution.html?solution=operational-knowledge-guidance | production-process-intelligence | equipment-asset-intelligence | industrial-safety-site-intelligence
- industry.html?industry=electronics-assembly | fmcg | food-beverage | advanced-materials | automotive
- story.html?story=advanced-materials | electronics-assembly | biscuit-production — Customer stories (3)
- company.html · privacy.html · terms.html · connect.html?intent=demo|model-access|pilot|sales|partnerships|support

## Before launch — edit `site-config.js`
- `formEndpoint`: POST URL for the contact form (Formspree / HubSpot / your API). Empty → falls back to a pre-filled mailto:. Honeypot field `website` is included.
- `ga4Id` / `plausibleDomain`: analytics. When set, a cookie-consent banner appears automatically; trackers load only after Accept.
- `approvedMetrics`: the figures in `allus-content.js` (78%, 77%, 32%, 10×, 99% …) are placeholders borrowed from public deployments. Replace them, then set this to `true`. While `false`, pages show qualitative claims instead of numbers.
- `terms.html` is a draft — have counsel review before launch.

## What's included for launch
- SEO: per-page `<title>`/description/canonical/Open Graph/Twitter, Organization JSON-LD, `sitemap.xml`, `robots.txt`, `<noscript>` fallback. Parameterised pages update their title/canonical from the URL.
- Clean URLs: `_redirects` (Netlify) and `vercel.json` map `/model/allusflow`, `/solutions/…`, `/industries/…`, `/stories/…` to the pages. Update `sitemap.xml` to those paths if you use them.
- Security headers + caching: `_headers` (Netlify) / `vercel.json`. CSP allows Google Fonts, GA4, Plausible, Formspree, HubSpot — trim to what you use.
- Performance: all photos are WebP (≤1600px, ~2.9 MB total vs 11 MB), lazy-loaded; hero videos `preload="none"` and only the active + next clip carry a `src`. **Still to do:** re-encode the 5 MP4s (8.6 MB) to H.264 CRF 28 / WebM at 1280px — needs ffmpeg.
- Accessibility: skip link, `<main>` landmark, pause-motion toggle (persisted, honours `prefers-reduced-motion`), hero reel pause button, keyboard menus (Enter/Space/↓ open, ↑↓ move, Esc closes), contrast lifted on faint greys, alt text on all images.
- Browser fallbacks: no scroll-driven animations (Safari/Firefox) → content shows immediately, progress bar hidden; no `backdrop-filter` → solid panels; low-memory devices → blur removed.
- Ops: `404.html`, favicon set + `site.webmanifest`, analytics via `site-config.js` (cookie banner shown only when a tracker is configured), CTA + form events (`cta_click`, `form_submit`).

## Not done here (needs your stack)
- Mobile layouts (pages are desktop-first, min-width 1244px).
- Static pre-rendering / framework port for first-paint HTML and crawler-visible content.
- Real customer metrics, testimonials, final legal review.
- Fonts load from Google Fonts (needs internet); everything else is local.
- Each page is a Design Component (`<x-dc>` + `support.js` runtime). For a framework port, the inline-styled markup maps 1:1 to sections.
