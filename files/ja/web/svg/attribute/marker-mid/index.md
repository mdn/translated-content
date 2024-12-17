---
title: marker-mid
slug: Web/SVG/Attribute/marker-mid
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`marker-mid`** 属性は、指定された[シェイプ](/ja/docs/Web/SVG/Element#shape_elements)の中間の頂点すべてに描かれる矢印やマーカーを定義します。

マーカーは、[パスデータ](/ja/docs/Web/SVG/Attribute/d#path_commands)の最初と最後以外のすべての頂点に描画されます。

> [!NOTE]
> プレゼンテーション属性なので、 `marker-mid` は CSS プロパティとして使用することができます。

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
      <circle cx="4" cy="4" r="4" stroke="none" fill="#f00" />
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
