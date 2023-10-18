---
title: 502 Bad Gateway
slug: Web/HTTP/Status/502
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`502 Bad Gateway`** サーバーエラーレスポンスコードは、ゲートウェイまたはプロキシとして機能しているサーバーが上流のサーバーから無効なレスポンスを受け取ったことを示しています。

> **メモ:** [ゲートウェイ](https://ja.wikipedia.org/wiki/ゲートウェイ)はネットワークの様々なものを指す可能性があり、 502 エラーは通常修正できるものではありませんが、ウェブサーバーまたはアクセスを中継させようとしているプロキシによる修正が必要です。

## ステータス

```
502 Bad Gateway
```

## 仕様書

| 仕様書                                       | 題名                                                          |
| -------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "502 Bad Gateway" , "6.6.3")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.502")}}

## 関連情報

- {{HTTPStatus(504)}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
