---
title: 428 Precondition Required
slug: Web/HTTP/Status/428
---

{{HTTPSidebar}}

HTTP **`428 Precondition Required`** レスポンスステータスコードは、サーバーがリクエストを[条件付き](/ja/docs/Web/HTTP/Conditional_requests)にする必要があることを示します。

通常、これは {{HTTPHeader("If-Match")}} のような必須の前提条件ヘッダーが**ない**ことを意味します。

前提条件ヘッダーがサーバー側の状態と**一致しない**場合、レスポンスは {{HTTPStatus(412)}} `Precondition Failed` である必要があります。

## ステータス

```
428 Precondition Required
```

## 仕様

| 仕様書                                             | タイトル                     |
| -------------------------------------------------- | ---------------------------- |
| {{RFC("6585", "428 Precondition Required" , "3")}} | Additional HTTP Status Codes |

## 関連情報

- [HTTP conditional requests](/ja/docs/Web/HTTP/Conditional_requests)
- {{HTTPHeader("If-Match")}}
- {{HTTPStatus(412)}}
