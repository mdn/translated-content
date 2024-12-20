---
title: "Request: arrayBuffer() メソッド"
short-title: arrayBuffer()
slug: Web/API/Request/arrayBuffer
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

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
  // リクエストで送信されたバッファーに対して何らかの処理を行う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.arrayBuffer()")}}
