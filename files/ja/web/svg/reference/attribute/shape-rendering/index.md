---
title: shape-rendering
slug: Web/SVG/Reference/Attribute/shape-rendering
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`shape-rendering`** 属性は、パス、円、矩形などの図形を描画する際に、どのようなトレードオフを行うべきかについて、レンダラーにヒントを提供します。

> [!NOTE]
> プレゼンテーション属性であるため、 `shape-rendering` には対応する CSS プロパティ {{cssxref("shape-rendering")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

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
<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg">
  <circle cx="100" cy="100" r="100" shape-rendering="geometricPrecision" />
  <circle cx="320" cy="100" r="100" shape-rendering="crispEdges" />
</svg>
```

{{EmbedLiveSample("Example", "420", "220")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>auto</code> | <code>optimizeSpeed</code> |
        <code>crispEdges</code> | <code>geometricPrecision</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>auto</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散</td>
    </tr>
  </tbody>
</table>

- `auto`
  - : この値は、ユーザーエージェントが速度、エッジの鮮明さ、および幾何学的精度のバランスをとるために適切な調整を行うべきであることを示していますが、その際、速度やエッジの鮮明さよりも幾何学的精度を優先する必要があります。
- `optimizeSpeed`
  - : この値は、ユーザーエージェントが幾何学的精度や鮮明なエッジよりも描画速度を優先することを示します。このオプションを設定すると、ユーザーエージェントが図形のアンチエイリアスを無効にする場合があります。
- `crispEdges`
  - : この値は、ユーザーエージェントが、描画速度や幾何学的精度よりも、アートワークの鮮明なエッジのコントラストを重視するよう努めることを示しています。エッジを鮮明にするため、ユーザーエージェントは、すべての線や曲線に対して、あるいは垂直または水平に近い直線に対してのみ、アンチエイリアスを無効にする場合があります。また、ユーザーエージェントは、エッジを端末のピクセルに合わせるように、線の位置や線幅を調整する場合があります。
- `geometricPrecision`
  - : ユーザーエージェントは、処理速度やエッジの鮮明さよりも、幾何学的精度を優先しなければならないことを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS {{cssxref('shape-rendering')}} プロパティ
