---
title: filterUnits
slug: Web/SVG/Reference/Attribute/filterUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`filterUnits`** 属性は、 {{SVGAttr("x")}}, {{SVGAttr("y")}}, {{SVGAttr("width")}}, {{SVGAttr("height")}} 属性の座標系を定義します。

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
