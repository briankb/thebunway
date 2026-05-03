const OPENPANEL_API = "https://api.ops.eyespike.com";
const DIST = import.meta.dir + "/dist";
const INDEX = DIST + "/the_bun_way_landing_page.html";

Bun.serve({
  port: Number(process.env.PORT) || 3000,

  async fetch(req) {
    const url = new URL(req.url);

    if (url.pathname.startsWith("/op/")) {
      const upstream = new URL(url.pathname.slice("/op".length) + url.search, OPENPANEL_API);
      const headers = new Headers(req.headers);
      headers.delete("host");
      return fetch(upstream, {
        method: req.method,
        headers,
        body: req.method !== "GET" && req.method !== "HEAD" ? req.body : undefined,
      });
    }

    const filePath = url.pathname === "/" ? INDEX : DIST + url.pathname;
    const file = Bun.file(filePath);
    if (await file.exists()) return new Response(file);

    return new Response(Bun.file(INDEX));
  },
});

console.log(`Listening on http://localhost:${process.env.PORT || 3000}`);
