---
title: "WebSocketStream: close() メソッド"
short-title: close()
slug: Web/API/WebSocketStream/close
l10n:
  sourceCommit: 7a418e5d057adb45a0c7c4ec3b03baa8c3be18f4
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`close()`**は{{domxref("WebSocketStream")}} インターフェイスのメソッドで、WebSocket接続を閉じます。このメソッドは、接続が閉じられた理由を示す独自のコードや理由を含むオブジェクトをオプションで受け入れます。

## 構文

```js-nolint
close()
close(options)
```

### 引数

- `options` {{optional_inline}}
  - : 次のプロパティを含むオプションのオブジェクトです。
    - `closeCode` {{optional_inline}}
      - : 閉じたコードを表す数値（[`CloseEvent` ステータスコード](/ja/docs/Web/API/CloseEvent/code#value)の完全な一覧を参照）。
    - `reason` {{optional_inline}}
      - : ソケット接続が閉じられた理由を、人間が読み取り可能な形で表す文字列。 `reason` 文字列の最大許容長は 123 バイトです。この文字列は関数が呼び出された際に自動的に UTF-8 でエンコードされます。

> [!NOTE]
> サーバーの設定や使用するステータスコードによっては、サーバーが独自のコードを無視し、閉じられた理由に適切な有効なコードを選べます。有効なコードは 1000、および 3000 以上 4999 以下の範囲のコードです。

### 返値

なし (`undefined`)。

### 例外

- `SyntaxError` {{domxref("DOMException")}}
  - : `reason` が最大許容長である 123 バイトより詳しい場合に発生します。

## 例

```js
const wsURL = "wss://127.0.0.1/";
const wss = new WebSocketStream(wsURL);

setTimeout(() => {
  wss.close({
    closeCode: 1000,
    reason: "That's all folks",
  });
}, 10000);
```

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
