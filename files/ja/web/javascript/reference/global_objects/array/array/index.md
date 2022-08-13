---
title: Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Array/Array
tags:
  - Array
  - Constructor
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Array/Array
---
<div>{{JSRef}}</div>

<p><strong><code>Array()</code></strong> コンストラクターは {{jsxref("Array")}} オブジェクトを生成するために使用します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">[<var>element0</var>, <var>element1</var>, ..., <var>elementN</var>]

new Array(<var>element0</var>, <var>element1</var>[, ...[, <var>elementN</var>]])
new Array(<var>arrayLength</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>element<em>N</em></code></dt>
 <dd>JavaScript の配列は、与えられた要素で初期化されますが、 <code>Array</code> コンストラクターに単一の引数が渡され、その引数が数値であった場合は例外です (下記の arrayLength 引数を参照してください)。なお、この特殊な場合は JavaScript の配列が <code>Array</code> コンストラクターで生成されたときのみであり、ブラケット構文で配列リテラルを作成した場合は当てはまりません。</dd>
 <dt><code>arrayLength</code></dt>
 <dd><code>Array</code> コンストラクターに渡された唯一の引数が 0 から 2<sup>32</sup>-1 の間 (両端を含む) の整数であった場合は、新しい JavaScript の配列を返し、その <code>length</code> プロパティがその値になります (<strong>注:</strong> これは <code>arrayLength</code> 個の空のスロットを持つ配列であり、実際に <code>undefined</code> の値が入ったスロットではありません)。この引数がそれ以外の数値であった場合は、 {{jsxref("RangeError")}} 例外が発生します。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Array_literal_notation" name="Array_literal_notation">配列リテラル記法</h3>

<p>配列は<a href="/ja/docs/Web/JavaScript/Reference/Lexical_grammar#Array_literals">リテラル</a>記法を使用して生成することができます。</p>

<pre class="brush: js notranslate">let fruits = ['りんご', 'バナナ'];

console.log(fruits.length); // 2
console.log(fruits[0]);     // "りんご"
</pre>

<h3 id="Array_constructor_with_a_single_parameter" name="Array_constructor_with_a_single_parameter">単一の引数を持つ Array コンストラクター</h3>

<p>配列は単一の数値の引数を持つコンストラクターで生成することができます。配列は <code>length</code> プロパティにその値が設定されており、配列の要素は空スロットになります。</p>

<pre class="brush: js notranslate">let fruits = new Array(2);

console.log(fruits.length); // 2
console.log(fruits[0]);     // undefined
</pre>

<h3 id="Array_constructor_with_multiple_parameters" name="Array_constructor_with_multiple_parameters">複数の引数を持つ Array コンストラクター</h3>

<p>2つ以上の引数がコンストラクターに渡された場合、与えられた要素を持つ {{jsxref("Array")}} が生成されます。</p>

<pre class="brush: js notranslate">let fruits = new Array('りんご', 'バナナ');

console.log(fruits.length); // 2
console.log(fruits[0]);     // "りんご"
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
   <td>{{SpecName('ESDraft', '#sec-array-constructor', 'Array constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Array.Array")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array")}} クラス</li>
</ul>
