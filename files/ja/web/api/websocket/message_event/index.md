---
title: "WebSocket: message イベント"
slug: Web/API/WebSocket/message_event
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{APIRef}}

`message` イベントは、 `WebSocket` を通してデータを受け取ったときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('message', (event) => { })

onmessage = (event) => { }
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_以下に示したプロパティに加え、親インターフェイスである {{domxref("Event")}} から継承したプロパティも利用できます。_

- {{domxref("MessageEvent.data", "data")}} {{ReadOnlyInline}}
  - : メッセージ送信者から送信されたデータです。
- {{domxref("MessageEvent.origin", "origin")}} {{ReadOnlyInline}}
  - : 文字列で、メッセージ送信者のオリジンを表します。
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{ReadOnlyInline}}
  - : 文字列で、このイベントの固有の ID を表します。
- {{domxref("MessageEvent.source", "source")}} {{ReadOnlyInline}}
  - : `MessageEventSource` （{{domxref("Window")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトが成ることができる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports", "ports")}} {{ReadOnlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', (event) => {
    console.log('Message from server ', event.data);
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
