---
title: 単項マイナス (-)
slug: Web/JavaScript/Reference/Operators/Unary_negation
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Unary_negation
---
<div>{{jsSidebar("Operators")}}</div>

<p>単項マイナス演算子 (<code>-</code>) はオペランドの前に置かれ、符号を反転します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-unary-negation.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><strong>演算子:</strong> -<var>x</var>
</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Negating_numbers" name="Negating_numbers">数値の符号を反転</h3>

<pre class="brush: js notranslate">const x = 3;
const y = -x;

// y = -3
// x = 3
</pre>

<h3 id="Negating_non-numbers" name="Negating_non-numbers">数値以外の符号を反転</h3>

<p>単項マイナス演算子は、数値でないものを数値に変換することができます。</p>

<pre class="brush: js notranslate">const x = "4";
const y = -x;

// y = -4
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-unary-minus-operator', 'Unary negation operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.unary_negation")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Addition">加算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス演算子</a></li>
</ul>
