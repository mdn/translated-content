---
title: 203 Non-Authoritative Information
slug: Web/HTTP/Reference/Status/203
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`203 Non-Authoritative Information`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、リクエストが成功したものの、変換{{Glossary("Proxy server", "プロキシー")}}によって元のサーバーの {{HTTPStatus("200")}} (`OK`) レスポンスからヘッダーやコンテンツが変更されたことを表します。

このステータスコードの目的は、変換プロキシーが、成功したレスポンスに変更が適用された際にクライアントに通知できるようにすることです。これは、コンテンツに関する後々の決定に影響を与える可能性があるためです。
メッセージへの変換は、リソースがミラーまたはバックアップから取得されたものであることを示すためにヘッダーを変更することを意味しますが、クライアントにとって望ましいと思われる方法でコンテンツを変更するという意味にもなります。
これらの変更には、マルウェアフィルター、ファイル形式の変換、プライバシーフィルター、またはクライアントへの今後のリクエストに関するヒントなどがあります。

`203` レスポンスは [`214`](/ja/docs/Web/HTTP/Reference/Headers/Warning#warning_codes) `Transformation Applied` の非推奨となった {{HTTPHeader("Warning")}} ヘッダーの値と似ていますが、こちらはどのステータスコードのレスポンスにも適用できます。

## ステータス

```http
203 Non-Authoritative Information
```

## 例

### フィルタリングされたメッセージレスポンスの受信

この例では、ユーザーが `GET` を用いて、 ID が `123` であるコンテンツに対して `example.com` リクエストします。

```http
GET /comments/123 HTTP/1.1
Host: example.com
```

プロキシーが、既知の危険な添付ファイルに対するマルウェアフィルタールールに基づいてメッセージを変更しました。
レスポンスコンテンツが変更され、 `attachment_url` の値が、所有するフィルターに関する情報を含むリンクに置き換えられました。

```http
HTTP/1.1 203 Non-Authoritative Information
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json
Content-Length: 123

{
  "comment": "履歴書を見てください",
  "attachment_url": "https://example.com/attachment-unavailable-faq"
}
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus("200")}}
- {{Glossary("Proxy server")}}
- {{HTTPHeader("Warning")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
