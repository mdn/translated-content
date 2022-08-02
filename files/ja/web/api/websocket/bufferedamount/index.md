---
title: WebSocket.bufferedAmount
slug: Web/API/WebSocket/bufferedAmount
tags:
  - API
  - プロパティ
  - リファレンス
  - Web API
  - WebSocket
browser-compat: api.WebSocket.bufferedAmount
translation_of: Web/API/WebSocket/bufferedAmount
---
{{APIRef("Web Sockets API")}}

**`WebSocket.bufferedAmount`** は読み取り専用のプロパティで、 [`send()`](/ja/docs/Web/API/WebSocket/send) の呼び出しによってキューに入れられてはいますが、まだネットワークに送信されていないデータのバイト数を返します。この値は、一度キューに入れられたデータすべてが送信されると 0 にリセットされます。なお、接続が閉じられたときは、 0 にリセットされません。 [`send()`](/ja/docs/Web/API/WebSocket/send) を呼び出し続けると、この値は大きくなっていきます。

## 値

`unsigned long` の値です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
