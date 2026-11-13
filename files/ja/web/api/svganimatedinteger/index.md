---
title: SVGAnimatedInteger
slug: Web/API/SVGAnimatedInteger
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{APIRef("SVG")}}

## SVG アニメーションする整数インターフェイス

`SVGAnimatedInteger` インターフェイスは、アニメーション可能な基本型 [\<integer>](/ja/docs/Web/SVG/Guides/Content_type#integer) の属性に使用されます。

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
          <li>long 型の <code>baseVal</code></li>
          <li>読み取り専用 long 型の <code>animVal</code></li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">正規ドキュメント</th>
      <td>
        <a
          href="https://www.w3.org/TR/SVG11/types.html#InterfaceSVGAnimatedInteger"
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
      <td><code>{{domxref("SVGAnimatedInteger.baseVal", "baseVal")}}</code></td>
      <td>long</td>
      <td>
        アニメーションが適用される前の指定された属性の基本値です。
      </td>
    </tr>
    <tr>
      <td><code>{{domxref("SVGAnimatedInteger.animVal", "animVal")}}</code></td>
      <td>long</td>
      <td>
        指定された属性またはプロパティがアニメーションしている場合、その属性またはプロパティの現在のアニメーション値が含まれます。指定された属性またはプロパティが現在アニメーションしていない場合、 <code>baseVal</code> と同じ値が含まれます。
      </td>
    </tr>
  </tbody>
</table>

## インスタンスメソッド

`SVGAnimatedInteger` インターフェイスは固有のメソッドを提供していません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
