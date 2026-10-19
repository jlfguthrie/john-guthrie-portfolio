import test from "node:test";
import assert from "node:assert/strict";
import worker from "../server/index.js";
const url = "https://portfolio.example/api/trace";
const post = (body, headers = {}) =>
  new Request(url, {
    method: "POST",
    headers: { "Content-Type": "application/json", ...headers },
    body,
  });
test("available stock prepares fulfilment without sending anything", async () => {
  const r = await worker.fetch(post(JSON.stringify({ scenario: "ready" })));
  const data = await r.json();
  assert.equal(r.status, 200);
  assert.equal(data.simulated, true);
  assert.ok(data.events.some((e) => e.code === "fulfilment"));
  assert.ok(!data.events.some((e) => e.code === "review"));
  assert.equal(r.headers.get("cache-control"), "no-store");
});
test("unavailable stock halts fulfilment and requires review", async () => {
  const r = await worker.fetch(
    post(JSON.stringify({ scenario: "unavailable" })),
  );
  const data = await r.json();
  assert.ok(data.events.some((e) => e.code === "review"));
  assert.ok(!data.events.some((e) => e.code === "fulfilment"));
});
test("method, malformed, oversized, unknown fields and cross-origin requests rejected", async () => {
  for (const body of [
    "broken",
    "null",
    "[]",
    "{}",
    JSON.stringify({ scenario: "x" }),
    JSON.stringify({ scenario: "ready", customer: "private" }),
    " ".repeat(513),
  ]) {
    assert.equal((await worker.fetch(post(body))).status, 400);
  }
  assert.equal((await worker.fetch(new Request(url))).status, 405);
  assert.equal(
    (await worker.fetch(post("{}", { "Content-Type": "text/plain" }))).status,
    415,
  );
  assert.equal(
    (
      await worker.fetch(
        post('{"scenario":"ready"}', { Origin: "https://other.example" }),
      )
    ).status,
    403,
  );
});
test("unknown API endpoints return JSON 404, static requests use assets", async () => {
  assert.equal(
    (await worker.fetch(new Request("https://portfolio.example/api/missing")))
      .status,
    404,
  );
  const r = await worker.fetch(new Request("https://portfolio.example/"), {
    ASSETS: { fetch: () => new Response("asset") },
  });
  assert.equal(await r.text(), "asset");
});
