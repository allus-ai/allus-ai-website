/* One-off visual audit helper: captures viewport screenshots of each route
   at successive scroll positions. Not part of the build or test pipeline. */
const fs = require("node:fs");
const path = require("node:path");
const puppeteer = require("puppeteer-core");

const CHROME = "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
const BASE = "http://127.0.0.1:4173/";
const OUT = path.join(__dirname, "..", "screens");

const routes = process.argv[2]
  ? [[process.argv[2].replace(/[^a-z0-9-]/gi, "_"), process.argv[2]]]
  : [
      ["solutions", "/solutions"],
      ["sol-knowledge", "/solutions/operational-knowledge-guidance"],
      ["sol-process", "/solutions/production-process-intelligence"],
      ["sol-equipment", "/solutions/equipment-asset-intelligence"],
      ["sol-safety", "/solutions/industrial-safety-site-intelligence"],
      ["ind-electronics", "/industries/electronics-assembly"],
      ["ind-fmcg", "/industries/fmcg"],
      ["ind-food", "/industries/food-beverage"],
      ["ind-materials", "/industries/advanced-materials"],
      ["ind-automotive", "/industries/automotive"],
      ["uc-hub", "/resource/use-cases"],
      ["uc-materials", "/resource/use-cases/advanced-materials"],
      ["uc-electronics", "/resource/use-cases/electronics-assembly"],
      ["uc-biscuit", "/resource/use-cases/biscuit-production"],
      ["company", "/company"],
      ["connect", "/connect"],
      ["sitemap", "/sitemap"],
    ];

(async () => {
  fs.rmSync(OUT, { recursive: true, force: true });
  fs.mkdirSync(OUT, { recursive: true });
  const browser = await puppeteer.launch({
    executablePath: CHROME,
    headless: "new",
    args: ["--window-size=1920,1080", "--hide-scrollbars"],
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1920, height: 1080 });
  await page.emulateMediaFeatures([
    { name: "prefers-reduced-motion", value: "reduce" },
  ]);

  for (const [slug, route] of routes) {
    await page.goto(`${BASE}?audit=${Date.now()}#${route}`, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });
    await new Promise((r) => setTimeout(r, 700));
    const height = await page.evaluate(
      () => document.documentElement.scrollHeight
    );
    let shot = 0;
    for (let y = 0; y < height; y += 980) {
      await page.evaluate((top) => window.scrollTo(0, top), y);
      await new Promise((r) => setTimeout(r, 350));
      await page.screenshot({
        path: path.join(OUT, `${slug}-${String(shot).padStart(2, "0")}.png`),
      });
      shot += 1;
    }
    console.log(`${slug}: height=${height} shots=${shot}`);
  }
  await browser.close();
})();
