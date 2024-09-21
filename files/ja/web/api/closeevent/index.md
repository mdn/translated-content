---
title: CloseEvent
slug: Web/API/CloseEvent
l10n:
  sourceCommit: e811fc31b67e145c5882e8e3f128d1938c627a51
---

{{APIRef("Websockets API")}}

`CloseEvent` は、接続が閉じられたときに {{Glossary("WebSockets", "WebSocket")}} を使用してクライアントに送信されます。これは `WebSocket` オブジェクトの `onclose` 属性で指定されたリスナーに配信されます。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("CloseEvent.CloseEvent", "CloseEvent()")}}
  - : 新しい `CloseEvent` を作成します。

## プロパティ

_このインターフェイスは親である {{domxref("Event")}} からプロパティを継承しています。_

- {{domxref("CloseEvent.code")}} {{ReadOnlyInline}}
  - : サーバーが送信したクローズコードが入った `unsigned short` を返します。
- {{domxref("CloseEvent.reason")}} {{ReadOnlyInline}}
  - : サーバーが接続を終了した理由を示す文字列を返します。これはそれぞれのサーバーとサブプロトコルで固有です。
- {{domxref("CloseEvent.wasClean")}} {{ReadOnlyInline}}
  - : 接続がきれいに閉じられたかどうかを示す論理値を返します。

## インスタンスメソッド

_このインターフェイスは親である {{domxref("Event")}} からメソッドを継承しています。_

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("WebSocket")}}
