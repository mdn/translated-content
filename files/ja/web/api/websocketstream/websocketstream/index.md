---
title: "WebSocketStream: WebSocketStream() コンストラクター"
short-title: WebSocketStream()
slug: Web/API/WebSocketStream/WebSocketStream
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`WebSocketStream()`** コンストラクターは、新しい {{domxref("WebSocketStream")}} オブジェクトインスタンスを生成します。

## 構文

```js-nolint
new WebSocketStream(url)
new WebSocketStream(url, options)
```

### 引数

- `url`
  - : 文字列で、この `WebSocketStream` インスタンスで接続する WebSocket サーバーの URL を表します。許可される URL スキームは `"ws"`、`"wss"`、`"http"`、`"https"` です。
- `options` {{optional_inline}}
  - : 次のプロパティが含まれているオブジェクトです。
    - `protocols` {{optional_inline}}
      - : 単一の文字列または文字列の配列で、クライアントが使用したいサブプロトコルを表します。例えば `"amqp"` や `"mqtt"` などです。サブプロトコルは、[IANA WebSocket Subprotocol Name Registry](https://www.iana.org/assignments/websocket/websocket.xml#subprotocol-name) から選択するか、クライアントとサーバー間で合意された独自の名前を使用することもできます。単一のサーバーで複数の WebSocket サブプロトコルを実装し、指定された値に応じて異なる種類のやり取りを処理できます。省略した場合、既定では空の配列が使用されます。 `protocols` が含まれており、かつサーバーがこれらのサブプロトコルのいずれかを選択したと報告した場合にのみ、接続が確立されます。
    - `signal` {{optional_inline}}
      - : {{domxref("AbortSignal")}} で、[ハンドシェイク](/ja/docs/Web/API/WebSockets_API/Writing_WebSocket_servers#the_websocket_handshake)が完了する前（つまり、{{domxref("WebSocketStream.opened", "opened")}} プロミスが解決する前）に接続を中止するために使用できるものです。これは主に接続タイムアウトを実装するのに役立つものです。そのため、接続が確立された後では何も行いません。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : URL スキームが `"ws"`、`"wss"`、`"http"`、`"https"` のいずれでもない場合に発生します。

## 例

### `WebSocketStream` を作成

最も基本的な例は、 WebSocket サーバーの URL を引数として取ります。

```js
const wss = new WebSocketStream("wss://example.com/wss");
```

### `WebSocketStream` を接続タイムアウト付きで作成

次の例では、`signal` オプションを使用して、接続が 5 秒以内に確立されない場合のタイムアウトを実装しています。

```js
const queueWSS = new WebSocketStream("wss://example.com/queue", {
  signal: AbortSignal.timeout(5000),
});
```

localhost に接続する場合、接続試行がタイムアウトする前に成功または失敗する可能性が高いことに注意してください。

接続が確立されると、 `signal` は何も効果がありません。既に確立された接続を閉じるには、{{domxref("WebSocketStream.close()")}} メソッドを呼び出してください。基盤となる {{domxref("WritableStream")}} または {{domxref("WritableStreamDefaultWriter")}} を閉じることで、ソケットを閉じることも可能です。

全ての説明付きの完全な例については、 [WebSocketStream でクライアントを書く](/ja/docs/Web/API/WebSockets_API/Using_WebSocketStream)を参照してください。

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

[WebSocketStream API design](https://docs.google.com/document/d/1La1ehXw76HP6n1uUeks-WJGFgAnpX2tCjKts7QFJ57Y/edit?pli=1&tab=t.0).

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
