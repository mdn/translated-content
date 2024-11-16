---
title: stroke-width
slug: Web/SVG/Attribute/stroke-width
l10n:
  sourceCommit: 5f7c22deaa74973658257aeaa012ac2ec0be87ae
---

{{SVGRef}}

**`stroke-width`** 属性は、図形に適用するストロークの幅を定義するプレゼンテーション属性です。

この属性は以下の SVG 要素で使用することができます。

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
<svg viewBox="0 0 30 10" xmlns="http://www.w3.org/2000/svg">
  <!-- Default stroke width: 1 -->
  <circle cx="5" cy="5" r="3" stroke="green" />

  <!-- Stroke width as a number -->
  <circle cx="15" cy="5" r="3" stroke="green" stroke-width="3" />

  <!-- Stroke width as a percentage -->
  <circle cx="25" cy="5" r="3" stroke="green" stroke-width="2%" />
</svg>
```

{{EmbedLiveSample("Example", '100%', 150)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#length"
            >&#x3C;length></a
          ></strong
        > |
        <strong
          ><a href="/ja/docs/Web/SVG/Content_type#percentage"
            >&#x3C;percentage></a
          ></strong
        >
      </td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>1px</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> パーセント値は常に、正規化された {{SVGAttr('viewBox')}} の対角線の長さに対するパーセント値として計算されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
