---
title: marker-mid
slug: Web/SVG/Reference/Attribute/marker-mid
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

**`marker-mid`** 属性は、指定された[シェイプ](/ja/docs/Web/SVG/Reference/Element#基本シェイプ)の中間の頂点すべてに描かれる矢印やマーカーを定義します。

マーカーは、[パスデータ](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド)の最初と最後以外のすべての頂点に描画されます。

> [!NOTE]
> プレゼンテーション属性であるため、 `marker-mid` には対応する CSS プロパティ {{cssxref("marker-mid")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

この属性は次の SVG 要素で使用できます。

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
    <marker id="circle" markerWidth="8" markerHeight="8" refX="4" refY="4">
      <circle cx="4" cy="4" r="4" stroke="none" fill="red" />
    </marker>
  </defs>
  <polyline
    fill="none"
    stroke="black"
    points="20,100 40,60 70,80 100,20"
    marker-mid="url(#circle)" />
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
      <th scope="row">既定値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `none`
  - : 指定された頂点にマーカー記号を描画してはならないことを示します。
- `<marker-ref>`
  - : この値は {{SVGElement("marker")}} 要素への参照で、指定された頂点に描画されるものです。参照が有効でない場合は、マーカーは描画されません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGElement("marker")}}
- {{SVGAttr("marker-start")}}
- {{SVGAttr("marker-end")}}
- CSS の {{cssxref('marker-mid')}} プロパティ
