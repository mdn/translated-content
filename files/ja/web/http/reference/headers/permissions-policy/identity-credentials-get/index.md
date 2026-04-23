---
title: "Permissions-Policy: identity-credentials-get"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/identity-credentials-get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `identity-credentials-get` ディレクティブは、現在の文書が[連合資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API)、より具体的には、 {{domxref("CredentialsContainer.get", "navigator.credentials.get()")}} メソッドの使用を `identity` オプション付きで許可するかどうかを制御します。

このポリシーで API の使用を禁止している場合、 `get()` 呼び出しによって返されるプロミス ({{jsxref("Promise")}}) は `NotAllowedError` の {{domxref("DOMException")}} で拒否されます。

## 構文

```http
Permissions-Policy: identity-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`identity-credentials-get` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [連合資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API)
- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
