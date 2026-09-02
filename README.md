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
- company.html · privacy.html · connect.html?intent=demo|model-access|pilot|sales|partnerships|support

## Before launch
- All copy and data live in `allus-content.js`. Metrics marked "illustrative" must be replaced with approved figures.
- `connect.html` validates locally only — wire the form to your CRM / form service.
- Fonts load from Google Fonts (needs internet); everything else is local.
- Each page is a Design Component (`<x-dc>` + `support.js` runtime). For a framework port, the inline-styled markup maps 1:1 to sections.
