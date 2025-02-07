---
title: "Headers: get() メソッド"
short-title: get()
slug: Web/API/Headers/get
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`get()`** は {{domxref("Headers")}} インターフェイスのメソッドで、指定された名前の `Headers` オブジェクト内のヘッダーのすべての値のバイト文字列を返します。要求されたヘッダーが `Headers` オブジェクトに存在しない場合、`null` を返します。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名")}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nolint
get(name)
```

### 引数

- `name`
  - : `Headers` オブジェクトから値を取得する HTTP ヘッダーの名前。指定された名前が HTTP ヘッダーの名前でない場合、このメソッドでは {{jsxref("TypeError")}} 例外が発生します。名前は大文字と小文字を区別しません。

### 返値

取得したヘッダーの値を表す文字列の配列です。このヘッダーが設定されていない場合は `null` を返します。

## 例

空の `Headers` オブジェクトの作成は簡単です。

```js
const myHeaders = new Headers(); // 現在空です
myHeaders.get("Not-Set"); // null を返します
```

{{domxref("Headers.append")}} を使用してヘッダーを追加し、`get()` を使用してヘッダーを取得できます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // "image/jpeg" を返します
```

ヘッダーに複数の値が関連付けられている場合、ByteString には、`Headers` オブジェクトに追加された順序ですべての値が含まれます。

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // "deflate, gzip" を返します
myHeaders
  .get("Accept-Encoding")
  .split(",")
  .map((v) => v.trimStart()); // [ "deflate", "gzip" ] を返します。
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
