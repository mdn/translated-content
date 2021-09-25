---
title: 加算 (+)
slug: Web/JavaScript/Reference/Operators/Addition
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Addition
---
<div>{{jsSidebar("Operators")}}</div>

<p>加算演算子 (<code>+</code>) は、数値オペランドまたは文字列連結の合計を生成します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-addition.html")}}</div>

<div></div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><strong>Operator:</strong> <var>x</var> + <var>y</var>
</pre>

<h2 id="例">例</h2>

<h3 id="数値加算">数値加算</h3>

<pre class="brush: js notranslate">// 数値 + 数値 -&gt; 加算
1 + 2 // 3

// ブール値 + 数値 -&gt; 加算
true + 1 // 2

// ブール値 + ブール値 -&gt; 加算
false + false // 0
</pre>

<h3 id="文字列連結">文字列連結</h3>

<pre class="brush: js notranslate">// 文字列 + 文字列 -&gt; 連結
'foo' + 'bar' // "foobar"

// 数値 + 文字列 -&gt; 連結
5 + 'foo' // "5foo"

// 文字列 + ブール値 -&gt; 連結
'foo' + false // "foofalse"</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-addition-operator-plus', 'Addition operator')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("javascript.operators.addition")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Subtraction">減算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Division">除算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Multiplication">乗算演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Remainder">剰余演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Exponentiation">べき乗演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Increment">インクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Decrement">デクリメント演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_negation">単項マイナス演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Unary_plus">単項プラス演算子</a></li>
</ul>
