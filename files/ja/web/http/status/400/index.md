---
title: 400 Bad Request
slug: Web/HTTP/Status/400
l10n:
  sourceCommit: ae86913908651e6008079242691e06b5e01d1c78
---

{{HTTPSidebar}}

HTTP の **`400 Bad Request`** [クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#クライアントエラーレスポンス)ステータスコードは、サーバーがクライアントエラーとみなした何らかの理由により、サーバーがリクエストを処理しなかったことを示します。
`400` レスポンスの理由は、通常、リクエスト構文が不正であったり、リクエストメッセージのフレームが不正であったり、リクエストルーティングが不正であったりするものです。

`400` のレスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗することを想定しておくべきです。

## ステータス

```http
400 Bad Request
```

## 例

### リクエストの構文が不正な場合

ある {{Glossary("REST")}} API があり、ユーザーを管理するエンドポイントが `http://example.com/users` であったとします。`POST` リクエストで以下の本体を送ってユーザーを作成しようとするものの、エスケープされていない改行がある不正な JSON を使っているとします。

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 38

{
  "email": "b@example.com
",
  "username": "b.smith"
}
```

{{Glossary("HTTP Content", "コンテンツ")}}が有効な形式であれば、{{HTTPStatus("201", "201 Created")}} レスポンスまたはその他の成功メッセージが返されると予想されますが、代わりにサーバーは `400` を返し、レスポンス本体には、クライアントが適切に書式化されたリクエストでアクションを再試行できるようにするためのコンテキストを含む `message` フィールドが含まれます。

```http
HTTP/1.1 400 Bad Request
Content-Type: application/json
Content-Length: 71

{
  "error": "Bad request",
  "message": "Request body could not be read properly.",
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.400)
