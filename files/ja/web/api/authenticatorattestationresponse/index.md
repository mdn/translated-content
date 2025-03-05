---
title: AuthenticatorAttestationResponse
slug: Web/API/AuthenticatorAttestationResponse
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`AuthenticatorAttestationResponse`** は [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) のインターフェイスで、 {{domxref('CredentialsContainer.create()')}} に {{domxref('PublicKeyCredential')}} を渡すと返されます。そして、生成された新しいキーペアの暗号化信頼ルートを提供します。このレスポンスは認証情報の生成を完了させるために、信頼されている側のサーバーに送信されます。

このインターフェイスは {{domxref("AuthenticatorResponse")}} を継承しています。

> [!NOTE]
> このインターフェイスは最上位のコンテキストに限定されています。 {{HTMLElement("iframe")}} 要素の中で使用しても、何も効果がありません。

## プロパティ

- `AuthenticatorAttestationResponse.clientDataJSON` {{securecontext_inline}}{{readonlyinline}}
  - : 認証のためのクライアントデータで、オリジンやチャレンジです。 {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} プロパティは {{domxref("AuthenticatorResponse")}} から継承しています。
- {{domxref("AuthenticatorAttestationResponse.attestationObject")}} {{securecontext_inline}}{{readonlyinline}}
  - : {{jsxref("ArrayBuffer")}} で、新しく生成されたキーペアのための認証機器のデータとアテステーションステートメントが入ります。

## メソッド

- {{domxref("AuthenticatorAttestationResponse.getTransports()")}}{{securecontext_inline}}
  - : 文字列の {{jsxref("Array")}} で、認証機器がどの転送方法 (`usb` や `nfc` など) に対応していると信じられるかを記述します。情報が利用できない場合は、配列が空になることがあります。

## 例

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
    // Do something with the response
    // (sending it back to the relying party server maybe?)
  }).catch(function (err) {
     console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("AuthenticatorAssertionResponse")}}: 既存の認証情報を受け取る際にレスポンスの種類のインターフェイス
- {{domxref("AuthenticatorResponse")}}: 親インターフェイス
