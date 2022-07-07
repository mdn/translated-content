---
title: WebSocket.binaryType
slug: Web/API/WebSocket/binaryType
tags:
  - API
  - プロパティ
  - リファレンス
  - Web API
  - WebSocket
browser-compat: api.WebSocket.binaryType
translation_of: Web/API/WebSocket/binaryType
---
{{APIRef("Web Sockets API")}}

**`WebSocket.binaryType`** プロパティは、この WebSocke 接続によって受信されているバイナリーデータの型を制御します。

## 値

{{DOMXref("DOMString")}} です。

- `"blob"`
  - : バイナリーデータに {{domxref("Blob")}} オブジェクトを使用します。これが既定値です。
- `"arraybuffer"`
  - : バイナリーデータに {{jsxref("ArrayBuffer")}} オブジェクトを使用します。

## 例

```js
// WebSocket 接続を作成
const socket = new WebSocket("ws://localhost:8080");
// バイナリーの型を "blob" から "arraybuffer" に変更
socket.binaryType = "arraybuffer";

// メッセージを待ち受け
socket.addEventListener("message", function (event) {
    if(event.data instanceof ArrayBuffer) {
        // バイナリーフレーム
        const view = new DataView(event.data);
        console.log(view.getInt32(0));
    } else {
        // テキストフレーム
        console.log(event.data);
    }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
