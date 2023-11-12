---
title: 510 Not Extended
slug: Web/HTTP/Status/510
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`510 Not Extended`** レスポンスステータスコードは、[RFC 2774](https://tools.ietf.org/html/rfc2774) が定義する HTTP 拡張フレームワークのコンテキストで送信されます。

その仕様では、クライアントは、使用する拡張を記述する拡張宣言を含むリクエストを送信できます。 サーバーがそのようなリクエストを受信しても、記述されている拡張をそのリクエストに対してサポートしていない場合、サーバーは 510 ステータスコードで応答します。

## ステータス

```
510 Not Extended
```

## 仕様

| 仕様                                      | タイトル                    |
| ----------------------------------------- | --------------------------- |
| {{RFC("2774", "510 Not Extended" , "7")}} | An HTTP Extension Framework |
