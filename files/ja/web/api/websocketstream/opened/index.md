---
title: "WebSocketStream: opened プロパティ"
short-title: opened
slug: Web/API/WebSocketStream/opened
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`opened`** は {{domxref("WebSocketStream")}} インターフェイスの読み取り専用プロパティは、ソケット接続が正常に開かれた時点で、オブジェクトを解決する {{jsxref("Promise")}} を返します。このオブジェクトには、接続上でデータを受信および送信するための {{domxref("ReadableStream")}} および {{domxref("WritableStream")}} インスタンスが含まれています。

## 値

プロミスであり、次のプロパティを含むオブジェクトで履行されます。

- `extensions`
  - : `WebSocketStream`に適用された拡張を表す文字列。このような拡張は現在定義されていませんが、将来定義される可能性があります。現在は空文字列を返します。
- `protocol`
  - : 現在の WebSocket 接続を開くためのサブプロトコルを表す文字列（`WebSocketStream()` コンストラクターの [`protocols`](/ja/docs/Web/API/WebSocketStream/WebSocketStream#protocols) オプションで指定する選択肢から選べます）。接続を開くためのサブプロトコルが使用されていない場合（つまり、コンストラクター呼び出しにサブプロトコルオプションが記載されていない場合）、空文字列を返します。
- `readable`
  - : {{domxref("ReadableStream")}} のインスタンス。これに {{domxref("ReadableStream.getReader()")}} を呼び出すと、受信する WebSocket データを読み取るために使用できる {{domxref("ReadableStreamDefaultReader")}} のインスタンスを取得できます。
- `writable`
  - : {{domxref("WritableStream")}} インスタンス。これに {{domxref("WritableStream.getWriter()")}} を呼び出すと、 WebSocket 接続にデータを書き込むために使用できる {{domxref("WritableStreamDefaultWriter")}} インスタンスを取得できます。

WebSocket 接続が失敗した場合、プロミスは拒否されます。

## 例

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

async function start() {
  const { readable, writable, extensions, protocol } = await wss.opened;

  const reader = readable.getReader();
  const writer = writable.getWriter();

  writer.write("ping");

  while (true) {
    const { value, done } = await reader.read();
    if (done) {
      break;
    }

    setTimeout(() => {
      writer.write("ping");
    }, 5000);
  }
}
```

全ての説明付きの完全な例については、 [WebSocketStream でクライアントを書く](/ja/docs/Web/API/WebSockets_API/Using_WebSocketStream)を参照してください。

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
