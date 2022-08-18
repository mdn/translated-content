---
title: ArrayBuffer.prototype.slice()
slug: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
tags:
  - ArrayBuffer
  - JavaScript
  - Method
  - Prototype
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/ArrayBuffer/slice
---
<div>{{JSRef}}</div>

<p><strong><code>slice()</code></strong> メソッドは新しい <code>ArrayBuffer</code> を返し、その中にこの <code>ArrayBuffer</code> の <code>begin</code> から <code>end</code> の手前までをコピーします。</p>

<div>{{EmbedInteractiveExample("pages/js/arraybuffer-slice.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力していただける場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">arraybuffer.slice(<var>begin</var>[, <var>end</var>])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>begin</var></code></dt>
 <dd>スライスの起点を表すゼロ基点のバイトインデックスです。</dd>
</dl>

<dl>
 <dt><code><var>end</var></code> {{optional_inline}}</dt>
 <dd>スライスをその前で終了するバイトインデックスです。 end が指定されなかった場合は、新しい <code>ArrayBuffer</code> は、この <code>ArrayBuffer</code> の起点から終点まですべてのバイトを含みます。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>新しい {{jsxref("ArrayBuffer")}} オブジェクト。</p>

<h2 id="Description" name="Description">解説</h2>

<p><code>slice()</code> メソッドは、 <code>end</code> 引数で指定されたバイトの手前までコピーを行います。 <code>begin</code> または <code>end</code> のどちらかが負の数の場合、開始位置とは反対に、配列の末尾からのインデックスを参照します。</p>

<p><code>begin</code> および <code>end</code> 引数で指定された範囲は、現在の配列で妥当なインデックスの範囲に丸められます。新しい <code>ArrayBuffer</code> の計算された長さが負の数であった場合、ゼロに丸められます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Copying_an_ArrayBuffer" name="Copying_an_ArrayBuffer">ArrayBuffer のコピー</h3>

<pre class="brush: js notranslate">const buf1 = new ArrayBuffer(8);
const buf2 = buf1.slice(0);
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-arraybuffer.prototype.slice', 'ArrayBuffer.prototype.slice')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.ArrayBuffer.slice")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
