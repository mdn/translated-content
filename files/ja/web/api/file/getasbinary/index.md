---
title: File.getAsBinary()
slug: Web/API/File/getAsBinary
tags:
  - API
  - File API
  - Reference
  - ファイル
  - メソッド
  - 廃止
  - 非標準
translation_of: Web/API/File/getAsBinary
---
<p>{{APIRef("File API")}}</p>

<p>{{non-standard_header}}</p>

<p>{{obsolete_header(7.0)}}</p>

<h2 id="Summary" name="Summary">概要</h2>

<p><code>getAsBinary</code> メソッドを使用すると、生のバイナリ形式でファイルのデータにアクセスできます。</p>

<div class="note">
<p><strong>メモ:</strong> このメソッドは廃止されました。代わりに{{domxref("FileReader")}} メソッドである {{domxref("FileReader.readAsArrayBuffer()","readAsArrayBuffer()")}}、もしくは {{domxref("FileReader.readAsBinaryString()","readAsBinaryString()")}}  を実行してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre>var binary = <var>instanceOfFile</var>.getAsBinary();</pre>

<h3 id="Returns" name="Returns">返値</h3>

<p>文字列です。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush:js;">// fileInput is an HTMLInputElement: &lt;input type="file" id="myfileinput" multiple&gt;
var fileInput = document.getElementById("myfileinput");

// files は NodeList と似た FileList オブジェクトへの参照
var files = fileInput.files;

// 許容するメディアタイプを記したオブジェクト
var accept = {
  binary : ["image/png", "image/jpeg"],
  text   : ["text/plain", "text/css", "application/xml", "text/html"]
};

var file;

for (var i = 0; i &lt; files.length; i++) {
  file = files[i];

  // ファイルタイプが見つからない場合の処理
  if (file !== null) {
    if (accept.binary.indexOf(file.type) &gt; -1) {
      // バイナリファイルの場合の処理
      var data = file.getAsBinary();
    } else if (accept.text.indexOf(file.type) &gt; -1) {
      // テキストファイルの場合の処理
      var data = file.getAsText();
      // String のメソッドでデータを加工する処理など…
    }
  }
}</pre>

<h2 id="Specification" name="Specification">仕様書</h2>

<p>どの仕様書にも含まれていません。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{domxref("File")}}</li>
 <li>{{domxref("FileReader")}}</li>
</ul>
