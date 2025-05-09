---
title: SVGAnimatedPreserveAspectRatio
slug: Web/API/SVGAnimatedPreserveAspectRatio
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

## SVG のアニメーションする preserveAspectRatio インターフェイス

`SVGAnimatedPreserveAspectRatio` インターフェイスは、 {{ domxref("SVGPreserveAspectRatio") }} 型のアニメーション可能な属性で使用されます。

### インターフェイス概要

<table class="standard-table">
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
          <li>読み取り専用の float <code>baseVal</code></li>
          <li>読み取り専用の float <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/coords.html#InterfaceSVGAnimatedPreserveAspectRatio"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

- {{domxref("SVGAnimatedPreserveAspectRatio.baseVal", "baseVal")}} {{ReadOnlyInline}}
  - : {{domxref("SVGPreserveAspectRatio")}} で、アニメーションを適用する前の指定された属性の基底値を表します。
- {{domxref("SVGAnimatedPreserveAspectRatio.animVal", "animVal")}} {{ReadOnlyInline}}
  - : 指定された属性がアニメーションしている場合、 {{domxref("SVGPreserveAspectRatio")}} でその属性の現在のアニメーション値になります。指定された属性が現在アニメーションしていない場合、 {{domxref("SVGPreserveAspectRatio")}} で `baseVal` と同じ値になります。 `animVal` が参照するオブジェクトは、属性がアニメーションしていない場合でも、 `baseVal` が参照するオブジェクトとは常に異なります。

## インスタンスメソッド

`SVGAnimatedPreserveAspectRatio` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
