---
title: stroke-dasharray
slug: Web/SVG/Attribute/stroke-dasharray
l10n:
  sourceCommit: c96ce9d5fe799c403ebb4d0544f4befa2b3f6bd7
---

{{SVGRef}}

**`stroke-dasharray`** 属性は、図形の輪郭線を描くのに用いるダッシュとすき間のパターンを定義するプレゼンテーション属性です。

> [!NOTE]
> プレゼンテーション属性である `stroke-dasharray` は、CSS プロパティとして使用することができます。

この属性は以下の SVG 要素で使用することができます。

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

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 30 12" xmlns="http://www.w3.org/2000/svg">
  <style>
    line {
      stroke: black;
    }
  </style>
  <!-- ダッシュもすき間もなし -->
  <line x1="0" y1="1" x2="30" y2="1" />

  <!-- ダッシュとすき間が同じ長さ -->
  <line x1="0" y1="3" x2="30" y2="3" stroke-dasharray="4" />

  <!-- ダッシュとすき間が異なる長さ -->
  <line x1="0" y1="5" x2="30" y2="5" stroke-dasharray="4 1" />

  <!-- ダッシュとすき間が様々な長さで、値の数が奇数 -->
  <line x1="0" y1="7" x2="30" y2="7" stroke-dasharray="4 1 2" />

  <!-- ダッシュとすき間が様々な長さで、値の数が偶数 -->
  <line x1="0" y1="9" x2="30" y2="9" stroke-dasharray="4 1 2 3" />

  <!-- すき間から始まる破線 -->
  <line x1="0" y1="11" x2="30" y2="11" stroke-dasharray="0 4 0" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>none</code> | <code>&#x3C;dasharray></code></td>
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

- \<dasharray>

  - : カンマまたは空白で区切られた [`<length>`](/ja/docs/Web/SVG/Content_type#length) と [`<percentage>`](/ja/docs/Web/SVG/Content_type#percentage) のリストで、ダッシュとギャップの長さを指定します。

    もし奇数の値が指定された場合は、偶数の値になるように値のリストが繰り返されます。従って、 `5,3,2` は `5,3,2,5,3,2`と等価です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
