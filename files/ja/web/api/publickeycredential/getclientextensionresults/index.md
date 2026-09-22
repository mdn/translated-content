---
title: "PublicKeyCredential: getClientExtensionResults() メソッド"
short-title: getClientExtensionResults()
slug: Web/API/PublicKeyCredential/getClientExtensionResults
l10n:
  sourceCommit: 3735f39708265a883e5fc9829c4335c31378e3ce
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`getClientExtensionResults()`** は {{domxref("PublicKeyCredential")}} インターフェイスのメソッドで、資格情報の作成または認証の際にリクエストされた拡張機能の識別子と、ユーザーエージェントによる処理後の結果を割り当てたオブジェクトを返します。

`PublicKeyCredential` の作成または取得時（{{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} および {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} を通じて）`PublicKeyCredential` を作成または取得する際、`publicKey` オプションの `extensions` プロパティで指定されたさまざまな拡張機能に対して、クライアントによる「独自の」処理をリクエストできます。さまざまな拡張機能のリクエストに関する情報は、[ウェブ認証の拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)を参照してください。

> [!NOTE]
> `getClientExtensionResults()` は、ユーザーエージェント（クライアント）によって処理された拡張機能の結果のみを返します。認証器によって処理された拡張機能の結果は、{{domxref("AuthenticatorAssertionResponse.authenticatorData")}} で利用できる[認証器データ](/ja/docs/Web/API/Web_Authentication_API/Authenticator_data)内に得られます。

## 構文

```js-nolint
getClientExtensionResults()
```

### 引数

なし。

### 返値

それぞれの項目のキーが拡張機能の識別子文字列、値がクライアントによるその拡張機能の処理結果となるオブジェクト。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 例

```js
const publicKey = {
  // Here are the extension "inputs"
  extensions: {
    appid: "https://accounts.example.com",
  },
  allowCredentials: {
    id: "fgrt46jfgd...",
    transports: ["usb", "nfc"],
    type: "public-key",
  },
  challenge: new Uint8Array(16) /* from the server */,
};

navigator.credentials
  .get({ publicKey })
  .then((publicKeyCred) => {
    const myResults = publicKeyCred.getClientExtensionResults();
    // myResults will contain the output of processing the "appid" extension
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

> [!NOTE]
> 拡張子は任意であり、さまざまなブラウザーで認識される拡張子が異なる場合があります。クライアント側での拡張子の処理は常に任意です。ブラウザーが指定された拡張子を認識しない場合、その拡張子は単に無視されます。どのブラウザーがどの拡張子を対応しているかについては、[ウェブ認証の拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions)を参照してください。

## 関連情報

- [現在定義されている拡張機能の一覧](https://w3c.github.io/webauthn/#sctn-defined-extensions)
- {{domxref("AuthenticatorAssertionResponse.authenticatorData")}}: 認証者の実行処理の結果が入る
