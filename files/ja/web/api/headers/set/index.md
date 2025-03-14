---
title: "Headers: set() メソッド"
short-title: set()
slug: Web/API/Headers/set
l10n:
  sourceCommit: 2c641e08878722bf29fb784d58c61873ce4a133a
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`set()`** は {{domxref("Headers")}} インターフェイスのメソッドで、 `Headers` オブジェクトの中にある既存のヘッダーに新しい値を設定するか、ヘッダーがまだ存在しない場合には追加するかします。

`set()` と {{domxref("Headers.append")}} の違いは、指定されたヘッダーがすでに存在し、複数の値を受け入れられる場合、 `set()` は既存の値を新しい値で上書きするのに対し、 {{domxref("Headers.append")}} は新しい値を値の集合の最後に追加する点です。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名")}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nolint
set(name, value)
```

### 引数

- `name`
  - : 新しい値に設定したい HTTP ヘッダーの名前。指定された名前が HTTP ヘッダーの名前でない場合、このメソッドで {{jsxref("TypeError")}} 例外が発生します。
- `value`
  - : 新たに設定したい値です。

### 返値

なし ({{jsxref("undefined")}})。

## 例

空の `Headers` オブジェクトを作成するのは簡単です。

```js
const myHeaders = new Headers(); // Currently empty
```

これに {{domxref("Headers.append")}} を使用してヘッダーを追加し、次に `set()` を使用してこのヘッダーに新しい値を設定することができます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.set("Content-Type", "text/html");
```

指定されたヘッダーがまだ存在しない場合、`set()` はそれを作成し、その値を指定された値に設定します。指定されたヘッダーが既に存在し、複数の値を受け入れられる場合は、 `set()` は既存の値を新しい値で上書きします。

```js
myHeaders.set("Accept-Encoding", "deflate");
myHeaders.set("Accept-Encoding", "gzip");
myHeaders.get("Accept-Encoding"); // 'gzip' を返す
```

新しい値を上書きするのではなく、値に追加するために {{domxref("Headers.append")}} が必要になります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
