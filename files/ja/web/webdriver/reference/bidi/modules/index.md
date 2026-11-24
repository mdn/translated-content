---
title: WebDriver BiDi モジュール
short-title: モジュール
slug: Web/WebDriver/Reference/BiDi/Modules
l10n:
  sourceCommit: 253bed3def8e1680475ea75987d24ca62ee9f989
---

WebDriver BiDi プロトコルはモジュールに分けられています。
各モジュールは、特定のブラウザー自動化の用途で使用する関連する[コマンド](#コマンド)や[イベント](#イベント)のまとまりを表します。

コマンド名とイベント名にはどちらも、モジュール名を接頭辞として使用します。コマンドの場合は `module_name.command_name`、イベントの場合は `module_name.event_name` の形式です。

## モジュールの一覧

{{SubpagesWithSummaries}}

## コマンド

コマンドは、クライアントからブラウザーに送信する非同期操作です。ブラウザーに送信する各コマンドメッセージには、次の 3 つのフィールドがあります。

- `id`: コマンドに割り当てる数値です。HTTP では各リクエストがレスポンスを待ちますが、WebSocket 接続では複数のコマンドを同時に処理中にでき、レスポンスが順不同で届くことがあります。`id` を使用すると、各レスポンスを、それを発生させたコマンドと照合できます。
- `method`: 実行するコマンドで、`module_name.command_name` の形式です。
- `params`: コマンドに必要な追加情報を含むオブジェクトです。パラメーターを必要としないコマンドもありますが、空の `params` オブジェクト (`{}`) も送信する必要があります。

たとえば、新しいセッションを作成するには、次のように [`session.new`](/ja/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) コマンドを送信します。

```json
{
  "id": 1,
  "method": "session.new",
  "params": {}
}
```

各コマンドの結果として、`result` フィールドを含む成功レスポンス、または `error` フィールドを含むエラーレスポンスのいずれかが返されます。`result` の構造はコマンドごとに異なります。

[`session.new`](/ja/docs/Web/WebDriver/Reference/BiDi/Modules/session/new) と [`session.status`](/ja/docs/Web/WebDriver/Reference/BiDi/Modules/session/status) を除くすべてのコマンドには、有効な WebDriver BiDi セッションが必要です。

## イベント

イベントは、注目すべき事象が発生したときにブラウザーからクライアントに送信される通知です。
イベントを受信するには、クライアントはまず `session.subscribe` コマンドを使用してイベントを購読する必要があります。

クライアントは、特定のイベント、またはモジュール内のすべてのイベントを購読できます。たとえば、`"browsingContext.contextCreated"` を購読するとそのイベントだけが購読され、`"browsingContext"` を購読すると `browsingContext` モジュール内のすべてのイベントが購読されます。

ブラウザーから受信する各イベント通知には、次の 3 つのフィールドがあります。

- `type`: 常に `"event"` です。
- `method`: イベント名で、`module_name.event_name` の形式です。
- `params`: イベント固有のデータを含むオブジェクトです。`params` の構造はイベントごとに異なります。

次は、クライアントが `log.entryAdded` を購読しているときに、コンソールメッセージが記録された際にブラウザーから送信されるイベントメッセージの例です（簡潔にするため一部のフィールドを省略しています）。

```json
{
  "type": "event",
  "method": "log.entryAdded",
  "params": {
    "type": "console",
    "level": "info",
    "text": "Hello world",
    "timestamp": 1657282076037,
    "method": "log"
  }
}
```

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [WebDriver BiDi ウェブクライアント](https://firefox-dev.tools/bidi-web-client/web/)<sup>(英語)</sup>
