---
title: targetY
slug: Web/SVG/Reference/Attribute/targetY
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

**`targetY`** 属性は、入力画像内の指定されたターゲットピクセルを基準として、畳み込み行列の垂直方向の位置指定を決定します。行列の先頭行は行番号 0 です。この値は、`0` <= `targetY` < {{SVGAttr("order")}} の `y` を満たすものでなければなりません。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("feConvolveMatrix")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>{{cssxref("integer")}}</td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td><code>floor({{SVGAttr("order")}} の <code>y</code> / 2)</code></td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>可</td>
    </tr>
  </tbody>
</table>

- `<integer>`
  - : この値は、入力画像内の指定されたターゲットピクセルを基準とした、畳み込み行列の垂直方向の位置指定を示します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("targetX")}}
