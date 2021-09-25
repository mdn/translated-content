---
title: 右シフト代入 (>>=)
slug: Web/JavaScript/Reference/Operators/Right_shift_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Right_shift_assignment
---
{{jsSidebar("Operators")}}

右シフト代入演算子 (`&gt;&gt;=`) は、指定された量のビットを右に移動し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-right-shift-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x &gt;&gt;= y
<strong>Meaning:</strong>  x   = x &gt;&gt; y</pre>

## 例

<h3 id="右シフト代入の使用">右シフト代入の使用</h3>

<pre class="brush: js notranslate">let a = 5; //   (00000000000000000000000000000101)
a &gt;&gt;= 2;   // 1 (00000000000000000000000000000001)

let b = -5; //  (-00000000000000000000000000000101)
b &gt;&gt;= 2;  // -2 (-00000000000000000000000000000010)</pre>

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



{{Compat("javascript.operators.right_shift_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Right_shift">右シフト演算子</a></li>
</ul>
