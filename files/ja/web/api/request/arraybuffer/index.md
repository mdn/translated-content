---
title: Request.arrayBuffer()
slug: Web/API/Request/arrayBuffer
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Fetch")}}

**`arrayBuffer()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{jsxref("ArrayBuffer")}} で解決するプロミスとして返します。

## 構文

```js-nolint
arrayBuffer()
```

### 引数

なし。

### 返値

{{jsxref("ArrayBuffer")}} で解決するプロミス。

## 例

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.arrayBuffer().then((buffer) => {
  // do something with the buffer sent in the request
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.arrayBuffer()")}}
