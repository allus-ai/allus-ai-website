# Allus AI website — Deployment handoff

Static, client-rendered marketing site. No build step, no server code. Deploy the `export/` folder as-is to any static host.

## 1. What's in the package

```
export/
  index.html               Home
  model.html               Model overview
  model-detail.html        ?model=allusone | allusflow | allusedge
  solutions.html           Solutions overview
  solution.html            ?solution=operational-knowledge-guidance | production-process-intelligence
                                     | equipment-asset-intelligence | industrial-safety-site-intelligence
  industry.html            ?industry=electronics-assembly | fmcg | food-beverage | advanced-materials | automotive
  story.html               ?story=advanced-materials | electronics-assembly | biscuit-production
  company.html · privacy.html · terms.html · connect.html · 404.html
  AllusNav.dc.html         Shared header/nav (imported by every page)
  allus-content.js         ALL copy + data (ES module)
  site-config.js           Launch switches (see §3)
  support.js               Runtime that renders the <x-dc> templates (do not edit)
  responsive.css · mobile.css · mobile.js   Responsive layer (see §8) — mobile.js patches a few runtime-rendered nodes whose inline styles can't be overridden by CSS
  sitemap.xml · robots.txt · site.webmanifest · favicon*.png/svg
  _headers                 Netlify/Cloudflare Pages headers (CSP, HSTS, cache)
  _redirects               Netlify/Cloudflare clean-URL rewrites
  vercel.json              Same headers + rewrites for Vercel
  assets/                  images (WebP), videos (MP4), logos, partner logos
```

## 2. Hosting requirements

- **Must be served over HTTP(S).** `file://` will not work — pages load `support.js` and `allus-content.js` as ES modules and import `AllusNav.dc.html` via fetch.
- Any static host works: Vercel, Netlify, Cloudflare Pages, S3 + CloudFront, GitHub Pages, nginx.
- Entry point: `index.html`. 404 page: `404.html`.
- Clean URLs (`/model/allusflow` → `model-detail.html?model=allusflow`) are defined in `_redirects` (Netlify/CF) and `vercel.json` (Vercel). For nginx/S3+CloudFront, replicate these rewrites; if you skip them, the `?param=` URLs still work.
- Headers (CSP, HSTS, X-Frame-Options, cache-control) are in `_headers` / `vercel.json`. Apply the equivalents on other hosts. CSP allows: self, Google Fonts, and the analytics origins in `site-config.js`. If you add a form endpoint or analytics domain, **add it to `connect-src` / `script-src`** or requests will be blocked.

Local test:
```
cd export
npx serve .          # or: python3 -m http.server 8080
```

## 2a. Changes in this revision (addresses issues-and-next-steps.md)

| # | Issue | Fix |
|---|---|---|
| P0-1 | Mobile layout broken (min-width 1244) | `responsive.css` (linked from every page): breakpoints 1180 / 900 / 480 / 360, drawer nav in `AllusNav.dc.html`, poster-only hero video on ≤900. Verified 320/390/768/1024 × 11 routes: no horizontal overflow, 44px targets. |
| P0-2 | Form: no `required`, mailto shown as success | Runtime now honours boolean attrs; email/first/last/company are `required` + `autocomplete`; native validation with focused error summary; endpoint success only on 2xx; **mailto fallback shows guidance, not a success state**, and the button reads "Open email to send" while `formEndpoint` is empty. |
| P1-3 | canonical/OG/sitemap → 404 domain | All URLs now point to the live GitHub Pages origin. When `www.allus.ai` is bound and returns 200 everywhere, search-replace `https://allus-ai.github.io/allus-ai-website` → `https://www.allus.ai` in `*.html`, `sitemap.xml`, `robots.txt`, `site-config.js`. |
| P1-4 | Terms is a legal draft | Full Terms of Service written; linked from footer (bottom row + Company group), Company nav menu, consent line and sitemap; indexable. |
| P1-6 | `<html lang>` missing | `lang="en"` on every page. |
| P2-7 | Literal `{{…}}` resource requests + console warnings | Template URLs are `data-dc-src`/`data-dc-poster` (resolved by the runtime, never fetched by the parser); dev warnings silenced unless `ALLUS_CONFIG.debug = true`. |
| P2-8 | Headers not applied on GitHub Pages | Added `<meta http-equiv="Content-Security-Policy">` + referrer meta on every page (`frame-ancestors`/HSTS still need a real host — see §2). |
| P2-9 | Intent copy mismatch | Single `INTENT_COPY` table in `connect.html` covers all six intents; unknown → demo. |

P1-5 approvals: **done** — `approvedMetrics: true`, quantitative results shown site-wide; Terms re-linked in footer and sitemap.

Still open (nice-to-have): video re-encode (§7), self-hosting React/Babel (§9), pre-rendering for SEO (§9).

## 3. Pre-launch switches — `site-config.js`

Edit this one file; nothing else needs code changes.

