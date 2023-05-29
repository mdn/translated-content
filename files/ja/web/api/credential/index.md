---
title: Credential
slug: Web/API/Credential
l10n:
  sourceCommit: 1ac70b362b94fc4d781b4cfbc7d0508eaf91b05c
---

{{APIRef("Credential Management API")}}{{securecontext_header}}

**`Credential`** は[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) のインターフェイスで、信頼の判断に必要なエンティティ（普通はユーザー）についての情報を提供します。

`Credential` オブジェクトには 4 つの異なる型になる可能性があります。

- {{domxref("FederatedCredential")}}
- {{domxref("IdentityCredential")}}
- {{domxref("PasswordCredential")}}
- {{domxref("PublicKeyCredential")}}

## プロパティ

- {{domxref("Credential.id")}} {{ReadOnlyInline}}
  - : 認証情報の識別子の入った文字列を返します。これは GUID、ユーザー名、メールアドレスのいずれかになる可能性があります。
- {{domxref("Credential.type")}} {{ReadOnlyInline}}
  - : 認証情報の種別の入った文字列を返します。有効な値は `password`, `federated`, `public-key` の何れかです。（それぞれ {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}}, {{domxref("PublicKeyCredential")}}）

### イベントハンドラー

なし

## メソッド

なし

## 例

```js
let pwdCredential = new PasswordCredential({
  id: "example-username", // Username/ID
  name: "Carina Anand", // Display name
  password: "correct horse battery staple", // Password
});

console.assert(pwdCredential.type === "password");
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
