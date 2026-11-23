---
title: paint-order
slug: Web/SVG/Reference/Attribute/paint-order
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

**`paint-order`** 属性は、指定された図形またはテキスト要素の塗りつぶし、輪郭、マーカーを描画する順序を指定します。

> [!NOTE]
> プレゼンテーション属性である `paint-order` には、対応する CSS プロパティ {{cssxref("paint-order")}} があります。両方が指定された場合、CSS プロパティが優先されます。

この属性は、次の SVG 要素で使用できます。

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}

## 例

```html
<svg xmlns="http://www.w3.org/2000/svg" width="400" height="200">
  <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
    <stop stop-color="#888888" />
    <stop stop-color="#cccccc" offset="1" />
  </linearGradient>
  <rect width="400" height="200" fill="url(#g)" />
  <g
    fill="crimson"
    stroke="white"
    stroke-width="6"
    stroke-linejoin="round"
    text-anchor="middle"
    font-family="sans-serif"
    font-size="50px"
    font-weight="bold">
    <text x="200" y="75">前面輪郭</text>
    <text x="200" y="150" paint-order="stroke" id="stroke-under">背面輪郭</text>
  </g>
</svg>
```

この例は次のようにレンダリングされます。

![paint-order プロパティに対応しているユーザーエージェントで、この paint-order の例がどのように表示されるかを示す画像。](paint-order-2.png)

輪郭を背面に配置する効果は、次の CSS プロパティで実現できます。

```css
#stroke-under {
  paint-order: stroke;
}
```

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th>値</th>
      <td>
        <code>normal</code> | [ <code>fill</code> || <code>stroke</code> ||
        <code>markers</code> ]
      </td>
    </tr>
    <tr>
      <th>デフォルト値</th>
      <td><code>normal</code></td>
    </tr>
    <tr>
      <th>アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- normal
  - : 塗りつぶし、輪郭、マーカーの順に描画します。
- \[ fill || stroke || markers ]
  - : これらの 3 つのキーワードの順序は、描画が行われる順序を左から右へ示します。 3 つの描画要素のうちいずれかを省略した場合、省略された要素は指定された要素の後に既定の順序で描画されます。例えば、`stroke` を使用することは `stroke fill markers` と同等です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
