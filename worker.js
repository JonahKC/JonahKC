export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/caption") {
      const isWA = request.cf?.regionCode === "WA";
      return new Response(JSON.stringify({ isWA }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    return env.ASSETS.fetch(request);
  }
};