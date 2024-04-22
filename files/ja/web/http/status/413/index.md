---
title: 413 Payload Too Large
slug: Web/HTTP/Status/413
---

{{HTTPSidebar}}

HTTP **`413 Payload Too Large`** レスポンスステータスコードは、リクエストエンティティがサーバーによって定義された制限よりも大きいことを示します。サーバーは接続を閉じるか {{HTTPHeader("Retry-After")}} ヘッダーフィールドを返します。

## ステータス

```
413 Payload Too Large
```

## 仕様書

| 仕様書                                              | 題名                                                          |
| --------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "413 Payload Too Large" , "6.5.11")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPHeader("Connection")}}
- {{HTTPHeader("Retry-After")}}
