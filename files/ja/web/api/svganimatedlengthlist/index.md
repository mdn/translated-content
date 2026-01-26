---
title: SVGAnimatedLengthList
slug: Web/API/SVGAnimatedLengthList
l10n:
  sourceCommit: 491fc99b39489d35811cfcb95912838abc33c390
---

{{APIRef("SVG")}}

## SVG のアニメーション長さリストインターフェイス

`SVGAnimatedLengthList` インターフェイスは基本的な {{ domxref("SVGLengthList") }} 型のアニメーションする属性に使用されます。

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
          <li>
            読み取り専用の {{ domxref("SVGLengthList") }}
            <code>baseVal</code>
          </li>
          <li>
            読み取り専用の {{ domxref("SVGLengthList") }}
            <code>animVal</code>
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedLengthList"
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
      <td><code>{{domxref("SVGAnimatedLengthList.baseVal", "baseVal")}}</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        アニメーションを適用する前の指定された属性の基底値を表します。
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedLengthList.animVal", "animVal")}}</code></td>
      <td>{{ domxref("SVGLengthList") }}</td>
      <td>
        読み取り専用の {{ domxref("SVGLengthList") }} で、その属性の現在のアニメーション値を表します。
        その属性が現在アニメーションしていない場合、 {{ domxref("SVGLengthList") }} で <code>baseVal</code> と同じ値になります。 <code>animVal</code> が参照するオブジェクトは、属性がアニメーションしていない場合でも、 <code>baseVal</code> が参照するオブジェクトとは常に異なります。
      </td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

_`SVGAnimatedLengthList` インターフェイスは固有のメソッドを提供していません。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
