---
title: SharedArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
tags:
  - JavaScript
  - Method
  - Prototype
  - Shared Memory
  - SharedArrayBuffer
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer/slice
---
<div>{{JSRef}}</div>

<p><strong><code>SharedArrayBuffer.prototype.slice()</code></strong> メソッドは、新しい {{jsxref("SharedArrayBuffer")}} を生成し、その内容にこの <code>SharedArrayBuffer</code> のバイトを先頭位置 (含む) から末尾位置 (含まない) までをコピーして返します。先頭または末尾が負の値であった場合は、配列の先頭からではなく、末尾からのインデックスになります。このメソッドは {{jsxref("Array.prototype.slice()")}} と同じアルゴリズムです。</p>

<div>{{EmbedInteractiveExample("pages/js/sharedarraybuffer-slice.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>sab</var>.slice()
<var>sab</var>.slice(<var>begin</var>)
<var>sab</var>.slice(<var>begin</var>, <var>end</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>begin</var></code> {{optional_inline}}</dt>
 <dd>取り出す先頭位置を表す 0 から始まるインデックスです。</dd>
 <dd>負のインデックスを使用して、配列の末尾からのオフセットを示すことが可能です。 <code>slice(-2)</code> は並びの最後の2つの要素を取り出します。</dd>
 <dd>If <code><var>begin</var></code> が undefined であった場合は、 <code>slice</code> はインデックス <code>0</code> から取り出し始めます。</dd>
 <dt><code><var>end</var></code> {{optional_inline}}</dt>
 <dd>0 から始まるインデックスで、取り出す範囲の末尾の<em>前</em>を示します。 <code>slice</code> はここまでを取り出しますが、 <code><var>end</var></code> は含めません。</dd>
 <dd>例えば、 <code>slice(1,4)</code> は2番目から4番目までの要素を取り出します (添字が 1, 2, 3 の要素)。</dd>
 <dd>負のインデックスを使用して、配列の末尾からのオフセットを示すことが可能です。 <code>slice(2,-1)</code> は3番目から、並びの最後から2番目までの要素を取り出します。</dd>
 <dd><code><var>end</var></code> が省略されると、 <code>slice</code> は並びの最後までの範囲を取り出します。 (<code>sab.byteLength</code>).</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>取り出した要素をが入った新しい {{jsxref("SharedArrayBuffer")}} です。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_slice" name="Using_slice">slice() の使用</h3>

<pre class="brush:js notranslate">var sab = new SharedArrayBuffer(1024);
sab.slice();    // SharedArrayBuffer { byteLength: 1024 }
sab.slice(2);   // SharedArrayBuffer { byteLength: 1022 }
sab.slice(-2);  // SharedArrayBuffer { byteLength: 2 }
sab.slice(0, 1); // SharedArrayBuffer { byteLength: 1 }
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-sharedarraybuffer.prototype.slice', 'SharedArrayBuffer.prototype.slice')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.SharedArrayBuffer.slice")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("SharedArrayBuffer")}}</li>
 <li>{{jsxref("Array.prototype.slice()")}}</li>
</ul>
