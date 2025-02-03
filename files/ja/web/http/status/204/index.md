---
title: 204 No Content
slug: Web/HTTP/Status/204
l10n:
  sourceCommit: 3f68a9604259dfa862dd741dc88ebc8fb5fa10fe
---

{{HTTPSidebar}}

HTTP の **`204 No Content`** は[成功レスポンス](/ja/docs/Web/HTTP/Status#成功レスポンス)ステータスコードで、リクエストが成功したものの、クライアントが現在のページから移動する必要がないことを示します。
`204`のレスポンスは既定ではキャッシュ可能であり、そのような場合は {{HTTPHeader("ETag")}} ヘッダーが含まれます。

これらのリクエストメソッドに対するレスポンスが `204 No Content` である場合、次の意味と結果が指定されています。

- {{HTTPMethod("DELETE")}}: 手続きは完了しており、これ以上の情報の提供は必要ありません。
- {{HTTPMethod("PUT")}}: このアクションは成功し、 {{HTTPHeader("ETag")}} 値には、対象リソースの新しい表現のエンティティタグが格納されます。

これは例えば、ウィキサイトで「保存して編集を続ける」機能を実装するときに使用される可能性があります。
この場合、ページを保存するために {{HTTPMethod("PUT")}} リクエストが使用されますが、エディターが他のページに置き換えられるべきではないことを示すために `204 No Content` レスポンスが送信されるものです。

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

画像の削除に成功すると、サーバーは本体なしの `204` レスポンス（および明示的な {{HTTPHeader("Content-Length", "Content-Length: 0")}} ヘッダー）を返します。これは、クライアントに送信する必要がある追加の情報がないことを示しています。

```http
HTTP/1.1 204 No Content
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Length: 0
```

## 仕様書

{{Specifications}}

### 互換性のメモ

このステータスコードは、本文のないレスポンスを意図していますが、サーバーがヘッダーの後に誤ってデータを含めることがあります。このモンダイは、永続化された接続で見られ、不正な本体に、その後のリクエストに対する明確なレスポンスが含まれることがあります。
HTTPプロトコルでは、このようなレスポンスをさまざまに処理するようブラウザーに許可しています（[HTTPWG `http-core` GitHub repository](https://github.com/httpwg/http-core/issues/26) には仕様書のテキストに関する進行中の議論があります）。

Apple Safari はそのようなデータを拒否します。
Google Chrome と Microsoft Edge は、有効なレスポンスの前にある無効な最大 4 バイトを破棄します。
Firefox は、有効なレスポンスの前にある 1 キロバイトを超える無効なデータを許容します。

## 関連情報

- [HTTP リクエストのメソッド](/ja/docs/Web/HTTP/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Status)
