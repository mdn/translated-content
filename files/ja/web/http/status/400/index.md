---
title: 400 Bad Request
slug: Web/HTTP/Status/400
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`400 Bad Request`** レスポンスステータスコードは、何らかのクライアント側のエラーであると分かったために、サーバーがそのリクエストを処理しない (できない) ことを表します (例えば、リクエストの構文が正しくない、リクエストメッセージのフレーミングが無効、リクエスト経路に偽りがあるなど)。

> **警告:** クライアントは変更なしにこのリクエストを繰り返すべきではありません。

## ステータス

```
400 Bad Request
```

## 仕様書

| 仕様書                                       | 題名                                                          |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "400 Bad Request" , "6.5.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
