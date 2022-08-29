---
title: CloseEvent
slug: Web/API/CloseEvent
tags:
  - API
  - インターフェース
  - リファレンス
  - Web
  - WebSocket
  - WebSockets
browser-compat: api.CloseEvent
translation_of: Web/API/CloseEvent
---
{{APIRef("Websockets API")}}

`CloseEvent` は、接続が閉じられたときに {{Glossary("WebSockets")}} を使用してクライアントに送信されます。これは `WebSocket` オブジェクトの `onclose` 属性で指定されたリスナーに配信されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : 新しい `CloseEvent` を作成します。

## プロパティ

_このインタフェースは親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("CloseEvent.code")}}{{readOnlyInline}}
  - : サーバーが送信したクローズコードが入った `unsigned short` を返します。
- {{domxref("CloseEvent.reason")}}{{readOnlyInline}}
  - : サーバーが接続を終了した理由を示す {{domxref("DOMString")}} を返します。これは特定のサーバーとサブプロトコルに固有です。
- {{domxref("CloseEvent.wasClean")}}{{readOnlyInline}}
  - : 接続がきれいに閉じられたかどうかを示す論理値を返します。

## メソッド

_このインターフェースは親である {{domxref("Event")}} からメソッドを継承しています。_

- {{domxref("CloseEvent.initCloseEvent()")}} {{Non-standard_inline}} {{deprecated_inline}}
  - : 作成された `CloseEvent` の値を初期化します。イベントがすでに配信されている場合、このメソッドは何も行いません。このメソッドはもう使用しないでください。代わりに、{{domxref("CloseEvent.CloseEvent", "CloseEvent()")}} コンストラクターを使用してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebSocket")}}
