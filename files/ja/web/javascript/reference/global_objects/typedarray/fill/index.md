---
title: TypedArray.prototype.fill()
slug: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
tags:
  - ECMAScript 2015
  - JavaScript
  - Method
  - Prototype
  - TypedArray
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/TypedArray/fill
---
<div>{{JSRef}}</div>

<p><strong><code>fill()</code></strong> メソッドは、型付き配列の開始位置から終了位置までのすべての要素を固定値で埋めます。このメソッドのアルゴリズムは {{jsxref("Array.prototype.fill()")}} と同じです。ここで <em>TypedArray</em> は、<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects">型付き配列型</a>のうちの1つです。</p>

<div>{{EmbedInteractiveExample("pages/js/typedarray-fill.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>typedarray</var>.fill(<var>value</var>[, <var>start = 0</var>[, <var>end = this.length</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>型付き配列を埋める値です。</dd>
 <dt><code><var>start</var></code> {{optional_inline}}</dt>
 <dd>開始位置です。既定値は 0 です。</dd>
 <dt><code><var>end</var></code> {{optional_inline}}</dt>
 <dd>終了位置 (の次の位置) です既定値は <code>this.length</code> です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>変更された配列です。</p>

<h2 id="Description" name="Description">解説</h2>

<p>埋める区間は [<code><var>start</var></code>, <code><var>end</var></code>) です。</p>

<p><strong><code>fill()</code></strong> メソッドは <code><var>value</var></code>, <code><var>start</var></code>, <code><var>end</var></code> の3つまでの引数を取ります。 <code><var>start</var></code> と <code><var>end</var></code> の各引数は省略可能で、既定値はそれぞれ <code>0</code> と、 <code>this</code> オブジェクトの <code>length</code> です。</p>

<p><code><var>start</var></code> が負の数であった場合は、 <code>length+start</code> (<code>length</code> は配列の長さ) として扱われます。 <code><var>end</var></code> が負の数であった場合は、 <code>length+end</code> として扱われます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_fill" name="Using_fill">fill() の使用</h3>

<pre class="brush: js notranslate">new Uint8Array([1, 2, 3]).fill(4);         // Uint8Array [4, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1);      // Uint8Array [1, 4, 4]
new Uint8Array([1, 2, 3]).fill(4, 1, 2);   // Uint8Array [1, 4, 3]
new Uint8Array([1, 2, 3]).fill(4, 1, 1);   // Uint8Array [1, 2, 3]
new Uint8Array([1, 2, 3]).fill(4, -3, -2); // Uint8Array [4, 2, 3]
</pre>

<h2 id="Polyfill" name="Polyfill">ポリフィル</h2>

<p><em>TypedArray</em> という名前のグローバルオブジェクトはないため、ポリフィルの使用は「必要に応じて」の原則で行う必要があります。以下の「ポリフィル」は、 {{jsxref("Array.prototype.fill()")}} のポリフィルと同時に使用してください。</p>

<pre class="brush: js notranslate">// https://tc39.github.io/ecma262/#sec-%typedarray%.prototype.fill
if (!Uint8Array.prototype.fill) {
  Uint8Array.prototype.fill = Array.prototype.fill;
}
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
   <td>{{SpecName('ESDraft', '#sec-%typedarray%.prototype.fill', 'TypedArray.prototype.fill')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<div>
<p>{{Compat("javascript.builtins.TypedArray.fill")}}</p>
</div>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("Array.prototype.fill()")}}</li>
</ul>
