---
title: 剰余代入 (%=)
slug: Web/JavaScript/Reference/Operators/Remainder_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Remainder_assignment
---
{{jsSidebar("Operators")}}

剰余代入演算子 (`%=`) は、変数を右辺のオペランドの値で除算し、剰余を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-remainder-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x %= y
<strong>Meaning:</strong>  x  = x % y</pre>

## 例

<h3 id="剰余代入の使用">剰余代入の使用</h3>

<pre class="brush: js notranslate">// 以下の変数を想定
//  bar = 5

bar %= 2     // 1
bar %= 'foo' // NaN
bar %= 0     // NaN</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



{{Compat("javascript.operators.remainder_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
</ul>
