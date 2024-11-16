---
title: "Request: body プロパティ"
short-title: body
slug: Web/API/Request/body
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`body`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、
このインターフェイスは、リクエストに追加された本体のコンテンツを含む {{domxref("ReadableStream")}} を保持します。 `GET` や `HEAD` メソッドを使用したリクエストは本体を持つことができず、その場合は `null` が返されることに注意してください。

## 値

{{domxref("ReadableStream")}} または [`null`](/ja/docs/Web/JavaScript/Reference/Operators/null)。

## 例

```js
const request = new Request("/myEndpoint", {
  method: "POST",
  body: "Hello world",
});

request.body; // ReadableStream
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Request.bodyUsed")}}
