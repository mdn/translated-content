---
title: 乗算代入 (*=)
slug: Web/JavaScript/Reference/Operators/Multiplication_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Multiplication_assignment
---
{{jsSidebar("Operators")}}

乗算代入演算子 (`*=`) は、変数に右のオペランドの値を乗算し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-multiplication-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x *= y
<strong>Meaning:</strong>  x  = x * y</pre>

## 例

<h3 id="乗算代入の使用">乗算代入の使用</h3>

<pre class="brush: js notranslate">// 次の変数を想定
//  bar = 5

bar *= 2     // 10
bar *= 'foo' // NaN</pre>

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



{{Compat("javascript.operators.multiplication_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
</ul>
