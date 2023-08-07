---
title: 415 Unsupported Media Type
slug: Web/HTTP/Status/415
---

{{HTTPSidebar}}

HTTP **`415 Unsupported Media Type`** クライアントエラーレスポンスコードは、ペイロードフォーマットがサポートされていないフォーマットであるため、サーバーがリクエストの受け入れを拒否することを示します。

フォーマットの問題はリクエストされた {{HTTPHeader("Content-Type")}} または {{HTTPHeader("Content-Encoding")}} によるものか、または直接データを検査した結果に起因する可能性があります。

## ステータス

```
415 Unsupported Media Type
```

## 仕様

| 仕様書                                                   | タイトル                                                      |
| -------------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "415 Unsupported Media Type" , "6.5.13")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept")}}
