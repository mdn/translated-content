---
title: 504 Gateway Timeout
slug: Web/HTTP/Status/504
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) **`504 Gateway Timeout`** サーバーエラーレスポンスコードは、サーバーがゲートウェイまたはプロキシとして機能しているときに、リクエストを完了するために必要な上流のサーバーからのレスポンスが時間内に得られなかったことを示します。

> **メモ:** [ゲートウェイ](https://ja.wikipedia.org/wiki/ゲートウェイ)はネットワーク内の様々なものを指す可能性があり、 504 エラーはふつう、自分で修正できるものではありませんが、アクセスしようとしているウェブサーバーやプロキシで修正する必要があります。

## ステータス

```
504 Gateway Timeout
```

## 仕様書

| 仕様書                                           | 題名                                                          |
| ------------------------------------------------ | ------------------------------------------------------------- |
| {{RFC("7231", "504 Gateway Timeout" , "6.6.5")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.504")}}

## 関連情報

- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
- {{HTTPStatus(502)}}
