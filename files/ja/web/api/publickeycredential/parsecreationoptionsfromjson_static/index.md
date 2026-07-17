---
title: "PublicKeyCredential: parseCreationOptionsFromJSON() 静的メソッド"
short-title: parseCreationOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseCreationOptionsFromJSON_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`parseCreationOptionsFromJSON()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、そのプロパティの JSON 表現から {{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトを作成します。

このメソッドは、認証依頼者から指定された認証情報オプションの情報を、ウェブアプリが [資格情報の作成](/ja/docs/Web/API/Web_Authentication_API#鍵ペアの生成とユーザーの登録)に使用することができる便利な関数です。

## 構文

```js-nolint
PublicKeyCredential.parseCreationOptionsFromJSON(options)
```

### 引数

- `options`
  - : {{domxref("PublicKeyCredentialCreationOptions")}} と同じ構造を持つオブジェクトですが、バッファーのプロパティの代わりに [base64url](/ja/docs/Glossary/Base64) でエンコードされた文字列が使用されているものです。

### 返値

{{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトです。

### 例外

- `EncodingError` {{domxref("DOMException")}}
  - : `options` オブジェクトが {{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトに変換できない場合。
- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 解説

[鍵ペアの作成とユーザーの登録](/ja/docs/Web/API/Web_Authentication_API#鍵ペアの生成とユーザーの登録)を行うウェブ認証プロセスでは、認証依頼者のサーバーが、ユーザーの身元、認証依頼者に関する詳細、および「チャレンジ」など、資格情報の作成に必要な情報をウェブアプリに送信します。

ウェブアプリは、[`navigator.credentials.create()`](/ja/docs/Web/API/CredentialsContainer/create) を {{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトを引数として渡して呼び出すことで、この情報を認証器に渡し、資格情報を作成します。

仕様書では、資格情報の生成に必要な情報の送信方法については定義されていません。
便利な手法として、サーバーが、その構造を反映しつつ、`challenge` や `user.id` などのバッファープロパティを [base64url](/ja/docs/Glossary/Base64) 文字列としてエンコード方式でエンコードした、{{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトの {{glossary("JSON type representation", "JSON 形式の表現")}}に情報をカプセル化する方法があります。
このオブジェクトは、[JSON](/ja/docs/Glossary/JSON) 文字列にシリアライズしてウェブアプリに送信し、そこでシリアライズ解除後、{{domxref("PublicKeyCredentialCreationOptions")}} オブジェクトに **`parseCreationOptionsFromJSON()`** で変換することができます。

## 例

新しいユーザーを登録する際、認証依頼者のサーバーは、期待される資格情報に関する情報をウェブアプリに提供します。
下記のコードは、上記の [`options` 引数](#options)で説明されている方法（`AuthenticatorResponse` の [AuthenticatorAttestationResponse の取得](/ja/docs/Web/API/AuthenticatorResponse#authenticatorassertionresponse_の取得)から引用）で、この情報を定義しています。

```js
const createCredentialOptionsJSON = {
  challenge:
    "21, 31, 105, " /* サーバーによって生成された 29 以上のランダムなバイト */,
  rp: {
    name: "Example CORP",
    id: "login.example.com",
  },
  user: {
    id: "16",
    name: "canand@example.com",
    displayName: "Carina Anand",
  },
  pubKeyCredParams: [
    {
      type: "public-key",
      alg: -7,
    },
  ],
};
```

このオブジェクトは JSON データ型のみを使用しているため、[`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を使用して JSON にシリアライズし、ウェブアプリに送信することができます。

```js
JSON.stringify(createCredentialOptionsJSON);
```

このウェブアプリは、JSON 文字列を `createCredentialOptionsJSON` オブジェクト（図示なし）にシリアライズ解除することができます。
**`parseCreationOptionsFromJSON()`** メソッドは、そのオブジェクトを `navigator.credentials.create()` で使用できる形式に変換するために使用されます。

```js
// オプションを create() で使用される形式に変換
const createCredentialOptions =
  PublicKeyCredential.parseCreationOptionsFromJSON(
    createCredentialOptionsJSON, // JSON 形式の表現
  );

navigator.credentials
  .create({ publicKey: createCredentialOptions })
  .then((newCredentialInfo) => {
    // 新しい資格情報をここで処理
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

- [ウェブ認証 API](/ja/docs/Web/API/Web_Authentication_API)
- {{domxref("PublicKeyCredential.parseRequestOptionsFromJSON_static", "PublicKeyCredential.parseRequestOptionsFromJSON()")}}
- {{domxref("PublicKeyCredential.toJSON()")}}
