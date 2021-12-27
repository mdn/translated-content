---
title: File.getAsText()
slug: Web/API/File/getAsText
tags:
  - API
  - File API
  - Reference
  - ファイル
  - メソッド
  - リファレンス
  - 廃止
  - 非標準
translation_of: Web/API/File/getAsText
---
<p>{{APIRef("File API") }}{{non-standard_header}}</p>

<p>{{obsolete_header(7.0)}}</p>

<h2 id="Summary" name="Summary">概要</h2>

<p><code>getAsText</code> メソッドは、テキストとして解釈されるファイルのデータを指定されたエンコーディングを使用して提供します。</p>

<div class="note">
<p><strong>メモ:</strong> このメソッドは廃止されています。代わりに {{domxref("FileReader")}} の {{domxref("FileReader.readAsText()","readAsText()")}} メソッドを使用してください。</p>
</div>

<h2 id="Syntax" name="Syntax">構文</h2>

<pre>var <var>str</var> = <var>instanceOfFile</var>.getAsText(<var>encoding</var>);</pre>

<h3 id="Parameters" name="Parameters">引数</h3>

<dl>
 <dt><var>encoding</var></dt>
 <dd>返されるデータに使用するエンコーディングを示す文字列。この文字列が空の場合は、 UTF-8 が使用されます。</dd>
</dl>

<h3 id="Returns" name="Returns">返値</h3>

<p>指定された <code>encoding</code> のテキストとして解釈されるファイルのデータを含む文字列。</p>

<h2 id="Example" name="Example">例</h2>

<pre class="brush: js">// fileInput is a HTMLInputElement: &lt;input type="file" id="myfileinput" multiple&gt;
var fileInput = document.getElementById("myfileinput");

// files is a FileList object (similar to NodeList)
var files = fileInput.files;

// object for allowed media types
var accept = {
  binary : ["image/png", "image/jpeg"],
  text   : ["text/plain", "text/css", "application/xml", "text/html"]
};

var file;

for (var i = 0; i &lt; files.length; i++) {
  file = files[i];

  // if file type could be detected
  if (file !== null) {
    if (accept.text.indexOf(file.mediaType) &gt; -1) {
      // file is of type text, which we accept
      // make sure it's encoded as utf-8
      var data = file.getAsText("utf-8");
      // modify data with string methods

    } else if (accept.binary.indexOf(file.mediaType) &gt; -1) {
      // binary
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
