---
title: marker-end
slug: Web/SVG/Reference/Attribute/marker-end
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

**`marker-end`** 属性は、指定された[図形](/ja/docs/Web/SVG/Reference/Element#図形要素)の最後の頂点に描画される矢印またはポリマーカーを定義します。

{{SVGElement("polyline")}} および {{SVGElement("path")}} を除くすべての図形要素において、最後の頂点は最初の頂点と同じになります。この場合、{{SVGAttr("marker-start")}} および `marker-end` の値がいずれも `none` でない場合、その最後の頂点に 2 つのマーカーが描画されます。`<path>` 要素の場合、それぞれの閉じられたサブパスにおいて、最後の頂点は最初の頂点と同じになります。`marker-end` は、[パスデータ](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)の最後の頂点にのみ描画されます。

> [!NOTE]
> プレゼンテーション属性であるため、`marker-end` には対応する CSS プロパティ {{cssxref("marker-end")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}

## 例

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker
      id="triangle"
      viewBox="0 0 10 10"
      refX="1"
      refY="5"
      markerUnits="strokeWidth"
      markerWidth="10"
      markerHeight="10"
      orient="auto">
      <path d="M 0 0 L 10 5 L 0 10 z" fill="red" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-end="url(#triangle)" />
</svg>
```

{{EmbedLiveSample("Example", "200", "200")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>none</code> | <code>&#x3C;marker-ref></code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `none`
  - : 最後の頂点にマーカー記号を描画してはならないことを示します。
- `<marker-ref>`
  - : この値は {{SVGElement("marker")}} 要素への参照で、最後の頂点に描画されるものです。参照が有効でない場合は、マーカーは描画されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-mid")}}
- CSS {{cssxref('marker-end')}} プロパティ
