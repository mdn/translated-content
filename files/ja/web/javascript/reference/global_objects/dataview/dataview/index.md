---
title: DataView() コンストラクター
slug: Web/JavaScript/Reference/Global_Objects/DataView/DataView
tags:
  - Constructor
  - DataView
  - JavaScript
  - Reference
  - TypedArrays
translation_of: Web/JavaScript/Reference/Global_Objects/DataView/DataView
---
<div>{{JSRef}}</div>

<p><strong><code>DataView()</code></strong> コンストラクターは、 {{jsxref("DataView")}} オブジェクトを生成するために使用します。</p>

<div>{{EmbedInteractiveExample("pages/js/dataview-constructor.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">new DataView(<var>buffer</var> [, <var>byteOffset</var> [, <var>byteLength</var>]])</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code><var>buffer</var></code></dt>
 <dd>既存の {{jsxref("ArrayBuffer")}} または {{jsxref("SharedArrayBuffer")}} で、新しい <code>DataView</code> オブジェクトの背景となるストレージとして使用されます。</dd>
 <dt><code><var>byteOffset</var></code> {{optional_inline}}</dt>
 <dd>新しいビューが参照するバッファーの最初のバイトまでのオフセットをバイト単位で指定します。指定されていない場合、バッファービューは最初のバイトから始まります。</dd>
 <dt><code><var>byteLength</var></code> {{optional_inline}}</dt>
 <dd>バイト配列の要素数です。指定しない場合、ビューの長さはバッファーの長さと一致します。</dd>
</dl>

<h3 id="Return_value" name="Return_value">返値</h3>

<p>指定されたデータバッファーを表す <code>DataView</code> オブジェクトです。 (これはおそらくあまり役に立たない説明でした。)</p>

<p>返されるオブジェクトは、バイトの配列バッファーの「インタープリター」と考えることができます。 - これは読み書きの際に、バッファー内に正しく収まるように数値を変換する方法を知っています。これは、整数や浮動小数点数の変換、エンディアン、その他バイナリ形式で数値を表現する際の詳細を扱うことを意味します。</p>

<h3 id="Exceptions" name="Exceptions">例外</h3>

<dl>
 <dt>{{jsxref("RangeError")}}</dt>
 <dd>
 <p><code>byteOffset</code> や <code>byteLength</code> 引数の値がバッファーの末尾を超えて広がる結果になる場合に発生します。</p>

 <p>例えば、バッファーが16バイトの長さで、 <code>byteOffset</code> が8バイト、 <code>byteLength</code> が10バイトの場合、バッファーの全長を2バイト超えるビューを展開しようとするので、このエラーが発生します。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Using_DataView" name="Using_DataView">DataView の使用</h3>

<pre class="brush: js notranslate">var buffer = new ArrayBuffer(16);
var view = new DataView(buffer, 0);

view.setInt16(1, 42);
view.getInt16(1); // 42
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
   <td>{{SpecName('ESDraft', '#sec-dataview-constructor', 'DataView constructor')}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("javascript.builtins.DataView.DataView")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{jsxref("DataView")}}</li>
</ul>
