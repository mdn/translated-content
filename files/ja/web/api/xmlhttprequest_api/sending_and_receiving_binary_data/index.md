---
title: バイナリーデータの送信と受信
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 0a726c0a04ab286873ad91b5ddee478dd938832d
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

XMLHttpRequest オブジェクトの `responseType` プロパティで、サーバーに期待する応答の種類を変更することができます。設定可能な値は空文字列 (既定), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, `"text"` です。 `response` プロパティにはエンティティの本体が `responseType` に応じて `ArrayBuffer`, `Blob`, `Document`, `JSON` または文字列で格納されます。要求が不完全であったり成功しなかった場合は `null` になります。

このサンプルでは画像をバイナリーファイルとして読み込み、生のバイト列から 8 ビット符号なし整数値の配列を作成します。なお、これは画像をデコードしてピクセルを読み取ることは行いません。そのためには [png デコードライブラリー](https://github.com/foliojs/png.js)が必要になるでしょう。

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "arraybuffer";

req.onload = (event) => {
  const arrayBuffer = req.response; // Note: not req.responseText
  if (arrayBuffer) {
    const byteArray = new Uint8Array(arrayBuffer);
    byteArray.forEach((element, index) => {
      // do something with each byte in the array
    });
  }
};

req.send(null);
```

`responseType` プロパティに `"blob"` という文字列を設定すると、バイナリーファイルを {{domxref("Blob")}} として読み取ることもできます。

```js
const req = new XMLHttpRequest();
req.open("GET", "/myfile.png", true);
req.responseType = "blob";

req.onload = (event) => {
  const blob = req.response;
  // ...
};

req.send();
```

## 古いブラウザーでのバイナリーデータの受信

下に示す `loadBinaryResource()` 関数は、指定した URL からロードしたバイナリーデータを関数の呼び元に返します。

```js
function loadBinaryResource(url) {
  const req = new XMLHttpRequest();
  req.open("GET", url, false);

  // XHR binary charset opt by Marcus Granado 2006 [http://mgran.blogspot.com]
  req.overrideMimeType("text/plain; charset=x-user-defined");
  req.send(null);
  return req.status === 200 ? req.responseText : "";
}
```

マジックは 5 行目で、 MIME タイプを上書きしてブラウザーに強制的に、ユーザー定義の文字セットを使用したプレインテキストとして扱わせます。これにより、ブラウザーはこれを解釈せず、未処理のままバイト列を通します。

```js
const filestream = loadBinaryResource(url);
const abyte = filestream.charCodeAt(x) & 0xff; // throw away high-order byte (f7)
```

上記のサンプルでは、ロードしたバイナリーデータ内のオフセット `x` のバイトを取得します。 `x` の有効範囲は 0 から `filestream.length-1` です。

詳細な説明は [downloading binary streams with XMLHttpRequest](https://web.archive.org/web/20071103070418/http://mgran.blogspot.com/2006/08/downloading-binary-streams-with.html) を見て下さい。

## バイナリーデータの送信

XMLHttpRequest の `send` メソッドが拡張され、 [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)、{{domxref("Blob")}}、{{domxref("File")}} オブジェクトを受け付けることでバイナリーデータの送信が容易になりました.

続くサンプルはその場で作ったテキストファイルを `POST` メソッドで "file" をサーバーに送信します。このサンプルはプレインテキストを使っていますが、代わりにデータがバイナリーファイルだとイメージする事も出来ます。

```js
const req = new XMLHttpRequest();
req.open("POST", url, true);
req.onload = (event) => {
  // Uploaded
};

const blob = new Blob(["abc123"], { type: "text/plain" });

req.send(blob);
```

## バイナリーデータとして型付き配列を送信

同等にバイナリーデータとして JavaScript の型付き配列を送信することもできます。

```js
// Create a new array with fake data (Consecutive numbers (0 - 255), looping back to 0)
const array = new Uint8Array(512).map((v, i) => i);

const xhr = new XMLHttpRequest();
xhr.open("POST", url, false);
xhr.send(array);
```

これは 8 ビット整数の 512 バイトの配列を構築して送信します。勿論、好きな任意のバイナリーデータで使えます。

## フォーム送信とファイルアップロード

[`FormData`](/ja/docs/Web/API/FormData) を参照してください。
