---
title: WebSocketStream
slug: Web/API/WebSocketStream
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`WebSocketStream`** は {{domxref("WebSockets API", "WebSockets API", "", "nocode")}} のインターフェイスで、WebSocket サーバーに接続するためのプロミスベースの API です。接続上でデータを送信および受信するために[ストリーム](/ja/docs/Web/API/Streams_API)を使用するため、自動的にストリームの[背圧][backpressure](/ja/docs/Web/API/Streams_API/Concepts#backpressure)を活用し、読み取りや書き込みの速度を調整することでアプリケーションのボトルネックを避けることができます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("WebSocketStream.WebSocketStream", "WebSocketStream()")}} {{experimental_inline}}
  - : 新しい `WebSocketStream` オブジェクトインスタンスを生成します。

## インスタンスプロパティ

- {{domxref("WebSocketStream.url", "url")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : `WebSocketStream` インスタンスが作成された WebSocket サーバーの URL を返します。
- {{domxref("WebSocketStream.closed", "closed")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : ソケット接続が閉じられた際に、オブジェクトで解決される {{jsxref("Promise")}} を返します。このオブジェクトには、サーバーから送信された接続終了コードと理由が含まれています。
- {{domxref("WebSocketStream.opened", "opened")}} {{ReadOnlyInline}} {{experimental_inline}}
  - : ソケット接続が正常に開かれた時点で、オブジェクトを返す {{jsxref("Promise")}} が履行されます。このオブジェクトには、接続上でデータを受信・送信するための {{domxref("ReadableStream")}} と {{domxref("WritableStream")}} のインスタンスが含まれています。

## インスタンスメソッド

- {{domxref("WebSocketStream.close", "close()")}} {{experimental_inline}}
  - : WebSocket 接続を閉じます。

## 例

```js
const output = document.querySelector("#output");

function writeToScreen(message) {
  const pElem = document.createElement("p");
  pElem.textContent = message;
  output.appendChild(pElem);
}

if (!("WebSocketStream" in self)) {
  writeToScreen("このブラウザーは WebSocketStream に対応していません");
} else {
  const wsURL = "ws://127.0.0.1/";
  const wss = new WebSocketStream(wsURL);

  console.log(wss.url);

  async function start() {
    const { readable, writable, extensions, protocol } = await wss.opened;
    writeToScreen("CONNECTED");
    closeBtn.disabled = false;
    const reader = readable.getReader();
    const writer = writable.getWriter();

    writer.write("ping");
    writeToScreen("SENT: ping");

    while (true) {
      const { value, done } = await reader.read();
      writeToScreen(`RECEIVED: ${value}`);
      if (done) {
        break;
      }

      setTimeout(() => {
        writer.write("ping");
        writeToScreen("SENT: ping");
      }, 5000);
    }
  }

  start();
}
```

完全な説明を付けている完成する例については、 [WebSocketStream でクライアントを書く](/ja/docs/Web/API/WebSockets_API/Using_WebSocketStream) を参照してください。

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
