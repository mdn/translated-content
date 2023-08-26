---
title: Headers.delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 8573240024adc1eef906b4b2df35567144fd733e
---

{{APIRef("Fetch")}}

**`delete()`** は {{domxref("Headers")}} インターフェイスのメソッドで、現在の `Headers` オブジェクトからヘッダーを削除します。

このメソッドでは、次の場合に {{jsxref("TypeError")}} が発生します。

- name 引数の値が HTTP ヘッダーの名前ではない場合。
- {{Glossary("Guard", "ガード")}}の値が `immutable` である場合。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden_header_name", "禁止ヘッダー名", 1)}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名", 1)}}があります。

## 構文

```js-nolint
delete(name)
```

### 引数

- `name`
  - : `Headers` オブジェクトから削除する HTTP ヘッダーの名前。

### 返値

なし ({{jsxref("undefined")}})。

## Example

空の `Headers` オブジェクトの作成は簡単です。

```js
const myHeaders = new Headers(); // Currently empty
```

{{domxref("Headers.append")}} を使用して、これにヘッダーを追加できます。

```js
myHeaders.append("Content-Type", "image/jpeg");
myHeaders.get("Content-Type"); // Returns 'image/jpeg'
```

その後、再度削除することができます。

```js
myHeaders.delete("Content-Type");
myHeaders.get("Content-Type"); // Returns null, as it has been deleted
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
