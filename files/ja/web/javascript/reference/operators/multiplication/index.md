---
title: 乗算 (*)
slug: Web/JavaScript/Reference/Operators/Multiplication
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Multiplication
---
<div>{{jsSidebar("Operators")}}</div>

<p>乗算演算子 (<code>*</code>) はオペランドの積を生成します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-multiplication.html")}}</div>

<div></div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><strong>Operator:</strong> <var>x</var> * <var>y</var>
</pre>

<h2 id="例">例</h2>

<h3 id="数値を使用した乗算">数値を使用した乗算</h3>

<pre class="brush: js notranslate"> 2 * 2      // 4
-2 * 2     // -4
</pre>

<h3 id="無限大との乗算">無限大との乗算</h3>

<pre class="brush: js notranslate">Infinity * 0         // NaN
Infinity * Infinity  // Infinity</pre>

<h3 id="非数との乗算">非数との乗算</h3>

<pre class="brush: js notranslate">'foo' * 2 // NaN</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-multiplicative-operators', 'Multiplication operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("javascript.operators.multiplication")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項マイナス演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス演算子</a></li>
</ul>
