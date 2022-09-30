---
title: Response.error()
slug: Web/API/Response/error
---

{{APIRef("Fetch")}}

{{domxref("Response")}} インターフェイスの **`error()`** メソッドはネットワークエラーに関連付けられた新規の `Response` オブジェクトを返します。

> **メモ:** これは主に [ServiceWorkers](/ja/docs/Web/API/ServiceWorker_API) に関連しています。エラーメソッドは、必要に応じてエラーを返す為に使用されます。 エラーレスポンスの {{domxref("Response.type","type")}} は `error` に設定されています。

> **メモ:** "エラー" `Response` は実際にスクリプトに公開されません。 {{domxref("GlobalFetch.fetch","fetch()")}} に対するそのような応答は、 promise を拒否します。

## 構文

```
var errorResponse = Response.error();
```

### 引数

無し

### 返り値

{{domxref("Response")}} オブジェクト

## 例

TBD (まだどこでもサポートされていません。)

## 仕様

| 仕様                                                                     | 状態                     | コメント |
| ------------------------------------------------------------------------ | ------------------------ | -------- |
| {{SpecName('Fetch','#dom-response-error','error()')}} | {{Spec2('Fetch')}} |          |

## ブラウザー実装状況

{{Compat("api.Response.error")}}

## 関連項目

- [ServiceWorker API](/ja/docs/Web/API/ServiceWorker_API)
- [HTTP access control (CORS)](/ja/docs/Web/HTTP/Access_control_CORS)
- [HTTP](/ja/docs/Web/HTTP)
