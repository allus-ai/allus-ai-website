const assert = require("node:assert/strict");
const http = require("node:http");
const { after, before, test } = require("node:test");
const { createServer, getPort, parseRange, resolvePublicFile } = require("../serve.cjs");

let origin;
let server;

before(async () => {
  server = createServer();
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(0, "127.0.0.1", resolve);
  });
  origin = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
  if (server) {
    await new Promise((resolve, reject) => server.close(error => error ? reject(error) : resolve()));
  }
});

function request(requestPath, options = {}) {
  return new Promise((resolve, reject) => {
    const req = http.request(`${origin}${requestPath}`, options, response => {
      const chunks = [];
      response.on("data", chunk => chunks.push(chunk));
      response.on("end", () => resolve({
        body: Buffer.concat(chunks),
        headers: response.headers,
        status: response.statusCode
      }));
    });
    req.on("error", reject);
    req.end(options.body);
  });
}

test("serves only the public application files with correct media types", async () => {
  const [home, script, style, icon] = await Promise.all([
    request("/"),
    request("/app.js?v=1"),
    request("/styles.css"),
    request("/assets/allus-icon-navy.svg")
  ]);

  assert.equal(home.status, 200);
  assert.match(home.headers["content-type"], /^text\/html/);
  assert.match(home.body.toString(), /<main\b/);
  assert.equal(script.status, 200);
  assert.match(script.headers["content-type"], /^text\/javascript/);
  assert.equal(style.status, 200);
  assert.match(style.headers["content-type"], /^text\/css/);
  assert.equal(icon.status, 200);
  assert.equal(icon.headers["content-type"], "image/svg+xml");
  assert.equal(home.headers["x-content-type-options"], "nosniff");
});

test("supports HEAD without returning a response body", async () => {
  const response = await request("/styles.css", { method: "HEAD" });
  assert.equal(response.status, 200);
  assert.equal(response.body.length, 0);
  assert.ok(Number(response.headers["content-length"]) > 0);
});

test("returns genuine 404 responses and never falls back to index.html for missing files", async () => {
  for (const requestPath of ["/missing.js", "/assets/missing.jpg", "/unknown-route"]) {
    const response = await request(requestPath);
    assert.equal(response.status, 404, requestPath);
    assert.equal(response.body.toString(), "Not Found", requestPath);
  }
});

test("does not expose repository, configuration, or server source files", async () => {
  for (const requestPath of ["/.git/config", "/.env", "/package.json", "/serve.cjs", "/assets/%2e%2e/package.json"]) {
    const response = await request(requestPath);
    assert.equal(response.status, 404, requestPath);
  }
});

test("handles malformed URLs and unsupported methods without crashing", async () => {
  const malformed = await request("/%E0%A4%A");
  assert.equal(malformed.status, 400);

  const post = await request("/", { method: "POST", body: "ignored" });
  assert.equal(post.status, 405);
  assert.equal(post.headers.allow, "GET, HEAD");

  const stillAlive = await request("/");
  assert.equal(stillAlive.status, 200);
});

test("supports byte ranges for local video playback", async () => {
  const partial = await request("/assets/media/allus-temporal-process-loop.mp4", {
    headers: { Range: "bytes=0-15" }
  });
  assert.equal(partial.status, 206);
  assert.equal(partial.body.length, 16);
  assert.match(partial.headers["content-range"], /^bytes 0-15\/\d+$/);
  assert.equal(partial.headers["accept-ranges"], "bytes");

  const invalid = await request("/assets/media/allus-temporal-process-loop.mp4", {
    headers: { Range: "bytes=999999999-" }
  });
  assert.equal(invalid.status, 416);
  assert.match(invalid.headers["content-range"], /^bytes \*\/\d+$/);
});

test("range and port parsing reject invalid values", () => {
  assert.deepEqual(parseRange("bytes=-4", 10), { start: 6, end: 9 });
  assert.equal(parseRange("bytes=10-11", 10), null);
  assert.equal(getPort("65536"), 4173);
  assert.equal(getPort("not-a-port"), 4173);
  assert.equal(getPort("80oops"), 4173);
  assert.equal(getPort(""), 4173);
  assert.equal(getPort("0"), 0);
  assert.equal(resolvePublicFile("/.git/config").error, 404);
});
