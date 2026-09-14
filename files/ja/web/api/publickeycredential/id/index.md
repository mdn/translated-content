---
title: "PublicKeyCredential: id プロパティ"
short-title: id
slug: Web/API/PublicKeyCredential/id
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
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
  challenge: new Uint8Array(26) /* これは実際にはサーバーから与えられる */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(26) /* ユーザー毎に変化する */,
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
    // id で何かを行う

    // アテステーションレスポンスとクライアント
    // 拡張情報をサーバーに送信し、資格情報の登録を
    // 続行する
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
