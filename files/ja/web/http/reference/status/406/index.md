---
title: 406 Not Acceptable
slug: Web/HTTP/Reference/Status/406
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`406 Not Acceptable`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、リクエストの[積極的コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation#サーバー駆動型コンテンツネゴシエーション)のヘッダーで定義された受付可能な値に一致するレスポンスを、サーバーが生成できず、かつ、サーバーが既定の表現方法で提供することを望まないことを表します。

積極的コンテンツネゴシエーションヘッダーには次のものがあります。

- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}

サーバーは、リクエストで受け入れたヘッダーとは異なるレスポンスを返すことがあります。
このような場合、できれば、クライアントのコンテンツネゴシエーションの受け入れ可能な値のリストと一致しない既定のリソースを含む {{HTTPStatus("200")}} レスポンスを返す方が、 406 レスポンスを返すよりも望ましいでしょう。

サーバーが 406 を返す場合、メッセージ本体には、ユーザーが選べるよう、そのリソースで利用できる表現形式のリストが掲載されているべきですが、これについては標準的な方法は定義されていません。

## ステータス

```http
406 Not Acceptable
```

## 例

### コンテンツ型が利用できない

次のリクエストは、`www.example.com/docs/doc1` が `application/rtf` として文書内の情報を返信することに対応しているとします。

```http
GET /docs/doc1 HTTP/1.1
Host: example.com
Accept: application/rtf;
```

例えば、サーバーの実装では、既定のコンテンツ型である `text/html` や `application/json` に代替されず、代わりに 406 を返します。

```http
HTTP/1.1 406 Not Acceptable
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "UnsupportedType",
  "message": "Only 'text/html' or 'application/json' content types supported.",
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Accept")}}
- {{HTTPHeader("Accept-Encoding")}}
- {{HTTPHeader("Accept-Language")}}
- HTTP の[コンテンツネゴシエーション](/ja/docs/Web/HTTP/Guides/Content_negotiation)
