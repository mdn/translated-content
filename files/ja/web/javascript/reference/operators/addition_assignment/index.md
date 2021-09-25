---
title: 加算代入 (+=)
slug: Web/JavaScript/Reference/Operators/Addition_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Addition_assignment
---
{{jsSidebar("Operators")}}

加算代入演算子 (`+=`) は、右辺のオペランドの値を変数に加算し、結果を変数に代入します。 2つのオペランドの型は、加算代入演算子の動作を決定します。加算もしくは連結が可能です。

{{EmbedInteractiveExample("pages/js/expressions-addition-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x += y
<strong>Meaning:</strong>  x  = x + y</pre>

## 例

<h3 id="加算代入の使用">加算代入の使用</h3>

<pre class="brush: js notranslate">// 以下の変数を想定
//  foo = 'foo'
//  bar = 5
//  baz = true

// 数値 + 数値 -&gt; 加算
bar += 2 // 7

// ブール値 + 数値 -&gt; 加算
baz += 1 // 2

// ブール値 + ブール値 -&gt; 加算
baz += false // 1

// 数値 + 文字列 -&gt; 連結
bar += 'foo' // "5foo"

// 文字列 + ブール値 -&gt; 連結
foo += false // "foofalse"

// 文字列 + 文字列 -&gt; 連結
foo += 'bar' // "foobar"</pre>

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



{{Compat("javascript.operators.addition_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">代入演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
</ul>
