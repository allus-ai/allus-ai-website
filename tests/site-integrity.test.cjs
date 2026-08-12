const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const test = require("node:test");
const { canonicalRoutes, runSiteCheck } = require("../scripts/site-check.cjs");

const projectRoot = path.resolve(__dirname, "..");
const appSource = fs.readFileSync(path.join(projectRoot, "app.js"), "utf8");
const cssSource = fs.readFileSync(path.join(projectRoot, "styles.css"), "utf8");

test("static site integrity checks pass", () => {
  const summary = runSiteCheck();
  assert.equal(summary.canonicalRouteCount, 24);
  assert.ok(summary.assetCount >= 26);
  assert.ok(summary.staticIdCount >= 14);
});

test("every canonical route is represented by the router configuration", () => {
  const derivedPrefixes = new Set([
    "/solutions/",
    "/industries/",
    "/resource/"
  ]);

  for (const route of canonicalRoutes) {
    const isLiteral = appSource.includes(`['${route}', { type:`);
    const isDerived = [...derivedPrefixes].some(prefix => route.startsWith(prefix));
    assert.ok(isLiteral || isDerived, `Router configuration does not represent ${route}`);
  }
});

test("legacy aliases target canonical routes", () => {
  const aliasBlock = appSource.match(/const legacyRouteAliases = new Map\(\[([\s\S]*?)\]\);/);
  assert.ok(aliasBlock, "Legacy alias map was not found");
  const aliases = [...aliasBlock[1].matchAll(/\['([^']+)', '([^']+)'\]/g)];
  assert.ok(aliases.length > 0, "No legacy aliases were found");

  for (const [, alias, target] of aliases) {
    assert.ok(alias.startsWith("/"), `Alias is not an application path: ${alias}`);
    assert.ok(canonicalRoutes.has(target), `${alias} targets unknown route ${target}`);
  }
});

