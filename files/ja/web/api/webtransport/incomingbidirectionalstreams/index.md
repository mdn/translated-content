---
title: "WebTransport: incomingBidirectionalStreams プロパティ"
short-title: incomingBidirectionalStreams
slug: Web/API/WebTransport/incomingBidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`incomingBidirectionalStreams`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、サーバーが開いた 1 つ以上の双方向ストリームを表します。{{domxref("WebTransportBidirectionalStream")}} オブジェクトの {{domxref("ReadableStream")}} を返し、それぞれを使ってサーバーから信頼性のある形でデータを読み取り、サーバーへ書き戻すことができます。

「信頼性がある」とは、データの転送と順序が保証されることを意味します。この方式では {{domxref("WebTransport.datagrams", "datagrams")}} よりもデータの配信が遅くなります（ただし WebSockets よりは速いです）が、チャットアプリケーションのように信頼性と順序が重要な状況で必要です。

## 値

{{domxref("WebTransportBidirectionalStream")}} オブジェクトの {{domxref("ReadableStream")}} です。

## 例

最初の関数で {{domxref("ReadableStream")}} から {{domxref("WebTransportBidirectionalStream")}} オブジェクトを読み取ります。それぞれのオブジェクトの {{domxref("WebTransportBidirectionalStream.readable")}} と {{domxref("WebTransportBidirectionalStream.writable")}} の値を別の関数に渡し、各ストリームからの読み取りと書き込みを行います。

```js
async function receiveBidirectional() {
  const bds = transport.incomingBidirectionalStreams;
  const reader = bds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は WebTransportBidirectionalStream のインスタンス
    await readData(value.readable);
    await writeData(value.writable);
  }
}

async function readData(readable) {
  const reader = readable.getReader();
  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }
    // value は Uint8Array
    console.log(value);
  }
}

async function writeData(writable) {
  const writer = writable.getWriter();
  const data1 = new Uint8Array([65, 66, 67]);
  const data2 = new Uint8Array([68, 69, 70]);
  writer.write(data1);
  writer.write(data2);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Using WebTransport](https://developer.chrome.com/docs/capabilities/web-apis/webtransport)<sup>(英語)</sup>
- {{domxref("WebSockets API", "WebSockets API", "", "nocode")}}
- {{domxref("Streams API", "ストリーム API", "", "nocode")}}
- [WebTransport over HTTP/3](https://datatracker.ietf.org/doc/html/draft-ietf-webtrans-http3/)<sup>(英語)</sup>
