---
title: Request.body
slug: Web/API/Request/body
l10n:
  sourceCommit: e0e09b1df51489867f2e74c18586d168ba5e00d1
---

{{APIRef("Fetch")}}

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
