---
title: PublicKeyCredential.rawId
slug: Web/API/PublicKeyCredential/rawId
l10n:
  sourceCommit: b7cd76af245c330c6a1a9f489602015fa0714044
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`rawId`** は {{domxref("PublicKeyCredential")}} インターフェイスの読み取り専用プロパティで、資格情報の識別子が入った {{jsxref("ArrayBuffer")}} オブジェクトです。

{{domxref("PublicKeyCredential.id")}} プロパティはこの識別子が [base64url エンコード](/ja/docs/Glossary/Base64)されたものです。

> [!NOTE]
> このプロパティは最上位のコンテキストでしか使えません。例えば {{HTMLElement("iframe")}} の中では利用できません。

### 値

{{jsxref("ArrayBuffer")}} で、資格情報の識別子が入っています。この識別子はグローバルに固有で、現在の `PublicKeyCredential` および関連する {{domxref("AuthenticatorAssertionResponse")}} を指しています。

## 例

```js
const options = {
  challenge: new Uint8Array(26) /* from the server */,
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
  .create({ publicKey: options })
  .then((pubKeyCredential) => {
    const rawId = pubKeyCredential.rawId;
    // Do something with rawId
  })
  .catch((err) => {
    // Deal with any error
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
