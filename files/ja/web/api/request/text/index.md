---
title: "Request: text() メソッド"
short-title: text()
slug: Web/API/Request/text
l10n:
  sourceCommit: 562051c4ad20e9ecb5faf905286cdfca545a340d
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

### 例外

- {{jsxref("TypeError")}}
  - : 以下のどちらかの理由で発生します。
    - リクエストの本文が[変更中またはロック済み](/ja/docs/Web/API/Fetch_API/Using_Fetch#ロックされ妨害されたストリーム)である。
    - 本文のコンテンツをデコードする際にエラーが発生した（例えば、{{httpheader("Content-Encoding")}} ヘッダーが正しくないなど）。

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
