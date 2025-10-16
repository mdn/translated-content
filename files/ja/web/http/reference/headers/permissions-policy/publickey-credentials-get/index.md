---
title: "Permissions-Policy: publickey-credentials-get"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-get
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `publickey-credentials-get` ディレクティブは、現在の文書が[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) を使用して公開鍵を受け取ること、すなわち {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey})")}} を許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 `navigator.credentials.get({publicKey})` を呼び出すとプロミス ({{jsxref("Promise")}}) が `NotAllowedError` の {{domxref("DOMException")}} 例外で拒否されます。

## 構文

```http
Permissions-Policy: publickey-credentials-get=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`publickey-credentials-get` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}} インターフェイス
