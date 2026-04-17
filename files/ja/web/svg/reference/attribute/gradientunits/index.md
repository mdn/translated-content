---
title: gradientUnits
slug: Web/SVG/Reference/Attribute/gradientUnits
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

**`gradientUnits`** 属性は、グラデーション要素で指定された属性に使用される座標系を定義します。

この属性は、以下の SVG 要素で使用できます。

- {{SVGElement("linearGradient")}}
- {{SVGElement("radialGradient")}}

## linearGradient

{{SVGElement("linearGradient")}} では、`gradientUnits` は {{SVGAttr("x1")}}、{{SVGAttr("y1")}}、{{SVGAttr("x2")}}、{{SVGAttr("y2")}} の各属性に使用される座標系を定義します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : この値は、属性が、グラデーション要素が参照された時点での現在のユーザー座標系（すなわち、{{SVGAttr("fill")}} または {{SVGAttr("stroke")}} プロパティを介して参照しているグラデーション要素のユーザー座標系）において、{{SVGAttr("gradientTransform")}} 属性で指定された変換を適用した結果の座標系の中の値を表していることを示します。
    パーセント値は、現在の SVG ビューポートに対する相対値を表します。
- `objectBoundingBox`
  - : この値は、属性のユーザー座標系が、グラデーションが適用される要素のバウンディングボックスを基に確立され、その後、`gradientTransform` 属性で指定された変換が適用されることを示しています。

    パーセント値は、オブジェクトのバウンディングボックスに対する相対値を表します。

    この値と、`gradientTransform` が恒等行列である場合、線形グラデーションの法線ベクトルは、オブジェクトのバウンディングボックス空間（すなわち、(0,0) がオブジェクトのバウンディングボックスの左上、(1,1) が右下になる抽象座標系）において、グラデーションベクトルに対して垂直になります。オブジェクトのバウンディングボックスが正方形でない場合、オブジェクトのバウンディングボックス空間内では当初グラデーションベクトルに垂直であったグラデーション法線も、ユーザー空間におけるグラデーションベクトルに対しては垂直でないようにレンダリングされることがあります。グラデーションベクトルがバウンディングボックスの軸のいずれかと平行である場合、グラデーション法線は垂直のままとなります。この変換は、バウンディングボックス空間からユーザー空間への均一でない変倍変換が適用されることに起因します。

## radialGradient

For {{SVGElement("radialGradient")}}, `gradientUnits` defines the coordinate system used for the attributes {{SVGAttr("cx")}}, {{SVGAttr("cy")}}, {{SVGAttr("r")}}, {{SVGAttr("fx")}}, {{SVGAttr("fy")}}, and {{SVGAttr("fr")}}.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("cx")}}、{{SVGAttr("cy")}}、{{SVGAttr("r")}}、{{SVGAttr("fx")}}、{{SVGAttr("fy")}}、{{SVGAttr("fr")}} は、グラデーション要素が参照された時点（すなわち、{{SVGAttr("fill")}} または {{SVGAttr("stroke")}} プロパティを介してグラデーション要素を参照している要素のユーザー座標系）で有効な現在のユーザー座標系に対し、属性 {{SVGAttr("gradientTransform")}} で指定された変換を適用した結果の座標系における値を表します。
- `objectBoundingBox`
  - : {{SVGElement("radialGradient")}} の場合、{{SVGAttr("cx")}}、{{SVGAttr("cy")}}、{{SVGAttr("r")}}、{{SVGAttr("fx")}}、{{SVGAttr("fy")}}、{{SVGAttr("fr")}} の各属性に対するユーザー座標系は、グラデーションが適用される要素のバウンディングボックス（オブジェクトのバウンディングボックスの単位を参照）を使用して確立され、その後、属性 `gradientTransform` で指定された変換が適用されます。
    この値と、`gradientTransform` が単位行列である場合、放射グラデーションのリングは、オブジェクトのバウンディングボックス空間（すなわち、(0,0) がオブジェクトのバウンディングボックスの左上、(1,1) が右下に位置する抽象座標系）において円形となります。オブジェクトのバウンディングボックスが正方形でない場合、オブジェクトのバウンディングボックス空間内では概念的には円形であるリングも、バウンディングボックス空間からユーザー空間への非一様変倍変換が適用されるため、楕円形としてレンダリングされます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
