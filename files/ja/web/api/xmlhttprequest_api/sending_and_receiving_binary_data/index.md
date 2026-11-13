---
title: バイナリーデータの送受信
slug: Web/API/XMLHttpRequest_API/Sending_and_Receiving_Binary_Data
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("XMLHttpRequest API")}}

## バイナリーデータの受信

XMLHttpRequest オブジェクトの `responseType` プロパティで、サーバーに期待するレスポンスの種類を変更することができます。設定可能な値は空文字列 (既定), `"arraybuffer"`, `"blob"`, `"document"`, `"json"`, `"text"` です。 `response` プロパティにはエンティティの本体が `responseType` に応じて `ArrayBuffer`, `Blob`, `Document`, `JSON` または文字列で格納されます。リクエストが不完全であったり成功しなかった場合は `null` になります。

このサンプルでは画像をバイナリーファイルとして読み込み、生のバイト列から 8 ビット符号なし整数値の配列を作成します。なお、これは画像をデコードしてピクセルを読み取ることは行いません。これらは {{domxref("ImageDecoder")}} インターフェイスで実現できます。

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
  // …
};

req.send();
```

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
