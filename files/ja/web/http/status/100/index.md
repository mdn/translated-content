---
title: 100 Continue
slug: Web/HTTP/Status/100
---

{{HTTPSidebar}}

HTTP **`100 Continue`** 情報ステータスレスポンスコードは、これまでのすべてが OK であり、クライアントが要求を続行するか、または要求がすでに終了している場合は無視することを示します。

サーバーが要求のヘッダーをチェックするようにするには、クライアントは最初の要求でヘッダーとして{{HTTPHeader("Expect")}}`: 100-continue` を送信し、本文を送信する前にレスポンスとして `100 Continue` ステータスコードを受け取ります。

## ステータス

```
100 Continue
```

## 仕様

| 仕様                                      | タイトル                                                      |
| ----------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "100 Continue" , "6.2.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの実装状況

{{Compat("http.status.100")}}

## 関連情報

- {{HTTPHeader("Expect")}}
- {{HTTPStatus(417)}}
