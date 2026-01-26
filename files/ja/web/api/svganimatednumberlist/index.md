---
title: SVGAnimatedNumberList
slug: Web/API/SVGAnimatedNumberList
l10n:
  sourceCommit: 0bb352f93d19c62cd07807479975f610f7b02cf4
---

{{APIRef("SVG")}}

## SVG のアニメーションする実数リストインターフェイス

`SVGAnimatedNumber` インターフェイスは、実数のリストをとり、アニメーションすることができる属性に使用されます。

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
          <li>
            読み取り専用の {{ domxref("SVGNumberList") }}
            <code>baseVal</code>
          </li>
          <li>
            読み取り専用の {{ domxref("SVGNumberList") }}
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedAngle"
          >SVG 1.1 (2nd Edition)</a
        >
      </td>
    </tr>
  </tbody>
</table>

## インスタンスプロパティ

- {{domxref("SVGAnimatedNumberList.baseVal")}} {{ReadOnlyInline}}
  - : {{domxref("SVGNumberList")}} で、アニメーションを適用する前の指定された属性の基底値を表します。
- {{domxref("SVGAnimatedNumberList.animVal")}} {{ReadOnlyInline}}
  - : 指定された属性がアニメーションしている場合、 {{domxref("SVGNumberList")}} でその属性の現在のアニメーション値になります。指定された属性が現在アニメーションしていない場合、 {{domxref("SVGNumberList")}} で `baseVal` と同じ値になります。 `animVal` が参照するオブジェクトは、属性がアニメーションしていない場合でも、 `baseVal` が参照するオブジェクトとは常に異なります。

## インスタンスメソッド

`SVGAnimatedNumberList` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
