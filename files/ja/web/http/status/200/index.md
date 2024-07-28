---
title: 200 OK
slug: Web/HTTP/Status/200
l10n:
  sourceCommit: b085d5418eb8ef812682e647045746221bad0e7e
---

{{HTTPSidebar}}

HTTP の **`200 OK`** は成功ステータスレスポンスコードで、リクエストが成功したことを示します。200 レスポンスは既定でキャッシュ可能です。

成功の意味合いは意味は HTTP リクエストメソッドによって異なります。

- {{HTTPMethod("GET")}}: リソースの取得が行われ、メッセージ本体が返送される。
- {{HTTPMethod("HEAD")}}: 表現ヘッダーがメッセージ本体なしでレスポンスに含まれる。
- {{HTTPMethod("POST")}}: アクションの結果を示すリソースが、メッセージ本体で返送される。
- {{HTTPMethod("TRACE")}}: メッセージ本体に、サーバーが受信したリクエストメッセージが格納されます。

{{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} の成功結果は `200 OK` になるとは限らず、 {{HTTPStatus("204")}} `No Content` （またはリソースの初回アップロードによる作成の場合は {{HTTPStatus("201")}} `Created`）である場合もある。

## ステータス

```http
200 OK
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Methods)
