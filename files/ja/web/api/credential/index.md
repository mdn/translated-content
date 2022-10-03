---
title: Credential
slug: Web/API/Credential
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}{{securecontext_header}}

**`Credential`** は [Credential Management API](/ja/docs/Web/API/Credential_Management_API) のインターフェイスで、信頼の決定に必要なエンティティについての情報を提供します。

## プロパティ

- {{domxref("Credential.id")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、認証情報の識別子を返します。これは GUID、ユーザー名、メールアドレスのいずれか一つになる可能性があります。
- {{domxref("Credential.type")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} で、認証情報の種別を返します。有効な値は `password`, `federated`, `public-key` の何れかです。 (それぞれ {{domxref("PasswordCredential")}}, {{domxref("FederatedCredential")}}, {{domxref("PublicKeyCredential")}})

### イベントハンドラー

なし

## メソッド

なし

## 例

```js
// TBD
```

## 仕様書

| 仕様書                                           | 状態                                         | 備考     |
| ------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName('Credential Management')}} | {{Spec2('Credential Management')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.Credential")}}
