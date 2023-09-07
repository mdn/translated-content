---
title: 411 Length Required
slug: Web/HTTP/Status/411
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`411 Length Required`** クライアントエラーレスポンスコードは、サーバーが定義された {{HTTPHeader("Content-Length")}} ヘッダーのないリクエストの受け入れを拒否することを示します。

> **メモ:** 仕様によっては、一連のチャンクでデータを送信する場合 `Content-Length` ヘッダは省略され、各チャンクの先頭に、現在のチャンクの長さを 16 進形式で追加する必要があります。詳細は {{HTTPHeader("Transfer-Encoding")}} を参照してください。

## ステータス

```
411 Length Required
```

## 仕様

| 仕様書                                            | タイトル                                                      |
| ------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "411 Length Required" , "6.5.10")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Transfer-Encoding")}}
