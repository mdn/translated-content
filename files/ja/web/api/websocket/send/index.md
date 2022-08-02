---
title: WebSocket.send()
slug: Web/API/WebSocket/send
tags:
  - API
  - メソッド
  - リファレンス
  - Web API
  - WebSocket
browser-compat: api.WebSocket.send
translation_of: Web/API/WebSocket/send
---
{{APIRef("Web Sockets API")}}

**`WebSocket.send()`** メソッドは、 WebSocket 接続を介してサーバーに送るために指定されたデータを、格納するために必要なバイト数だけ `bufferedAmount` の値を増加させながらキューに入れます。もしデータが送信できなかった場合（例えば、バッファリングが必要だが、バッファが一杯であるなどの理由で）、ソケットは自動的に閉じられます。
接続が `CONNECTING` 状態のときに `send()` を呼び出すと、ブラウザーは例外を発生させます。接続が `CLOSING` または `CLOSED` の状態のときに `send()` を呼び出すと、ブラウザーはデータを暗黙に破棄します。

## 構文

```js
WebSocket.send("Hello server!");
```

### 引数

- `data`

  - : サーバーに送信するデータです。以下の何れかの型のデータを指定します。

    - {{domxref("USVString")}}
      - : テキスト文字列。文字列は UTF-8 形式でバッファーに追加され、 `bufferedAmount` の値は UTF-8 の文字列を表すのに必要とされるバイト数だけ増えます。
    - {{jsxref("ArrayBuffer")}}
      - : 型付きの配列オブジェクトで使用される基本的なバイナリーデータを送信することができます。このバイナリーデータのコンテンツは，必要なバイト数だけ `bufferedAmount` の値を増やして、バッファーのキューに入れられます。
    - {{domxref("Blob")}}
      - : `Blob` を指定すると、バイナリーフレームで送信される blob の生データをキューに入れます。`bufferedAmount` の値は、その生データのバイトサイズだけ増えます。
    - {{domxref("ArrayBufferView")}}
      - : [JavaScript の型付き配列](/ja/docs/Web/JavaScript/Typed_arrays)オブジェクトをバイナリーフレームとして送信することができます。このバイナリーデータのコンテンツは，必要なバイト数だけ `bufferedAmount` の値を増やして、バッファのキューに入れられます。

### 例外

- `InvalidStateError`
  - : {{domxref("WebSocket/readyState", "WebSocket.readyState")}} が `CONNECTING` である場合に発生します。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
