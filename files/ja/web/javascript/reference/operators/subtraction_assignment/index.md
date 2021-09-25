---
title: 減算代入 (-=)
slug: Web/JavaScript/Reference/Operators/Subtraction_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Subtraction_assignment
---
{{jsSidebar("Operators")}}

減算代入演算子 (`-=`) は、変数から右辺のオペランドの値を減算し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-subtraction-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x -= y
<strong>Meaning:</strong>  x  = x - y</pre>

## 例

<h3 id="減算代入の使用">減算代入の使用</h3>

<pre class="brush: js notranslate">// 次の変数を想定
//  bar = 5

bar -= 2     // 3
bar -= 'foo' // NaN</pre>

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



{{Compat("javascript.operators.subtraction_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
</ul>
