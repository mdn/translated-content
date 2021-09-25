---
title: 剰余 (%)
slug: Web/JavaScript/Reference/Operators/Remainder
tags:
- JavaScript
- Language feature
- Operator
- Reference
translation_of: Web/JavaScript/Reference/Operators/Remainder
---
<div>{{jsSidebar("Operators")}}</div>

<p>剰余演算子 (<code>%</code>) は、 1 つ目のオペランドが 2 つ目のオペランドで除算されたときに残った剰余を返します。これは常に被除数の符号を取ります。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-remainder.html")}}</div>

<p>なお、多くの言語では ‘%’ はリマインダー演算子ですが、言語によっては (例えば <a href="https://en.wikipedia.org/wiki/Modulo_operation#In_programming_languages">Python や Perl</a> では) モジュロ演算子になります。正の数同士の場合は、この 2 つの値は等価ですが、被除数と除数が異なる符号の場合は結果が異なります。 JavaScript でモジュロを得るには、 <code>a % n</code> の代わりに <code>((a % n ) + n ) % n</code> を使用してください。</p>

<h2 id="Syntax">構文</h2>

<pre class="brush: js notranslate"><strong>演算子:</strong> <var>var1</var> % <var>var2</var>
</pre>

<h2 id="Examples">例</h2>

<h3 id="Remainder_with_positive_dividend">正の値の剰余</h3>

<pre class="brush: js notranslate"> 12 % 5  //  2
 1 % -2 //  1
 1 % 2  //  1
 2 % 3  //  2
5.5 % 2 // 1.5
</pre>

<h3 id="Remainder_with_negative_dividend">負の値の剰余</h3>

<pre class="brush: js notranslate">-12 % 5 // -2
-1 % 2  // -1
-4 % 2  // -0</pre>

<h3 id="Remainder_with_NaN">NaN の剰余</h3>

<pre class="brush: js notranslate">NaN % 2 // NaN</pre>

<h3 id="Remainder_with_Infinity">無限大の剰余</h3>

<pre class="brush: js notranslate">Infinity % 2 // NaN
Infinity % 0 // NaN
Infinity % Infinity // NaN
</pre>

<h2 id="Specifications">仕様書</h2>

<table class="standard-table">
  <tbody>
    <tr>
     <th scope="col">仕様書</th>
    </tr>
    <tr>
      <td>{{SpecName('ESDraft', '#sec-multiplicative-operators', 'Remainder operator')}}
      </td>
    </tr>
  </tbody>
</table>

<h2 id="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.remainder")}}</p>

<h2 id="See_also">関連項目</h2>

<ul>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項マイナス演算子</a></li>
  <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス演算子</a></li>
</ul>
