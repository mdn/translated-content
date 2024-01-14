---
title: "ScrollTimeline: axis プロパティ"
short-title: axis
slug: Web/API/ScrollTimeline/axis
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ScrollTimeline.axis
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`axis`** read-only property of the
{{domxref("ScrollTimeline")}} interface returns an enumerated value representing the scroll axis that is driving the progress of the timeline.

## Value

An enumerated value. Possible values are:

- `"block"`
  - : The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `"y"`, while for vertical writing modes, it is the same as `"x"`.
- `"inline"`
  - : The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `"x"`, while for vertical writing modes, this is the same as `"y"`.
- `"y"`
  - : The scrollbar on the vertical axis of the scroll container.
- `"x"`
  - : The scrollbar on the horizontal axis of the scroll container.

## 例

See the main {{domxref("ScrollTimeline")}} page for an example.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
