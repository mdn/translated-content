---
title: 'WebSocket: close イベント'
slug: Web/API/WebSocket/close_event
tags:
  - API
  - Event
  - リファレンス
  - ウェブ
  - WebSocket
  - close
  - イベント
browser-compat: api.WebSocket.close_event
translation_of: Web/API/WebSocket/close_event
---
{{APIRef}}

`close` イベントは、 `WebSocket` の接続が閉じられたときに発生します。

## 構文

イベント名を {{domxref("EventTarget.addEventListener", "addEventListener()")}} などのメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
addEventListener('close', event => { })

onclose = event => { }
```

## イベント型

{{domxref("CloseEvent")}} です。 {{domxref("Event")}} から継承しています。

{{InheritanceDiagram("CloseEvent")}}

## イベントプロパティ

_下記に示したプロパティに加えて、親インターフェイスである {{domxref("Event")}} からのプロパティが利用できます。_

- {{domxref("CloseEvent.code", "code")}}{{readOnlyInline}}
  - : サーバーが送信したクローズコードを `unsigned short` で返します。
- {{domxref("CloseEvent.reason", "reason")}}{{readOnlyInline}}
  - : サーバーが接続を閉じた理由を示す {{domxref("DOMString")}} を返します。これは、特定のサーバーとサブプロトコルに固有のものです。
- {{domxref("CloseEvent.wasClean", "wasClean")}}{{readOnlyInline}}
  - : 接続がきれいに閉じられたか否かを示す論理値を返します。

## 例

接続が閉じられる時が分かれば、 UI を更新させたり、閉じた接続についてのデータを保存したりすることができます。以下の例では `exampleSocket` と呼ばれる変数が開かれた `WebSocket` を参照しており、このハンドラーが、ソケットが閉じられた場面を扱います。

```js
exampleSocket.addEventListener('close', (event) => {
  console.log('The connection has been closed successfully.');
});
```

同じことを、イベントハンドラープロパティを用いて行うこともできます。

```js
exampleSocket.onclose = function (event) {
  console.log('The connection has been closed successfully.');
};
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocket: error イベント](/ja/docs/Web/API/WebSocket/error_event)
- [WebSocket: message イベント](/ja/docs/Web/API/WebSocket/message_event)
- [WebSocket: open イベント](/ja/docs/Web/API/WebSocket/open_event)
- [WebSocket クライアントアプリケーションを書く](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_client_applications)
