---
title: ビット否定 (~)
slug: Web/JavaScript/Reference/Operators/Bitwise_NOT
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Bitwise_NOT
---
<div>{{jsSidebar("Operators")}}</div>

<p>ビット否定演算子 (<code>~</code>) は、オペランドの各ビットを反転します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-bitwise-not.html")}}</div>

<div></div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"><code><var>~a</var></code>
</pre>

<h2 id="解説">解説</h2>

<p>オペランドは32ビットの整数値に変換され、ビット (ゼロまたは1) の並びによって表現されます。32ビットを超える数値は最上位のビットが破棄されます。例えば、次の32ビットを超える整数は32ビット整数に変換されます。</p>

<pre class="brush: js notranslate">変換前: 11100110111110100000000000000110000000000001
変換後:             10100000000000000110000000000001</pre>

<p>第1オペランドの各ビットは、第2オペランドの対応するビットと組み合わせになります。<em>第1ビット</em>は<em>第1ビット</em>へ、<em>第2ビット</em>は<em>第2ビット</em>へ、という具合にです。</p>

<p>この演算子は各ビットの組み合わせに適用され、結果はビット単位に構築されます。</p>

<p><code>NOT</code> 演算の真理値表は次のようになります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">a</th>
   <th class="header" scope="col">NOT a</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
  </tr>
 </tbody>
</table>

<pre class="brush: js notranslate"> 9 (10進数) = 00000000000000000000000000001001 (2進数)
               --------------------------------
~9 (10進数) = 11111111111111111111111111110110 (2進数) = -10 (10進数)
</pre>

<p>ある数 <code>x</code> のビット否定 は <code>-(x + 1)</code> になります。例えば、<code>~-5</code> は <code>4</code> になります。</p>

<p>数値に32ビット表現を使用するため <code>~-1</code> および <code>~4294967295</code> (2<sup>32</sup>-1) はいずれも <code>0</code> になることに注意してください。</p>

<h2 id="例">例</h2>

<h3 id="ビット否定の使用">ビット否定の使用</h3>

<pre class="brush: js notranslate">~0;  // -1
~-1; // 0
~1;  // -2
</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-unary-operators', 'Unary NOT expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("javascript.operators.bitwise_not")}}</p>

<h2 id="関連情報">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise_operators">ビット演算子ガイド</a></li>
</ul>
