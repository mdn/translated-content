---
title: "ViewTimeline: endOffset プロパティ"
short-title: endOffset
slug: Web/API/ViewTimeline/endOffset
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ViewTimeline.endOffset
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`endOffset`** read-only property of the {{domxref("ViewTimeline")}} interface returns a {{domxref("CSSNumericValue")}} representing the ending (100% progress) scroll position of the timeline as an offset from the start of the overflowing section of content in the scroller.

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
