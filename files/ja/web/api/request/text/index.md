---
title: "Request: text() メソッド"
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`text()`** は {{domxref("Request")}} インターフェイスのメソッドで、リクエスト本体を読み込み、文字列で解決されるプロミスとして返します。
レスポンスは常に UTF-8 を使用してデコードされます。

## 構文

```js-nolint
text()
```

### 引数

なし。

### 返値

文字列で解決するプロミスです。

## 例

```js
const text = "Hello world";

const request = new Request("/myEndpoint", {
  method: "POST",
  body: text,
});

request.text().then((text) => {
  // リクエストで送信されたテキストに対して何らかの処理を行う
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.text()")}}
