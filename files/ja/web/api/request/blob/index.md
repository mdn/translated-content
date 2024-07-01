---
title: Request.blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 2b8f5d9a29f00aea5d2edfa78d1fb90c51752858
---

{{APIRef("Fetch")}}

**`arrayBuffer()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{domxref("Blob")}} で解決するプロミスとして返します。

## 構文

```js-nolint
blob()
```

### 引数

なし。

### 返値

{{domxref("Blob")}} で解決するプロミス。

## 例

```js
const obj = { hello: "world" };
const myBlob = new Blob([JSON.stringify(obj, null, 2)], {
  type: "application/json",
});

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myBlob,
});

request.blob().then((myBlob) => {
  // do something with the blob sent in the request
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.blob()")}}
