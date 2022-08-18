---
title: DataView.prototype.getInt8()
slug: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
tags:
  - DataView
  - JavaScript
  - Method
  - Prototype
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/getInt8
---
<div>{{JSRef}}</div>

<p><strong><code>getInt8()</code></strong> メソッドは、符号付き8ビット整数 (byte) 値を {{jsxref("DataView")}} の指定されたバイト単位のオフセットの位置から読み取ります。</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-getint8.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate"><var>dataview</var>.getInt8(<var>byteOffset</var>)</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>byteOffset</var></code></dt>
 <dd>ビューの先頭からのバイト単位のオフセットで、データを読み取る位置です。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>符号付き8ビット整数。</p>

<h3 id="Errors_thrown" name="Errors_thrown">発生するエラー</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd><code>byteOffset</code> がビューの末尾を超えて読み取るように設定されている場合に発生します。</dd>
</dl>

<h2 id="Description" name="Description">解説</h2>

<p>アライメントの強制はありません。複数バイトの値はどのオフセットからも読み取ることができます。</p>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_the_getInt8_method" name="Using_the_getInt8_method">getInt8 メソッドの使用</h3>

<pre class="brush:js notranslate">var buffer = new ArrayBuffer(8);
var dataview = new DataView(buffer);
dataview.getInt8(1); // 0
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
   <td>{{SpecName('ESDraft', '#sec-dataview.prototype.getint8', 'DataView.prototype.getInt8')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.DataView.getInt8")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
 <li>{{jsxref("ArrayBuffer")}}</li>
</ul>
