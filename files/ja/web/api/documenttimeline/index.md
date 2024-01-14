---
title: DocumentTimeline
slug: Web/API/DocumentTimeline
page-type: web-api-interface
browser-compat: api.DocumentTimeline
---

{{ APIRef("Web Animations") }}

The **`DocumentTimeline`** interface of the [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) represents animation timelines, including the default document timeline (accessed via {{domxref("Document.timeline")}}).

{{InheritanceDiagram}}

## Constructor

- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
  - : Creates a new `DocumentTimeline` object associated with the active document of the current browsing context.

## Instance properties

_This interface inherits its property from its parent, {{domxref("AnimationTimeline")}}._

- {{domxref("AnimationTimeline.currentTime")}}
  - : Returns the time value in milliseconds for this timeline or `null` if it is inactive.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- {{domxref("AnimationTimeline")}}
- {{domxref("AnimationTimeline.currentTime")}}
- {{domxref("Document.timeline")}}
- {{domxref("DocumentTimeline.DocumentTimeline", "DocumentTimeline()")}}
