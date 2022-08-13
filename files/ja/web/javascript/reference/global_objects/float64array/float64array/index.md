---
title: Float64Array() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
tags:
  - Constructor
  - JavaScript
  - Reference
  - TypedArrays
  - コンストラクター
  - 型付き配列
translation_of: Web/JavaScript/Reference/Global_Objects/Float64Array/Float64Array
---
<div>{{JSRef}}</div>

<p><strong><code>Float64Array()</code></strong> は型付き配列のコンストラクターで、新しい {{jsxref("Float64Array")}} オブジェクト、すなわち64ビット浮動小数点数 (C 言語の <code>double</code> データ型に相当) の配列をプラットフォームのバイトオーダーで生成します。バイトオーダーを制御する必要がある場合は、代わりに {{jsxref("DataView")}} を使用してください。生成後は、オブジェクトのメソッドや、標準の配列の添字構文 (すなわち角括弧表記) を用いて配列の要素を参照することができます。</p>

<h2 id="Constructors" name="Constructors">構文</h2>

<pre class="syntaxbox">new Float64Array(); // new in ES2017
new Float64Array(<var>length</var>);
new Float64Array(<var>typedArray</var>);
new Float64Array(<var>object</var>);
new Float64Array(<var>buffer</var> [, <var>byteOffset</var> [, <var>length</var>]]);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>length</var></code></dt>
 <dd><code><var>length</var></code> 引数付きで呼び出された場合、 <code><var>length</var></code> を <em><code>BYTES_PER_ELEMENT</code> バイトで掛けた大きさ</em>で、内部の配列バッファーがメモリ内に生成され、内容がゼロになります。</dd>
 <dt><code><var>typedArray</var></code></dt>
 <dd><code><var>typedArray</var></code> 引数は任意の型付き配列 (<code>Int32Array</code> など) で、 <code><var>typedArray</var></code> を付けて呼び出された場合、その内容が新しい型付き配列に複写されます。 <code><var>typedArray</var></code> に含まれるそれぞれの値は、新しい配列にコピーされる前に、このコンストラクターに対応する型に変換されます。新しい型付き配列の長さは、 <code><var>typedArray</var></code> 引数の長さと同じになります。</dd>
 <dt><code><var>object</var></code></dt>
 <dd><code><var>object</var></code> 引数付きで呼び出された場合、新しい型付き配列は <code><var>TypedArray</var>.from()</code> メソッドのようにして生成されます。</dd>
 <dt><code><var>buffer</var></code>, <code><var>byteOffset</var></code>, <code><var>length</var></code></dt>
 <dd><code><var>buffer</var></code> 引数と、任意で <code><var>byteOffset</var></code> および <code><var>length</var></code> 引数をつけて呼び出された場合、新しい型付き配列のビューが作成され、そのビューが指定された {{jsxref("ArrayBuffer")}} となります。 <code><var>byteOffset</var></code> および <code><var>length</var></code> 引数は、型付き配列のビューで公開するメモリの範囲を指定します。両方が省略された場合は、 <code><var>buffer</var></code> 全体がビューとなり、 <code><var>length</var></code> のみが省略された場合は、 <code><var>buffer</var></code> の残りがビューとなります。</dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Different_ways_to_create_a_Float64Array" name="Different_ways_to_create_a_Float64Array">Float64Array を生成するための様々な方法</h3>

<pre class="brush: js">// From a length
var float64 = new Float64Array(2);
float64[0] = 42;
console.log(float64[0]); // 42
console.log(float64.length); // 2
console.log(float64.BYTES_PER_ELEMENT); // 8

// From an array
var arr = new Float64Array([21,31]);
console.log(arr[1]); // 31

// From another TypedArray
var x = new Float64Array([21, 31]);
var y = new Float64Array(x);
console.log(y[0]); // 21

// From an ArrayBuffer
var buffer = new ArrayBuffer(32);
var z = new Float64Array(buffer, 0, 4);

// From an iterable
var iterable = function*(){ yield* [1,2,3]; }();
var float64 = new Float64Array(iterable);
// Float64Array[1, 2, 3]
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
   <td>{{SpecName('ESDraft', '#sec-typedarray-constructors', 'TypedArray constructors')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.Float64Array.Float64Array")}}</p>

<h3 id="Compatibility_notes" name="Compatibility_notes">互換性ノート</h3>

<p>ECMAScript 2015 から、 <code>Float64Array</code> コンストラクターは {{jsxref("Operators/new", "new")}} 演算子を使用して構築する必要があります。 <code>new</code> 演算子を使用せずに <code>Float64Array</code> コンストラクターを呼び出した場合、 {{jsxref("TypeError")}} が発生するようになりました。</p>

<pre class="brush: js example-bad">var dv = Float64Array([1, 2, 3]);
// TypeError: calling a builtin Float64Array constructor
// without new is forbidden</pre>

<pre class="brush: js example-good">var dv = new Float64Array([1, 2, 3]);</pre>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays" title="en/JavaScript typed arrays">JavaScript typed arrays</a></li>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
</ul>
