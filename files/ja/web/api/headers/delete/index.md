---
title: "Headers: delete() メソッド"
short-title: delete()
slug: Web/API/Headers/delete
l10n:
  sourceCommit: 7b21121cd93f9f967248d53c6fd24db2af42b314
---

{{APIRef("Fetch API")}} {{AvailableInWorkers}}

**`delete()`** は {{domxref("Headers")}} インターフェイスのメソッドで、現在の `Headers` オブジェクトからヘッダーを削除します。

セキュリティ上の理由から、いくつかのヘッダーはユーザーエージェントでしか制御できません。これには、{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}と{{Glossary("Forbidden_response_header_name", "禁止レスポンスヘッダー名")}}があります。

## 構文

```js-nolint
delete(name)
```

### 引数

- `name`
  - : `Headers` オブジェクトから削除する HTTP ヘッダーの名前。

### 返値

なし ({{jsxref("undefined")}})。

## 例

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
myHeaders.get("Content-Type"); // 削除されているため null を返す
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP](/ja/docs/Web/HTTP)
