export async function onRequest({ request }) {
  const isWA = request.cf?.regionCode === "WA";
  return new Response(JSON.stringify({ isWA }), {
    headers: { "Content-Type": "application/json" }
  });
}