---
title: 205 Reset Content
slug: Web/HTTP/Reference/Status/205
l10n:
  sourceCommit: 74ab26a101ef2e4d5e5f25962033bc1042102677
---

HTTP の **`205 Reset Content`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、リクエストが成功し、クライアントに文書ビューをリセットするように指示します。

このレスポンスは、ユーザーがデータ入力に対応しているコンテンツを受信し、リクエストでユーザーが編集したデータを送信し、次の入力のためにコンテンツをリセットする必要がある場合の使用例に対応するためのものです。
「コンテンツのリセット」という指示は、フォームの内容をクリアすること、キャンバスの状態をリセットすること、または UI をリフレッシュすること、などの意味を表す可能性があり、実装はクライアントに依存します。

> [!NOTE]
> ステータスコード `205` を使用するウェブアプリケーションでは、クライアントが `205` レスポンスの後にコンテンツのリセットを処理することを想定しています。
> これは通常、 JavaScript で行われます。 `205` レスポンス後にフォームなどのコンテンツをリセットすることは、ブラウザーがネイティブで処理しないためです。

なお、レスポンスには、コンテンツや {{HTTPHeader("Content-Length")}} ヘッダーを含めてはいけません（コンテンツを伴うレスポンスは、ブラウザーによって拒否される場合があります）。
空のレスポンスは、空のチャンクを含む {{HTTPHeader("Transfer-Encoding", "Transfer-Encoding: chunked")}} ヘッダーを使用して示すこともできます。

## ステータス

```http
205 Reset Content
```

## 例

### `205 Reset Content` を受信した後でフォームをリセット

この例のクライアントは、 `POST` リクエストを送信して、 `Hello!` というコメントの付いたフォームを送信します。

```http
POST /submit HTTP/1.1
Host: example.com
Content-Type: application/x-www-form-urlencoded
Content-Length: 15

comment=Hello!
```

フォームの送信を正常に処理した後、サーバーは次の `205` レスポンスで応答し、クライアントがフォームをリセットすべきであることを示します。

```http
HTTP/1.1 205 Reset Content
Content-Type: text/html; charset=utf-8
Content-Length: 0
Date: Wed, 26 Jun 2024 12:00:00 GMT
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPStatus(204)}} No Content
- [HTTP リクエストのメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
