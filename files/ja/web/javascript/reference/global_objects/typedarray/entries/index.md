---
title: TypedArray.prototype.entries()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
tags:
  - ECMAScript 2015
  - Iterator
  - JavaScript
  - Method
  - Prototype
  - Reference
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/entries
---
<div>{{JSRef}}</div>

<p><strong><code>entries()</code></strong> メソッドは、配列内の各インデックスのキーと値のペアを含む新しい配列イテレーターオブジェクトを返します。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-entries.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>arr</var>.entries()</pre>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい配列イテレーターオブジェクトです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Iteration_using_for...of_loop" name="Iteration_using_for...of_loop">for...of ループを使用した反復</h3>

<pre class="brush: js notranslate">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArray = arr.entries();
// your browser must support for..of loop
// and let-scoped variables in for loops
for (let n of eArray) {
  console.log(n);
}
</pre>

<h3 id="Alternative_iteration" name="Alternative_iteration">代替の反復</h3>

<pre class="brush: js notranslate">var arr = new Uint8Array([10, 20, 30, 40, 50]);
var eArr = arr.entries();
console.log(eArr.next().value); // [0, 10]
console.log(eArr.next().value); // [1, 20]
console.log(eArr.next().value); // [2, 30]
console.log(eArr.next().value); // [3, 40]
console.log(eArr.next().value); // [4, 50]
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
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.entries', '%TypedArray%.prototype.entries()')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.entries")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript の型付き配列</a></li>
 <li>{{jsxref("TypedArray")}}</li>
 <li>{{jsxref("TypedArray.prototype.keys()")}}</li>
 <li>{{jsxref("TypedArray.prototype.values()")}}</li>
 <li>{{jsxref("TypedArray.prototype.@@iterator()", "TypedArray.prototype[@@iterator]()")}}</li>
</ul>
