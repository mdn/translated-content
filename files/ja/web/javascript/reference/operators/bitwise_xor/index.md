---
title: ビット排他的論理和 (^)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR
tags:
  - Bitwise operator
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Bitwise_XOR
---
<div>{{jsSidebar("Operators")}}</div>

<p>ビット排他的論理和演算子 (<code>^</code>) は、両方のオペランドの対応するビットの一方だけが <code>1</code> である位置のビットで <code>1</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><code><var>a</var> ^ <var>b</var></code>
</pre>

<h2 id="Description" name="Description">解説</h2>

<p>オペランドは32ビットの整数値に変換され、ビット (ゼロまたは1) の並びによって表現されます。32ビットを超える数値は最上位のビットが破棄されます。例えば、次の32ビットを超える整数は32ビット整数に変換されます。</p>

<pre class="brush: js notranslate">変換前: 11100110111110100000000000000110000000000001
変換後:             10100000000000000110000000000001</pre>

<p>第1オペランドの各ビットは、第2オペランドの対応するビットと組み合わせになります。<em>第1ビット</em>は<em>第1ビット</em>へ、<em>第2ビット</em>は<em>第2ビット</em>へ、という具合にです。</p>

<p>この演算子は各ビットの組み合わせに適用され、結果はビット単位に構築されます。</p>

<p>XOR 演算の真理値表は次のようになります。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th class="header" scope="col">a</th>
   <th class="header" scope="col">b</th>
   <th class="header" scope="col">a XOR b</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>0</td>
   <td>0</td>
   <td>0</td>
  </tr>
  <tr>
   <td>0</td>
   <td>1</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>0</td>
   <td>1</td>
  </tr>
  <tr>
   <td>1</td>
   <td>1</td>
   <td>0</td>
  </tr>
 </tbody>
</table>

<pre class="brush: js notranslate">.    9 (10進数) = 00000000000000000000000000001001 (2進数)
    14 (10進数) = 00000000000000000000000000001110 (2進数)
                   --------------------------------
14 ^ 9 (10進数) = 00000000000000000000000000000111 (2進数) = 7 (10進数)
</pre>

<p>ある数 <code><var>x</var></code> と <code>0</code> のビット排他的論理和は <code><var>x</var></code> になります。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_bitwise_XOR" name="Using_bitwise_XOR">ビット排他的論理和の使用</h3>

<pre class="brush: js notranslate">// 9  (00000000000000000000000000001001)
// 14 (00000000000000000000000000001110)

14 ^ 9;
// 7  (00000000000000000000000000000111)</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#prod-BitwiseXORExpression', 'Bitwise XOR expression')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.bitwise_xor")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Bitwise">ビット演算子ガイド</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment">ビット排他的論理和代入演算子</a></li>
</ul>
