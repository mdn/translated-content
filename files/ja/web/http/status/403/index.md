---
title: 403 Forbidden
slug: Web/HTTP/Status/403
---

{{HTTPSidebar}}

HTTP の **`403 Forbidden`** クライアントエラーレスポンスコードは、サーバーがリクエストを理解したものの、認可が拒否されたことを示します。

このステータスは {{HTTPStatus("401")}} に似ていますが、この場合は再認証しても結果は変わりません。アクセスは恒久的に禁止されており、リソースにアクセスする権限が不足しているなど、アプリケーションのロジックに結びついたものです。

## ステータス

```
403 Forbidden
```

## レスポンスの例

```
HTTP/1.1 403 Forbidden
Date: Wed, 21 Oct 2015 07:28:00 GMT
```

## 仕様書

| 仕様書                                     | 題名                            |
| ------------------------------------------ | ------------------------------- |
| {{RFC("7231", "403 Forbidden" , "6.5.3")}} | HTTP/1.1: Semantics and Content |

## ブラウザーの互換性

{{Compat("http.status.403")}}

## 関連情報

- {{HTTPStatus("401")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
