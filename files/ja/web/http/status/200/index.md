---
title: 200 OK
slug: Web/HTTP/Status/200
---

{{HTTPSidebar}}

HTTP **`200 OK`** はリクエストが成功した場合に返すレスポンスコード。200 のレスポンスはデフォルトでキャッシュしてよい。

成功したという意味はリクエストのメソッドによって異なる:

- {{HTTPMethod("GET")}}: リソースがフェッチされメッセージのボディ部で返送された。
- {{HTTPMethod("HEAD")}}: エンティティヘッダがボディ部で返送された。
- {{HTTPMethod("POST")}}: 実行された結果が記載されたリソースがボディ部で返送された。
- {{HTTPMethod("TRACE")}}: メッセージのボディ部にサーバーで受信したリクエストメッセージを含んでいる。

{{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} の成功結果は `200` `OK` ではなく、 {{HTTPStatus("204")}} `No Content` (や、リソースの初回アップロードによる作成の場合は {{HTTPStatus("201")}} `Created` )である場合もある。

## ステータス

```
200 OK
```

## 仕様

| 仕様                                | タイトル                                                      |
| ----------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "200 OK" , "6.3.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザー互換性

{{Compat("http.status.200")}}

## 参照

- [HTTP request methods](/ja/docs/Web/HTTP/Methods)
