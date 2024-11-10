---
title: filterUnits
slug: Web/SVG/Attribute/filterUnits
l10n:
  sourceCommit: b4f998244660723175f8e06b5d77f68cfb1d1f1a
---

{{SVGRef}}

**`filterUnits`** 属性は、 {{ SVGAttr("x") }}, {{ SVGAttr("y") }}, {{ SVGAttr("width") }}, {{ SVGAttr("height") }} 属性の座標系を定義します。

この属性は以下の SVG 要素で使用することができます。

- {{SVGElement("filter")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td><code>userSpaceOnUse</code> | <code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">既定値</th>
      <td><code>objectBoundingBox</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `userSpaceOnUse`
  - : {{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}} は、 {{SVGElement("filter")}} 要素が参照される時点で配置されている現在のユーザー座標系（すなわち、 {{SVGAttr("filter")}} 属性を介して {{SVGElement("filter")}} 要素を参照している要素のユーザー座標系）。
- `objectBoundingBox`
  - : この場合、{{SVGAttr("x")}}、{{SVGAttr("y")}}、{{SVGAttr("width")}}、{{SVGAttr("height")}} は、参照要素上の囲みボックスの割合またはパーセント値を表します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
