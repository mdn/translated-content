---
title: 大なりイコール (>=)
slug: Web/JavaScript/Reference/Operators/Greater_than_or_equal
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
translation_of: Web/JavaScript/Reference/Operators/Greater_than_or_equal
---
<div>{{jsSidebar("Operators")}}</div>

<p>大なりイコール演算子 (<code>&gt;=</code>) は、左辺のオペランドが右辺のオペランド以上の場合は <code>true</code> を返し、それ以外の場合は <code>false</code> を返します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-greater-than-or-equal.html")}}</div>



<h2 id="構文">構文</h2>

<pre class="syntaxbox notranslate"> x &gt;= y</pre>

<h2 id="解説">解説</h2>

<p>オペランドは、<a class="external external-icon" href="https://tc39.es/ecma262/#sec-abstract-relational-comparison" rel="noopener">抽象関係比較</a>アルゴリズムを使用して比較されます。 このアルゴリズムの概要は<a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than">小なり</a>演算子のドキュメントを参照して下さい。</p>

<h2 id="例">例</h2>

<h3 id="文字列と文字列の比較">文字列と文字列の比較</h3>

<pre class="brush: js notranslate">console.log("a" &gt;= "b");     // false
console.log("a" &gt;= "a");     // true
console.log("a" &gt;= "3");     // true
</pre>

<h3 id="文字列と数値の比較">文字列と数値の比較</h3>

<pre class="brush: js notranslate">console.log("5" &gt;= 3);       // true
console.log("3" &gt;= 3);       // true
console.log("3" &gt;= 5);       // false

console.log("hello" &gt;= 5);   // false
console.log(5 &gt;= "hello");   // false</pre>

<h3 id="数値と数値の比較">数値と数値の比較</h3>

<pre class="brush: js notranslate">console.log(5 &gt;= 3);         // true
console.log(3 &gt;= 3);         // true
console.log(3 &gt;= 5);         // false</pre>

<h3 id="数値と_BigInt_の比較">数値と BigInt の比較</h3>

<pre class="brush: js notranslate">console.log(5n &gt;= 3);        // true
console.log(3 &gt;= 3n);        // true
console.log(3 &gt;= 5n);        // false</pre>

<h3 id="ブール値、_null_、_undefined_、_NaN_の比較">ブール値、 null 、 undefined 、 NaN の比較</h3>

<pre class="brush: js notranslate">console.log(true &gt;= false);  // true
console.log(true &gt;= true);   // true
console.log(false &gt;= true);  // false

console.log(true &gt;= 0);      // true
console.log(true &gt;= 1);      // true

console.log(null &gt;= 0);      // true
console.log(1 &gt;= null);      // true

console.log(undefined &gt;= 3); // false
console.log(3 &gt;= undefined); // false

console.log(3 &gt;= NaN);       // false
console.log(NaN &gt;= 3);       // false</pre>

<h2 id="仕様">仕様</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-relational-operators', 'Relational operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="ブラウザーの互換性">ブラウザーの互換性</h2>



<p>{{Compat("javascript.operators.greater_than_or_equal")}}</p>

<h2 id="関連項目">関連項目</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Greater_than">Greater than operator</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than">Less than operator</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal">Less than or equal operator</a></li>
</ul>
