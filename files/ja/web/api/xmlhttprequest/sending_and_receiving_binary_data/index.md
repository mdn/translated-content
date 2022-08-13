---
title: バイナリデータの送信と受信
slug: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
tags:
  - AJAX
  - FileReader
  - MIME
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
---
<h2 id="Receiving_binary_data_using_JavaScript_typed_arrays" name="Receiving_binary_data_using_JavaScript_typed_arrays">JavaScript 型付き配列を使ったバイナリデータの受信</h2>

<p>XMLHttpRequest オブジェクトの <code>responseType</code> プロパティで、サーバーに期待する応答の種類を変更することができます。設定可能な値は空文字列 (既定), <code>"arraybuffer"</code>, <code>"blob"</code>, <code>"document"</code>, <code>"json"</code>, <code>"text"</code> です。 <code>response</code> プロパティにはエンティティの本体が <code>responseType</code> に応じて <code>ArrayBuffer</code>, <code>Blob</code>, <code>Document</code>, <code>JSON</code> または文字列で格納されます。要求が不完全であったり成功しなかった場合は <code>null</code> になります。</p>

<p>このサンプルでは画像をバイナリファイルとして読み込み、生のバイト列から８ビット符号なし整数値の配列を作成します。なお、これは画像をデコードしてピクセルを読み取ることは行いません。そのためには <a href="https://github.com/devongovett/png.js/">png decoding library</a> が必要になるでしょう。</p>

<pre class="brush: js">var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var arrayBuffer = oReq.response; // メモ: oReq.responseText ではない
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i &lt; byteArray.byteLength; i++) {
      // do something with each byte in the array
    }
  }
};

oReq.send(null);
</pre>

<p>上記の方法の代わりに {{domxref("Blob")}} インタフェースを利用して arraybuffer データから直接 <code>Blob</code> を構築します｡</p>

<pre class="brush: js">var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function(oEvent) {
  var blob = oReq.response;
  // ...
};

oReq.send();</pre>

<h2 id="Receiving_binary_data_in_older_browsers" name="Receiving_binary_data_in_older_browsers">古いブラウザーでのバイナリデータの受信</h2>

<p>下に示す <code>load_binary_resource()</code> 関数は、指定した URL からロードしたバイナリデータを関数の呼び元に返します。</p>

<pre class="brush: js">function load_binary_resource(url) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType('text\/plain; charset=x-user-defined');
  req.send(null);
  if (req.status != 200) return '';
  return req.responseText;
}
</pre>

<p>マジックは５行目で、 MIME タイプを上書きしてブラウザーに強制的に、ユーザー定義の文字セットを使用したプレインテキストとして扱わせます。これにより、ブラウザーはこれを解釈せず、未処理のままバイト列を通します。</p>

<pre class="brush: js">var filestream = load_binary_resource(url);
var abyte = filestream.charCodeAt(x) &amp; 0xff; // throw away high-order byte (f7)
</pre>

<p>上記のサンプルでは、ロードしたバイナリデータ内のオフセット <code>x</code> のバイトを取得します。 <code>x</code> の有効範囲は 0 から <code>filestream.length-1</code> です。</p>

<p>詳細な説明は <a href="http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html">downloading binary streams with XMLHttpRequest</a> を見て下さい。また <a href="/ja/docs/Code_snippets/Downloading_Files" title="Code_snippets/Downloading_Files">downloading files</a> も見て下さい。</p>

<h2 id="Sending_binary_data" name="Sending_binary_data">バイナリデータの送信</h2>

<p>XMLHttpRequest の <code>send</code> メソッドが拡張され、 <a href="/ja/docs/JavaScript_typed_arrays/ArrayBuffer" title="ArrayBuffer"><code>ArrayBuffer</code></a>, {{domxref("Blob")}}, または {{domxref("File")}} オブジェクトを受け付ける事でバイナリデータの送信が容易になりました.</p>

<p>続くサンプルはその場で作ったテキストファイルを <code>POST</code> メソッドで "file" をサーバーに送信します。このサンプルはプレインテキストを使っていますが、代わりにデータがバイナリファイルだとイメージする事も出来ます。</p>

