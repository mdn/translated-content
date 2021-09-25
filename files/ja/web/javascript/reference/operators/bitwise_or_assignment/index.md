---
title: ビット論理和代入 (|=)
slug: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
tags:
  - 代入演算子
  - Deprecated
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
  - 代入演算子
  - 演算子
translation_of: Web/JavaScript/Reference/Operators/Bitwise_OR_assignment
---
{{jsSidebar("Operators")}}

ビット論理和代入演算子 (`|=`) は、両方のオペランドの二進表現を使用し、これらにビット単位の OR 演算を行って、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-or-assignment.html")}}

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><strong>演算子:</strong> x |= y
<strong>意味:</strong>   x  = x | y</pre>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_bitwise_OR_assignment" name="Using_bitwise_OR_assignment">ビット論理和代入の使用</h3>

<pre class="brush: js notranslate">let a = 5;
a |= 2; // 7
// 5: 00000000000000000000000000000101
// 2: 00000000000000000000000000000010
// -----------------------------------
// 7: 00000000000000000000000000000111</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

{{Compat("javascript.operators.bitwise_or_assignment")}}

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment">ビット演算子ガイド</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_OR">ビット論理和演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment">論理和代入 (`||=`)</a></li>
</ul>
