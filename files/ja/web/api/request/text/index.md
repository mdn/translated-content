---
title: Request.text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Fetch")}}

**`text()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、文字列で解決されるプロミスとして返します。
レスポンスは常に UTF-8 を使用してデコードされます。

## 構文

```js-nolint
text()
```

### 引数

なし。

### 返値

文字列で解決する {{jsxref("Promise")}}。

## 例

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // do something with the text sent in the request
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.text()")}}
