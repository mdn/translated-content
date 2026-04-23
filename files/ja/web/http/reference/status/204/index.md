---
title: 204 No Content
slug: Web/HTTP/Reference/Status/204
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

HTTP の **`204 No Content`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、リクエストが成功したものの、クライアントが現在のページから移動する必要がないことを示します。
`204`のレスポンスは既定ではキャッシュ可能であり、そのような場合は {{HTTPHeader("ETag")}} ヘッダーが含まれます。

これらのリクエストメソッドに対するレスポンスが `204 No Content` である場合、次の意味と結果が指定されています。

- {{HTTPMethod("DELETE")}}: 手続きは完了しており、これ以上の情報の提供は必要ありません。
- {{HTTPMethod("PUT")}}: このアクションは成功し、 {{HTTPHeader("ETag")}} 値には、対象リソースの新しい表現のエンティティタグが格納されます。

これは例えば、ウィキサイトで「保存して編集を続ける」機能を実装するときに使用される可能性があります。
この場合、ページを保存するために {{HTTPMethod("PUT")}} リクエストが使用されますが、エディターが他のページに置き換えられるべきではないことを示すために `204 No Content` レスポンスが送信されるものです。

レスポンスには、コンテンツや {{HTTPHeader("Content-Length")}} ヘッダーを含めてはなりません（コンテンツを記載したレスポンスは、ブラウザーによって拒否される場合があります）。

## ステータス

```http
204 No Content
```

## 例

### 画像を削除した後にレスポンスを受信

この例では、クライアントが `DELETE` メソッドを使用して画像を削除するリクエストを送信します。
リクエストには、リクエストを認証するためのトークンを含む {{HTTPHeader("Authorization")}} ヘッダーが含まれます。

```http
DELETE /image/123 HTTP/1.1
Host: example.com
Authorization: Bearer 1234abcd
```

画像の削除に成功すると、サーバーは本体なしの `204` レスポンスを返します。これは、クライアントに送信する必要がある追加の情報がないことを示しています。

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP リクエストのメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
