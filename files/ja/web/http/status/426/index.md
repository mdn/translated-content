---
title: 426 Upgrade Required
slug: Web/HTTP/Status/426
l10n:
  sourceCommit: ba53fe04589c36a2210d7549c003f3016093ef8e
---

{{HTTPSidebar}}

HTTP の **`426 Upgrade Required`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Status#クライアントエラーレスポンス)ステータスコードで、サーバーが現在のプロトコルを使用してリクエストを実行することを拒否していることを示しますが、クライアントが別のプロトコルにアップグレードした後に発生する可能性があります。

サーバーはこのレスポンスとともに {{HTTPHeader("Upgrade")}} ヘッダーを送信し、必要なプロトコルを示します。

## ステータス

```http
426 Upgrade Required
```

## 例

### HTTP/1.1 からのアップグレードが必要

このような GET リクエストがシステムにあったとします。

```http
GET /resources HTTP/1.1
Host: example.com
```

元のサーバーは、リクエストは [HTTP/3](/ja/docs/Glossary/HTTP_3) で行われるものと想定しています。

```http
HTTP/1.1 426 Upgrade Required
Upgrade: HTTP/2.0
Connection: Upgrade
Content-Length: 53
Content-Type: text/plain

This service requires use of the HTTP/3.0 protocol.
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
- {{HTTPHeader("Upgrade")}}
- {{HTTPStatus("101", "101 Switching Protocols")}}
