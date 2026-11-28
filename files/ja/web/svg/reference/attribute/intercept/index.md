---
title: intercept
slug: Web/SVG/Reference/Attribute/intercept
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`intercept`** 属性は、{{SVGAttr("type")}} 属性が `linear` に設定されている場合に、色成分の変換における線形関数の切片を定義します。

`linear` 関数は `slope * color + intercept` と定義されます。ここで `color` は色値、`intercept` は結果の基準値を提供し、[`slope`](/ja/docs/Web/SVG/Reference/Attribute/slope) は拡大率です。

`intercept` 属性は {{SVGElement("feComponentTransfer")}} フィルタープリミティブの子要素で対応しており、`type="linear"` が設定された場合、次の SVG 色成分変換関数要素で使用できます。

- {{SVGElement("feFuncA")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncR")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient
      id="gradient"
      gradientUnits="userSpaceOnUse"
      x1="0"
      y1="0"
      x2="200"
      y2="0">
      <stop offset="0" stop-color="red" />
      <stop offset="0.5" stop-color="lime" />
      <stop offset="1" stop-color="blue" />
    </linearGradient>
  </defs>

  <filter id="componentTransfer1" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0" />
      <feFuncG type="linear" intercept="0" />
      <feFuncB type="linear" intercept="0" />
    </feComponentTransfer>
  </filter>
  <filter id="componentTransfer2" x="0" y="0" width="100%" height="100%">
    <feComponentTransfer>
      <feFuncR type="linear" intercept="0.3" />
      <feFuncG type="linear" intercept="0.1" />
      <feFuncB type="linear" intercept="0.8" />
    </feComponentTransfer>
  </filter>

  <rect
    x="0"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    filter="url(#componentTransfer1)" />
  <rect
    x="220"
    y="0"
    width="200"
    height="200"
    fill="url(#gradient)"
    filter="url(#componentTransfer2)" />
</svg>
```

{{EmbedLiveSample("Example", "480", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("number")}}</td>
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

- `<number>`
  - : この値は、線形の色成分変換関数の切片を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
