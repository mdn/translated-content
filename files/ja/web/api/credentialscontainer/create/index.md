---
title: PublicKeyCredentialCreationOptions.authenticatorSelection
slug: Web/API/CredentialsContainer/create
original_slug: Web/API/PublicKeyCredentialCreationOptions/authenticatorSelection
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`authenticatorSelection`** は {{domxref("PublicKeyCredentialCreationOptions")}} 辞書の任意のプロパティであり、生成操作に使用される認証機器をフィルタリングする条件を指定するオブジェクトです。

## 構文

```
authenticatorSelection = publicKeyCredentialCreationOptions.authenticatorSelection
```

### 値

以下のプロパティを持つオブジェクトです。

- `authenticatorAttachment`{{optional_inline}}
  - : 文字列で、 "`platform`" または "`cross-platform`" のどちらかです。前者は認証機器がクライアントに接続されており、通常は取り外し不可能であることを示します。後者は機器が異なるプラットフォームをまたがって使用される可能性があることを示します (USB や NFC 端末など)。
- `requireResidentKey`{{optional_inline}}
  - : 論理値で、認証情報の秘密鍵を認証機器、クライアント、クライアント端末の中に格納する必要があるのか、どうかを示します。既定値は `false` です。
- `userVerification`{{optional_inline}}

  - : A string qualifying how the user verification should be part of the authentication process. The values may be:

    - "`required`": user verification is required, the operation will fail if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does not have the UV flag (as part of the `authenticatorData` property of {{domxref("AuthenticatorAttestationResponse.attestationObject")}})
    - "`preferred`": user verification is prefered, the operation will not fail if the {{domxref("AuthenticatorAttestationResponse","response","",1)}} does not have the UV flag (as part of the `authenticatorData` property of {{domxref("AuthenticatorAttestationResponse.attestationObject")}})
    - "`discouraged`": user verification should not be employed as to minimize the user interaction during the process.

    The default value is "`preferred`".

The authenticator used for the creation of the public key credential must comply with the requirements.

> **メモ:** See {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}} which resolves to `true` when a user-verifiying platform authenticator is available.

## 例

```js
var publicKey = {
  authenticatorSelection:{
    authenticatorAttachment: "cross-platform",
    requireResidentKey: true,
    userVerification: "required"
  },
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
```

## 仕様書

| 仕様書                                                                                                                                                   | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#dom-publickeycredentialcreationoptions-authenticatorselection','authenticatorSelection')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PublicKeyCredentialCreationOptions.excludeCredentials")}}

## See also

- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} whose structure contains the UV flag (please note that for the creation operation, {{domxref("AuthenticatorAttestationResponse.attestationObject")}} only contains a CBOR encoded version of this data and does not give an immediate access to the flag).
