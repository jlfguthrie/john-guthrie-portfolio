const responseHeaders = {
  "Content-Type": "application/json; charset=utf-8",
  "Cache-Control": "no-store",
  "X-Content-Type-Options": "nosniff",
};
function json(body, status = 200, extra = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...responseHeaders, ...extra },
  });
}
async function readSample(request) {
  if (!request.body) return null;
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > 512) {
      await reader.cancel();
      return null;
    }
    chunks.push(value);
  }
  const bytes = new Uint8Array(size);
  let offset = 0;
  for (const chunk of chunks) {
    bytes.set(chunk, offset);
    offset += chunk.byteLength;
  }
  try {
    return JSON.parse(new TextDecoder().decode(bytes));
  } catch {
    return null;
  }
}
export function createTrace(scenario) {
  const common = [
    {
      code: "order",
      state: "complete",
      label: "Order received",
      detail:
        "Sample order DEMO-1042 is associated with its storefront and customer context.",
    },
    {
      code: "payment",
      state: "complete",
      label: "Payment state checked",
      detail:
        "The sample payment is confirmed. A payment event is kept separate from fulfilment status.",
    },
  ];
  const events =
    scenario === "ready"
      ? [
          ...common,
          {
            code: "stock",
            state: "complete",
            label: "Supplier stock confirmed",
            detail:
              "The sample supplier confirms availability. The order can move to fulfilment.",
          },
          {
            code: "fulfilment",
            state: "complete",
            label: "Fulfilment hand-off prepared",
            detail:
              "A supplier fulfilment task and its order context are prepared in the simulation.",
          },
          {
            code: "communication",
            state: "complete",
            label: "Customer update prepared",
            detail:
              "An update reflects the confirmed order state. No message is sent by this demonstration.",
          },
        ]
      : [
          ...common,
          {
            code: "stock",
            state: "review",
            label: "Supplier stock unavailable",
            detail:
              "The sample supplier cannot fulfil the item. The workflow stops before a fulfilment hand-off.",
          },
          {
            code: "review",
            state: "review",
            label: "Human review required",
            detail:
              "An operator must confirm an alternative or the next customer action. No automatic backorder is created.",
          },
          {
            code: "communication",
            state: "review",
            label: "Customer update held for review",
            detail:
              "No fulfilment promise is made while the next action remains unresolved.",
          },
        ];
  return {
    orderId: "DEMO-1042",
    scenario,
    simulated: true,
    outcome:
      scenario === "ready"
        ? "Ready for fulfilment"
        : "Held for operator review",
    events,
  };
}
export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname.startsWith("/api/")) {
      if (url.pathname !== "/api/trace")
        return json({ error: "Not found" }, 404);
      if (request.method !== "POST")
        return json({ error: "Use POST" }, 405, { Allow: "POST" });
      const origin = request.headers.get("Origin");
      if (origin && origin !== url.origin)
        return json({ error: "Origin not allowed" }, 403);
      if (
        !request.headers
          .get("Content-Type")
          ?.toLowerCase()
          .startsWith("application/json")
      )
        return json({ error: "Use application/json" }, 415);
      const sample = await readSample(request);
      if (
        !sample ||
        typeof sample !== "object" ||
        Array.isArray(sample) ||
        Object.keys(sample).length !== 1 ||
        !["ready", "unavailable"].includes(sample.scenario)
      )
        return json({ error: "Choose a valid sample scenario" }, 400);
      console.info(
        JSON.stringify({
          event: "sample_trace",
          scenario: sample.scenario,
          simulated: true,
        }),
      );
      return json(createTrace(sample.scenario));
    }
    return env.ASSETS.fetch(request);
  },
};