<pre class="brush: js">var oReq = new XMLHttpRequest();
oReq.open("POST", url, true);
oReq.onload = function (oEvent) {
  // Uploaded.
};

var blob = new Blob(['abc123'], {type: 'text/plain'});

oReq.send(blob);
</pre>

<h2 id="Sending_typed_arrays_as_binary_data" name="Sending_typed_arrays_as_binary_data">バイナリデータとして型付き配列を送信</h2>

<p>同等にバイナリデータとして JavaScript の型付き配列を送信することもできます。</p>

<pre class="brush: js">var myArray = new ArrayBuffer(512);
var longInt8View = new Uint8Array(myArray);

// いくらかのデータを作成
for (var i=0; i&lt; longInt8View.length; i++) {
  longInt8View[i] = i % 256;
}

var xhr = new XMLHttpRequest;
xhr.open("POST", url, false);
xhr.send(myArray);
</pre>

<p>これは 8ビット整数の 512 バイトの配列を構築して送信します。勿論、好きな任意のバイナリデータで使えます。</p>

<div class="note"><strong>メモ:</strong> XMLHttpRequest を使った <a href="/ja/docs/JavaScript_typed_arrays/ArrayBuffer" title="ArrayBuffer"><code>ArrayBuffer</code></a> オブジェクトの送信サポートは Gecko 9.0 {{geckoRelease("9.0")}}で追加されました。<strong>他のブラウザーのサポート情報をここに追記して下さい。</strong></div>

<h2 id="Submitting_forms_and_uploading_files" name="Submitting_forms_and_uploading_files">フォーム送信とファイルアップロード</h2>

<p><a href="/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files" title="DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files">この節</a>をお読み下さい。</p>

<h2 id="Firefox-specific_examples" name="Firefox-specific_examples">Firefox 独自のサンプル</h2>

<p>このサンプルでは非同期にバイナリコンテンツを送信するのに <code>POST</code> メソッドと Firefox にある非標準の <code>sendAsBinary()</code> を使います。</p>

<pre class="brush: js">var req = new XMLHttpRequest();
req.open("POST", url, true);
// set headers and mime-type appropriately
req.setRequestHeader("Content-Length", 741);
req.sendAsBinary(aBody);
</pre>

<p>4行目で Content-Length ヘッダに 741 をセットするのは、データが 741 バイト長である事を示します。送信データの実際のサイズに応じてこの値を変更する必要があります。</p>

<p>５行目では <code>sendAsBinary()</code> メソッドを使ってリクエストをはじめます。</p>

<div class="note"><strong>メモ:</strong> この <code>sendAsBinary</code> メソッドは標準外であり、 Gecko 31 {{ geckoRelease(31) }} で非推奨扱いになって、まもなく削除されるでしょう。上で説明したように、標準の <code>send(Blob data)</code> メソッドを使用することができます。</div>

<p>また、<code>nsIFileInputStream</code> のインスタンスの <a href="/ja/docs/DOM/XMLHttpRequest#send()" title="XMLHttpRequest#send()"><code>send()</code></a> を通す事でバイナリコンテンツを送信できます。この場合は、あなた自身が <code>Content-Length</code> ヘッダセットしてはならず、この情報はストリームから自動的に取得されます。</p>

<pre class="brush: js">// ファイルからストリームを作成する。
var stream = Components.classes["@mozilla.org/network/file-input-stream;1"]
                       .createInstance(Components.interfaces.nsIFileInputStream);
stream.init(file, 0x04 | 0x08, 0644, 0x04); // file is an nsIFile instance

// ファイルの MIME タイプを特定しようとする
var mimeType = "text\/plain";
try {
  var mimeService = Components.classes["@mozilla.org/mime;1"]
          .getService(Components.interfaces.nsIMIMEService);
  mimeType = mimeService.getTypeFromFile(file); // file is an nsIFile instance
}
catch (oEvent) { /* eat it; just use text/plain */ }

// 送信
var req = Components.classes["@mozilla.org/xmlextras/xmlhttprequest;1"]
                    .createInstance(Components.interfaces.nsIXMLHttpRequest);
req.open('PUT', url, false); /* synchronous! */
req.setRequestHeader('Content-Type', mimeType);
req.send(stream);
</pre>

<div>{{APIRef("XMLHttpRequest")}}</div>
