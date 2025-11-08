---
title: color-interpolation
slug: Web/SVG/Reference/Attribute/color-interpolation
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`color-interpolation`** 属性は、グラデーションの補間、色のアニメーション、アルファ合成に用いる色空間を指定します。

> [!NOTE]
> フィルター効果については、{{SVGAttr("color-interpolation-filters")}} プロパティで用いる色空間を制御します。

color-interpolation プロパティは、色の操作を sRGB 色空間で行うか (光のエネルギーがリニアな) linearized RGB 色空間で行うかを選択します。適切な色空間を選択したら、コンポーネント単位での補間を行います。

子要素が背景と混合されるときは、混合の種類は親要素の `color-interpolation` の値ではなく、子要素の `color-interpolation` プロパティの値によって決まります。{{SVGAttr("href")}} または廃止された {{SVGAttr("xlink:href")}} 属性で他のグラデーションを参照しているグラデーションでは、{{SVGAttr("fill")}} または {{SVGAttr("stroke")}} プロパティで直接参照されているグラデーション要素のプロパティの値を用います。色をアニメーションするときは、アニメーションが行われる要素の `color-interpolation` プロパティの値に従って色の補間を行います。

> [!NOTE]
> プレゼンテーション属性であるため、 `color-interpolation` には対応する CSS プロパティ {{cssxref("color-interpolation")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("glyph")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("linearGradient")}}
- {{SVGElement("marker")}}
- {{SVGElement("mask")}}
- {{SVGElement("missing-glyph")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("radialGradient")}}
- {{SVGElement("rect")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("symbol")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>auto</code> | <code>sRGB</code> | <code>linearRGB</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>sRGB</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可 (離散)</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : ユーザーエージェントが色の補間用に `sRGB` または `linearRGB` 空間を選択してよいことを表します。この値は、作成者が色の補間を特定の色空間で行うことを要求していないことを表します。
- `sRGB`
  - : 色の補間を sRGB 色空間で行うべきであることを表します。
- `linearRGB`
  - : 色の補間を [sRGB の仕様書](https://webstore.iec.ch/en/publication/6169)に記述されている通りのリニア RGB 色空間で行うべきであることを表します。

## 例

この例では、4 個の SVG を見せます。それぞれの SVG には、{{SVGElement("rect")}} 要素と、`<rect>` を塗りつぶすのに用いる異なるグラデーションがあります。最初の 2 個の SVG では {{SVGElement("linearGradient")}} を用い、次の 2 個では {{SVGElement("radialGradient")}} 要素を用います。未対応のブラウザーでは、グラデーションは同じに見えます。

最初の SVG では、`<linearGradient>` 要素に `color-interpolation` 属性は設定されておらず、デフォルト値の `sRGB` が用いられます。

```css hidden
svg {
  display: block;
}
```

```html-nolint
<svg width="450" height="70">
  <title>
    color-interpolation 属性の無い linearGradient の例
  </title>
  <defs>
    <linearGradient id="gradientDefault">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#gradientDefault)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation 設定なし
  </text>
</svg>
```

この 2 番目の SVG では、`<linearGradient>` 要素に `color-interpolation` 属性が設定され、値は `linearRGB` になっています。

```html-nolint
<svg width="450" height="70">
  <title>
    color-interpolation 属性を用いた linearGradient の例
  </title>
  <defs>
    <linearGradient id="gradientLinearRGB" color-interpolation="linearRGB">
      <stop offset="0%" stop-color="white" />
      <stop offset="25%" stop-color="blue" />
      <stop offset="50%" stop-color="white" />
      <stop offset="75%" stop-color="red" />
      <stop offset="100%" stop-color="white" />
    </linearGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#gradientLinearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation="linearRGB"
  </text>
</svg>
```

この 3 番目の SVG では、`<radialGradient>` 要素に `color-interpolation` 属性は設定されておらず、デフォルト値の `sRGB` が用いられます。

```html-nolint
<svg width="450" height="70">
  <title>
    color-interpolation 属性なしの radialGradient の例
  </title>
  <defs>
    <radialGradient id="none">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="gold" />
    </radialGradient>
  </defs>
  <rect x="0" y="0" width="400" height="40" fill="url(#none)" stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation 設定なし
  </text>
</svg>
```

この 4 番目の SVG では、`<radialGradient>` 要素に `color-interpolation` 属性が設定され、値は `linearRGB` になっています。

```html-nolint
<svg width="450" height="70">
  <title>
    color-interpolation 属性を用いた radialGradient の例
  </title>
  <defs>
    <radialGradient id="radLinearRGB" color-interpolation="linearRGB">
      <stop offset="0%" stop-color="red" />
      <stop offset="100%" stop-color="gold" />
    </radialGradient>
  </defs>
  <rect
    x="0"
    y="0"
    width="400"
    height="40"
    fill="url(#radLinearRGB)"
    stroke="black" />
  <text x="0" y="60" font-family="courier" font-size="16">
    color-interpolation="linearRGB" (SVG 属性)
  </text>
</svg>
```

{{EmbedLiveSample("Example", "100%", "280")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}
- CSS の {{cssxref("color-interpolation")}} プロパティ
- [sRGB の仕様書](https://webstore.iec.ch/publication/6169)
- {{SVGAttr("color-interpolation-filters")}}
- [Computer color is broken](https://www.youtube.com/watch?v=LKnqECcg6Gw) — linearRGB の人気のデモ
