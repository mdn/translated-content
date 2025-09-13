---
title: "WebSocketStream: closed プロパティ"
short-title: closed
slug: Web/API/WebSocketStream/closed
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`closed`** は {{domxref("WebSocketStream")}} インターフェースの読み取り専用プロパティで、ソケット接続が閉じられた際にオブジェクトで解決するプロミス ({{jsxref("Promise")}}) を返します。このオブジェクトには、接続を閉じたコードと理由が含まれています。

## 値

次のプロパティを含むオブジェクトで履行されるプロミスです。

- `closeCode`
  - : 閉じたコードを表す数値（[`CloseEvent` ステータスコード](/ja/docs/Web/API/CloseEvent/code#value)の完全な一覧を参照）。
- `reason`
  - : ソケット接続が閉じられた理由を、人間が読み取り可能な形で表す文字列。

WebSocket 接続が正常に閉じられなかった場合、プロミスは拒否されます（正常な終了のためには、関連付けられた TCP 接続は WebSocket の終了ハンドシェイクが完了した後に閉じられる必要があります）。

## 例

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

wss.closed.then((result) => {
  writeToScreen(
    `DISCONNECTED: code ${result.closeCode}, message "${result.reason}"`,
  );
  console.log("Socket closed", result.closeCode, result.reason);
});
```

全ての説明付きの完全な例については、 [WebSocketStream でクライアントを書く](/ja/docs/Web/API/WebSockets_API/Using_WebSocketStream)を参照してください。

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
