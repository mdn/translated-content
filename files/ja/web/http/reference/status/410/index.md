---
title: 410 Gone
slug: Web/HTTP/Reference/Status/410
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`410 Gone`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、元のサーバーで利用できなくなっている対象リソースにアクセスしていることを示します。この状態は永久的です。
410 レスポンスは既定でキャッシュ可能です。

クライアントは、 410 レスポンスを返すリソースへのリクエストを繰り返すべきではなく、ウェブサイト所有者は、このコードを返すリンクを除去または置き換えるべきです。
この状態が一時的なものか永久なのか分からない場合は、代わりに {{HTTPStatus(404)}} ステータスコードを使用してください。

## ステータス

```http
410 Gone
```

## 例

### 古いリソースへのリクエスト

次の `GET` リクエストは、宣伝コンテンツを掲載したページに対するものですが、そのページはすでに無効になっています。

```http
GET /promotions/summer-2023 HTTP/1.1
Host: example.com
```

```http
HTTP/1.1 410 Gone
Content-Type: text/html
Content-Length: 212

<html>
  <head>
    <title>Promotion expired</title>
  </head>
  <body>
    <h1>Promotion expired</h1>
    <p>Promotion no longer active! See <a href="/offers">current offers</a>.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus(404)}}
- [410 gone](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#410)
