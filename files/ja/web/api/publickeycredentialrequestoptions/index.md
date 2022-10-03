---
title: PublicKeyCredentialRequestOptions
slug: Web/API/PublicKeyCredentialRequestOptions
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`PublicKeyCredentialRequestOptions`** は [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) の辞書で、 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} で指定された {{domxref("PublicKeyCredential")}} を読み取るために渡されるオプションを保持します。

## プロパティ

- {{domxref("PublicKeyCredentialRequestOptions.challenge")}}
  - : {{domxref("BufferSource")}} 型で、証明書利用者のサーバーによって生成され、[暗号チャレンジ](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication)として使用されるものです。この値は認証プロバイダーによって署名され、署名は {{domxref("AuthenticatorAssertionResponse.signature")}} の一部として送り返されます。
- {{domxref("PublicKeyCredentialRequestOptions.timeout")}} {{optional_inline}}
  - : 数値のヒントで、取得操作が完了するまで呼び出し元が待機する時間をミリ秒単位で表します。このヒントは、ブラウザーによって上書きされる場合があります。
- {{domxref("PublicKeyCredentialRequestOptions.rpId")}} {{optional_inline}}
  - : {{domxref("USVString")}} で、信頼する利用者の識別子 (例: `"login.example.org"`) を示します。このオプションが指定されていない場合、クライアントは現在のオリジンのドメインを使用します。
- {{domxref("PublicKeyCredentialRequestOptions.allowCredentials")}} {{optional_inline}}
  - : {{jsxref("Array")}} 型で、取得で利用できる既存の資格情報を制限する資格情報記述子の配列です。
- {{domxref("PublicKeyCredentialRequestOptions.userVerification")}} {{optional_inline}}
  - : 文字列で、認証プロセスにどのようにユーザー認証を組み込むかを説明します。
- {{domxref("PublicKeyCredentialRequestOptions.extensions")}} {{optional_inline}}
  - : 複数のクライアント拡張機能の入力を持つオブジェクトです。これらの拡張機能は、追加の処理を要求するために使用されます (例えば、従来の FIDO API 資格情報を処理、認証端末上でのテキストの要求など)。

## メソッド

なし。

## 例

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */]),
  rpId: "example.com" /* will only work if the current domain
                         is something like foo.example.com */
  userVerification: "preferred",
  timeout: 60000,     // Wait for a minute
  allowCredentials: [
    {
      transports: "usb",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    },
    {
      transports: "internal",
      type: "public-key",
      id: new Uint8Array(26) // actually provided by the server
    }
  ],
  extensions: {
    uvm: true,  // RP wants to know how the user was verified
    loc: false,
    txAuthSimple: "Could you please verify yourself?"
  }
};

navigator.credentials.get({ "publicKey": options })
    .then(function (credentialInfoAssertion) {
    // send assertion response back to the server
    // to proceed with the control of the credential
}).catch(function (err) {
     console.error(err);
});
```

## 仕様書

| 仕様書                                                                                                                                                       | 状態                         | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#dictdef-publickeycredentialrequestoptions', 'PublicKeyCredentialRequestOptions dictionary')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PublicKeyCredentialRequestOptions")}}

## 関連情報

- {{domxref("PublicKeyCredentialCreationOptions")}}: the dictionary which provides option for the public key credential creation
