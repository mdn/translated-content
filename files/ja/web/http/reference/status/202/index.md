---
title: 202 Accepted
slug: Web/HTTP/Reference/Status/202
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP の **`202 Accepted`** は[成功レスポンス](/ja/docs/Web/HTTP/Reference/Status#成功レスポンス)ステータスコードで、リクエストを受け取ったが、処理が完了していないことを表します。
実際には、処理はまだ始まっていない可能性もあります。サーバーが処理しようとした際に、タスクやアクションが失敗したり、許可されなかったりする場合があります。

`202` のレスポンスは、確定的なものではなく、処理結果を後から示す非同期 HTTP レスポンスを送信する方法がないということを意味しています。
このレスポンスコードは、通常、リクエストが別のプロセスまたはサーバーによって処理される場合や、リクエストがバッチ処理される場合に使用されます。

## ステータス

```http
202 Accepted
```

## 例

### 自動化タスクの開始

次の例では、引き取りの課題について犬の飼い主にメールを送信する自動化プロセスを開始したいと考えています。

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

このレスポンスは、最初にリクエストが処理のために受け入れられたことを示します。
レスポンス本体に URL が送信されるため、クライアントは課題のステータス変更を追跡することができます。

```http
HTTP/1.1 202 Accepted
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "message": "Request accepted. Starting to process task.",
  "taskId": "123",
  "monitorUrl": "http://example.com/tasks/123/status"
}
```

## 仕様書

{{Specifications}}

## 関連情報

- {{HTTPHeader("Accept")}}
- [HTTP リクエストメソッド](/ja/docs/Web/HTTP/Reference/Methods)
- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
