---
title: 408 Request Timeout
slug: Web/HTTP/Status/408
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`408 Request Timeout`** レスポンスステータスコードはサーバーがこの未使用のコネクションをシャットダウンすることを意味します。 _クライアントからの以前のリクエストがなくても_、一部のサーバーによってアイドル状態のコネクションで送信されます。

`408` はサーバーがコネクションを待機し続けるのではなく、閉じることを決定することを意味しているため、サーバーはレスポンスで "close" {{HTTPHeader("Connection")}} ヘッダーフィールドを送信する必要があります。

このレスポンスは HTTP 事前接続メカニズム使用してサーフィンを高速化するために、Chrome や、Firefox 27+、IE9 などの、いくつかのブラウザーでよく利用されます。

> **メモ:** このメッセージを送信せずに接続をシャットダウンするサーバーもあります。

## ステータス

```
408 Request Timeout
```

## 仕様

| 仕様書                                           | タイトル                                                      |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "408 Request Timeout" , "6.5.7")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 参照

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("X-DNS-Prefetch-Control")}}
