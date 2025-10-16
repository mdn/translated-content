---
title: 303 See Other
slug: Web/HTTP/Reference/Status/303
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`303 See Other`** は[リダイレクトレスポンス](/ja/docs/Web/HTTP/Reference/Status#リダイレクトメッセージ)ステータスコードで、ブラウザーがリクエストされたリソースをレンダリングするのではなく、 {{HTTPHeader("Location")}} ヘッダー内の URL にリダイレクトすべきであることを示します。

このレスポンスコードは、 {{HTTPMethod("PUT")}} や {{HTTPMethod("POST")}} メソッドの結果として返されることが多く、クライアントが確認を受け取ったり、実世界のオブジェクトの表現を表示したりするために使用されます（[HTTP range-14](https://en.wikipedia.org/wiki/HTTPRange-14) を参照）。
リダイレクトされたリソースを取得する方法は、常に {{HTTPMethod("GET")}} を使用してください。

## ステータス

```http
303 See Other
```

## 例

### フォーム送信に対する 303 レスポンス

この例のクライアントは、一般的な加入フォームを送信する {{HTTPMethod("POST")}} リクエストを送信します。

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

サーバーは、 `303` ステータスでレスポンスを返し、確認ページを {{HTTPHeader("Location")}} ヘッダーに含めることがあります。これにより、ユーザーはレスポンスを受信した後、そこにリダイレクトされます。

```http
HTTP/1.1 303 See Other
Location: https://www.example.com/confirmation/event/123
Content-Type: text/html; charset=UTF-8
Content-Length: 0
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP のリダイレクト](/ja/docs/Web/HTTP/Guides/Redirections)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("302", "302 Found")}} 一時的なリダイレクト
- {{HTTPStatus("307", "307 Temporary Redirect")}} 使用されたメソッドが変更されない場面でこのステータスコードと等価。
