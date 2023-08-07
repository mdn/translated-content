---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Status/203
---

{{HTTPSidebar}}

HTTP の **`203 Non-Authoritative Information`** レスポンスステータスは、リクエストが成功したものの、変換{{Glossary("Proxy server", "プロキシ")}}によって元のサーバーの{{HTTPStatus("200")}} (`OK`) レスポンスからペイロードが変更されたことを表します。

`203` レスポンスは [`214`](/ja/docs/Web/HTTP/Headers/Warning#Warning_codes) の値、すなわち `Transformation Applied` の {{HTTPHeader("Warning")}} ヘッダーコードと似ていますが、こちらはどのステータスコードのレスポンスにも適用できるという利点があります。

## ステータス

```
203 Non-Authoritative Information
```

## 仕様書

| 仕様書                                                         | 題名                                                          |
| -------------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "203 Non-Authoritative Information" , "6.3.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
