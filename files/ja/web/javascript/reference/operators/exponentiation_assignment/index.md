---
title: べき乗代入 (**=)
slug: Web/JavaScript/Reference/Operators/Exponentiation_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Exponentiation_assignment
---
{{jsSidebar("Operators")}}

べき乗代入演算子 (`**=`) は、変数の値を右辺のオペランドでべき乗します。

{{EmbedInteractiveExample("pages/js/expressions-exponentiation-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x **= y
<strong>Meaning:</strong>  x  = x ** y</pre>

## 例

<h3 id="べき乗代入の仕様">べき乗代入の仕様</h3>

<pre class="brush: js notranslate">// 次の変数を想定
//  bar = 5

bar **= 2     // 25
bar **= 'foo' // NaN</pre>

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

<h2 id="ブラウザー実装状況">ブラウザー実装状況</h2>



{{Compat("javascript.operators.exponentiation_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">Assignment operators in the JS guide</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">Exponentiation operator</a></li>
</ul>
