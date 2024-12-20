---
title: "Request: formData() メソッド"
short-title: formData()
slug: Web/API/Request/formData
l10n:
  sourceCommit: 954612667bafd71241a93e8554e8f11afc474ff3
---

{{APIRef("Fetch API")}}

**`formData()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、 {{domxref("FormData")}} オブジェクトで解決するプロミスとして返します。

## 構文

```js-nolint
formData()
```

### 引数

なし。

### 返値

{{jsxref("Promise")}} であり、 {{domxref("FormData")}} オブジェクトで解決します。

## 例

```js
const formData = new FormData();
const fileField = document.querySelector('input[type="file"]');

formData.append("username", "abc123");
formData.append("avatar", fileField.files[0]);

const request = new Request("/myEndpoint", {
  method: "POST",
  body: formData,
});

request.formData().then((data) => {
  // リクエストで送信されたフォームデータに対して何らかの処理を行う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.formData()")}}
