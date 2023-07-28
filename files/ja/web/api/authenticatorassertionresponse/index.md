---
title: AuthenticatorAssertionResponse
slug: Web/API/AuthenticatorAssertionResponse
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`AuthenticatorAssertionResponse`** は [Web Authentication API](/ja/docs/Web/API/Web_Authentication_API) のインターフェイスで、 {{domxref('CredentialsContainer.get()')}} に {{domxref('PublicKeyCredential')}} を渡すと返されます。そして、キーペアを持ち、認証付きリクエストが有効で承認されていることをサービスに証明します。

このインターフェイスは {{domxref("AuthenticatorResponse")}} を継承しています。

> **メモ:** このインターフェイスは最上位のコンテキストに限定されています。 {{HTMLElement("iframe")}} 要素の中で使用しても、何も効果がありません。

## プロパティ

- `AuthenticatorAssertionResponse.clientDataJSON` {{securecontext_inline}}{{readonlyinline}}
  - : 認証のためのクライアントデータで、オリジンやチャレンジです。 {{domxref("AuthenticatorAttestationResponse.clientDataJSON","clientDataJSON")}} プロパティは {{domxref("AuthenticatorResponse")}} から継承しています。
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} {{securecontext_inline}}{{readonlyinline}}
  - : {{jsxref("ArrayBuffer")}} で、認証機器からの情報、例えば Relying Party ID Hash (rpIdHash)、証明カウンター、ユーザー存在テスト、ユーザー検証フラグ、その他の認証機器によって処理される拡張情報が入ります。
- {{domxref("AuthenticatorAssertionResponse.signature")}} {{securecontext_inline}}{{readonlyinline}}
  - : {{domxref("AuthenticatorAssertionResponse.authenticatorData")}} および {{domxref("AuthenticatorResponse.clientDataJSON")}} に関するアサーション署名です。アサーション署名は {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} の呼び出しで生成された鍵ペアの秘密鍵によって作成され、同じ鍵ペアの公開鍵によって検証されます。
- {{domxref("AuthenticatorAssertionResponse.userHandle")}} {{securecontext_inline}}{{readonlyinline}}
  - : {{jsxref("ArrayBuffer")}} で、非透過的なユーザー識別子が入ります。

## メソッド

なし。

## 例

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
    // Do something specific with the response

    // send assertion response back to the server
    // to proceed with the control of the credential
  })
  .catch(function (err) {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.AuthenticatorAssertionResponse")}}

## 関連情報

- {{domxref("AuthenticatorAttestationResponse")}}: 新しい資格情報を生成する際に得られる種類のレスポンスのインターフェイス
- {{domxref("AuthenticatorResponse")}}: 親インターフェイス
