---
title: FederatedCredential
slug: Web/API/FederatedCredential
l10n:
  sourceCommit: 1ac70b362b94fc4d781b4cfbc7d0508eaf91b05c
---

{{SeeCompatTable}}{{APIRef("Credential Management API")}}

**`FederatedCredential`** は[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) のインターフェイスで、連合アイデンティティプロバイダーからの資格情報についての情報を提供します。連合アイデンティティプロバイダーは、ウェブサイトが正しくユーザーを認証し、そのための API を提供する主体です。連合アイデンティティプロバイダーの一例として、 [OpenID Connect](https://openid.net/developers/specs/) があります。

> **メモ:** [連合資格情報管理 API (FedCM)](/ja/docs/Web/API/FedCM_API) は、ブラウザーで ID フェデレーションを処理するためのより完全なソリューションを提供し、{{domxref("IdentityCredential")}} 型を使用します。

対応しているブラウザーにおいては、このインターフェイスのインスタンスがグローバル {{domxref('fetch')}} の `init` オブジェクトの `credential` メンバーとして渡されることがあります。

{{InheritanceDiagram}}

## コンストラクター

- {{domxref("FederatedCredential.FederatedCredential()","FederatedCredential()")}} {{Experimental_Inline}}
  - : 新しい `FederatedCredential` オブジェクトを生成します。

## プロパティ

_祖先である {{domxref("Credential")}} から継承したプロパティがあります。_

- {{domxref("FederatedCredential.provider")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 資格情報の連合アイデンティティプロバイダーの入った文字列を返します。
- {{domxref("FederatedCredential.protocol")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : 資格情報の連合アイデンティティプロトコルの入った文字列を返します。

### イベントハンドラー

なし。

## メソッド

なし。

## 例

```js
const cred = new FederatedCredential({
  id,
  name,
  provider: "https://account.google.com",
  iconURL,
});

// 格納
navigator.credentials.store(cred).then(() => {
  // 他に何かをする
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
