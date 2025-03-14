---
title: "Headers: has() メソッド"
short-title: has()
slug: Web/API/Headers/has
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`has()`** は {{domxref("Headers")}} インターフェイスのメソッドで、 `Headers` オブジェクトに指定された特定のヘッダーがあるかどうかを示す論理値を返します。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名")}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nolint
has(name)
```

### 引数

- `name`
  - : テストしたい HTTP ヘッダーの名前。指定された名前が有効な HTTP ヘッダーの名前でない場合、このメソッドで {{jsxref("TypeError")}} 例外が発生します。

### 返値

論理値です。

## 例

空の `Headers` オブジェクトを作成するのは簡単です。

```js
const myHeaders = new Headers(); // Currently empty
```

これに {{domxref("Headers.append")}} を使用してヘッダーを追加し、`has()` を使用してヘッダーが存在するかどうかをテストすることができます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.has("Content-Type"); // Returns true
myHeaders.has("Accept-Encoding"); // Returns false
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
