---
title: PublicKeyCredentialCreationOptions.excludeCredentials
slug: conflicting/Web/API/CredentialsContainer/create
original_slug: Web/API/PublicKeyCredentialCreationOptions/excludeCredentials
---

{{APIRef("Web Authentication API")}}{{securecontext_header}}

**`excludeCredentials`** は {{domxref("PublicKeyCredentialCreationOptions")}} 辞書の任意のプロパティであり、指定されたユーザーに既に存在する公開鍵の記述子を要素に持つ {{jsxref("Array")}} オブジェクトです。これは既存のユーザーに新しい認証情報を生成することを避けたい場合、パーティのサーバーから提供されます。

## 構文

```
excludeCredentials = publicKeyCredentialCreationOptions.excludeCredentials
```

### 値

{{jsxref("Array")}} で、以下のプロパティを持つオブジェクトを要素に持ちます。

- `type`
  - : 文字列で、生成された公開鍵の認証情報の種類を表します。この文書の執筆時点 (2019 年 3 月) では、 "`public-key`" のみが使用可能です。
- `id`
  - : {{domxref("BufferSource")}} で、既存の公開鍵の認証情報の識別子 ({{domxref("PublicKeyCredential.rawId")}}) に一致します。子の識別子は `PublicKeyCredential` インスタンスの生成時に生成されます。
- `transports` {{optional_inline}}

  - : 文字列の {{jsxref("Array")}} で、クライアントと認証機器の通信方法を記述します。使用可能な文字列は次の通りです。

    - "`usb`": 認証機器は取り外し可能な USB 接続で接続することができます
    - "`nfc`": 認証機器は [NFC (Near Field Communication)](https://en.wikipedia.org/wiki/Near-field_communication) を通して使用することができます
    - "`ble`": 認証機器は [BLE (Bluetooth Low Energy)](https://en.wikipedia.org/wiki/Bluetooth_Low_Energy) を通して使用することができます
    - "`internal`": 認証機器はクライアント端末の中に埋め込まれています (取り外せません)。

認証機器がすでにそのような公開鍵認証情報の一つを含んでいる場合、クライアントは {{domxref("DOMException")}} を発生さえるか、ユーザーに新しい認証情報を生成したいかを確認するかします。

## 例

```js
var publicKey = {
  excludeCredentials: [
    {
      type: "public-key",
      // the id for john.doe@example.com
      id  : new Uint8Array(26) /* this actually is given by the server */
    },
    {
      type: "public-key",
      // the id for john-doe@example.com
      id : new Uint8Array(26) /* another id */
    }
  ],
  challenge: new Uint8Array(26) /* this actually is given from the server */,
  rp: {
    name: "Example CORP",
    id  : "login.example.com"
  },
  user: {
    id: new Uint8Array(26), /* To be changed for each user */
    name: "jdoe@example.com",
    displayName: "John Doe",
  },
  pubKeyCredParams: [ {
    type: "public-key",
    alg: -7 } ]
};

navigator.credentials.create({ publicKey })
  .then(function (newCredentialInfo) {
    // send attestation response and client extensions
    // to the server to proceed with the registration
    // of the credential
  }).catch(function (err) {
     console.error(err);
  });
```

## 仕様書

| 仕様書                                                                                                                                       | 状態                         | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------- |
| {{SpecName('WebAuthn','#dom-publickeycredentialcreationoptions-excludecredentials','excludeCredentials')}} | {{Spec2('WebAuthn')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("api.PublicKeyCredentialCreationOptions.excludeCredentials")}}
