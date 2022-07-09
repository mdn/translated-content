---
title: 'WebSocket: error イベント'
slug: Web/API/WebSocket/error_event
tags:
  - API
  - Error
  - イベント
  - リファレンス
  - ウェブ
  - WebSocket
browser-compat: api.WebSocket.error_event
translation_of: Web/API/WebSocket/error_event
---
{{APIRef}}

`error` イベントは、 `WebSocket` の接続がエラーによって閉じられた（例えば一部のデータを送信できなかった）ときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('error', event => { })

onerror = event => { }
```

## イベント型

一般的な {{domxref("Event")}} です。

## 例

```js
// WebSocket の接続を生成
const socket = new WebSocket('ws://localhost:8080');

// 発生しうるエラーを待ち受けする
socket.addEventListener('error', function (event) {
  console.log('WebSocket error: ', event);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocket: close イベント](/ja/docs/Web/API/WebSocket/close_event)
- [WebSocket: message イベント](/ja/docs/Web/API/WebSocket/message_event)
- [WebSocket: open イベント](/ja/docs/Web/API/WebSocket/open_event)
- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
