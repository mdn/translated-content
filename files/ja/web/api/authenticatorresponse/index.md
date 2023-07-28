---
title: AuthenticatorResponse
slug: Web/API/AuthenticatorResponse
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`AuthenticatorResponse`** は [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) のインターフェイスで、キーペアを信頼する暗号化ルートを提供するインターフェイスの基本インターフェイスです。子インターフェイスでは、チャレンジのオリジンなどのブラウザーからの情報を含み、 {{domxref("PublicKeyCredential.response")}} から返されることがあります。

## AuthenticatorResponse に基づくインターフェイス

以下のインターフェイスは AuthenticatorResponse インターフェイスに基づいています。

- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("AuthenticatorAttestationResponse")}}

## プロパティ

- {{domxref("AuthenticatorResponse.clientDataJSON")}}
  - : [JSON](/ja/docs/Learn/JavaScript/Objects/JSON) 文字列が入った {{domxref("ArrayBuffer")}} で、 {{domxref("CredentialsContainer.create()")}} または {{domxref("CredentialsContainer.get()")}} に渡されたクライアントデータを表します。

## メソッド

なし。

## 例

### AuthenticatorAssertionResponse の取得

```js
var options = {
  challenge: new Uint8Array([
    /* bytes sent from the server */
  ]),
};

navigator.credentials
  .get({ publicKey: options })
  .then(function (credentialInfoAssertion) {
    var assertionResponse = credentialInfoAssertion.response;
    // send assertion response back to the server
    // to proceed with the control of the credential
  })
  .catch(function (err) {
    console.error(err);
  });
```

### AuthenticatorAttestationResponse の取得

```js
var publicKey = {
  challenge: /* from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(16),
    name: "jdoe@example.com",
    displayName: "John Doe"
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7
    }
  ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    var attestationResponse = newCredentialInfo.response;
  }).catch(function (err) {
     console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AuthenticatorAttestationResponse")}}
- {{domxref("AuthenticatorAssertionResponse")}}
- {{domxref("PublicKeyCredential.response")}}
