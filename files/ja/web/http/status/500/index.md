---
title: 500 Internal Server Error
slug: Web/HTTP/Status/500
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`500 Internal Server Error`** サーバーエラーレスポンスコードは、サーバーがリクエストを実行を妨げる予期しない条件に遭遇したことを示します。

このエラーレスポンスは一般的な "catch-all" レスポンスです。普通、これはサーバーがレスポンスに対してより適切な 5xx のエラーコードを見つけることができなかったことを示します。サーバーの管理者は、ステータスコード 500 のようなエラーレスポンスをリクエストに関する詳細情報と共に記録し、将来同じエラーが発生することを防ぐ場合もあります。

## ステータス

```
500 Internal Server Error
```

## 仕様書

| 仕様書                                                 | 題名                                                          |
| ------------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "500 Internal Server Error" , "6.6.1")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.500")}}

## 関連情報

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
