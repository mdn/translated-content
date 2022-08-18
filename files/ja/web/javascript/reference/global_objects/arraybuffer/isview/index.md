---
title: ArrayBuffer.isView()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
tags:
  - ArrayBuffer
  - JavaScript
  - Method
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/isView
---
<div>{{JSRef}}</div>

<p><strong><code>ArrayBuffer.isView()</code></strong> メソッドは、渡された値が <code>ArrayBuffer</code> のビューのうちの一つ、例えば<a href="/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray">型付き配列オブジェクト</a>や {{jsxref("DataView")}} であるかどうかを判断します。</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-isview.html","shorter")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">ArrayBuffer.isView(<var>value</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>value</var></code></dt>
 <dd>チェックする値です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>渡された引数が {{jsxref("ArrayBuffer")}} のビューのうちの一つであれば <code>true</code> を、そうでなければ <code>false</code> を返します。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_isView" name="Using_isView">isView の使用</h3>

<pre class="brush: js notranslate">ArrayBuffer.isView();                    // false
ArrayBuffer.isView([]);                  // false
ArrayBuffer.isView({});                  // false
ArrayBuffer.isView(null);                // false
ArrayBuffer.isView(undefined);           // false
ArrayBuffer.isView(new ArrayBuffer(10)); // false

ArrayBuffer.isView(new Uint8Array());    // true
ArrayBuffer.isView(new Float32Array());  // true
ArrayBuffer.isView(new Int8Array(10).subarray(0, 3)); // true

const buffer = new ArrayBuffer(2);
const dv = new DataView(buffer);
ArrayBuffer.isView(dv); // true
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
   <td>{{SpecName('ESDraft', '#sec-arraybuffer.isview', 'ArrayBuffer.isView')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.isView")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/JavaScript/Typed_arrays">JavaScript の型付き配列</a></li>
</ul>
