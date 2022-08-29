---
title: WebSocket
slug: Web/API/WebSocket
tags:
  - API
  - インターフェイス
  - NeedsContent
  - WebSocket
  - WebSockets
browser-compat: api.WebSocket
translation_of: Web/API/WebSocket
---
{{APIRef("Web Sockets API")}}

`WebSocket` オブジェクトは、サーバーへの [WebSocket](/ja/docs/Web/API/WebSockets_API) 接続の作成と管理、および接続上のデータの送受信に使用する API を提供します。

`WebSocket` を構築するには、 [`WebSocket()`](/ja/docs/Web/API/WebSocket/WebSocket) コンストラクターを使用してください。

{{AvailableInWorkers}}

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("WebSocket.WebSocket", "WebSocket()")}}
  - : 新しく作成された `WebSocket` オブジェクトを返します。

## プロパティ

- {{domxref("WebSocket.binaryType")}}
  - : 接続で使用されるバイナリデータ型。
- {{domxref("WebSocket.bufferedAmount")}} {{readonlyinline}}
  - : キューに入れられたデータのバイト数。
- {{domxref("WebSocket.extensions")}} {{readonlyinline}}
  - : サーバーによって選択された拡張機能。
- {{domxref("WebSocket.protocol")}} {{readonlyinline}}
  - : サーバーによって選択されたサブプロトコル。
- {{domxref("WebSocket.readyState")}} {{readonlyinline}}
  - : 接続の現在の状態。
- {{domxref("WebSocket.url")}} {{readonlyinline}}
  - : WebSocket の絶対 URL。

## メソッド

- {{domxref("WebSocket.close()")}}
  - : 接続を閉じます。
- {{domxref("WebSocket.send()")}}
  - : 送信するデータをキューに入れます。

## イベント

これらのイベントを待ち受けするには、 `addEventListener()` を使用するか、イベントリスナーをこのインターフェイスの `onイベント名` プロパティへ代入するかします。

- {{domxref("WebSocket/close_event", "close")}}
  - : `WebSocket` による接続が閉じられたときに発生します。
    `onclose` プロパティからも利用できます。
- {{domxref("WebSocket/error_event", "error")}}
  - : `WebSocket` による接続が、データの一部が送信できなかったなどのエラーのために閉じた時に発生します。
    `onerror` プロパティからも利用できます。
- {{domxref("WebSocket/message_event", "message")}}
  - : `WebSocket` を通じてデータを受信したときに発生します。
    `onmessage` プロパティからも利用できます。
- {{domxref("WebSocket/open_event", "open")}}
  - : `WebSocket` による接続が開いたときに発生します。
    `onopen` プロパティからも利用できます。

## 例

```js
// WebSocket 接続を作成
const socket = new WebSocket('ws://localhost:8080');

// 接続が開いたときのイベント
socket.addEventListener('open', function (event) {
    socket.send('Hello Server!');
});

// メッセージの待ち受け
socket.addEventListener('message', function (event) {
    console.log('Message from server ', event.data);
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
