---
title: mask
slug: Web/SVG/Reference/Attribute/mask
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`mask`** 属性は、主に指定された {{ SVGElement("mask") }} 要素とその属性が属する要素を結びつけるために使用されるプレゼンテーション属性です。

> [!NOTE]
> プレゼンテーション属性であるため、 `mask` には対応する CSS プロパティ {{cssxref("mask")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement('a')}}
- {{SVGElement('circle')}}
- {{SVGElement('clipPath')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('g')}}
- {{SVGElement('glyph')}}
- {{SVGElement('image')}}
- {{SVGElement('line')}}
- {{SVGElement('marker')}}
- {{SVGElement('mask')}}
- {{SVGElement('path')}}
- {{SVGElement('pattern')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('svg')}}
- {{SVGElement('symbol')}}
- {{SVGElement('text')}}
- {{SVGElement('use')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg">
  <mask id="myMask" maskContentUnits="objectBoundingBox">
    <rect fill="white" x="0" y="0" width="100%" height="100%" />
    <polygon
      fill="black"
      points="0.5,0.2 0.68,0.74 0.21,0.41 0.79,0.41 0.32,0.74" />
  </mask>

  <!--
  赤丸の中に星形の穴を開け、
  丸の下の黄色を見せます。
  -->
  <circle cx="50" cy="50" r="20" fill="yellow" />
  <circle cx="50" cy="50" r="45" fill="red" mask="url(#myMask)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

SVG2 以降、{{cssxref('mask')}} 属性は CSS プロパティとして定義されており、多くの他のプロパティ ({{cssxref('mask-image')}}, {{cssxref('mask-mode')}}, {{cssxref('mask-repeat')}}, {{cssxref('mask-position')}}, {{cssxref('mask-clip')}}, {{cssxref('mask-origin')}}, {{cssxref('mask-size')}}, {{cssxref('mask-composite')}}) の一括指定となっています。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>CSS プロパティ {{cssxref("mask")}} を参照</td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("mask")}} プロパティ
