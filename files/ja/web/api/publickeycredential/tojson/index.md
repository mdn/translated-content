---
title: "PublicKeyCredential: toJSON() メソッド"
short-title: toJSON()
slug: Web/API/PublicKeyCredential/toJSON
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`toJSON()`** は {{domxref("PublicKeyCredential")}} インターフェイスのメソッドで、{{domxref("PublicKeyCredential")}} の {{glossary("JSON type representation", "JSON 形式の表現")}}を返します。

返されるオブジェクトのプロパティは、[キーペアの作成とユーザーの登録](/ja/docs/Web/API/Web_Authentication_API#creating_a_key_pair_and_registering_a_user)の際に [`navigator.credentials.create()`](/ja/docs/Web/API/CredentialsContainer/create) によって返されたものか、あるいは[ユーザーの認証](/ja/docs/Web/API/Web_Authentication_API#authenticating_a_user)の際に [`navigator.credentials.get()`](/ja/docs/Web/API/CredentialsContainer/get) によって返されたものかによって異なります。

このメソッドは、ウェブアプリのコードが [`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を呼び出して {{domxref("PublicKeyCredential")}} をシリアライズし、ユーザーの登録や認証の際に認証依頼者サーバーへ送信できるようにする際に、自動的に呼び出されます。
ウェブアプリコード内で直接呼び出すことを意図したものではありません。

## 構文

```js-nolint
toJSON()
```

### 引数

なし。

### 返値

[`PublicKeyCredential`](/ja/docs/Web/API/PublicKeyCredential) オブジェクトの {{glossary("JSON type representation", "JSON 形式の表現")}}です。

含まれるプロパティは、その資格情報が登録時に [`navigator.credentials.create()`](/ja/docs/Web/API/CredentialsContainer/create) によって返されたものか、ユーザーの認証時に [`navigator.credentials.get()`](/ja/docs/Web/API/CredentialsContainer/get) によって取得されたものかによって異なります。
含まれるプロパティの値と型は、[`PublicKeyCredential`](/ja/docs/Web/API/PublicKeyCredential) と同じですが、バッファープロパティの代わりに [base64url](/ja/docs/Glossary/Base64) でエンコードされた文字列が使用される点が異なります。

オブジェクトのプロパティは以下の通りです。

- `id`
  - : {{domxref("PublicKeyCredential.id")}} で返される値です。
- `rawId`
  - : {{domxref("PublicKeyCredential.rawId")}} を [base64url](/ja/docs/Glossary/Base64) で符号化したもの。
- `authenticatorAttachment` {{optional_inline}}
  - : {{domxref("PublicKeyCredential.authenticatorAttachment")}} から返される値。
- `type`
  - : 文字列 `"public-key"`。
- `clientExtensionResults`
  - : {{domxref("PublicKeyCredential.getClientExtensionResults()")}} から返される値を [base64url](/ja/docs/Glossary/Base64) で符号化したものの配列。
- `response`
  - : response プロパティのオブジェクトは、登録操作または認証操作の後に資格情報が返されるかどうかによって異なります。
    - 新しいユーザーを登録する際、`response` は {{domxref("AuthenticatorAttestationResponse")}} の JSON 形式の表現となり、バッファーの値は [base64url](/ja/docs/Glossary/Base64) で符号化されています。

    - ユーザーを認証する際、返される値は {{domxref("AuthenticatorAssertionResponse")}} の JSON 形式の表現となり、バッファーの値は [base64url](/ja/docs/Glossary/Base64) で符号化されています。

### 例外

- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 例

新しいユーザーを登録する際、認証依頼者のサーバーは、期待される資格情報に関する情報をウェブアプリに提供します。
ウェブアプリは、受け取った情報（下記の `createCredentialOptions`）を引数として[`navigator.credentials.create()`](/ja/docs/Web/API/CredentialsContainer/create)を呼び出し、新しい資格情報（{{domxref("PublicKeyCredential")}}）を返すプロミスを取得します。

```js
const newCredentialInfo = await navigator.credentials.create({
  createCredentialOptions,
});
```

その後、ウェブアプリは `JSON.stringify()` （これは `toJSON()` を呼び出します）を使用して、返された資格情報をシリアライズし、それをサーバーに POST で送信します。

```js
const registrationURL = "https://example.com/registration";
const apiRegOptsResp = await fetch(registrationURL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(newCredentialInfo), // Calls newCredentialInfo.toJSON
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
