---
title: r
slug: Web/SVG/Reference/Attribute/r
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`r`** 属性は円の半径を定義します。

この属性は次の SVG 要素で使用できます。

- {{SVGElement("circle")}}
- {{SVGElement("radialGradient")}}

パーセント値は、現在の SVG ビューポートの正規化された対角線に対する割合です。これは、 <math><mfrac><msqrt><mrow><msup><mi>&lt;width&gt;</mi><mn>2</mn></msup><mo>+</mo><msup><mi>&lt;height&gt;</mi><mn>2</mn></msup></mrow></msqrt><msqrt><mn>2</mn></msqrt></mfrac></math> で計算されたものです。

## circle

{{SVGElement('circle')}} において、`r` は円の半径を定義し、その大きさを決定します。ゼロ以下の値を指定すると、円は描画されません。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
        |
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> `<circle>` の半径の大きさは、幾何プロパティ {{cssxref("r")}} で定義することもできます。

## radialGradient

{{SVGElement("radialGradient")}} において、`r` は放射グラデーションの末端の円の半径を定義します。

グラデーションは、**100%** の色経由点がこの末端の円の外周に対応するように描画されます。ゼロ以下の値を指定すると、最後のグラデーションの {{SVGElement("stop")}} の色と不透明度を使用した単一の色で領域が塗りつぶされます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#length"
            >&#x3C;length></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>50%</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg">
  <radialGradient r="0" id="myGradient000">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="50%" id="myGradient050">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>
  <radialGradient r="100%" id="myGradient100">
    <stop offset="0" stop-color="white" />
    <stop offset="100%" stop-color="black" />
  </radialGradient>

  <circle cx="50" cy="50" r="0" />
  <circle cx="150" cy="50" r="25" />
  <circle cx="250" cy="50" r="50" />

  <rect x="20" y="120" width="60" height="60" fill="url(#myGradient000)" />
  <rect x="120" y="120" width="60" height="60" fill="url(#myGradient050)" />
  <rect x="220" y="120" width="60" height="60" fill="url(#myGradient100)" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("r")}} プロパティ
