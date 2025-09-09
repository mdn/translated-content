---
title: "Permissions-Policy: browsing-topics"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/browsing-topics
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}{{non-standard_header}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーの `browsing-topics` ディレクティブは、[トピック API](/ja/docs/Web/API/Topics_API) へのアクセスを制御します。

ポリシーでトピック API の使用が明確に禁止されている場合、 {{domxref("Document.browsingTopics()")}} メソッドを呼び出したり、 {{httpheader("Sec-Browsing-Topics")}} ヘッダーを含むリクエストを送信したりすると、 `NotAllowedError` の {{domxref("DOMException")}} が発生します。

## 構文

```http
Permissions-Policy: browsing-topics=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`browsing-topics` の既定の許可リストは `*` です。

## 仕様書

この機能は、[トピック API の非公式草案](https://patcg-individual-drafts.github.io/topics/)で仕様化されていますが、公式の標準には属していません。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [トピック API](/ja/docs/Web/API/Topics_API)
- {{domxref("Document.browsingTopics()")}}
