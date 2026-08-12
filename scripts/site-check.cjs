const fs = require("node:fs");
const path = require("node:path");

const projectRoot = path.resolve(__dirname, "..");
const sourceFiles = ["index.html", "app.js", "styles.css"];

const canonicalRoutes = new Set([
  "/",
  "/model",
  "/model/allusone",
  "/model/allusedge",
  "/model/allusflow",
  "/solutions",
  "/solutions/operational-knowledge-guidance",
  "/solutions/production-process-intelligence",
  "/solutions/equipment-asset-intelligence",
  "/solutions/industrial-safety-site-intelligence",
  "/industries/electronics-assembly",
  "/industries/fmcg",
  "/industries/food-beverage",
  "/industries/advanced-materials",
  "/industries/automotive",
  "/resource",
  "/resource/use-cases",
  "/resource/use-cases/advanced-materials",
  "/resource/use-cases/electronics-assembly",
  "/resource/use-cases/biscuit-production",
  "/company",
  "/company/privacy-security",
  "/connect",
  "/sitemap"
]);

function invariant(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function attributes(tag) {
  return new Map(
    [...tag.matchAll(/([:\w-]+)\s*=\s*(["'])(.*?)\2/gs)].map(match => [match[1], match[3]])
  );
}

function normalizedRoute(href) {
  if (!href.startsWith("#/")) {
    return null;
  }
  return href.slice(1).split("?")[0].replace(/\/+$/, "") || "/";
}

function runSiteCheck() {
  const sources = Object.fromEntries(
    sourceFiles.map(file => [file, fs.readFileSync(path.join(projectRoot, file), "utf8")])
  );
  const html = sources["index.html"];
  const combinedSource = sourceFiles.map(file => sources[file]).join("\n");

  const ids = [...html.matchAll(/\bid\s*=\s*(["'])(.*?)\1/g)].map(match => match[2]);
  const duplicateIds = ids.filter((id, index) => ids.indexOf(id) !== index);
  invariant(duplicateIds.length === 0, `Duplicate HTML ids: ${[...new Set(duplicateIds)].join(", ")}`);
  const idSet = new Set(ids);

  for (const match of html.matchAll(/\b(?:aria-controls|aria-labelledby|for)\s*=\s*(["'])(.*?)\1/g)) {
    for (const id of match[2].trim().split(/\s+/)) {
      invariant(idSet.has(id), `${match[0]} refers to missing #${id}`);
    }
  }

  const anchorTags = [...html.matchAll(/<a\b[^>]*>/gi)].map(match => match[0]);
  for (const tag of anchorTags) {
    const attrs = attributes(tag);
    const href = attrs.get("href") || "";
    invariant(href !== "#" && !href.toLowerCase().startsWith("javascript:"), `Unsafe or empty link: ${tag}`);

    const route = normalizedRoute(href);
    if (route) {
      invariant(canonicalRoutes.has(route), `Link points to an unknown canonical route: ${href}`);
    }

    const dataRoute = attrs.get("data-route");
    if (dataRoute) {
      invariant(canonicalRoutes.has(dataRoute), `data-route is not canonical: ${dataRoute}`);
      invariant(route === dataRoute, `href ${href} does not match data-route ${dataRoute}`);
    }

    if (attrs.get("target") === "_blank") {
      invariant(/\b(?:noopener|noreferrer)\b/.test(attrs.get("rel") || ""), `New-tab link is missing a safe rel: ${href}`);
    }
  }

  for (const match of html.matchAll(/<img\b[^>]*>/gi)) {
    const attrs = attributes(match[0]);
    invariant(attrs.has("alt"), `Image is missing alt text: ${match[0]}`);
    invariant(attrs.has("width") && attrs.has("height"), `Image is missing intrinsic dimensions: ${attrs.get("src")}`);
  }

  const assetReferences = new Set();
  for (const match of combinedSource.matchAll(/(?:\.\/)?assets\/[\w./-]+\.(?:ico|jpe?g|mp4|png|svg|webm|webp)/gi)) {
    assetReferences.add(match[0].replace(/^\.\//, ""));
  }
  invariant(assetReferences.size > 0, "No local asset references were found");
  for (const asset of assetReferences) {
    const absolutePath = path.resolve(projectRoot, asset);
    invariant(absolutePath.startsWith(`${path.join(projectRoot, "assets")}${path.sep}`), `Asset escapes its public directory: ${asset}`);
    invariant(fs.existsSync(absolutePath) && fs.statSync(absolutePath).isFile(), `Missing asset: ${asset}`);
  }

  invariant(/<meta\s+name="description"\s+content="[^"]+"/i.test(html), "The site needs a meta description");
  invariant(/<noscript>[\s\S]*?<\/noscript>/i.test(html), "The app needs a no-JavaScript fallback");
  invariant(!combinedSource.includes("&amp "), "Malformed &amp; entity found");

  return {
    assetCount: assetReferences.size,
    canonicalRouteCount: canonicalRoutes.size,
    staticIdCount: idSet.size
  };
}

if (require.main === module) {
  const summary = runSiteCheck();
  console.log(
    `Site integrity check passed: ${summary.canonicalRouteCount} routes, ${summary.assetCount} local assets, ${summary.staticIdCount} static ids.`
  );
}

module.exports = { canonicalRoutes, runSiteCheck };
