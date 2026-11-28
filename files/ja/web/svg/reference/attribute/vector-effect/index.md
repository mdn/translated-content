---
title: vector-effect
slug: Web/SVG/Reference/Attribute/vector-effect
l10n:
  sourceCommit: 09ba70170e8962533f9566c7c6b6b047ed0eb090
---

`vector-effect` プロパティは、オブジェクトを描画する際に使用するベクター効果を指定します。ベクター効果は、フィルター、マスク、クリップなど、他にもある合成処理を行う前に適用されます。

> [!NOTE]
> プレゼンテーション属性であるため、 `vector-effect` には対応する CSS プロパティ {{cssxref("vector-effect")}} があります。両方が指定された場合、 CSS プロパティが優先されます。

## 要素

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("circle")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("path")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## 例

### `vector-effect` を `non-scaling-stroke` に設定

```html
<svg viewBox="0 0 500 240">
  <!-- 通常 -->
  <path
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- 変倍 -->
  <path
    transform="translate(100,0) scale(4,1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- 固定 -->
  <path
    vector-effect="non-scaling-stroke"
    transform="translate(300, 0) scale(4, 1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>
</svg>
```

#### 結果

{{EmbedLiveSample("Setting vector-effect as non-scaling-stroke", 550, 330)}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code>none</code> | <code>non-scaling-stroke</code> |
        <code>non-scaling-size</code> | <code>non-rotation</code> |
        <code>fixed-position</code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散的</td>
    </tr>
  </tbody>
</table>

- `none`
  - : ベクター効果を適用しないことを示します。つまり、既定の描画動作では、指定された塗りで図形の形状を最初に塗りつぶし、続いて指定された塗りで輪郭線を描きます。
- `non-scaling-stroke`
  - : この値はオブジェクトの描線方法を変更します。通常、描線では、現在のユーザー座標系における図形のパスの輪郭線を計算し、その輪郭線をストロークの塗り（色またはグラデーション）で塗りつぶします。この値の視覚効果では、ストロークの幅が要素の座標変換（不均一な変倍やせん断変換を含む）やズームレベルに依存しません。

> [!NOTE]
> 仕様では他にも 3 つの値、`non-scaling-size`、`non-rotation`、`fixed-position` を定義していますが、これらは実装されておらず、対応が不確定です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("vector-effect")}} プロパティ
