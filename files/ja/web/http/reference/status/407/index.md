---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Reference/Status/407
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`407 Proxy Authentication Required`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、ブラウザーとリクエストされたリソースにアクセスできるサーバーとの間にある{{Glossary("proxy server", "プロキシーサーバー")}}に有効な認証情報が不足しているため、リクエストが成功されていないことを示します。

このレスポンスは、リクエストを正しく認証する方法に関する情報が含まれている {{HTTPHeader("Proxy-Authenticate")}} ヘッダーと共に送信されます。
クライアントは {{HTTPHeader("Proxy-Authorization")}} ヘッダーフィールドを新しく付けたり、置換したりしてリクエストを繰り返すことができます。

## ステータス

```http
407 Proxy Authentication Required
```

## 例

### プロキシー認証

`example.com/admin` に対して GET リクエストが行われます。

```http
GET /admin HTTP/1.1
Host: example.com
```

途中で、仲介者がクライアントにクライアント認証が必要であることを通知し、認証スキームに関する情報を提供します。

```http
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## 仕様書

{{Specifications}}

## 参照

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- [HTTP 認証](/ja/docs/Web/HTTP/Guides/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
