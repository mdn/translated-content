---
title: "WebSocket: message イベント"
short-title: message
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{AvailableInWorkers}}

`message` イベントは、 `WebSocket` を通してデータを受け取ったときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener("message", (event) => {});

onmessage = (event) => {};
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_以下に示したプロパティに加え、親インターフェイスである {{domxref("Event")}} から継承したプロパティも利用できます。_

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : メッセージ送信者から送信されたデータです。このプロパティの型は、WebSocket メッセージの種類と {{domxref("WebSocket.binaryType")}} の値によって変わります。
    - メッセージの種類が "text" の場合、このフィールドは文字列です。
    - メッセージの種類が "binary" 型の場合、このプロパティの型はこのソケットの `binaryType` から推測することができます。
      - {{jsxref("ArrayBuffer")}}: `binaryType` が `"arraybuffer"` の場合
      - {{domxref("Blob")}}: `binaryType` が `"blob"` の場合、これは関連付けられたメディア型がありません（{{domxref("Blob.type")}} は `""` です）.
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信者のオリジンを表します。

{{domxref("MessageEvent")}} インターフェイスのその他のプロパティは存在しますが、 WebSocket API には関係ないため、既定値のままにしています。

- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}

## 例

```js
// WebSocket 接続を作成
const socket = new WebSocket("ws://localhost:8080");

// メッセージを待ち受け
socket.addEventListener("message", (event) => {
  console.log("Message from server ", event.data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocket: close イベント](/ja/docs/Web/API/WebSocket/close_event)
- [WebSocket: error イベント](/ja/docs/Web/API/WebSocket/error_event)
- [WebSocket: open イベント](/ja/docs/Web/API/WebSocket/open_event)
- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
