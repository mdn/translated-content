---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
---

{{SVGRef}}

**`stroke-dasharray`** 属性は、 輪郭を描くために使用される、破線や間隔のある線のパターンを定義するプレゼンテーション属性です。

> **メモ:** プレゼンテーション属性として、**`stroke-dasharray`** 属性は、CSS プロパティとして使用することができます。

プレゼンテーション属性として、それはいくつかの要素に適用することができますが、つぎの 12 個の要素にのみ効果があります。

- {{SVGElement('altGlyph')}}
- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('path')}}
- {{SVGElement('line')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- No dashes nor gaps -->
  <line x1="0" y1="1" x2="30" y2="1" stroke="black" />

  <!-- Dashes and gaps of the same size -->
  <line x1="0" y1="3" x2="30" y2="3" stroke="black" stroke-dasharray="4" />

  <!-- Dashes and gaps of different sizes -->
  <line x1="0" y1="5" x2="30" y2="5" stroke="black" stroke-dasharray="4 1" />

  <!-- Dashes and gaps of various sizes with an odd number of values -->
  <line x1="0" y1="7" x2="30" y2="7" stroke="black" stroke-dasharray="4 1 2" />

  <!-- Dashes and gaps of various sizes with an even number of values -->
  <line
    x1="0"
    y1="9"
    x2="30"
    y2="9"
    stroke="black"
    stroke-dasharray="4 1 2 3" />
</svg>
```

{{EmbedLiveSample('topExample', '100%', 150)}}

## Usage notes

| Value         | `none` \| _\<dasharray>_ |
| ------------- | ------------------------ |
| Default value | `none`                   |
| Animatable    | Yes                      |

- _\<dasharray>_

  - : A list of comma and/or white space separated [_\<length>_](/ja/SVG/Content_type#Length)s and [_\<percentage>_](/ja/SVG/Content_type#Percentage)s that specify the lengths of alternating dashes and gaps.

    If an odd number of values is provided, then the list of values is repeated to yield an even number of values. Thus, `5,3,2` is equivalent to `5,3,2,5,3,2`.

## Browser compatibility

{{Compat("svg.attributes.presentation.stroke-dasharray")}}

## Specification

{{Specifications}}
