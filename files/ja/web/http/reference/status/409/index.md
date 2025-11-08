---
title: 409 Conflict
slug: Web/HTTP/Reference/Status/409
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

HTTP **`409 Conflict`** は[クライアントエラーレスポンス](/ja/docs/Web/HTTP/Reference/Status#クライアントエラーレスポンス)のステータスコードで、リクエストが現在のサーバーの状態と競合したことを示します。

{{glossary("WebDAV")}} のリモートウェブオーサリングでは、 `409 conflict` レスポンスはクライアントに送信されるエラーであり、ユーザーが競合を解決してリクエストを再送信できるようにするためのものです。
例えば、 `/a/b/c/d/` という集合を作成するリクエストが行われ、 `/a/b/c/` が存在しない場合、リクエストは 409 で失敗しなければなりません。
また、サーバー上の既存のファイルよりも古いファイルをアップロードした場合にも 409 レスポンスが返されることがあり、バージョン制御の競合が発生します。

他にも、実装固有の目的で 409 レスポンスが使用される場合があります。例えば、サーバーが同じリソースを更新する複数のリクエストを受け取ったことを示す場合などです。

## ステータス

```http
409 Conflict
```

## 例

### 許可されていない同時進行のタスク

次の例では、システムで一般的なタスクを実行する自動化プロセスを開始したいと考えています。

```http
POST /tasks HTTP/1.1
Host: example.com
Content-Type: application/json

{
  "task": "emailDogOwners",
  "template": "pickup"
}
```

この実装では、サーバーは 2 つの同時ジョブの実行を拒否し、 409 を返します。これにより、クライアントは、そのアクションを実行する、あるいは別のタスクを実行するという意味なのかどうかを調べる機会が提供されます。

```http
HTTP/1.1 409 Conflict
Date: Wed, 26 Jun 2024 12:00:00 GMT
Server: Apache/2.4.1 (Unix)
Content-Type: application/json

{
  "code": "AutomationConflict",
  "task": "emailDogOwners",
  "message": "Task locked. Cannot start a new automation since job is already running.",
  "runningTaskId": "123"
}
```

## 仕様書

{{Specifications}}

## 関連情報

- [HTTP レスポンスステータスコード](/ja/docs/Web/HTTP/Reference/Status)
- {{HTTPMethod("PUT")}}
