---
title: バイナリデータの送信と受信
slug: Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data
---

## JavaScript 型付き配列を使ったバイナリデータの受信

XMLHttpRequest オブジェクトの `responseType` プロパティで、サーバーに期待する応答の種類を変更することができます。設定可能な値は空文字列 (既定), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, `"text"` です。 `response` プロパティにはエンティティの本体が `responseType` に応じて `ArrayBuffer`, `Blob`, `Document`, `JSON` または文字列で格納されます。要求が不完全であったり成功しなかった場合は `null` になります。

このサンプルでは画像をバイナリファイルとして読み込み、生のバイト列から８ビット符号なし整数値の配列を作成します。なお、これは画像をデコードしてピクセルを読み取ることは行いません。そのためには [png decoding library](https://github.com/devongovett/png.js/) が必要になるでしょう。

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "arraybuffer";

oReq.onload = function (oEvent) {
  var arrayBuffer = oReq.response; // メモ: oReq.responseText ではない
  if (arrayBuffer) {
    var byteArray = new Uint8Array(arrayBuffer);
    for (var i = 0; i < byteArray.byteLength; i++) {
      // do something with each byte in the array
    }
  }
};

oReq.send(null);
```

上記の方法の代わりに {{domxref("Blob")}} インタフェースを利用して arraybuffer データから直接 `Blob` を構築します｡

```js
var oReq = new XMLHttpRequest();
oReq.open("GET", "/myfile.png", true);
oReq.responseType = "blob";

oReq.onload = function(oEvent) {
  var blob = oReq.response;
  // ...
};

oReq.send();
```

## 古いブラウザーでのバイナリデータの受信

下に示す `load_binary_resource()` 関数は、指定した URL からロードしたバイナリデータを関数の呼び元に返します。

```js
function load_binary_resource(url) {
  var req = new XMLHttpRequest();
  req.open('GET', url, false);
  //XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType('text\/plain; charset=x-user-defined');
  req.send(null);
  if (req.status != 200) return '';
  return req.responseText;
}
```

マジックは５行目で、 MIME タイプを上書きしてブラウザーに強制的に、ユーザー定義の文字セットを使用したプレインテキストとして扱わせます。これにより、ブラウザーはこれを解釈せず、未処理のままバイト列を通します。

```js
var filestream = load_binary_resource(url);
var abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

上記のサンプルでは、ロードしたバイナリデータ内のオフセット `x` のバイトを取得します。 `x` の有効範囲は 0 から `filestream.length-1` です。

詳細な説明は [downloading binary streams with XMLHttpRequest](http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) を見て下さい。また [downloading files](/ja/docs/Code_snippets/Downloading_Files) も見て下さい。

## バイナリデータの送信

XMLHttpRequest の `send` メソッドが拡張され、 [`ArrayBuffer`](/ja/docs/JavaScript_typed_arrays/ArrayBuffer), {{domxref("Blob")}}, または {{domxref("File")}} オブジェクトを受け付ける事でバイナリデータの送信が容易になりました.

続くサンプルはその場で作ったテキストファイルを `POST` メソッドで "file" をサーバーに送信します。このサンプルはプレインテキストを使っていますが、代わりにデータがバイナリファイルだとイメージする事も出来ます。

```js
var oReq = new XMLHttpRequest();
oReq.open("POST", url, true);
oReq.onload = function (oEvent) {
  // Uploaded.
};

var blob = new Blob(['abc123'], {type: 'text/plain'});

oReq.send(blob);
```

## バイナリデータとして型付き配列を送信

同等にバイナリデータとして JavaScript の型付き配列を送信することもできます。

```js
var myArray = new ArrayBuffer(512);
var longInt8View = new Uint8Array(myArray);

// いくらかのデータを作成
for (var i=0; i< longInt8View.length; i++) {
  longInt8View[i] = i % 256;
}

var xhr = new XMLHttpRequest;
xhr.open("POST", url, false);
xhr.send(myArray);
```

これは 8 ビット整数の 512 バイトの配列を構築して送信します。勿論、好きな任意のバイナリデータで使えます。

> **メモ:** XMLHttpRequest を使った [`ArrayBuffer`](/ja/docs/JavaScript_typed_arrays/ArrayBuffer) オブジェクトの送信サポートは Gecko 9.0 {{geckoRelease("9.0")}}で追加されました。**他のブラウザーのサポート情報をここに追記して下さい。**

## フォーム送信とファイルアップロード

[この節](/ja/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Submitting_forms_and_uploading_files)をお読み下さい。

## Firefox 独自のサンプル

このサンプルでは非同期にバイナリコンテンツを送信するのに `POST` メソッドと Firefox にある非標準の `sendAsBinary()` を使います。

```js
var req = new XMLHttpRequest();
req.open("POST", url, true);
// set headers and mime-type appropriately
req.setRequestHeader("Content-Length", 741);
req.sendAsBinary(aBody);
```

4 行目で Content-Length ヘッダに 741 をセットするのは、データが 741 バイト長である事を示します。送信データの実際のサイズに応じてこの値を変更する必要があります。

５行目では `sendAsBinary()` メソッドを使ってリクエストをはじめます。

> **メモ:** この `sendAsBinary` メソッドは標準外であり、 Gecko 31 {{ geckoRelease(31) }} で非推奨扱いになって、まもなく削除されるでしょう。上で説明したように、標準の `send(Blob data)` メソッドを使用することができます。

また、`nsIFileInputStream` のインスタンスの [`send()`](</ja/docs/DOM/XMLHttpRequest#send()> "XMLHttpRequest#send()") を通す事でバイナリコンテンツを送信できます。この場合は、あなた自身が `Content-Length` ヘッダセットしてはならず、この情報はストリームから自動的に取得されます。

```js
// ファイルからストリームを作成する。
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
```

{{APIRef("XMLHttpRequest")}}
