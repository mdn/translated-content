---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`PublicKeyCredential`** インターフェイスは、パスワードの代わりにフィッシングやデータ消去に耐性のある非対称の鍵ペアを使用してサービスにログインするための資格情報である、公開鍵と秘密鍵のペアについての情報を提供します。これは {{domxref("Credential")}} を継承しており、 [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) が [Credential Management API](/ja/docs/Web/API/Credential_Management_API) へ拡張された際に作成されました。 {{domxref("Credential")}} を継承している他のインターフェイスとしては、 {{domxref("PasswordCredential")}} や {{domxref("FederatedCredential")}} があります。

> **メモ:** このインターフェイスは最上位のコンテキストに限定されています。 {{HTMLElement("iframe")}} 要素の中で使用しても、何も効果がありません。

## プロパティ

- `PublicKeyCredential.type` {{ReadOnlyInline()}}{{securecontext_inline}}
  - : {{domxref("Credential")}} から継承しています。 `PublicKeyCredential` の場合は、常に `public-key` に設定されています。
- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline()}}{{securecontext_inline}}
  - : {{domxref("Credential")}} から継承しており、 {{domxref("PublicKeyCredential.rawId")}} の [base64url 符号化](/ja/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)になるようオーバーライドしています。
- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline()}}{{securecontext_inline}}
  - : {{domxref("ArrayBuffer")}} 型で、この `PublicKeyCredential` のグローバルに固有な識別子を保持します。この識別子は今後の {{domxref("CredentialsContainer.get")}} の呼び出しにおいて、資格情報を検索するのに使用することができます。
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline()}} {{securecontext_inline}}
  - : {{domxref("AuthenticatorResponse")}} オブジェクトのインスタンスです。これは `PublicKeyCredential` が {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} の呼び出しの結果だった場合であった場合は {{domxref("AuthenticatorAttestationResponse")}} 型に、 `PublicKeyCredential` が {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} の呼び出しの結果であった場合は {{domxref("AuthenticatorAssertionResponse")}} 型になります。

## メソッド

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}{{securecontext_inline}}
  - : 何らかの拡張機能がリクエストされた場合、このメソッドはその拡張機能が処理した結果を返します。
- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}{{securecontext_inline}}
  - : 静的メソッドで、認証機器が所属するプラットフォームがユーザーを*検証*する能力を持っているならば `true` で解決する {{jsxref("Promise")}} を返します。現在の実装状況では、このメソッドは [Windows Hello](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/windows-integration/web-authentication) がシステムで利用可能な場合のみ `true` で解決します。

## 例

### PublicKeyCredential の新しいインスタンスを生成

ここでは、 {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} を用いて新しい資格情報を生成します。

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
    var response = newCredentialInfo.response;
    var clientExtensionsResults = newCredentialInfo.getClientExtensionResults();
  }).catch(function (err) {
     console.error(err);
  });
```

### PublicKeyCredential の既存のインスタンスを取得

ここでは、 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} を用いて認証機器から既存の資格情報を読み取ります。

```js
var options = {
  challenge: new Uint8Array([/* bytes sent from the server */])
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

| 仕様書                                                                                                   | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#iface-pkcredential','PublicKeyCredential interface')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PublicKeyCredential")}}

## 関連情報

- 親インターフェイスの {{domxref("Credential")}}
