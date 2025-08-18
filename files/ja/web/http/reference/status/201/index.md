---
title: 201 Created
slug: Web/HTTP/Reference/Status/201
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`201 Created`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、 HTTP リクエストが成功してリソースの作成が完了したことを表します。
このステータスコードの一般的な使用例は、 {{HTTPMethod("POST")}} リクエストの結果です。

新しいリソース、または新しいリソースの説明とリンクは、レスポンスが返される前に作成されます。
新しく作成されたアイテムは、メッセージ本体に返され、位置は**最初のリクエストの URL**、またはレスポンスの {{HTTPHeader("Location")}} ヘッダーの値の URL のどちらかになります。

## ステータス

```http
201 Created
```

## 例

### ユーザーを作成したことを示すレスポンスの受信

ユーザー管理用の REST API があり、エンドポイントが `http://example.com/users` であるとしましょう。この例では、ユーザーを作成するために、次の本体を持つ `POST` リクエストを送信します。

```http
POST /users HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "firstName": "Brian",
  "lastName": "Smith",
  "email": "brian.smith@example.com"
}
```

ユーザー作成に成功すると、 `201 Created` というレスポンスは以下のように表示されます。

```http
HTTP/1.1 201 Created
Content-Type: application/json
Location: http://example.com/users/123

{
  "message": "ユーザーを作成しました",
  "user": {
    "id": 123,
    "firstName": "Brian",
    "lastName": "Smith",
    "email": "brian.smith@example.com"
  }
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
