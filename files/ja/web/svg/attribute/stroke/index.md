---
title: stroke
slug: Web/SVG/Attribute/stroke
---

{{SVGRef}}

**`stroke`** 属性はプレゼンテーション属性で、この図形の輪郭を描画するのに使われる色（_またはグラデーションやパターンなどの SVG ペイントサーバー_）を定義します。

> **メモ:** プレゼンテーション属性ですので、 `stroke` は CSS プロパティとして使用できます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement('altGlyph')}}
- {{SVGElement('circle')}}
- {{SVGElement('ellipse')}}
- {{SVGElement('line')}}
- {{SVGElement('path')}}
- {{SVGElement('polygon')}}
- {{SVGElement('polyline')}}
- {{SVGElement('rect')}}
- {{SVGElement('text')}}
- {{SVGElement('textPath')}}
- {{SVGElement('tref')}}
- {{SVGElement('tspan')}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 20 10" xmlns="http://www.w3.org/2000/svg">
  <!-- 単純な色の輪郭 -->
  <circle cx="5" cy="5" r="4" fill="none" stroke="green" />

  <!-- グラデーションによる円の輪郭 -->
  <defs>
    <linearGradient id="myGradient">
      <stop offset="0%" stop-color="green" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>

  <circle cx="15" cy="5" r="4" fill="none" stroke="url(#myGradient)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 使用上の注意

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#paint"
            >&#x3C;paint></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>なし</code></td>
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
