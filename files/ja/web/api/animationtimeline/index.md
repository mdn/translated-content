---
title: AnimationTimeline
slug: Web/API/AnimationTimeline
page-type: web-api-interface
browser-compat: api.AnimationTimeline
---

{{ APIRef("Web Animations") }}

The `AnimationTimeline` interface of the [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API) represents the timeline of an animation. This interface exists to define timeline features, inherited by other timeline types:

- {{domxref("DocumentTimeline")}}
- {{domxref("ScrollTimeline")}}
- {{domxref("ViewTimeline")}}

## Instance properties

- {{domxref("AnimationTimeline.currentTime", "currentTime")}} {{ReadOnlyInline}}
  - : Returns the time value in milliseconds for this timeline or `null` if this timeline is inactive.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("DocumentTimeline")}}, {{domxref("ScrollTimeline")}}, {{domxref("ViewTimeline")}}
- {{domxref("Document.timeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
