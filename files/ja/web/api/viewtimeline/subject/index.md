---
title: "ViewTimeline: subject プロパティ"
short-title: subject
slug: Web/API/ViewTimeline/subject
page-type: web-api-instance-property
status:
  - experimental
browser-compat: api.ViewTimeline.subject
---

{{APIRef("Web Animations")}}{{SeeCompatTable}}

The **`subject`** read-only property of the {{domxref("ViewTimeline")}} interface returns a reference to the subject element whose visibility within its nearest ancestor scrollable element (scroller) is driving the progress of the timeline.

## 値

An {{domxref("Element")}}.

## 例

See the main {{domxref("ViewTimeline")}} page for an example.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ViewTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ScrollTimeline")}}
