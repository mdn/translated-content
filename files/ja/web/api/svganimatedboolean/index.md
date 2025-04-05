---
title: SVGAnimatedBoolean
slug: Web/API/SVGAnimatedBoolean
l10n:
  sourceCommit: 53fd7ea4a4657b1b457ee582d7a28672319bf80a
---

{{APIRef("SVG")}}

## SVG アニメーションする論理値インターフェイス

`SVGAnimatedBoolean` のインターフェイスは、論理値のうちアニメーション可能な型に使われます。

### インターフェイス概要

<table class="no-markdown">
  <tbody>
    <tr>
      <th scope="row">実装しているもの</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">メソッド</th>
      <td><em>なし</em></td>
    </tr>
    <tr>
      <th scope="row">プロパティ</th>
      <td>
        <ul>
          <li>論理値の <code>baseVal</code></li>
          <li>読み取り専用の論理値の <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedBoolean"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

<table class="no-markdown">
  <thead>
    <tr>
      <th>名前</th>
      <th>型</th>
      <th>解説</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>{{domxref("SVGAnimatedBoolean.baseVal")}}</code></td>
      <td>論理値</td>
      <td>
        アニメーションが適用される前の指定された属性の基本値です。
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedBoolean.animVal")}}</code></td>
      <td>論理値</td>
      <td>
        指定された属性またはプロパティがアニメーションしている場合、その属性またはプロパティの現在のアニメーション値が含まれます。指定された属性またはプロパティが現在アニメーションしていない場合、 <code>baseVal</code> と同じ値が含まれます。
      </td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

`SVGAnimatedBoolean` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
