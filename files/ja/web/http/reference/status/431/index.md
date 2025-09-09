---
title: 431 Request Header Fields Too Large
slug: Web/HTTP/Reference/Status/431
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`431 Request Header Fields Too Large`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、リクエストの [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)が長すぎるためにサーバーがリクエストの処理を拒否したことを示します。
ヘッダーフィールドを縮小した上で、リクエストを再送信することができます。

431 はリクエストヘッダーの**全体の大きさ**が大きすぎる場合や、**単一の**ヘッダーフィールドが長すぎる場合に使用することができます。
このエラーが発生した場合は、レスポンス本文でこの二つの問題のどちらであるかを示すと役立ちます。できれば、どのヘッダーが長すぎるのかも含めたほうがよいでしょう。
これによってユーザーが、クッキーを消去するなど、問題の解決を試みることができます。

サーバーは次のような場合に、よくこのステータスを生成します。

- {{httpheader("Referer")}} の URL が長すぎる場合
- そのリクエストで送られた [Cookie](/ja/docs/Web/HTTP/Guides/Cookies) が多すぎる場合

## ステータス

```http
431 Request Header Fields Too Large
```

## 例

### ヘッダーフィールドが長すぎる場合

以下の例では、 {{httpheader("Cookie")}} ヘッダーがリクエストの中で長すぎます。

```http
GET /doc HTTP/1.1
Host: example.com
Cookie: cookie1=value1; cookie2=value2; cookie3=[…]
```

サーバーは、問題となったヘッダーを示すメッセージで応答します。

```http
HTTP/1.1 431 Request Header Fields Too Large
Content-Type: text/html

<!doctype html>
  <head>
    <title>Request Header Fields Too Large</title>
  </head>
  <body>
    <h1>Request Header Fields Too Large</h1>
    <p>The "Cookie" header was too large.</p>
  </body>
</html>
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("414", "414 URI Too Long")}}
- {{Glossary("Request header")}}
