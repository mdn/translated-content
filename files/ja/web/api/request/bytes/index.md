---
title: "Request: bytes() メソッド"
short-title: bytes()
slug: Web/API/Request/bytes
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`bytes()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、{{jsxref("Uint8Array")}} で解決するプロミスとしてそれを返します。

## 構文

```js-nolint
bytes()
```

### 引数

なし。

### 返値

{{jsxref("Uint8Array")}} で解決するプロミスです。

## 例

```js
const myArray = new Uint8Array(10);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: myArray,
});

request.bytes().then((buffer) => {
  // リクエストで送信されたバッファーを処理する
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.arrayBuffer()")}}
