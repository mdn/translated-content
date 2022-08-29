---
title: 'WebSocket: open イベント'
slug: Web/API/WebSocket/open_event
tags:
  - API
  - Event
  - WebSocket
  - イベント
  - open
browser-compat: api.WebSocket.open_event
translation_of: Web/API/WebSocket/open_event
---
{{APIRef}}

`open` イベントは、 `WebSocket` のコネクションが開かれたときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('open', event => { })

onopen = event => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// WebSocket の接続を作成
const socket = new WebSocket('ws://localhost:8080');

// 接続が開かれた場合
socket.addEventListener('open', (event) => {
  socket.send('Hello Server!');
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocket: close イベント](/ja/docs/Web/API/WebSocket/close_event)
- [WebSocket: error イベント](/ja/docs/Web/API/WebSocket/error_event)
- [WebSocket: message イベント](/ja/docs/Web/API/WebSocket/message_event)
- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
