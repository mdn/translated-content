---
title: "ViewTimeline: startOffset プロパティ"
short-title: startOffset
slug: Web/API/ViewTimeline/startOffset
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ViewTimeline.startOffset
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`startOffset`** read-only property of the {{domxref("ViewTimeline")}} interface returns a {{domxref("CSSNumericValue")}} representing the starting (0% progress) scroll position of the timeline as an offset from the start of the overflowing section of content in the scroller.

## 値

A {{domxref("CSSNumericValue")}}.

## 例

See the main {{domxref("ScrollTimeline")}} page for an example.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ViewTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
