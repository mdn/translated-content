---
title: 403 Forbidden
slug: Web/HTTP/Reference/Status/403
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

HTTP の **`403 Forbidden`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、サーバーがリクエストを理解したものの、処理を拒否したことを示します。
このステータスは {{HTTPStatus("401")}} と似ていますが、 **`403 Forbidden`** レスポンスが異なるのは、認証または再認証を行っても違いがないことです。
リクエストの失敗は、リソースに対するその権限の不足やアクションなどのアプリケーションロジックに関連したものです。

`403` レスポンスを受け取ったクライアントは、リクエストを変更せずに繰り返しても、同じエラーで失敗する可能性があることを想定しておくべきです。
サーバーの所有者は、権限のないクライアントにリソースの存在を通知することが望ましくない場合、{{HTTPStatus("404")}} レスポンスを 403 の代わりに送信することを選択できます。

## ステータス

```http
403 Forbidden
```

## 例

### リクエストが権限が不十分なため失敗

次の例のリクエストは、ユーザー管理用の API に対して行われます。
リクエストには {{HTTPHeader("Authorization")}} ヘッダーが含まれており、アクセストークンを含む `Bearer` [認証スキーム](/ja/docs/Web/HTTP/Guides/Authentication#認証スキーム)を使用しています。

```http
DELETE /users/123 HTTP/1.1
Host: example.com
Authorization: Bearer abcd123
```

サーバーはリクエストを認証しましたが、権限が不十分なためアクションは失敗し、レスポンス本体には失敗の理由が格納されています。

```http
HTTP/1.1 403 Forbidden
Date: Tue, 02 Jul 2024 12:56:49 GMT
Content-Type: application/json
Content-Length: 88

{
  "error": "InsufficientPermissions",
  "message": "Deleting users requires the 'admin' role."
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("401")}}
- [HTTP Status Code Definitions](https://httpwg.org/specs/rfc9110.html#status.403)
