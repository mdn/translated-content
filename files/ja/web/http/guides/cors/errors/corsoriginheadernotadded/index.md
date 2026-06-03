---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

## 理由

```plain
Reason: CORS header 'Origin' cannot be added
```

## エラーの原因

{{Glossary("user agent", "ユーザーエージェント")}}が必要な {{HTTPHeader("Origin")}} を {{Glossary("HTTP")}} リクエストに追加することができませんでした。すべての CORS リクエストは `Origin` ヘッダーを含んでいなければなりません。

これは例えば、 JavaScript のコードが複数のドメインのコンテンツにアクセスできるよう高い権限で実行されている場合などに起こることがあります。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/Guides/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/Guides/CORS)
