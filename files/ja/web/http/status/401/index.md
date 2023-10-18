---
title: 401 Unauthorized
slug: Web/HTTP/Status/401
---

{{HTTPSidebar}}

HTTP **`401 Unauthorized`** は、有効な認証資格が不足していることによりリクエストが適用されないことを示すクライアントエラーのレスポンスコードです。

このステータスは、正しい認証方法を含む {{HTTPHeader("WWW-Authenticate")}} ヘッダーとともに送信されます。

このステータスは {{HTTPStatus("403")}} に似ていますが、この場合は再認証が可能です。

## ステータス

```
401 Unauthorized
```

## 例

```
HTTP/1.1 401 Unauthorized
Date: Wed, 21 Oct 2015 07:28:00 GMT
WWW-Authenticate: Basic realm="Access to staging site"
```

## 仕様

| 仕様                                        | タイトル                 |
| ------------------------------------------- | ------------------------ |
| {{RFC("7235", "401 Unauthorized" , "3.1")}} | HTTP/1.1: Authentication |

## ブラウザー互換性

{{Compat("http.status.401")}}

## 参照

- [HTTP authentication](/ja/docs/Web/HTTP/Authentication)
- {{HTTPHeader("WWW-Authenticate")}}
- {{HTTPHeader("Authorization")}}
- {{HTTPHeader("Proxy-Authorization")}}
- {{HTTPHeader("Proxy-Authenticate")}}
- {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
