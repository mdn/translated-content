---
title: 428 Precondition Required
slug: Web/HTTP/Reference/Status/428
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`428 Precondition Required`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、サーバーがリクエストを[条件付き](/ja/docs/Web/HTTP/Guides/Conditional_requests)にする必要があることを示します。

通常、これは {{HTTPHeader("If-Match")}} のような必須の前提条件ヘッダーが**ない**ことを意味します。
前提条件ヘッダーがサーバー側の状態と**一致しない**場合、レスポンスは {{HTTPStatus("412", "412 Precondition Failed")}} である必要があります。

## ステータス

```http
428 Precondition Required
```

## 例

### リクエストでの前提条件の欠落

クライアントがサーバーからリソース `my-document` を取得し、それをローカルで更新した後、更新した文書をサーバーに送り返そうとします。

```http
PUT /docs/my-document HTTP/1.1
Host: example.com
Content-Type: application/json

{
  […]
```

サーバーの実装では、特定のパスまたは文書型に対するすべての {{HTTPMethod("PUT")}} リクエストが条件付きで、 428 レスポンスを送信することが要求されます。

```http
HTTP/1.1 428 Precondition Required
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "MissingPrecondition",
  "message": "Updating documents requires a precondition header.",
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP 条件付きリクエスト](/ja/docs/Web/HTTP/Guides/Conditional_requests)
- 条件付きヘッダー: {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}, {{HTTPHeader("If-Modified-Since")}}, {{HTTPHeader("If-Unmodified-Since")}}, {{HTTPHeader("If-Range")}}
- {{HTTPStatus(412)}}
