---
title: 417 Expectation Failed
slug: Web/HTTP/Reference/Status/417
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`417 Expectation Failed`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、リクエストの {{HTTPHeader("Expect")}} ヘッダーに期待された値が設定されていなかったことを示します。
417 のレスポンスを受け取った後、クライアントは `Expect` リクエストヘッダーを付けずにリクエストを繰り返し、 {{HTTPStatus("100")}} レスポンスを待たずにリクエスト本体にファイルを含める必要があります。
詳細は {{HTTPHeader("Expect")}} ヘッダーを参照してください。

## ステータス

```http
417 Expectation Failed
```

## 例

### 期待値に対応していない場合

次の PUT リクエストは、サーバーに意図するファイルのアップロードに関する情報を送信します。
クライアントは `Expect: 100-continue` ヘッダーを使用し、{{HTTPStatus("405")}}、{{HTTPStatus("401")}}、{{HTTPStatus("403")}} などのエラーを引き起こす可能性のあるデータをネットワーク上で送信しないよう、リクエスト本体を使用しません。

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987
Expect: 100-continue
```

このサーバー実装例では、 `Expect` ヘッダーは対応しておらず、どのような値でも `Expect` ヘッダーが存在すると 417 レスポンスが返されます。

```http
HTTP/1.1 417 Expectation Failed
Date: Fri, 28 Jun 2024 11:40:58 GMT
```

クライアントは期待せずにリクエストを行い、リクエスト本体に{{Glossary("HTTP Content", "コンテンツ")}}を含めます。

```http
PUT /videos HTTP/1.1
Host: uploads.example.com
Content-Type: video/h264
Content-Length: 1234567890987

[…]
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPStatus("100", "100 Continue")}}
- {{HTTPHeader("Expect")}}
