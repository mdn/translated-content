---
title: "Reason: CORS header 'Origin' cannot be added"
slug: Web/HTTP/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

## 理由

```plain
Reason: CORS header 'Origin' cannot be added
```

## エラーの原因

{{Glossary("user agent", "ユーザーエージェント")}}が必要な {{HTTPHeader("Origin")}} を {{Glossary("HTTP")}} リクエストに追加することができませんでした。すべての CORS リクエストは `Origin` ヘッダーを含んでいなければなりません。

これは例えば、 JavaScript のコードが複数のドメインのコンテンツにアクセスできるよう高い権限で実行されている場合などに起こることがあります。

## 関連情報

- [CORS のエラー](/ja/docs/Web/HTTP/CORS/Errors)
- 用語集: {{Glossary("CORS")}}
- [CORS 入門](/ja/docs/Web/HTTP/CORS)
