---
title: 'WebSocket: message イベント'
slug: Web/API/WebSocket/message_event
tags:
  - Event
  - リファレンス
  - WebSocket
  - message
browser-compat: api.WebSocket.message_event
translation_of: Web/API/WebSocket/message_event
---
{{APIRef}}

`message` イベントは、 `WebSocket` を通してデータを受け取ったときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('message', event => { })

onmessage = event => { }
```

## イベント型

{{domxref("MessageEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("MessageEvent")}}

## イベントプロパティ

_以下に示したプロパティに加え、親インターフェイスである {{domxref("Event")}} から継承したプロパティも利用できます。_

- {{domxref("MessageEvent.data", "data")}} {{readonlyInline}}
  - : メッセージ送信者から送信されたデータです。
- {{domxref("MessageEvent.origin", "origin")}} {{readonlyInline}}
  - : {{domxref("USVString")}} で、メッセージ送信者のオリジンを表します。
- {{domxref("MessageEvent.lastEventId", "lastEventId")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、このイベントの固有の ID を表します。
- {{domxref("MessageEvent.source", "source")}} {{readonlyInline}}
  - : `MessageEventSource` （{{domxref("Window")}}, {{domxref("MessagePort")}}, {{domxref("ServiceWorker")}} オブジェクトが成ることができる）で、メッセージ送信者を表します。
- {{domxref("MessageEvent.ports", "ports")}} {{readonlyInline}}
  - : {{domxref("MessagePort")}} オブジェクトの配列で、メッセージが送信されるチャネルに関連するポートを表します（チャネルメッセージングや共有ワーカーにメッセージを送信する場合など、適切な場合）。

## 例

```js
// Create WebSocket connection.
const socket = new WebSocket('ws://localhost:8080');

// Listen for messages
socket.addEventListener('message', function (event) {
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
