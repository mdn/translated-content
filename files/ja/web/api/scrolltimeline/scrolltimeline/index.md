---
title: "ScrollTimeline: ScrollTimeline() constructor"
short-title: ScrollTimeline()
slug: Web/API/ScrollTimeline/ScrollTimeline
page-type: web-api-constructor
status:
  - experimental
browser-compat: api.ScrollTimeline.ScrollTimeline
---

{{APIRef("History API")}}{{SeeCompatTable}}

The **`ScrollTimeline()`** constructor creates a new {{domxref("ScrollTimeline")}} object instance.

## 構文

```js-nolint
new ScrollTimeline(options)
```

### 引数

- `options`

  - : An object that can contain the following properties:

    - `source`
      - : A reference to an {{domxref("Element")}} representing the scrollable element (_scroller_) whose scroll position will drive the progress of the timeline.
    - `axis` {{optional_inline}}

      - : An enumerated value representing the scroll axis that will drive the progress of the timeline. Possible values are:

        - `"block"`: The scrollbar on the block axis of the scroll container, which is the axis in the direction perpendicular to the flow of text within a line. For horizontal writing modes, such as standard English, this is the same as `"y"`, while for vertical writing modes, it is the same as `"x"`.
        - `"inline"`: The scrollbar on the inline axis of the scroll container, which is the axis in the direction parallel to the flow of text in a line. For horizontal writing modes, this is the same as `"x"`, while for vertical writing modes, this is the same as `"y"`.
        - `"y"`: The scrollbar on the vertical axis of the scroll container.
        - `"x"`: The scrollbar on the horizontal axis of the scroll container.

        If omitted, `axis` defaults to `"block"`.

### Return value

A new {{domxref("ScrollTimeline")}} object instance.

## 例

See the main {{domxref("ScrollTimeline")}} page for an example.

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブアニメーション API](/ja/docs/Web/API/Web_Animations_API)
- [CSS スクロール駆動アニメーション](/ja/docs/Web/CSS/CSS_scroll-driven_animations)
- {{domxref("ScrollTimeline")}}
- {{domxref("AnimationTimeline")}}, {{domxref("ViewTimeline")}}
