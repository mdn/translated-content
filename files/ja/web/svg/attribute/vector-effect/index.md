---
title: vector-effect
slug: Web/SVG/Attribute/vector-effect
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

`vector-effect` プロパティは、オブジェクトを描画する際に使用するベクター効果を指定します。ベクター効果は、フィルター、マスク、クリップなど、他にもある合成処理を行う前に適用されます。

> **メモ:** 表示属性であるため、`vector-effect` は CSS プロパティとして使用することができます。

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
      <th scope="row">既定値</th>
      <td><code>none</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>離散的</td>
    </tr>
  </tbody>
</table>

- `none`
  - : この値は、ベクター効果を適用しないことを指定します。つまり、指定する描画で最初に図形の形状を塗りつぶし、次に指定する描画で輪郭線を描くという既定の描画動作が使用されます。
- `non-scaling-stroke`
  - : この値は、オブジェクトの輪郭を描画する方法を変更します。通常、輪郭線はユーザー座標系で計算され、その輪郭線の中が（色やグラデーションで）塗られます。この値の結果、輪郭線の幅が要素の座標変換（不均一な拡大縮小やせん断変換を含む）やズームレベルの変更に依存しない視覚効果が得られます。
- `non-scaling-size`
  - : この値は、要素とその子孫で使用される特別なユーザー座標系を指定します。そのユーザー座標系の拡大縮小は、ホスティング座標空間からの座標変換が変更されても変化しません。しかし、回転や傾きを抑制するようなことはしません。また、ユーザー座標系の原点も指定しません。この値はユーザー座標系の拡大縮小を抑制するため、`non-scaling-stroke` の特性も持ち合わせています。
- `non-rotation`
  - : この値は、要素とその子孫で使用される特別なユーザー座標系を指定します。そのユーザー座標系の回転や傾きの指定は、ホスティング座標空間からの変換変更にもかかわらず、抑制されます。しかし、拡大縮小の抑制は行われません。また、ユーザー座標系の原点を指定することもしません。
- `fixed-position`
  - : この値は、要素とその子孫で使用される特別なユーザー座標系を指定します。そのユーザー座標系は、ホスティング座標空間からの座標変換があっても、その位置が修正されます。ただし、回転、傾き、拡大縮小の抑制を指定するものではありません。このベクター効果と {{SVGAttr("transform")}} プロパティを同時に定義した場合、そのプロパティがこの効果に使われることになります。

## 例

### 例: vector-effect="non-scaling-stroke"

```html
<svg viewBox="0 0 500 240">
  <!-- normal -->
  <path
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- scaled -->
  <path
    transform="translate(100,0) scale(4,1)"
    d="M10,20 L40,100 L39,200 z"
    stroke="black"
    stroke-width="2px"
    fill="none"></path>

  <!-- fixed-->
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

{{EmbedLiveSample("Example_vector-effectnon-scaling-stroke", 550, 300)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
