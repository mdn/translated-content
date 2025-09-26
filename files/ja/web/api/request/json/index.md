---
title: "Request: json() メソッド"
short-title: json()
slug: Web/API/Request/json
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("Fetch API")}}{{AvailableInWorkers}}

**`json()`** は {{domxref("Request")}} インターフェイスのメソッドで、
このメソッドはリクエスト本体を読み込み、本文を解釈した結果を {{JSxRef("JSON")}} として解決したプロミスとして返します。

このメソッドは `json()` という名前ですが、結果は JSON ではなく、JSON を入力として受け取り、それを解釈して JavaScript オブジェクトを生成した結果であることに注意してください。

## 構文

```js-nolint
json()
```

### 引数

なし。

### 返値

JavaScript のオブジェクトに解決する {{jsxref("Promise")}} です。このオブジェクトは、オブジェクト、配列、文字列、数値など、JSON で表せるものであれば何でもかまいません。

## 例

```js
const obj = { hello: "world" };

const request = new Request("/myEndpoint", {
  method: "POST",
  body: JSON.stringify(obj),
});

request.json().then((data) => {
  // リクエストで送信されたデータに対して何らかの処理をする
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Response.json()")}}
