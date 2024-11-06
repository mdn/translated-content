---
title: "Request: bodyUsed プロパティ"
short-title: bodyUsed
slug: Web/API/Request/bodyUsed
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`bodyUsed`** は {{domxref("Request")}} インターフェイスの読み取り専用プロパティで、リクエスト本体がまだ読み込まれていないかどうかを示す論理値です。

## 値

論理値です。

## 例

```js
const request = new Request("/myEndpoint", {
  method: "POST",
  body: "Hello world",
});

request.bodyUsed; // false

request.text().then((bodyAsText) => {
  console.log(request.bodyUsed); // true
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Request.body")}}
