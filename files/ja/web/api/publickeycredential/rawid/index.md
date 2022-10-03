---
title: PublicKeyCredential.rawId
slug: Web/API/PublicKeyCredential/rawId
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`rawId`** は {{domxref("PublicKeyCredential")}} インターフェイスの読み取り専用プロパティで、証明書の識別子が入った {{jsxref("ArrayBuffer")}} オブジェクトです。

{{domxref("PublicKeyCredential.id")}} プロパティはこの識別子が [base64url エンコード](/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)されたものです。

> **メモ:** このプロパティは最上位のコンテキストでしか使えない可能性があり、例えば {{HTMLElement("iframe")}} の中では利用できません。

## 構文

```
rawId = publicKeyCredential.rawId
```

### 値

{{jsxref("ArrayBuffer")}} で、証明書の識別子が入っています。この識別子はグローバルに固有で、現在の `PublicKeyCredential` および関連する {{domxref("AuthenticatorAssertionResponse")}} を指しています。

## 例

```js
var options = {
  challenge: new Uint8Array(26) /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({  publickey: options })
  .then(function (pubKeyCredential) {
    var rawId = pubKeyCredential.rawId;
    // Do something with rawId
}).catch(function (err) {
  // Deal with any error
});
```

## 仕様書

| 仕様書                                                                                   | 状態                         | 備考     |
| ---------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#dom-publickeycredential-rawid','rawId')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの対応

{{Compat("api.PublicKeyCredential.rawId")}}
