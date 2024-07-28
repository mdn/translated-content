---
title: PublicKeyCredential.getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`getClientExtensionResults()`** は {{domxref("PublicKeyCredential")}} インターフェイスのメソッドであり、 {{jsxref("ArrayBuffer")}} の形で拡張機能の識別子と、クライアントが処理した後の結果の対応表を返します。

`PublicKeyCredential` の生成または読み出し中 (それぞれ {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} および {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} で実施) に、それぞれ {{domxref("PublicKeyCredentialCreationOptions.extensions")}} および {{domxref("PublicKeyCredentialRequestOptions.extensions")}} によって与えられる別々の拡張機能のために、クライアントが処理する「専用の」処理を持つことができます。

> [!NOTE]
> 拡張機能はオプションであり、ブラウザーによって認識する拡張機能は異なります。すべての拡張機能はクライアントが処理することはオプションです。ブラウザーが指定された拡張機能を知らない場合、失敗としてはいけません。

> [!NOTE]
> このプロパティは最上位のコンテキストでしか使えない可能性があり、例えば {{HTMLElement("iframe")}} の中では利用できません。

## 構文

```
mapArrayBuffer = publicKeyCredential.getClientExtensionResults()
```

### 引数

なし。

### 返値

{{jsxref("ArrayBuffer")}} の形で、クライアントが様々な拡張機能を処理した結果です。拡張子の識別子と、クライアントが処理した後の結果の対応表を返します。このオブジェクトには拡張機能の識別子と処理の結果の対応表が入っています。

> [!WARNING]
> 2019 年 3 月時点で、 `appId` ({{domxref("PublicKeyCredentialRequestOptions.extensions")}} の生成の間に使用される) のみ、 [Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=818303) および [Edge](https://docs.microsoft.com/en-us/microsoft-edge/dev-guide/windows-integration/web-authentication#api-surface) が対応しています。 Firefox は[どの拡張機能にも対応していない](https://bugzilla.mozilla.org/show_bug.cgi?id=1370728)ようです。

## 例

```js
var publicKey = {
  // Here are the extensions (as "inputs")
  extensions: {
    loc: true, // This extension has been defined to include location information in attestation
    uvi: true, // user verification index: how the user was verified
  },
  challenge: new Uint8Array(16) /* from the server */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: new Uint8Array(16) /* from the server */,
    name: "jdoe@example.com",
    displayName: "John Doe",
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
  .then(function (newCredentialInfo) {
    var myBuffer = newCredentialInfo.getClientExtensionResults();
    // myBuffer will contain the result of any of the processing of the "loc" and "uvi" extensions
  })
  .catch(function (err) {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [現在定義されている拡張機能の一覧](https://www.w3.org/TR/webauthn/#sctn-defined-extensions)
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}: 認証者の実行処理の結果が入る
- {{domxref("PublicKeyCredentialCreationOptions.extensions")}}: 認証情報を作成するためのクライアント拡張機能の入力値が入る
- {{domxref("PublicKeyCredentialRequestOptions.extensions")}}: 認証情報を受け取るクライアント拡張機能の入力値が入る
