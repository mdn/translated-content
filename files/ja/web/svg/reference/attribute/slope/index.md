---
title: slope
slug: Web/SVG/Reference/Attribute/slope
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`slope`** 属性は、明るさなどの線形フィルターの値を定義します。

`slope` 属性は、`feFunc-RGBA` 色成分変換関数を含む {{SVGElement("feComponentTransfer")}} フィルタープリミティブの子要素で対応しています。変換関数の `type` が `linear` の場合、`slope` は線形関数の傾きを定義します。

`type="linear"` が設定された場合、次の SVG 色成分変換関数要素でこの属性を使用できます。

- {{SVGElement("feFuncR")}}
- {{SVGElement("feFuncG")}}
- {{SVGElement("feFuncB")}}
- {{SVGElement("feFuncA")}}

> [!NOTE]
> 元々、`slope` 属性はフォントの垂直ストロークの角度を示すために `<font-face>` 内で使用されました。この用途は非推奨になっています。

## 例

この例では、グラデーションボックス内に線形フィルターを適用した 2 つのテキスト要素があります。それぞれのフィルターの色成分変換関数の傾きは異なります。

```html
<svg
  width="8cm"
  height="4cm"
  viewBox="0 0 800 400"
  xmlns="http://www.w3.org/2000/svg">
  <title>feComponentTransfer 操作の例</title>
  <desc>
    feComponentTransfer フィルター関数の線形オプションにおける slope
    属性の効果を示すテキスト
  </desc>
  <defs>
    <linearGradient
      id="MyGradient"
      gradientUnits="userSpaceOnUse"
      x1="100"
      y1="0"
      x2="600"
      y2="0">
      <stop offset="0" stop-color="red" />
      <stop offset="1" stop-color="blue" />
    </linearGradient>
    <filter
      id="Linear1"
      filterUnits="objectBoundingBox"
      x="0%"
      y="0%"
      width="100%"
      height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="1" />
        <feFuncG type="linear" slope="1" />
        <feFuncB type="linear" slope="1" />
      </feComponentTransfer>
    </filter>
    <filter
      id="Linear2"
      filterUnits="objectBoundingBox"
      x="0%"
      y="0%"
      width="100%"
      height="100%">
      <feComponentTransfer>
        <feFuncR type="linear" slope="0.5" />
        <feFuncG type="linear" slope="2.5" />
        <feFuncB type="linear" slope="5" />
      </feComponentTransfer>
    </filter>
  </defs>
  <rect fill="none" stroke="blue" x="1" y="1" width="798" height="398" />
  <g
    font-family="Verdana"
    font-size="100"
    font-weight="bold"
    fill="url(#MyGradient)">
    <text x="100" y="190" filter="url(#Linear1)">傾き 1</text>
    <text x="100" y="290" filter="url(#Linear2)">傾き 2</text>
  </g>
</svg>
```

{{EmbedLiveSample('Examples', 300, 200)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code
          ><a href="/ja/docs/Web/SVG/Guides/Content_type#number"
            >&#x3C;number></a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<number>`
  - : この値は線形の色成分変換関数の傾きを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
