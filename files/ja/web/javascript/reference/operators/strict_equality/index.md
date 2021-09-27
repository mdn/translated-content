---
title: 厳密等価 (===)
slug: Web/JavaScript/Reference/Operators/Strict_equality
tags:
  - JavaScript
  - Language feature
  - Operator
  - Reference
  - 演算子
  - 言語機能
translation_of: Web/JavaScript/Reference/Operators/Strict_equality
---
<div>{{jsSidebar("Operators")}}</div>

<p>厳密等価演算子 (<code>===</code>) は、二つのオペランドが等しいことを検査し、論理値で結果を返します <a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価</a>演算子とは異なり、厳密等価演算子はオペランドの型が異なる場合、常に異なるものと判断します。</p>

<div>{{EmbedInteractiveExample("pages/js/expressions-strict-equality.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">x === y</pre>

<h2 id="Description" name="Description">解説</h2>

<p>厳密等価演算子 (<code>===</code> および <code>!==</code>) は、<a class="external external-icon" href="http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.6" rel="noopener">厳密等価比較アルゴリズム</a>を使用して二つのオペランドを比較します。</p>

<ul>
 <li>オペランドの型が異なる場合は、 <code>false</code> を返します。</li>
 <li>両方のオペランドがオブジェクトである場合、同じオブジェクトを指している場合に限り <code>true</code> を返します。</li>
 <li>両方のオペランドが <code>null</code> または両方のオペランドが <code>undefined</code> であった場合は <code>true</code> を返します。</li>
 <li>どちらかのオペランドが <code>NaN</code> であった場合は <code>false</code> を返します。</li>
 <li>それ以外の場合は、二つのオペランドの値を比較します。
  <ul>
   <li>数値型は同じ値の数値である必要があります。 <code>+0</code> と <code>-0</code> は同じ値と見なされます。</li>
   <li>文字列型は同じ文字が同じ順序で並んでいる必要があります。</li>
   <li>論理型は両方が <code>true</code> であるか両方が <code>false</code> である必要があります。</li>
  </ul>
 </li>
</ul>

<p>この演算子と<a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価</a> (<code>==</code>) 演算子の最も顕著な違いは、オペランドの型が異なる場合、 <code>==</code> 演算子は比較前に同じ型に変換しようとすることです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Comparing_operands_of_the_same_type" name="Comparing_operands_of_the_same_type">オペランドが同じ型である場合の比較</h3>

<pre class="brush: js notranslate">console.log("hello" === "hello");   // true
console.log("hello" === "hola");    // false

console.log(3 === 3);               // true
console.log(3 === 4);               // false

console.log(true === true);         // true
console.log(true === false);        // false

console.log(null === null);         // true</pre>

<h3 id="Comparing_operands_of_different_types" name="Comparing_operands_of_different_types">オペランドが異なる方である場合の比較</h3>

<pre class="brush: js notranslate">console.log("3" === 3);           // false

console.log(true === 1);          // false

console.log(null === undefined);  // false</pre>

<h3 id="オブジェクトの比較">オブジェクトの比較</h3>

<pre class="brush: js notranslate">const object1 = {
  name: "hello"
}

const object2 = {
  name: "hello"
}

console.log(object1 === object2);  // false
console.log(object1 === object1);  // true</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-equality-operators', 'Equality operators')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.operators.strict_inequality")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Equality">等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Inequality">不等価演算子</a></li>
 <li><a href="/ja/docs/Web/JavaScript/Reference/Operators/Strict_equality">厳密等価演算子</a></li>
</ul>