test("sitemap generation includes itself and every customer story", () => {
  const sitemapBlock = appSource.match(/function renderSitemap\(\) \{([\s\S]*?)\n  function renderNotFound/);
  const footerNavBlock = appSource.match(/function footerNavigationGroups\(\) \{([\s\S]*?)\n  function renderSitemap/);
  assert.ok(sitemapBlock, "Sitemap renderer was not found");
  assert.ok(footerNavBlock, "Footer navigation helper was not found");
  assert.match(sitemapBlock[1], /\['Sitemap', '\/sitemap'\]/);
  assert.match(sitemapBlock[1], /\.\.\.footerNavigationGroups\(\)/);
  assert.match(footerNavBlock[1], /useCaseStories\.map\(story =>/);
  assert.match(footerNavBlock[1], /`\/resource\/use-cases\/\$\{story\.slug\}`/);
  assert.match(footerNavBlock[1], /\['About Us', '\/company'\]/);
  assert.match(footerNavBlock[1], /\['Trust Center', 'https:\/\/trust\.allus\.ai'\]/);
  assert.match(footerNavBlock[1], /\['Privacy and Security', '\/company\/privacy-security'\]/);
});

test("connect radio controls use phrasing content valid inside buttons", () => {
  const connectBlock = appSource.match(/function renderConnect\(\) \{([\s\S]*?)\n  function detailRow/);
  assert.ok(connectBlock, "Connect renderer was not found");
  const optionButton = connectBlock[1].match(/return `(<button[^`]+)`;/)?.[1];
  assert.ok(optionButton, "Connect option template was not found");
  assert.doesNotMatch(optionButton, /<(?:div|h[1-6]|p)\b/);
  assert.match(optionButton, /class="connect-option-title"/);
  assert.match(optionButton, /class="connect-option-note"/);
});

test("media and companion panels share one responsive sizing contract", () => {
  const normalizedCss = cssSource.replace(/\r\n/g, "\n");
  const contractStart = normalizedCss.indexOf("/* Coupled media layouts share one block size");
  const contractEnd = normalizedCss.indexOf("\n}\n\n.industry-card", contractStart);
  assert.notEqual(contractStart, -1, "Coupled media layout contract was not found");
  assert.notEqual(contractEnd, -1, "Coupled media layout contract is not bounded by the desktop media query");

  const contract = normalizedCss.slice(contractStart, contractEnd);
  assert.match(contract, /\.asset-service-visual,\s*\.site-review-visual\s*\{[\s\S]*?grid-template-rows:\s*var\(--paired-block-size\) auto/);
  assert.match(contract, /\.asset-service-frame,[\s\S]*?\.site-review-ledger\s*\{[\s\S]*?height:\s*100%;[\s\S]*?min-height:\s*0/);
  assert.match(contract, /\.asset-service-steps,\s*\.site-review-steps\s*\{[\s\S]*?grid-template-rows:\s*repeat\(3, minmax\(0, 1fr\)\)/);
  assert.match(contract, /\.asset-service-steps li,\s*\.site-review-steps li\s*\{[\s\S]*?min-height:\s*0/);

  assert.match(appSource, /home-featured-model/);
  assert.match(appSource, /home-model-duo/);
  assert.match(appSource, /home-index-row/);
  assert.match(appSource, /home-hero-photo/);
  assert.match(appSource, /home-industry-tile/);
  assert.match(appSource, /home-deploy-track/);
  assert.match(appSource, /home-hero-facts/);
  assert.match(appSource, /class="asset-service-frame[\s\S]*class="asset-service-ledger/);
  assert.match(appSource, /class="site-review-frame[\s\S]*class="site-review-ledger/);
});

test("mobile resource imagery stays bounded after the copy panel", () => {
  assert.match(
    cssSource,
    /\.resource-gateway-media figure\s*\{\s*height:\s*clamp\(112px, 34vw, 142px\);\s*aspect-ratio:\s*auto;/
  );
});

test("responsive breakpoint ranges do not leave fractional-pixel gaps", () => {
  assert.doesNotMatch(cssSource, /@media \(max-width: (?:760|1050)px\)/);
  assert.match(cssSource, /@media \(max-width: 760\.98px\)/);
  assert.match(cssSource, /@media \(max-width: 1050\.98px\)/);
});

test("shared visual-system controls preserve contrast and responsive hierarchy", () => {
  assert.match(cssSource, /--component-radius:\s*22px/);
  assert.match(cssSource, /--control-dark:\s*#111318/);
  assert.match(cssSource, /\.header-cta,\s*\.button-primary\s*\{[\s\S]*?background:\s*var\(--control-dark\)/);
  assert.match(cssSource, /\.home-band::before\s*\{[\s\S]*?background:\s*linear-gradient/);
  assert.match(cssSource, /\.home-index-row\s*\{[\s\S]*?grid-template-columns:\s*64px minmax\(0, 1fr\) 48px 36px/);
  assert.match(cssSource, /\.home-hero-photo\s*\{[\s\S]*?border-radius:\s*28px/);
  assert.match(cssSource, /@keyframes home-fade-up/);
  assert.match(cssSource, /@media \(max-width: 760\.98px\)\s*\{[\s\S]*?\.hero-message\s*\{\s*grid-template-columns:\s*minmax\(0, 1fr\)/);
  assert.match(cssSource, /body\[data-route="home"\]\s*\{\s*background:\s*#fff/);
  assert.match(cssSource, /body\[data-route="home"\] \.home-hero h1\s*\{[\s\S]*?font-family:\s*var\(--body\)/);
  assert.match(cssSource, /\.platform-preview\s*\{[\s\S]*?background:\s*var\(--dark-panel\)/);
  assert.match(cssSource, /\.demo-form\s*\{[\s\S]*?color:\s*var\(--paper-light\);[\s\S]*?background:\s*var\(--dark-panel\)/);
  assert.match(cssSource, /\.demo-form :is\(input[^;{]*\)\s*\{[\s\S]*?color:\s*var\(--paper-light\)/);
  assert.match(
    cssSource,
    /\.company-context-sequence\n\)\s*\{\n\s*overflow:\s*hidden;\n\s*border:\s*1px solid var\(--line\);\n\s*border-radius:\s*var\(--component-radius\);\n\s*background:\s*var\(--paper-light\);/
  );
  assert.ok(!/\.company-context-sequence,\n\s*\.demo-form\n\)/.test(cssSource), "demo-form must stay out of the shared paper-light card list");
  assert.match(cssSource, /\.resource-gateway-panel--trust\s*\{[\s\S]*?background:\s*var\(--dark-panel\)/);
  assert.match(cssSource, /\.dark-section \.industry-card:nth-child\(n\)\s*\{[\s\S]*?background:\s*var\(--dark-panel-soft\)/);
  assert.match(cssSource, /--component-inset:\s*clamp\(26px, 2\.5vw, 36px\)/);
  assert.match(cssSource, /\.platform-product-loop\s*\{\s*padding:\s*34px var\(--component-inset\)/);
  assert.match(cssSource, /\.model-family-card:nth-child\(even\) \.model-family-copy\s*\{[\s\S]*?padding:\s*44px var\(--component-inset\)/);
  assert.match(cssSource, /\.company-principles article:last-child\s*\{[\s\S]*?padding:\s*34px var\(--component-inset\) 46px/);
});
