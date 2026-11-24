---
title: webSocketUrl
slug: Web/WebDriver/Reference/Capabilities/webSocketUrl
l10n:
  sourceCommit: fb6aa6056407ba69d96da0fe140a1ae2320f0fb2
---

`webSocketUrl` キャパビリティを `true` に設定すると、ブラウザー内で WebSocket サーバーが起動し、[WebDriver BiDi プロトコル](https://w3c.github.io/webdriver-bidi/)<sup>(英語)</sup> を使用した双方向通信に対応します。
[New Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) リクエストで `webSocketUrl` キャパビリティを `true` に設定し、セッションの開始が成功すると、レスポンスの `capabilities` フィールド内の `webSocketUrl` プロパティに WebSocket サーバーの URL が設定されます。

## 例

`webSocketUrl` キャパビリティを `true` に設定して WebSocket URL を要求する例:

リクエスト:

```http
POST /session HTTP/1.1
{"capabilities": {"alwaysMatch": {"webSocketUrl": true}}}
```

レスポンス:

```json
{
  "value": {
    "capabilities": {
      "webSocketUrl": "ws://localhost:9222/session/571f206f-c3fe-794c-9218-77fa89595eb9"
    },
    "sessionId": "571f206f-c3fe-794c-9218-77fa89595eb9"
  }
}
```

## 関連情報

- [WebDriver のキャパビリティ一覧](/ja/docs/Web/WebDriver/Reference/Capabilities)
- [New Session](/ja/docs/Web/WebDriver/Reference/Classic/Commands/NewSession) コマンド
- [WebDriver BiDi 接続の確立](https://w3c.github.io/webdriver-bidi/#establishing)<sup>(英語)</sup>
