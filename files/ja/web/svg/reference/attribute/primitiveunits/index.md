---
title: primitiveUnits
slug: Web/SVG/Reference/Attribute/primitiveUnits
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`primitiveUnits`** 属性は、フィルタープリミティブ内にあるさまざまな寸法値、およびフィルタープリミティブのサブ領域を定義する属性に対する座標系を指定します。

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
      <th scope="row">デフォルト値</th>
      <td><code>userSpaceOnUse</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- userSpaceOnUse
  - : この値は、フィルター定義内の長さの値が、{{SVGElement("filter")}} 要素が参照された時点での現在のユーザー座標系における値であることを示します（つまり、{{SVGAttr("filter")}} 属性を通じて {{SVGElement("filter")}} 要素を参照している要素のユーザー座標系です）。
- objectBoundingBox
  - : この値は、フィルター定義内の長さの値が、参照元要素のバウンディングボックスの割合またはパーセント値を表していることを示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
