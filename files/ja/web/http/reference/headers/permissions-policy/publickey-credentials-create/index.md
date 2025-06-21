---
title: "Permissions-Policy: publickey-credentials-create"
slug: Web/HTTP/Reference/Headers/Permissions-Policy/publickey-credentials-create
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{HTTPSidebar}} {{SeeCompatTable}}

HTTP の {{HTTPHeader("Permissions-Policy")}} ヘッダーにおける `publickey-credentials-create` ディレクティブは、現在の文書が[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) を使用して新しい WebAuthn 資格情報を作成すること、すなわち {{domxref("CredentialsContainer.create","navigator.credentials.create({publicKey})")}} を許可するかどうかを制御します。

仕様上、定義されたポリシーによりこの機能の使用がブロックされた場合、 `navigator.credentials.create({publicKey})` を呼び出すとプロミス ({{jsxref("Promise")}}) が `NotAllowedError` の {{domxref("DOMException")}} 例外で拒否されます。
メソッドがオリジンをまたいで呼び出された場合、プロミス ({{jsxref("Promise")}}) は、 [iframe の `allow=`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#iframes)で許可されており、{{glossary("Transient activation", "一時的な有効化")}}もない場合、 `NotAllowedError` で拒否されます。

## 構文

```http
Permissions-Policy: publickey-credentials-create=<allowlist>;
```

- `<allowlist>`
  - : この機能を許可するオリジンのリストです。 [`Permissions-Policy` > 構文](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy#構文)を参照してください。

## 既定のポリシー

`publickey-credentials-create` の既定の許可リストは `self` です。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Permissions-Policy")}} ヘッダー
- [権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)
- [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API)
- {{DOMxRef("PublicKeyCredential")}} インターフェイス
