---
title: "WebTransport: incomingUnidirectionalStreams プロパティ"
short-title: incomingUnidirectionalStreams
slug: Web/API/WebTransport/incomingUnidirectionalStreams
l10n:
  sourceCommit: 4de6f76bbfd76229db78ffb7d52cf6b4cb9f31f8
---

{{APIRef("WebTransport API")}}{{SecureContext_Header}} {{AvailableInWorkers}}

**`incomingUnidirectionalStreams`** は {{domxref("WebTransport")}} インターフェイスの読み取り専用プロパティで、サーバーが開いた 1 つ以上の単方向ストリームを表します。{{domxref("WebTransportReceiveStream")}} オブジェクトの {{domxref("ReadableStream")}} を返し、それぞれを使ってサーバーから信頼性のある形でデータを読み取ることができます。

「信頼性がある」とは、データの転送と順序が保証されることを意味します。この方式では {{domxref("WebTransport.datagrams", "datagrams")}} よりもデータの配信が遅くなります（ただし WebSockets よりは速いです）が、チャットアプリケーションのように信頼性と順序が重要な状況で必要です。

## 値

{{domxref("WebTransportReceiveStream")}} オブジェクトの {{domxref("ReadableStream")}} です。

## 例

最初の関数で {{domxref("ReadableStream")}} から {{domxref("WebTransportReceiveStream")}} オブジェクトを読み取ります。各オブジェクトを別の関数に渡し、そのストリームからデータを読み取ります。

```js
async function receiveUnidirectional() {
  const uds = transport.incomingUnidirectionalStreams;
  const reader = uds.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は WebTransportReceiveStream のインスタンス
    await readData(value);
  }
}

async function readData(receiveStream) {
  const reader = receiveStream.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) {
      break;
    }
    // value は Uint8Array
    console.log(value);
  }
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
