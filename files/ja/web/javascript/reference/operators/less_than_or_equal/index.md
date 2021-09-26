---
title: 小なりイコール (<=)
slug: Web/JavaScript/Reference/Operators/Less_than_or_equal
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Less_than_or_equal
---
<div>{{jsSidebar("Operators")}}</div>

<p>小なりイコール演算子 (<code>&lt;=</code>) は、左のオペランドが右のオペランドより小さいか等しい場合に <code>true</code> を返し、それ以外の場合は <code>false</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-less-than-or-equal.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"> x &lt;= y</pre>

<h2 id="Description" name="Description">解説</h2>

<p>オペランドは<a class="external external-icon" href="https://tc39.es/ecma262/#sec-abstract-relational-comparison" rel="noopener">抽象関係比較</a>アルゴリズムを使用して比較されます。このアルゴリズムの概要は<a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than">大なり</a>演算子のドキュメントをご覧ください。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="String_to_string_comparison" name="String_to_string_comparison">文字列と文字列の比較</h3>

<pre class="brush: js notranslate">console.log("a" &lt;= "b");     // true
console.log("a" &lt;= "a");     // true
console.log("a" &lt;= "3");     // false
</pre>

<h3 id="String_to_number_comparison" name="String_to_number_comparison">文字列と数値の比較</h3>

<pre class="brush: js notranslate">console.log("5" &lt;= 3);       // false
console.log("3" &lt;= 3);       // true
console.log("3" &lt;= 5);       // true

console.log("hello" &lt;= 5);   // false
console.log(5 &lt;= "hello");   // false</pre>

<h3 id="Number_to_Number_comparison" name="Number_to_Number_comparison">数値と数値の比較</h3>

<pre class="brush: js notranslate">console.log(5 &lt;= 3);         // false
console.log(3 &lt;= 3);         // true
console.log(3 &lt;= 5);         // true</pre>

<h3 id="Number_to_BigInt_comparison" name="Number_to_BigInt_comparison">数値と BigInt の比較</h3>

<pre class="brush: js notranslate">console.log(5n &lt;= 3);        // false
console.log(3 &lt;= 3n);        // true
console.log(3 &lt;= 5n);        // true</pre>

<h3 id="Comparing_Boolean_null_undefined_NaN" name="Comparing_Boolean_null_undefined_NaN">論理型, null, undefined, NaN の比較</h3>

<pre class="brush: js notranslate">console.log(true &lt;= false);  // false
console.log(true &lt;= true);   // true
console.log(false &lt;= true);  // true

console.log(true &lt;= 0);      // false
console.log(true &lt;= 1);      // true

console.log(null &lt;= 0);      // true
console.log(1 &lt;= null);      // false

console.log(undefined &lt;= 3); // false
console.log(3 &lt;= undefined); // false

console.log(3 &lt;= NaN);       // false
console.log(NaN &lt;= 3);       // false</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.less_than_or_equal")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than">大なり演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal">大なりイコール演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than">小なり演算子</a></li>
</ul>
