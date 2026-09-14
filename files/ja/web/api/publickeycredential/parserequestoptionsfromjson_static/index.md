---
title: "PublicKeyCredential: parseRequestOptionsFromJSON() 静的メソッド"
short-title: parseRequestOptionsFromJSON()
slug: Web/API/PublicKeyCredential/parseRequestOptionsFromJSON_static
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`parseRequestOptionsFromJSON()`** は {{domxref("PublicKeyCredential")}} インターフェイスの静的メソッドで、{{glossary("JSON type representation", "JSON 形式の表現")}}を {{domxref("PublicKeyCredentialRequestOptions")}} インスタンスに変換します。

このメソッドは、既存の資格情報をリクエストするために、信頼サーバーからウェブアプリに指定された情報を変換するための便利な関数です。

## 構文

```js-nolint
PublicKeyCredential.parseRequestOptionsFromJSON(options)
```

### 引数

- `options`
  - : {{domxref("PublicKeyCredentialRequestOptions")}} インスタンスと同じ構造を持つオブジェクトですが、バッファーのプロパティの代わりに [base64url](/ja/docs/Glossary/Base64) でエンコードされた文字列が使用されているものです。

### 返値

{{domxref("PublicKeyCredentialRequestOptions")}} インスタンスです。

### 例外

- `EncodingError` {{domxref("DOMException")}}
  - : `options` オブジェクトのどの部分も {{domxref("PublicKeyCredentialCreationOptions")}} インスタンスに変換できない場合。
- `SecurityError` {{domxref("DOMException")}}
  - : RP のドメインが有効ではありません。

## 解説

[（登録済みの）ユーザーの認証](/ja/docs/Web/API/Web_Authentication_API#ユーザーの認証)を行うウェブ認証プロセスでは、認証依頼者のサーバーが、既存の資格情報を探すために必要なウェブアプリ情報を送信します。この情報には、ユーザーの ID、認証依頼者、および「チャレンジ」に関する詳細が含まれ、必要に応じて資格情報の検索先も指定されます。例えば、ローカルの組み込み認証器や、USB、BLE などを介した外部の認証器などです。といった具合に。

ウェブアプリは、[`navigator.credentials.get()`](/ja/docs/Web/API/CredentialsContainer/get) を、サーバーから提供されたデータ含むを {{domxref("PublicKeyCredentialRequestOptions")}} インスタンスを引数として渡して呼び出すことで、この情報を認証器に渡して資格情報を探します。

仕様書では、資格情報のリクエストに必要な情報の送信方法については定義されていません。
便利な手法として、サーバーが、その構造を反映しつつ、`challenge` や `user.id` などのバッファープロパティを [base64url](/ja/docs/Glossary/Base64) 文字列としてエンコード方式でエンコードした、{{domxref("PublicKeyCredentialRequestOptions")}} インスタンスの {{glossary("JSON type representation", "JSON 形式の表現")}}に情報をカプセル化する方法があります。
このオブジェクトは、[JSON](/ja/docs/Glossary/JSON) 文字列にシリアライズしてウェブアプリに送信し、そこでシリアライズ解除後、{{domxref("PublicKeyCredentialRequestOptions")}} インスタンスに **`parseRequestOptionsFromJSON()`** で変換することができます。

## 例

すでに登録済みのユーザーを認証する際、認証依頼者のサーバーは、リクエストされた資格情報、認証依頼者、およびチャレンジに関する情報をウェブアプリに提供します。
下記コードでは、上記の [`options` 引数](#options)で説明されている形式で、この情報を定義しています。

```js
const requestCredentialOptionsJSON = {
  challenge: new Uint8Array([139, 66, 181, 87, 7, 203 /* … */]),
  rpId: "acme.com",
  allowCredentials: [
    {
      type: "public-key",
      id: new Uint8Array([64, 66, 25, 78, 168, 226, 174 /* … */]),
    },
  ],
  userVerification: "required",
};
```

このオブジェクトは JSON データ型のみを使用しているため、[`JSON.stringify()`](/ja/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) を使用して JSON にシリアライズし、ウェブアプリに送信することができます。

```js
JSON.stringify(requestCredentialOptionsJSON);
```

このウェブアプリは、JSON 文字列を `createCredentialOptionsJSON` オブジェクト（図示なし）にシリアライズ解除することができます。
**`parseCreationOptionsFromJSON()`** メソッドは、そのオブジェクトを `navigator.credentials.create()` で使用できる形式に変換するために使用されます。

```js
// オプションを get() で使用される形式に変換
const publicKey = PublicKeyCredential.parseRequestOptionsFromJSON(
  requestCredentialOptionsJSON, // JSON 形式の表現
);

navigator.credentials
  .get({ publicKey })
  .then((returnedCredentialInfo) => {
    // 返された資格情報をここで処理
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
- {{domxref("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}
