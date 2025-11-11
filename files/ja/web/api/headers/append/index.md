---
title: "Headers: append() メソッド"
short-title: append()
slug: Web/API/Headers/append
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`append()`** は {{domxref("Headers")}} インターフェイスのメソッドで、 `Headers` オブジェクト内の既存のヘッダーに新しい値を追加します。または、既存のヘッダーがない場合には、ヘッダーを追加します。

{{domxref("Headers.set", "set()")}} と `append()` の違いは、指定されたヘッダーがすでに存在し、複数の値を受け入れる場合、`set()` は既存の値を新しい値で上書きするのに対し、`append()` は新しい値を値の集合の最後に追加するという点です。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nolint
append(name, value)
```

### 引数

- `name`
  - : `Headers` オブジェクトに追加する HTTP ヘッダー名。
- `value`
  - : HTTP ヘッダーに追加する値。

### 返値

なし ({{jsxref("undefined")}})。

## 例

空の `Headers` オブジェクトの生成はシンプルです。

```js
const myHeaders = new Headers(); // 現在は空
```

`append()` を使用してヘッダーを追加することができます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // 'image/jpeg' を返します。
```

指定されたヘッダーがすでに存在する場合、`append()` はその値を指定された値に変更します。指定したヘッダーが既に存在し、複数の値を受け入れられる場合、`append()` は新しい値を値の集合の最後に追加します。

```js
myHeaders.append("Accept-Encoding", "deflate");
myHeaders.append("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // 'deflate, gzip' を返します。
```

古い値を新しい値で上書きするには、 {{domxref("Headers.set")}} を使います。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連項目

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
