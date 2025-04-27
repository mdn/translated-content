---
title: "Permissions-Policy: document-domain"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/document-domain
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `document-domain` ディレクティブは、現在の文書が {{domxref("document.domain")}} を設定することを許可するかどうかを制御します。

具体的には、定義されたポリシーがこの機能をブロックした場合、 {{domxref("document.domain")}} を設定しようとすると失敗し、 `SecurityError` の {{domxref("DOMException")}} が発生します。

## 構文

```http
Permissions-Policy: document-domain=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`document-domain` の既定の許可リストは `*` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
