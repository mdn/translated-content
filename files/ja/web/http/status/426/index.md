---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
---

{{HTTPSidebar}}

HTTP の **`426 Upgrade Required`** クライアントエラーレスポンスコードは、サーバーが現在のプロトコルを使用してリクエストを実行することを拒否していることを示しますが、クライアントが別のプロトコルにアップグレードした後に発生する可能性があります。

サーバーはこのレスポンスとともに {{HTTPHeader("Upgrade")}} ヘッダーを送信し、必要なプロトコルを示します。

## ステータス

```
426 Upgrade Required
```

## 例

```
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/2.0 protocol
```

## 仕様書

| 仕様書                                             | 題名                                                          |
| -------------------------------------------------- | ------------------------------------------------------------- |
| {{RFC("7231", "426 Upgrade Required" , "6.5.15")}} | Hypertext Transfer Protocol (HTTP/1.1): Semantics and Content |

## 関連情報

- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101")}} `Switching Protocol`
