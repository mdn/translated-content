---
title: 除算 (/)
slug: Web/JavaScript/Reference/Operators/Division
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Division
---
<div>{{jsSidebar("Operators")}}</div>

<p>除算演算子 (<code>/</code>) は、左のオペランドを被除数とし右のオペランドを除数としたオペランド同士の商を生成します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-division.html")}}</div>

<div></div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><strong>Operator:</strong> <var>x</var> / <var>y</var>
</pre>

<h2 id="例">例</h2>

<h3 id="基本の除算">基本の除算</h3>

<pre class="brush: js notranslate">1 / 2              // 0.5

Math.floor(3 / 2) // 1

1.0 / 2.0         // 0.5
</pre>

<h3 id="ゼロ除算">ゼロ除算</h3>

<pre class="brush: js notranslate">2.0 / 0     // Infinity

2.0 / 0.0   // Infinity, because 0.0 === 0

2.0 / -0.0  // -Infinity</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-multiplicative-operators', 'Division operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("javascript.operators.division")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項マイナス演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス演算子</a></li>
</ul>
