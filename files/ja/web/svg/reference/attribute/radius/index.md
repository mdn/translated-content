---
title: radius
slug: Web/SVG/Reference/Attribute/radius
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

**`radius`** 属性は、指定された {{SVGElement("feMorphology")}} フィルタープリミティブに対する操作の半径（または半径群）を表します。

2 つの数値が指定された場合、最初の数値は X 方向の半径、2 つ目の数値は Y 方向の半径を表します。1 つの数値のみが指定された場合は、その値が X 方向と Y 方向の両方に使用されます。これらの値は、{{SVGElement("filter")}} 要素の {{SVGAttr("primitiveUnits")}} 属性によって定義された座標系に基づいています。

負の値またはゼロを指定すると、指定されたフィルタープリミティブの効果が無効になります（つまり、結果はフィルターの入力画像となります）。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("feMorphology")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="/ja/docs/Web/SVG/Guides/Content_type#number-optional-number"
          >&#x3C;number-optional-number></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
