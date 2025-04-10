---
title: SVGAnimatedAngle
slug: Web/API/SVGAnimatedAngle
l10n:
  sourceCommit: 6db682e5b5717b90a47135134434191c265970d8
---

{{APIRef("SVG")}}

## SVG アニメーションする角度インターフェイス

`SVGAnimatedAngle` のインターフェイスは、アニメーション可能な基本型である [\<angle>](/ja/docs/Web/SVG/Guides/Content_type#angle) に使われます。

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
            読み取り専用の {{ domxref("SVGAngle") }} <code>baseVal</code>
          </li>
          <li>
            読み取り専用の {{ domxref("SVGAngle") }} <code>animVal</code>
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
      <td><code>{{domxref("SVGAnimatedAngle.baseVal")}}</code></td>
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        アニメーションが適用される前の指定された属性の基本値です。
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedAngle.animVal")}}</code></td>
      <td>{{ domxref("SVGAngle") }}</td>
      <td>
        読み取り専用の {{ domxref("SVGAngle") }} で、指定された属性の現在のアニメーション値を表します。指定された属性が現在アニメーションしていない場合、 {{ domxref("SVGAngle") }} は <code>baseVal</code> と同じ内容になります。属性がアニメーションしていない場合でも、 <code>animVal</code> によって参照されるオブジェクトは、 <code>baseVal</code> によって参照されるオブジェクトとは常に異なります。
      </td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

`SVGAnimatedAngle` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
