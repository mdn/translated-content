---
title: "SubtleCrypto: verify() メソッド"
short-title: verify()
slug: Web/API/SubtleCrypto/verify
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`verify()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、デジタル{{glossary("signature", "署名")}}を検証します。

引数として、署名を検証するための{{glossary("key", "鍵")}}、アルゴリズム固有の引数、署名、署名済み元データを取ります。署名が有効かどうかを示す論理値で履行される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
verify(algorithm, key, signature, data)
```

### 引数

- `algorithm`
  - : 使用するアルゴリズムを定義する文字列またはオブジェクトで、アルゴリズムによっては追加の引数もあります。
    追加引数に指定された値は、対応する {{domxref("SubtleCrypto.sign()", "sign()")}} 呼び出しに渡された値と一致しなければなりません。
    - [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5) を使用する場合は、`"RSASSA-PKCS1-v1_5"` という文字列か、 `{ "name": "RSASSA-PKCS1-v1_5" }` の形の文字列を渡してください。
    - [RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss) を使用するには、 {{domxref("RsaPssParams")}} を渡してください。
    - [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) を使用するには、 {{domxref("EcdsaParams")}} を渡してください。
    - [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) を使用するには、 `"HMAC"` という文字列か、 `{ "name": "HMAC" }` の形の文字列を渡してください。
- `key`
  - : 署名に用いる鍵を格納した {{domxref("CryptoKey")}} オブジェクトです。
    対称鍵アルゴリズムであれば秘密鍵であり、公開鍵システムであれば公開鍵です。
- `signature`
  - : {{jsxref("ArrayBuffer")}} で、検証する{{glossary("signature", "署名")}}です。
- `data`
  - : {{jsxref("ArrayBuffer")}} で、署名を検証するためのデータが入ります。

### 返値

論理値で履行される {{jsxref("Promise")}} です。署名が有効な場合は `true`、そうでない場合は `false` です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 暗号鍵がリクエストされた検証アルゴリズムの鍵でない場合、または未知のアルゴリズムか検証処理に適していないアルゴリズムを使用しようとした場合に発生します。

## 対応しているアルゴリズム

`verify()` メソッドは、 [`sign()`](/ja/docs/Web/API/SubtleCrypto/sign#対応しているアルゴリズム) メソッドと同じアルゴリズムに対応しています。

## 例

> [!NOTE]
> GitHub 上の[動作例を試す](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html)ことができます。

### RSASSA-PKCS1-v1_5

このコードは公開鍵を使用して署名を検証します。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### RSA-PSS

このコードは公開鍵を使用して署名を検証します。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".rsa-pss .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### ECDSA

このコードは公開鍵を使用して署名を検証します。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".ecdsa .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### HMAC

このコードは署名を検証するために秘密鍵を使用します。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
Fetch the encoded message-to-sign and verify it against the stored signature.
* If it checks out, set the "valid" class on the signature.
* Otherwise set the "invalid" class.
*/
async function verifyMessage(key) {
  const signatureValue = document.querySelector(".hmac .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "HMAC",
    key,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SubtleCrypto.sign()")}}
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) は RSASSA-PKCS1-v1_5 を定義しています。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) は RSA-PSS を定義しています。
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) は ECDSA を定義しています。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) は HMAC を定義しています。
