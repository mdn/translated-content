---
title: "Permissions-Policy: encrypted-media"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/encrypted-media
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `encrypted-media` ディレクティブは、現在の文書が [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) を使用することを許可するかどうかを制御します。

具体的には、この機能が定義されたポリシーでブロックされた場合、 {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} から返却されたプロミス ({{jsxref("Promise")}}) が {{domxref("DOMException")}} の `SecurityError` 型で拒否されます。

## 構文

```http
Permissions-Policy: encrypted-media=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文) を参照してください。

## 既定のポリシー

`encrypted-media` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
