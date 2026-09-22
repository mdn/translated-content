---
title: PublicKeyCredential
slug: Web/API/PublicKeyCredential
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`PublicKeyCredential`** インターフェイスは、パスワードの代わりにフィッシングやデータ消去に耐性のある非対称の鍵ペアを使用してサービスにログインするための資格情報である、公開鍵と秘密鍵のペアについての情報を提供します。これは {{domxref("Credential")}} を継承しており、[ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API) の[資格情報管理 API](/ja/docs/Web/API/Credential_Management_API) への拡張機能です。

{{InheritanceDiagram}}

> [!NOTE]
> このインターフェイスは最上位のコンテキストに限定されています。 {{HTMLElement("iframe")}} 要素の中で使用しても、何も効果がありません。

## インスタンスプロパティ

- {{domxref("PublicKeyCredential.authenticatorAttachment")}} {{ReadOnlyInline}}
  - : {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} または {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} の呼び出しが完了した時点で、WebAuthn 実装が認証器に添付される仕組みを示す文字列です。

- {{domxref("PublicKeyCredential.id")}} {{ReadOnlyInline}}
  - : {{domxref("Credential")}} から継承しており、 {{domxref("PublicKeyCredential.rawId")}} の [base64url 符号化](/ja/docs/Glossary/Base64)になるようオーバーライドしています。
- {{domxref("PublicKeyCredential.rawId")}} {{ReadOnlyInline}}
  - : {{jsxref("ArrayBuffer")}} で、この `PublicKeyCredential` のグローバルに固有な識別子を保持します。この識別子は今後の {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} の呼び出しにおいて、資格情報を検索するのに使用することができます。
- {{domxref("PublicKeyCredential.response")}} {{ReadOnlyInline}}
  - : {{domxref("AuthenticatorResponse")}} オブジェクトのインスタンスです。これは `PublicKeyCredential` が {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} の呼び出しの結果だった場合であった場合は {{domxref("AuthenticatorAttestationResponse")}} 型に、 `PublicKeyCredential` が {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} の呼び出しの結果であった場合は {{domxref("AuthenticatorAssertionResponse")}} 型になります。
- `PublicKeyCredential.type` {{ReadOnlyInline}}
  - : {{domxref("Credential")}} から継承しています。 `PublicKeyCredential` インスタンスの場合は、常に `public-key` に設定されています。

## 静的メソッド

- {{domxref("PublicKeyCredential.getClientCapabilities_static", "PublicKeyCredential.getClientCapabilities()")}}
  - : 特定の WebAuthn 機能および [拡張機能](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions) が対応しているかどうかを調べるために使用できるオブジェクトで解決される {{jsxref("Promise")}} を返します。
- {{domxref("PublicKeyCredential.isConditionalMediationAvailable_static", "PublicKeyCredential.isConditionalMediationAvailable()")}}
  - : 条件付き仲介が利用できる場合に `true` に解決される {{jsxref("Promise")}} を返します。
- {{domxref("PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable_static", "PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()")}}
  - : 静的メソッドで、認証機器が所属するプラットフォームがユーザーを検証する能力を持っているならば `true` で解決する {{jsxref("Promise")}} を返します。
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
  - : [資格情報を使用してユーザーを登録する](/ja/docs/Web/API/Web_Authentication_API#鍵ペアの生成とユーザーの登録)の際に、サーバーから送信された資格情報登録データをシリアライズ解除するための便利なメソッド。
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
  - : [（登録済み）ユーザーの認証](/ja/docs/Web/API/Web_Authentication_API#ユーザーの認証)を行う際、サーバーから送信された資格情報リクエストデータをシリアライズ解除するための便利なメソッドです。
- {{domxref("PublicKeyCredential.signalAllAcceptedCredentials_static", "PublicKeyCredential.signalAllAcceptedCredentials()")}}
  - : 特定のユーザーについて、[認証依頼者](https://en.wikipedia.org/wiki/Relying_party)サーバーが依然として保持しているすべての有効な [資格情報 ID](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) を認証器に通知します。
- {{domxref("PublicKeyCredential.signalCurrentUserDetails_static", "PublicKeyCredential.signalCurrentUserDetails()")}}
  - : 特定のユーザーがユーザー名や表示名を更新したことを、認証器に通知します。
- {{domxref("PublicKeyCredential.signalUnknownCredential_static", "PublicKeyCredential.signalUnknownCredential()")}}
  - : [資格情報 ID](/ja/docs/Web/API/PublicKeyCredentialRequestOptions#id) が、例えば削除されたなどの理由で、[認証依頼者](https://en.wikipedia.org/wiki/Relying_party)サーバーによって認識されなかったことを、認証器に通知します。

## インスタンスメソッド

- {{domxref("PublicKeyCredential.getClientExtensionResults()")}}
  - : 何らかの拡張機能がリクエストされた場合、このメソッドはその拡張機能が処理した結果を返します。
- {{domxref("PublicKeyCredential.toJSON()")}}
  - : [資格情報によるユーザーの登録](/ja/docs/Web/API/Web_Authentication_API#鍵ペアの生成とユーザーの登録)や[登録済みユーザーの認証](/ja/docs/Web/API/Web_Authentication_API#ユーザーの認証)を行う際に、サーバーへ送信するための `PublicKeyCredential` の JSON 文字列表現を作成する便利なメソッドです。

## 例

### PublicKeyCredential の新しいインスタンスを生成

ここでは、 {{domxref("CredentialsContainer.create()","navigator.credentials.create()")}} を用いて新しい資格情報を生成します。

```js
const createCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([
      21, 31, 105 /* サーバーによって生成された 29 以上のランダムなバイト */,
    ]),
    rp: {
      name: "Example CORP",
      id: "login.example.com",
    },
    user: {
      id: new Uint8Array(16),
      name: "canand@example.com",
      displayName: "Carina Anand",
    },
    pubKeyCredParams: [
      {
        type: "public-key",
        alg: -7,
      },
    ],
  },
};

navigator.credentials
  .create(createCredentialOptions)
  .then((newCredentialInfo) => {
    const response = newCredentialInfo.response;
    const clientExtensionsResults =
      newCredentialInfo.getClientExtensionResults();
  })
  .catch((err) => {
    console.error(err);
  });
```

### PublicKeyCredential の既存のインスタンスを取得

ここでは、 {{domxref("CredentialsContainer.get()","navigator.credentials.get()")}} を用いて認証機器から既存の資格情報を読み取ります。

```js
const requestCredentialOptions = {
  publicKey: {
    challenge: new Uint8Array([/* サーバーから送信されるバイト列 */]),
  },
};

navigator.credentials
  .get(requestCredentialOptions)
  .then((credentialInfoAssertion) => {
    // サーバーにアサーションレスポンスを返送し、
    // 資格情報の制御を続行する
  })
  .catch((err) => {
    console.error(err);
  });
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 親インターフェイスの {{domxref("Credential")}}
