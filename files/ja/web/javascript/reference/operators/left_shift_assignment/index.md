---
title: 左シフト代入 (<<=)
slug: Web/JavaScript/Reference/Operators/Left_shift_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Left_shift_assignment
---
{{jsSidebar("Operators")}}

左シフト代入演算子 (`&lt;&lt;=`) は、指定された量のビットを左に移動し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-left-shift-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x &lt;&lt;= y
<strong>Meaning:</strong>  x   = x &lt;&lt; y</pre>

## 例

<h3 id="左シフト代入の使用">左シフト代入の使用</h3>

<pre class="brush: js notranslate">let a = 5;
// 00000000000000000000000000000101

bar &lt;&lt;= 2; // 20
// 00000000000000000000000000010100</pre>

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



{{Compat("javascript.operators.left_shift_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Left_shift">左シフト演算子</a></li>
</ul>
