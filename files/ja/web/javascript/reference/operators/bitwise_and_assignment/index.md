---
title: ビット論理積代入 (&=)
slug: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
  - 代入演算子
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Bitwise_AND_assignment
---
{{jsSidebar("Operators")}}

ビット論理積代入演算子 (`&amp;=`) は、両方のオペランドのバイナリ表現を使用し、それらに対してビット単位の AND 演算を実行して、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-and-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x &amp;= y
<strong>Meaning:</strong>  x  = x &amp; y
</pre>

## 例

<h3 id="ビット論理積代入の使用">ビット論理積代入の使用</h3>

<pre class="brush: js notranslate">let a = 5;
// 5:     00000000000000000000000000000101
// 2:     00000000000000000000000000000010
a &amp;= 2; // 0</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



{{Compat("javascript.operators.bitwise_and_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators">ビット演算子ガイド</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_AND">ビット論理積演算子</a></li>
</ul>
