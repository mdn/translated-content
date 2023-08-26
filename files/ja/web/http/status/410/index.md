---
title: 410 Gone
slug: Web/HTTP/Status/410
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`410 Gone`** クライエントエラーレスポンスコードは、元のサーバーで利用できなくなっている対象リソースにアクセスしていることを示します。この状態は永久的です。

この状態が一時的なものか永久なのか分からない場合は、代わりに {{HTTPStatus(404)}} ステータスコードを使用してください。

> **メモ:** 410 レスポンスは既定でキャッシュ可能です。

## ステータス

```
410 Gone
```

## 仕様書

| 仕様書                                | 題名                                                          |
| ------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "410 Gone" , "6.5.9")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.410")}}

## 関連情報

- {{HTTPStatus(404)}}
