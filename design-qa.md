# Design and interaction QA

Date: 20 October 2026 (South Africa)

## Reference

Selected concept: visual option 3, the project atlas direction. The owner delegated the choice. The reference is stored in the owner's local employment portfolio, outside this public source repository.

## Visual comparison

Compared the source and browser rendering together in a single side-by-side image at **1487 × 1058**, with commerce selected, the system tab open, the demo closed and the page at the top. Local evidence: `qa/design-comparison.jpg` and `qa/desktop.png` (excluded from Git).

- Typography: navy geometric sans, large two-line headline, clear project titles and quiet supporting copy match the hierarchy. Manrope is locally hosted.
- Spacing: three-column hero, 27.6% project index, ruled work area and four-part career timeline follow the source. Minor font-metric differences are cosmetic.
- Colour: near-white canvas, navy text, cobalt controls, pale rules and orange selection marker preserved.
- Images: the original supplied portrait replaces the generated mock's portrait. No synthetic portrait is used.
- Copy: original headline and structure retained. Citizenship replaces the mock's date. Project copy uses the owner's approved employment material. Added details below the source frame continue the same presentation.

No unresolved P0, P1 or P2 visual issues. P3 differences: exact font metrics and icon shapes differ slightly from the generated reference.

## Responsive and interaction checks

- Desktop at 1487 × 1058 and mobile at 390 × 844 inspected in the in-app browser.
- Mobile document width equals viewport width: 390px; no horizontal overflow.
- Project switching, problem/decisions/system views and career selection inspected.
- Available-stock trace returns a simulated fulfilment path.
- Unavailable-stock trace stops for operator review with no fulfilment hand-off.
- Product PDF downloaded through the browser; both PDF URLs are checked at deployment.
- Mobile contact section and external contact/profile destinations inspected.
- All styling honours reduced-motion preference; visible keyboard focus and a skip link are provided.

## Build and runtime

Backend request/branch tests and retained packaging checks pass. Local Cloudflare runtime and production deployment are verified separately; deployment evidence is recorded in the owner's employment portfolio.

final result: passed
