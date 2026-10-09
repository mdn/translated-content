---
title: requiredExtensions
slug: Web/SVG/Reference/Attribute/requiredExtensions
l10n:
  sourceCommit: 1db55979ae2b6ed7abb484b74e70809d66fa7637
---

**`requiredExtensions`** は SVG の[条件処理属性](/ja/docs/Web/SVG/Reference/Attribute#条件処理属性)で、それぞれの言語拡張を参照する、空白区切りの URL 値のリストです。言語拡張とは、標準的なブラウザー仕様で定義されている機能の範囲を超える拡張機能のことです。

この値は、要求される拡張機能を指定する URL 参照の空白区切りのリストです。リストに名前付きの拡張機能がすべて存在し、ユーザーエージェントが対応している場合、その要素は通常どおりレンダリングされます。この属性が存在するものの、その値が空文字列である場合、または拡張機能のいずれかをブラウザーが対応していない場合、ブラウザーはその要素およびそのすべての子要素をスキップし、レンダリングしません。

この属性は以下の SVG 要素で使用できます。

- {{SVGElement("a")}}
- {{SVGElement("animate")}}
- {{SVGElement("animateMotion")}}
- {{SVGElement("animateTransform")}}
- {{SVGElement("circle")}}
- {{SVGElement("clipPath")}}
- {{SVGElement("defs")}}
- {{SVGElement("ellipse")}}
- {{SVGElement("foreignObject")}}
- {{SVGElement("g")}}
- {{SVGElement("image")}}
- {{SVGElement("line")}}
- {{SVGElement("mask")}}
- {{SVGElement("path")}}
- {{SVGElement("pattern")}}
- {{SVGElement("polygon")}}
- {{SVGElement("polyline")}}
- {{SVGElement("rect")}}
- {{SVGElement("set")}}
- {{SVGElement("svg")}}
- {{SVGElement("switch")}}
- {{SVGElement("text")}}
- {{SVGElement("textPath")}}
- {{SVGElement("tspan")}}
- {{SVGElement("use")}}

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <a href="/ja/docs/Web/SVG/Guides/Content_type#list-of-ts"><code>&lt;list-of-IRIs&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>（なし）</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{SVGAttr("tabindex")}}
- {{SVGAttr("systemLanguage")}}
- {{SVGAttr("requiredFeatures")}}
