---
title: 407 Proxy Authentication Required
slug: Web/HTTP/Status/407
---

{{HTTPSidebar}}

HTTP **`407 Proxy Authentication Required` **クライアントエラーというステータスのレスポンスコードは、リクエストが適用されていないことを示しています。なぜなら、ブラウザーと要求されたリソースにアクセスできるサーバーの間にあるプロキシサーバーに有効な認証情報が不足しているためです。

このステータスは、正しい認証の仕方に関する情報を含む {{HTTPHeader("Proxy-Authenticate")}} ヘッダーと共に送信されます。

## ステータス

```
407 Proxy Authentication Required
```

## レスポンス例

```
HTTP/1.1 407 Proxy Authentication Required
Date: Wed, 21 Oct 2015 07:28:00 GMT
Proxy-Authenticate: Basic realm="Access to internal site"
```

## 仕様

| Specification                                                | Title                    |
| ------------------------------------------------------------ | ------------------------ |
| {{RFC("7235", "407 Proxy Authentication Required" , "3.2")}} | HTTP/1.1: Authentication |

## ブラウザー互換性

{{Compat("http.status.407")}}

## 参照

- [HTTP authentication](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("401")}}, {{HTTPStatus("403")}}
