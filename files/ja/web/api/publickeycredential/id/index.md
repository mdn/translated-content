---
title: PublicKeyCredential.id
slug: Web/API/PublicKeyCredential/id
l10n:
  sourceCommit: b7cd76af245c330c6a1a9f489602015fa0714044
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`id`** は {{domxref("PublicKeyCredential")}} インターフェイスの読み取り専用プロパティで、 {{domxref("Credential")}} から継承した文字列であり、現在の `PublicKeyCredential` インスタンスの識別子を表します。

このプロパティは {{domxref("PublicKeyCredential.rawId")}} の [base64url エンコード](/ja/docs/Glossary/Base64)版です。

> [!NOTE]
> このプロパティは最上位のコンテキストでのみ使用することができ、例えば {{HTMLElement("iframe")}} では使用することができません。

## 値

{{domxref("PublicKeyCredential.rawId")}} の [base64url エンコード](/ja/docs/Glossary/Base64) 版である文字列です。

## 例

```js
const publicKey = {
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* To be changed for each user */,
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
  .create({ publicKey })
  .then((newCredentialInfo) => {
    const id = newCredentialInfo.id;
    // Do something with the id

    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Credential.id")}}
