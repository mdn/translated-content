---
title: "Feature-Policy: encrypted-media"
slug: Web/HTTP/Headers/Permissions-Policy/encrypted-media
---

{{HTTPSidebar}}{{SeeCompatTable}}

HTTP の {{HTTPHeader("Feature-Policy")}} ヘッダーにおける `encrypted-media` ディレクティブは、現在の文書が [Encrypted Media Extensions](/ja/docs/Web/API/Encrypted_Media_Extensions_API) API (EME) を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxref("Navigator.requestMediaKeySystemAccess","Navigator.requestMediaKeySystemAccess()")}} から返却された {{jsxref("Promise")}} が {{domxref("DOMException")}} で拒否されます。

## 構文

```
Feature-Policy: encrypted-media <allowlist>;
```

- \<allowlist>
  - : この機能を許可するオリジンのリストです。 [`Feature-Policy`](/ja/docs/Web/HTTP/Headers/Feature-Policy#%E6%A7%8B%E6%96%87) を参照してください。

## 既定のポリシー

`encrypted-media` の既定の許可リストは `'self'` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Feature-Policy")}} ヘッダー
- [機能ポリシー](/ja/docs/Web/HTTP/Permissions_Policy)
- [機能ポリシーの使用](/ja/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
