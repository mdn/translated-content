---
title: "PublicKeyCredential: response プロパティ"
short-title: response
slug: Web/API/PublicKeyCredential/response
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`response`** は {{domxref("PublicKeyCredential")}} インターフェイスの読み取り専用プロパティで、このプロパティは {{domxref("AuthenticatorResponse")}} オブジェクトであり、資格情報の作成/取得のために認証先からユーザーエージェントに送信されるものです。このレスポンスに含まれる情報は、要求が正当なものであるかどうかを確認するために、依存している側のサーバーで使用されます。

`AuthenticatorResponse` は以下のどちらかです。

- {{domxref("AuthenticatorAttestationResponse")}} （`PublicKeyCredential` が {{domxref("CredentialsContainer.create()")}} で作成された場合）
- {{domxref("AuthenticatorAssertionResponse")}} （`PublicKeyCredential` が {{domxref("CredentialsContainer.get()")}} から取得された場合）

資格情報の*生成*を検証するには、依存している側のサーバーは以下の両方を必要とします。

- このレスポンス
- 要求を検証するためのクライアントの拡張機能 （{{domxref("PublicKeyCredential.getClientExtensionResults()")}} で指定されたもの）

> [!NOTE]
> 既存の資格情報の取得を検証する場合、 `PublicKeyCredential` オブジェクト全体とクライアント拡張機能が依存している側のサーバーに必要です。

> [!NOTE]
> このプロパティは最上位のコンテキストでのみ使用することができます。例えば {{HTMLElement("iframe")}} では使用することができません。

## 値

作成または取得の要求を検証するために、依存する側のスクリプトが受信し、依存する側のサーバーに送信されるべきデータを含む {{domxref("AuthenticatorResponse")}} オブジェクトです。このオブジェクトには、クライアントからのデータ ({{domxref("AuthenticatorResponse/clientDataJSON")}}) と認証器からのデータが含まれます。

## 例

```js
const options = {
  challenge: new Uint8Array(16) /* サーバーから */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* サーバーから */,
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};

navigator.credentials
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const response = pubKeyCredential.response;
    const clientExtResults = pubKeyCredential.getClientExtensionResults();
    // レスポンスとクライアント拡張機能をサーバーに送信し、
    // サーバーが検証を行って資格情報を生成できるようにする
  })
  .catch((err) => {
    // エラーを処理する
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
