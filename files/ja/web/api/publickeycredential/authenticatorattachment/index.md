---
title: "PublicKeyCredential: authenticatorAttachment プロパティ"
short-title: authenticatorAttachment
slug: Web/API/PublicKeyCredential/authenticatorAttachment
l10n:
  sourceCommit: eb18c44b6758003b85228455e54c491bc98ef0c3
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`authenticatorAttachment`** は {{domxref("PublicKeyCredential")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} または {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} の呼び出し時に使用される認証器の一般的なカテゴリーを示す文字列です。

## 値

文字列です。以下のいずれかの値です。

- `"platform"`
  - : 認証器は、WebAuthn が動作している端末の一部（**プラットフォーム認証器**と呼ばれる）であるため、WebAuthn は、プラットフォーム固有の API など、そのプラットフォームで利用できる通信手段を使用して、この認証器と通信します。プラットフォーム認証器に紐付けられた公開鍵資格情報は、**プラットフォーム資格情報**と呼ばれます。
- `"cross-platform"`
  - : 認証器は、WebAuthn が動作している端末自体の一部ではありません（異なる端末間を移動できるため、**ローミング認証器**と呼ばれます）。そのため、WebAuthn は Bluetooth や NFC などのクロスプラットフォームの転送プロトコルを使用して、この認証器と通信します。ローミング認証器に紐付けられた公開鍵資格情報は、**ローミング資格情報**と呼ばれます。

## 例

```js
const options = {
  challenge: new Uint8Array(26) /* サーバーから */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* ユーザーごとに変更される */,
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
    const attachment = pubKeyCredential.authenticatorAttachment;
    // authenticatorAttachment で何かを行う
  })
  .catch((err) => {
    // エラーを処理する
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
