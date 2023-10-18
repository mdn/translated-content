---
title: 503 Service Unavailable
slug: Web/HTTP/Status/503
---

{{HTTPSidebar}}

HyperText Transfer Protocol (HTTP) の **`503 Service Unavailable`** サーバーエラーレスポンスコードで、サーバーがリクエストを処理する準備ができていないことを示します。

一般的な原因は、サーバーがメンテナンス中のために停止していることや、過負荷状態になっていることです。このレスポンスは、一時的な条件に使用する必要があり、 {{HTTPHeader("Retry-After")}} HTTP ヘッダーには、もし可能であれば、サービスの復旧に要する予想時間を含めるべきです。

> **メモ:** このレスポンスと共に、問題を分かりやすく説明するページを送信する必要があります。

503 のステータスはしばしば一時的な状態であり、レスポンスは頻繁にキャッシュされるべきではないため、このレスポンスと共に送信されるキャッシュ関連のヘッダーは注意する必要があります。

## ステータス

```
503 Service Unavailable
```

## 仕様書

| 仕様書                                               | 題名                                                          |
| ---------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "503 Service Unavailable" , "6.6.4")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## ブラウザーの互換性

以下に示す情報は、 MDN の GitHub から取得したものです。 (<https://github.com/mdn/browser-compat-data>).

{{Compat("http.status.503")}}

## 関連情報

- {{HTTPHeader("Retry-After")}}
- [HTTP/1.1: Status Code Definitions](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html)
