---
title: 200 OK
slug: Web/HTTP/Reference/Status/200
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`200 OK`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、リクエストが成功したことを示します。
`200 OK` レスポンスは既定でキャッシュ可能です。

`200 OK` レスポンスは、 HTTP リクエストメソッドによって意味と形式が異なります。
それぞれのメソッドによる違いは次のとおりです。

- {{HTTPMethod("GET")}}: リソースがサーバーによって取得され、レスポンス本体に含まれています。
- {{HTTPMethod("POST")}}: アクションに成功しました。レスポンスには結果を詳細に表すメッセージ本体が入ります。
- {{HTTPMethod("HEAD")}}: `GET` と同等ですが、メッセージ本体はありません。
- {{HTTPMethod("TRACE")}}: メッセージ本体に、サーバーが受信したリクエストメッセージが格納されます。

{{HTTPMethod("PUT")}} や {{HTTPMethod("DELETE")}} リクエストの成功は `200 OK` になることもありますが、ふつうは異なります。
リソースがアップロードされたり初回作成されたりした場合は {{HTTPStatus("201", "201 Created")}} に、リソースの削除に成功した場合は {{HTTPStatus("204", "204 No Content")}} になることの方が一般的です。

## ステータス

```http
200 OK
```

## 例

### `200 OK` を `GET` リクエストで受信

この例では、 `GET` の `https://example.com` への成功リクエストは `200 OK` レスポンスを返します。
このレスポンスには、ヘッダーと HTML コンテンツを含むメッセージ本体が含まれます。

```http
HTTP/1.1 200 OK
Accept-Ranges: bytes
Age: 294510
Cache-Control: max-age=604800
Content-Type: text/html; charset=UTF-8
Date: Fri, 21 Jun 2024 14:18:33 GMT
Etag: "3147526947"
Expires: Fri, 28 Jun 2024 14:18:33 GMT
Last-Modified: Thu, 17 Oct 2019 07:18:26 GMT
Server: ECAcc (nyd/D10E)
X-Cache: HIT
Content-Length: 1256

<!doctype html>
<!-- HTML content follows here -->
```

### `200 OK` をフォーム送信の `POST` リクエストで受信

`http://example.com/subscribe` で契約を管理するためのエンドポイントにデータを送信するフォームがあったとします。
ユーザーが契約するための `POST` リクエストは、次のようになります。

```http
POST /subscribe HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 50

name=Brian%20Smith&email=brian.smith%40example.com
```

この例では、 `200 OK` ステータスを持つレスポンスは次のようになります。

```http
HTTP/1.1 200 OK
Content-Type: application/json

{
  "message": "User subscription pending. A confirmation email has been sent.",
  "subscription": {
    "name": "Brian Smith",
    "email": "brian.smith@example.com",
    "id": 123,
    "feed": "default"
  }
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- 用語集: {{Glossary("Idempotent", "べき等")}}
