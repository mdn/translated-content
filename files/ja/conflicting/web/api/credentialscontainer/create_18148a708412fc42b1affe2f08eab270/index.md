---
title: PublicKeyCredentialCreationOptions
slug: conflicting/Web/API/CredentialsContainer/create_18148a708412fc42b1affe2f08eab270
original_slug: Web/API/PublicKeyCredentialCreationOptions
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`PublicKeyCredentialCreationOptions`** は [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) の辞書で、 {{domxref("CredentialsContainer.create()","navigators.credentials.create()")}} で {{domxref("PublicKeyCredential")}} を生成するために渡されるオプションを保持します。

## プロパティ

- {{domxref("PublicKeyCredentialCreationOptions.rp")}}
  - : 資格情報の生成のリクエスト元を示すオブジェクトです。
- {{domxref("PublicKeyCredentialCreationOptions.user")}}
  - : 資格情報が生成されるユーザーアカウントを示すオブジェクトです。
- {{domxref("PublicKeyCredentialCreationOptions.challenge")}}
  - : {{domxref("BufferSource")}} 型で、証明書利用者のサーバーによって生成され、[暗号チャレンジ](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication)として使用されるものです。この値は認証プロバイダーによって署名され、署名は {{domxref("AuthenticatorAssertionResponse.signature")}} の一部として送り返されます。
- {{domxref("PublicKeyCredentialCreationOptions.pubKeyCredParams")}}
  - : {{jsxref("Array")}} 型で、資格情報に要求される機能を指定する要素の配列です。暗号化署名の操作で使用される種類とアルゴリズムを含みます。この配列は設定の降順で並べ替えられます。
- {{domxref("PublicKeyCredentialCreationOptions.timeout")}} {{optional_inline}}
  - : 数値のヒントで、取得操作が完了するまで呼び出し元が待機する時間をミリ秒単位で表します。このヒントは、ブラウザーによって上書きされる場合があります。
- {{domxref("PublicKeyCredentialCreationOptions.excludeCredentials")}} {{optional_inline}}
  - : {{jsxref("Array")}} で、既存の資格情報の記述子の配列です。これは、すでに資格情報を持つ既存のユーザーが新しい公開鍵資格情報を生成することを防ぐために、認証者によって提供されます。
- {{domxref("PublicKeyCredentialCreationOptions.authenticatorSelection")}} {{optional_inline}}
  - : 生成操作で使用可能な認証機器を絞り込む条件をプロパティに持つオブジェクトです。
- {{domxref("PublicKeyCredentialCreationOptions.attestation")}} {{optional_inline}}
  - : {{jsxref("String")}} で、認証結果を (認証機器の元が) 送信する方法を示します。
- {{domxref("PublicKeyCredentialCreationOptions.extensions")}} {{optional_inline}}
  - : 複数のクライアント拡張機能の入力を持つオブジェクトです。これらの拡張機能は、追加の処理を要求するために使用されます (例えば、従来の FIDO API 資格情報を処理、認証端末上でのテキストの要求など)。

## メソッド

なし。

## 例

```js
// some examples of COSE algorithms
const cose_alg_ECDSA_w_SHA256 = -7;
const cose_alg_ECDSA_w_SHA512 = -36;

var createCredentialOptions = {
    // Format of new credentials is publicKey
    publicKey: {
        // Relying Party
        rp: {
            name: "Example CORP",
            id: "login.example.com",
            icon: "https://login.example.com/login.ico"
        },
        // Cryptographic challenge from the server
        challenge: new Uint8Array(26),
        // User
        user: {
            id: new Uint8Array(16),
            name: "john.p.smith@example.com",
            displayName: "John P. Smith",
        },
        // Requested format of new keypair
        pubKeyCredParams: [{
            type: "public-key",
            alg: cose_alg_ECDSA_w_SHA256,
        }],
        // Timeout after 1 minute
        timeout: 60000,
        // Do not send the authenticator's origin attestation
        attestation: "none",
        extensions: {
          uvm: true,
          exts: true
        },
        // Filter out authenticators which are bound to the device
        authenticatorSelection:{
          authenticatorAttachment: "cross-platform",
          requireResidentKey: true,
          userVerification: "preferred"
        },
        // Exclude already existing credentials for the user
        excludeCredentials: [
          {
            type: "public-key",
            // the id for john.doe@example.com
            id  : new Uint8Array(26) /* this actually is given by the server */
          },
          {
            type: "public-key",
            // the id for john-doe@example.com
            id : new Uint8Array(26) /* another id */
          }
        ]
    }
};

// Create the new credential with the options above
navigator.credentials.create(createCredentialOptions)
  .then(function (newCredentialInfo) {
    var attestationResponse = newCredentialInfo.response;
    var clientExtensionsOutputs = newCredentialInfo.getClientExtensionsResults();

    // Send the response to the relying party server
    // it will verify the content and integrity before
    // creating a new credential

  }).catch(function (err) {
    // Deal with any error properly
    console.error(err);
  });;
```

## 仕様書

| 仕様書                                                                                                                                                           | 状態                         | 備考     |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#dictdef-publickeycredentialcreationoptions', 'PublicKeyCredentialCreationOptions dictionary')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PublicKeyCredentialCreationOptions")}}

## 関連情報

- {{domxref("PublicKeyRequestOptions")}}: 公開鍵を受け取る操作のオプションを提供する辞書
