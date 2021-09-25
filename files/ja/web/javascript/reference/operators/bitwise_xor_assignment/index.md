---
title: ビット排他的論理和代入 (^=)
slug: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
tags:
  - 代入演算子
  - JavaScript
  - 言語機能
  - 演算子
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment
---
{{jsSidebar("Operators")}}

ビット排他的論理和代入演算子 (`^=`) は、両方のオペランドのバイナリ表現を使用し、それらに対してビット単位の XOR 演算を実行し、結果を変数に代入します。

{{EmbedInteractiveExample("pages/js/expressions-bitwise-xor-assignment.html")}}

<div></div>



## 構文

<pre class="syntaxbox notranslate"><strong>Operator:</strong> x ^= y
<strong>Meaning:</strong>  x  = x ^ y</pre>

## 例

<h3 id="ビット排他的論理和代入の使用">ビット排他的論理和代入の使用</h3>

<pre class="brush: js notranslate">let a = 5;      // 00000000000000000000000000000101
a ^= 3;         // 00000000000000000000000000000011

console.log(a); // 00000000000000000000000000000110
// 6

let b = 5;      // 00000000000000000000000000000101
b ^= 0;         // 00000000000000000000000000000000

console.log(b); // 00000000000000000000000000000101
// 5



</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-assignment-operators', 'Assignment operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



{{Compat("javascript.operators.bitwise_xor_assignment")}}

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators">代入演算子ガイド</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR">ビット排他的論理和演算子</a></li>
</ul>
