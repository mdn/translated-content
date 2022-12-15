---
title: Response.error()
slug: Web/API/Response/error
l10n:
  sourceCommit: 16e398809d62247dbadc89ff4024a0ffa4781f0e
---

{{APIRef("Fetch")}}

**`error()`** は {{domxref("Response")}} インターフェイスのメソッドで、ネットワークエラーに関連付けられた新規の `Response` オブジェクトを返します。

> **メモ:** これは主に[サービスワーカー](/ja/docs/Web/API/Service_Worker_API)に関連しています。エラーメソッドは、必要に応じてエラーを返す為に使用されます。
> エラーレスポンスの {{domxref("Response.type","type")}} は `error` に設定されています。

> **メモ:** "エラー" の `Response` は実際にスクリプトに公開されません。 {{domxref("fetch()")}} に対するそのようなレスポンスは、プロミスを拒否します。

## 構文

```js-nolint
error()
```

### 引数

なし。

### 返値

{{domxref("Response")}} オブジェクト。

## 例

TBD (まだどこでもサポートされていません。)

## 仕様

{{Specifications}}

## ブラウザー実装状況

{{Compat}}

## 関連情報

- [サービスワーカー API](/ja/docs/Web/API/Service_Worker_API)
- [HTTP アクセス制御 (CORS)](/ja/docs/Web/HTTP/CORS)
- [HTTP](/ja/docs/Web/HTTP)
