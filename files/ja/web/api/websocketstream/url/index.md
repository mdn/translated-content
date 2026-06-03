---
title: "WebSocketStream: url プロパティ"
short-title: url
slug: Web/API/WebSocketStream/url
l10n:
  sourceCommit: fb311d7305937497570966f015d8cc0eb1a0c29c
---

{{APIRef("WebSockets API")}}{{SeeCompatTable}}{{AvailableInWorkers}}

**`url`** は {{domxref("WebSocketStream")}} インターフェイスの読み取り専用プロパティで、`WebSocketStream` インスタンスが作成された WebSocket サーバーの URL を返します。

## 値

文字列です。

## 例

```js
const wss = new WebSocketStream("wss://example.com/wss");

// "example.com/wss" をコンソールにログ出力
console.log(wss.url);
```

## 仕様書

現在、どの仕様にも属していません。標準化の進捗状況については https://github.com/whatwg/websockets/pull/48 を参照してください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebSocketStream: integrating streams with the WebSocket API](https://developer.chrome.com/docs/capabilities/web-apis/websocketstream), developer.chrome.com (2020)
