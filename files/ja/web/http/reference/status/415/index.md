---
title: 415 Unsupported Media Type
slug: Web/HTTP/Reference/Status/415
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`415 Unsupported Media Type`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)ステータスコードで、メッセージの{{Glossary("HTTP Content", "コンテンツ")}}が対応していない形式であるため、サーバーがリクエストの受け入れを拒否することを示します。

形式で問題が発生するのは、リクエストの {{HTTPHeader("Content-Type")}} または {{HTTPHeader("Content-Encoding")}} で示されたものであったり、リクエストメッセージのコンテンツを処理した結果であることであったりします。
サーバーによっては、リクエストでリクエストされた `Content-Type` を厳密にチェックすることがあります。
例えば、 {{glossary("UTF-8")}} 文字セットを指定する際に、`UTF-8` の代わりに `UTF8` と入力すると、サーバーがメディア型を不正なものとみなす原因となる場合があります。

## ステータス

```http
415 Unsupported Media Type
```

## 例

### コンテンツ型がない場合

次の例では、 {{HTTPHeader("Content-Type")}} ヘッダーが完全に欠落しています。

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

サーバーの実装が、そのエンドポイントでのリクエストに対して、少なくとも MIME タイプ `Content-Type: application/json;` を期待している場合、次のレスポンスを送信することがあります。

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

### 無効なコンテンツ型

次の例では、{{Glossary("HTTP Content", "コンテンツ")}}がリクエスト本体にある場合、 {{HTTPHeader("Content-Type")}} ヘッダーが誤って URL エンコードされたフォームデータに設定されています。

```http
POST /comments HTTP/1.1
Host: example.com
Content-Length: 23
Content-Type: application/x-www-form-urlencoded

{
  "user": "belgin",
  "comment": "LGTM!"
}
```

この場合、サーバーは 415 を返答し、リクエストで要求されるコンテンツ型を {{HTTPHeader("Accept-Post")}} ヘッダーで返します。

```http
HTTP/1.1 415 Unsupported Media Type
Date: Fri, 28 Jun 2024 12:00:00 GMT
Server: Apache/2.4.41 (Ubuntu)
Accept-Post: application/json; charset=UTF-8
Content-Length: 0
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Accept-Post")}}
