---
title: File.File()
slug: Web/API/File/File
tags:
  - API
  - File
  - File API
  - Reference
  - コンストラクター
translation_of: Web/API/File/File
---
<div>{{APIRef("File")}}</div>

<p><code><strong>File()</strong></code> コンストラクターは新しい {{domxref("File")}} オブジェクトのインスタンスを生成します。</p>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre class="syntaxbox notranslate">File(bits, name [, options]);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><code>bits</code></dt>
 <dd>{{jsxref("Array")}}、{{domxref("ArrayBuffer")}}、{{domxref("ArrayBufferView")}}、{{domxref("Blob")}}、{{domxref("USVString")}} の {{jsxref("Array")}} オブジェクト、またはそれらをあわせたものを {{domxref("File")}} 内に格納します。<code>USVString</code> オブジェクトは UTF-8 でエンコードされます。</dd>
 <dt><code>name</code></dt>
 <dd>ファイル名またはファイルへのパスを表す {{domxref("USVString")}}。</dd>
 <dt><code>options</code> {{optional_inline}}</dt>
 <dd>ファイルのオプション属性を含むオプションオブジェクト。利用可能なオプションは以下の通りです。
 <ul>
  <li><code>type</code>: ファイルの中に入るコンテンツの MIME タイプを表す {{domxref("DOMString")}} です。既定値は <code>""</code> です</li>
  <li><code>lastModified</code>: UNIX 時刻方式のミリ秒単位で、ファイルが最後に更新された時刻を表す数値です。既定値は {{jsxref("Date.now()")}} です。</li>
 </ul>
 </dd>
</dl>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js notranslate">var file = new File(["foo"], "foo.txt", {
  type: "text/plain",
});</pre>

<h2 id="Specifications" name="Specifications">仕様</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('File API')}}</td>
   <td>{{Spec2('File API')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザの対応</h2>

<p>{{Compat("api.File.File")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("FileReader")}}</li>
 <li>{{domxref("Blob")}}</li>
</ul>
