---
title: stroke-dashoffset
slug: Web/SVG/Attribute/stroke-dashoffset
---

{{SVGRef}}

**`stroke-dashoffset`** 属性は、関連する破線をレンダリングするうえで、オフセットを定義するプレゼンテーション属性です。

> **メモ:** プレゼンテーション属性として、**`stroke-dashoffset`** は CSS プロパティとして使用することができます。

プレゼンテーション属性として、それは、いくつかの要素に適用させることができますが、次の 12 個の要素にのみ効果があります。

{{SVGElement('altGlyph')}}, {{SVGElement('circle')}}, {{SVGElement('ellipse')}}, {{SVGElement('path')}}, {{SVGElement('line')}}, {{SVGElement('polygon')}}, {{SVGElement('polyline')}}, {{SVGElement('rect')}}, {{SVGElement('text')}}, {{SVGElement('textPath')}}, {{SVGElement('tref')}}, and {{SVGElement('tspan')}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="-3 0 33 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dash array -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- No dash offset -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="3 1" />

  <!--
  The start of the dash array computation
  is pulled by 3 user units
  -->
  <line
    x1="0"
    y1="5"
    x2="30"
    y2="5"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="3" />

  <!--
  The start of the dash array computation
  is pushed by 3 user units
  -->
  <line
    x1="0"
    y1="7"
    x2="30"
    y2="7"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="-3" />

  <!--
  The start of the dash array computation
  is pulled by 1 user units which ends up
  in the same rendering as the previous example
  -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="3 1"
    stroke-dashoffset="1" />

  <!--
  the following red lines highlight the
  offset of the dash array for each line
  -->
  <path d="M0,5 h-3 M0,7 h3 M0,9 h-1" stroke="rgba(255,0,0,.5)" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 200)}}

## Usage notes

| Value         | **[\<percentage>](/ja/SVG/Content_type#Percentage)** \| **[\<length>](/ja/SVG/Content_type#Length)** |
| ------------- | ---------------------------------------------------------------------------------------------------- |
| Default value | `0`                                                                                                  |
| Animatable    | Yes                                                                                                  |

The offset is usually expressed in user units resolved against the {{SVGAttr('pathLength')}} but if a [\<percentage>](/ja/SVG/Content_type#Percentage) is used, the value is resolved as a percentage of the current viewport.

## Browser compatibility

{{Compat("svg.attributes.presentation.stroke-dashoffset")}}

## Specification

{{Specifications}}