| Key | Purpose | Default |
|---|---|---|
| `formEndpoint` | URL the Connect form POSTs to (JSON body). Empty → falls back to `mailto:contact@allus.ai`. | `""` |
| `ga4Id` | GA4 measurement ID. Loads gtag **only after cookie consent**. | `""` |
| `plausibleDomain` | Plausible site domain (cookieless alternative). | `""` |
| `approvedMetrics` | `true` (approved). Set `false` to fall back to qualitative words (Safer / Faster / Fewer / Leaner). | `true` |
| `siteUrl` | Canonical origin (also hard-coded in canonical/OG/JSON-LD tags and sitemap — search-replace when the domain changes). | GitHub Pages origin |
| `debug` | `true` → runtime template warnings in the console. Keep `false` in production. | `false` |

Also before launch:
- [x] `terms.html` — full standard B2B Terms of Service (16 sections, Georgia law, Fulton County venue, legal@allus.ai). Review once by counsel; edit the `TERMS` array in the page script.
- [x] `privacy.html` reviewed by legal.
- [ ] Replace `assets/og-default.png` if you want a custom share image.
- [ ] Confirm `contact@allus.ai` is monitored (privacy contact).

## 4. Form (`connect.html`)

- POSTs JSON `{ name, email, company, context, intent, page, ts }` to `formEndpoint`.
- Honeypot field `website` — reject submissions where it is non-empty.
- Expects `2xx` for success; anything else shows an inline error. With no `formEndpoint` set, the page shows the success state and logs the payload to the console (no email client is opened).
- Compatible out of the box with Formspree / Basin / HubSpot Forms API / a Cloudflare Worker. Add the endpoint origin to CSP `connect-src`.

## 5. Analytics events

If `ga4Id` or `plausibleDomain` is set, these events fire (name → props):
- `cta_click` → `{ label, page }` — every primary CTA
- `form_submit` → `{ intent }`
- `form_error` → `{ status }`
- `nav_menu_open` → `{ menu }`
- `video_play` → `{ scene }`

## 6. Content updates

- All text and data live in `allus-content.js` (solutions, industries, stories, FAQ, privacy, company, footer). Edit there; every page reads from it.
- Per-page `<title>` / `<meta description>` / OG tags are in each HTML file's `<head>`. Parameterised pages (`model-detail`, `solution`, `industry`, `story`) set their title dynamically from the param.
- Adding a page: copy an existing HTML, update `<head>` meta, add it to `sitemap.xml` and the footer in `allus-content.js`.

## 7. Media

- Images are WebP (2.9 MB total), lazy-loaded.
- Hero videos (`assets/media/allus-hero-{1..4}.mp4`, ~8.6 MB total) are `preload="none"`, poster-first; only current + next scene load on desktop, poster-only on mobile. **Recommended before launch:** re-encode with ffmpeg to reduce size, e.g.
  `ffmpeg -i in.mp4 -vf scale=1280:-2 -c:v libx264 -crf 28 -preset slow -an -movflags +faststart out.mp4`
  (and optionally a WebM/VP9 variant). Keep the same filenames or update paths in `index.html`.

### Caching
`_headers` sets `no-cache` for shared runtime files (AllusNav.dc.html, mobile.css, responsive.css, site.js, allus-content.js) so updates propagate immediately; media under `assets/` is immutable-cached. Mirror these rules on nginx/CloudFront if not using Netlify/Cloudflare Pages. (no-cache for shared)

## 8. Browser support

- Evergreen Chrome / Edge / Safari 16+ / Firefox. Scroll-driven animations degrade to static content in Safari/Firefox; `backdrop-filter` falls back to solid fills. Motion is always on by product decision (no reduce-motion override, no pause toggle; carousels/steppers auto-advance and do not pause on hover).
- Responsive: `responsive.css` normalises (≤1180 two columns, ≤900 single column, drawer nav); `mobile.css` is the dedicated phone design (≤900): hero reel card with chip tabs, vertical pipeline, 2×2 stat tiles, image-first solutions, snap carousels, numbered lists, 2-col footer, sticky bottom "Request a demo" bar (from `AllusNav.dc.html`). `mobile.js` (deferred) applies the industry entry-card carousel, the 8-bar chart geometry and 44px tap targets for inline links via element.style. All three are linked on every page in that order. Verified at 320 / 390 / 768 / 1024.

## 9. Known limitations / future work

- **Client-side rendering.** First paint is a `<noscript>` summary + shell; the full content renders after `support.js` loads (~100 ms on broadband). Meta tags, JSON-LD and the sitemap are static, so search engines index titles/descriptions fine, but body text depends on JS execution (Googlebot handles this; some crawlers/previews won't). If organic SEO becomes a priority, pre-render the pages (e.g. `npx prerender` / Puppeteer snapshot at build) or port to Next/Astro — the markup maps 1:1 to sections.
- Customer stories are anonymised; there are no named customers or quotes yet.
- Video files are not yet re-encoded (see §7).

## 10. Smoke test after deploy

1. Open `/` — hero renders, nav dropdowns open, no console errors.
2. `/model/allusflow`, `/solutions/production-process-intelligence`, `/industries/fmcg`, `/stories/biscuit-production` — clean URLs resolve and show the right content.
3. Submit `/connect` with test data — check the endpoint receives it (or mailto opens if endpoint is empty).
4. Accept cookie banner → analytics script loads (check network tab).
5. Visit a bogus path → `404.html`.
6. Lighthouse mobile: expect Performance ≥ 85, A11y ≥ 95, SEO 100.
