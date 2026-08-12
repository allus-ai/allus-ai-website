const fs = require("node:fs");
const http = require("node:http");
const path = require("node:path");

const DEFAULT_HOST = "127.0.0.1";
const DEFAULT_PORT = 4173;
const PUBLIC_ROOT = __dirname;
const ASSET_ROOT = path.join(PUBLIC_ROOT, "assets");

const publicFiles = new Map([
  ["/index.html", path.join(PUBLIC_ROOT, "index.html")],
  ["/app.js", path.join(PUBLIC_ROOT, "app.js")],
  ["/styles.css", path.join(PUBLIC_ROOT, "styles.css")]
]);

const allowedAssetExtensions = new Set([
  ".ico",
  ".jpg",
  ".jpeg",
  ".mp4",
  ".png",
  ".svg",
  ".webm",
  ".webp"
]);

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".mp4": "video/mp4",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webm": "video/webm",
  ".webp": "image/webp"
};

const securityHeaders = {
  "Cache-Control": "no-store",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff"
};

function sendText(request, response, statusCode, message, extraHeaders = {}) {
  const body = Buffer.from(message, "utf8");
  response.writeHead(statusCode, {
    ...securityHeaders,
    "Content-Length": body.length,
    "Content-Type": "text/plain; charset=utf-8",
    ...extraHeaders
  });
  response.end(request.method === "HEAD" ? undefined : body);
}

function resolvePublicFile(requestUrl) {
  let pathname;

  try {
    pathname = decodeURIComponent(new URL(requestUrl, `http://${DEFAULT_HOST}`).pathname);
  } catch {
    return { error: 400 };
  }

  if (!pathname.startsWith("/") || pathname.includes("\0") || pathname.includes("\\")) {
    return { error: 400 };
  }

  if (pathname === "/") {
    return { filePath: publicFiles.get("/index.html") };
  }

  if (publicFiles.has(pathname)) {
    return { filePath: publicFiles.get(pathname) };
  }

  if (!pathname.startsWith("/assets/")) {
    return { error: 404 };
  }

  const segments = pathname.slice(1).split("/");
  if (segments.some(segment => !segment || segment === "." || segment === ".." || segment.startsWith("."))) {
    return { error: 404 };
  }

  const extension = path.extname(pathname).toLowerCase();
  if (!allowedAssetExtensions.has(extension)) {
    return { error: 404 };
  }

  const filePath = path.resolve(PUBLIC_ROOT, `.${pathname}`);
  if (!filePath.startsWith(`${ASSET_ROOT}${path.sep}`)) {
    return { error: 404 };
  }

  return { filePath };
}

function parseRange(rangeHeader, size) {
  const match = /^bytes=(\d*)-(\d*)$/i.exec(rangeHeader || "");
  if (!match || (!match[1] && !match[2]) || size === 0) {
    return null;
  }

  let start;
  let end;

  if (!match[1]) {
    const suffixLength = Number.parseInt(match[2], 10);
    if (!Number.isSafeInteger(suffixLength) || suffixLength <= 0) {
      return null;
    }
    start = Math.max(size - suffixLength, 0);
    end = size - 1;
  } else {
    start = Number.parseInt(match[1], 10);
    end = match[2] ? Number.parseInt(match[2], 10) : size - 1;
  }

  if (!Number.isSafeInteger(start) || !Number.isSafeInteger(end) || start < 0 || start >= size || end < start) {
    return null;
  }

  return { start, end: Math.min(end, size - 1) };
}

function handleRequest(request, response) {
  if (request.method !== "GET" && request.method !== "HEAD") {
    sendText(request, response, 405, "Method Not Allowed", { Allow: "GET, HEAD" });
    return;
  }

  const resolved = resolvePublicFile(request.url || "/");
  if (resolved.error) {
    sendText(request, response, resolved.error, resolved.error === 400 ? "Bad Request" : "Not Found");
    return;
  }

  fs.stat(resolved.filePath, (statError, stat) => {
    if (statError || !stat.isFile()) {
      sendText(request, response, 404, "Not Found");
      return;
    }

    const headers = {
      ...securityHeaders,
      "Accept-Ranges": "bytes",
      "Content-Type": contentTypes[path.extname(resolved.filePath).toLowerCase()] || "application/octet-stream"
    };
    const rangeHeader = request.headers.range;

    if (rangeHeader) {
      const range = parseRange(rangeHeader, stat.size);
      if (!range) {
        sendText(request, response, 416, "Range Not Satisfiable", {
          "Content-Range": `bytes */${stat.size}`
        });
        return;
      }

      headers["Content-Length"] = range.end - range.start + 1;
      headers["Content-Range"] = `bytes ${range.start}-${range.end}/${stat.size}`;
      response.writeHead(206, headers);
      if (request.method === "HEAD") {
        response.end();
        return;
      }
      const stream = fs.createReadStream(resolved.filePath, range);
      stream.on("error", () => response.destroy());
      stream.pipe(response);
      return;
    }

    headers["Content-Length"] = stat.size;
    response.writeHead(200, headers);
    if (request.method === "HEAD") {
      response.end();
      return;
    }
    const stream = fs.createReadStream(resolved.filePath);
    stream.on("error", () => response.destroy());
    stream.pipe(response);
  });
}

function createServer() {
  const server = http.createServer(handleRequest);
  server.on("clientError", (_error, socket) => {
    if (socket.writable) {
      socket.end("HTTP/1.1 400 Bad Request\r\nConnection: close\r\n\r\n");
    }
  });
  return server;
}

function getPort(value) {
  if (value === undefined || value === null || String(value).trim() === "") {
    return DEFAULT_PORT;
  }
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed >= 0 && parsed <= 65535 ? parsed : DEFAULT_PORT;
}

if (require.main === module) {
  const host = process.env.HOST || DEFAULT_HOST;
  const port = getPort(process.env.PORT);
  const server = createServer();
  server.listen(port, host, () => {
    const address = server.address();
    const listeningPort = typeof address === "object" && address ? address.port : port;
    console.log(`Allus AI is running at http://${host}:${listeningPort}/#/`);
  });
}

module.exports = {
  createServer,
  getPort,
  parseRange,
  resolvePublicFile
};
