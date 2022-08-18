---
title: TypedArray.prototype.byteLength
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
tags:
  - JavaScript
  - Property
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/byteLength
---
<div>{{JSRef}}</div>

<p><strong><code>byteLength</code></strong> アクセサープロパティは、型付き配列の長さを (バイト単位で) 表します。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-bytelength.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Description" name="Description">解説</h2>

<p><code>byteLength</code> プロパティは set アクセサープロパティが <code>undefined</code> であるアクセサープロパティです。これは、このプロパティが読み取り専用であることを意味します。値は <em>TypedArray</em> が構築されたときに確立し、変更することができません。 <em>TypedArray</em> が <code>byteOffset</code> や <code>length</code> を指定していないなら、参照されている <code>ArrayBuffer</code> の <code>length</code> が返されます。 <em>TypedArray</em> は<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列オブジェクト</a>のうちの一つです。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_byteLength_property" name="Using_the_byteLength_property">byteLength プロパティの使用</h3>

<pre class="brush:js notranslate">var buffer = new ArrayBuffer(8);

var uint8 = new Uint8Array(buffer);
uint8.byteLength; // 8 (matches the byteLength of the buffer)

var uint8 = new Uint8Array(buffer, 1, 5);
uint8.byteLength; // 5 (as specified when constructing the Uint8Array)

var uint8 = new Uint8Array(buffer, 2);
uint8.byteLength; // 6 (due to the offset of the constructed Uint8Array)
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
   <td>{{SpecName('ESDraft', '#sec-get-%typedarray%.prototype.bytelength', 'TypedArray.prototype.byteLength')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.TypedArray.byteLength")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript の型付き配列</a></li>
 <li>{{jsxref("TypedArray")}}</li>
</ul>
