---
title: TypedArray.of()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/of
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/of
---
<div>{{JSRef}}</div>

<p><strong><code><var>TypedArray</var>.of()</code></strong> メソッドは、様々な数の引数をもつ新しい<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列</a>を生成します。このメソッドは {{jsxref("Array.of()")}} とほぼ同じです。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-of.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>TypedArray</var>.of(<var>element0</var>[, <var>element1</var>[, ...[, <var>elementN</var>]]])
</pre>

<p>ここで <code><var>TypedArray</var></code> は次のいずれかです。</p>

<div class="threecolumns">
<ul>
 <li>{{jsxref("Int8Array")}}</li>
 <li>{{jsxref("Uint8Array")}}</li>
 <li>{{jsxref("Uint8ClampedArray")}}</li>
 <li>{{jsxref("Int16Array")}}</li>
 <li>{{jsxref("Uint16Array")}}</li>
 <li>{{jsxref("Int32Array")}}</li>
 <li>{{jsxref("Uint32Array")}}</li>
 <li>{{jsxref("Float32Array")}}</li>
 <li>{{jsxref("Float64Array")}}</li>
 <li>{{jsxref("BigInt64Array")}}</li>
 <li>{{jsxref("BigUint64Array")}}</li>
</ul>
</div>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>element<var>N</var></var></code></dt>
 <dd>型付き配列を生成するときの構成する要素。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{jsxref("TypedArray")}} のインスタンスです。</p>

<h2 id="Description" name="Description">解説</h2>

<p>{{jsxref("Array.of()")}} と <code><var>TypedArray</var>.of()</code> との間にいくつかの微妙な違いがあります。</p>

<ul>
 <li><code><var>TypedArray</var>.of()</code> に渡された <code><var>this</var></code> の値がコンストラクターではなかった場合、 <code><var>TypedArray</var>.of()</code> で {{jsxref("TypeError")}} が発生します。これは <code>Array.of()</code> が既定で新しい {{jsxref("Array")}} を生成するためです。</li>
 <li><code><var>TypedArray</var>.of()</code> は <code>[[Put]]</code> を使用するのに対し、 <code>Array.of()</code> は <code>[[DefineProperty]]</code> を使用します。従って {{jsxref("Proxy")}} オブジェクトを使っている場合は、新しい要素を追加するときに {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}} ではなく {{jsxref("Global_Objects/Proxy/handler/set", "handler.set")}} が呼び出されます。</li>
</ul>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_of" name="Using_of">of() の使用</h3>

<pre class="brush: js notranslate">Uint8Array.of(1);            // Uint8Array [ 1 ]
Int8Array.of('1', '2', '3'); // Int8Array [ 1, 2, 3 ]
Float32Array.of(1, 2, 3);    // Float32Array [ 1, 2, 3 ]
Int16Array.of(undefined);    // Int16Array [ 0 ]
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
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.of', '%TypedArray%.of')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.of")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("TypedArray.from()")}}</li>
 <li>{{jsxref("Array.of()")}}</li>
</ul>
