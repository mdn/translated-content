---
title: "Request: blob() メソッド"
short-title: blob()
slug: Web/API/Request/blob
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`blob()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、それを {{domxref("Blob")}} で解決するプロミスとして返します。

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
  // リクエストで送信された blob を処理する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.blob()")}}
