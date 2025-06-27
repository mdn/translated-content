---
title: "SubtleCrypto: decrypt() メソッド"
short-title: decrypt()
slug: Web/API/SubtleCrypto/decrypt
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`decrypt()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、暗号化されたデータを復号します。
引数として {{glossary("key")}}、オプションの引数、復号するデータ（「暗号文」とも呼ばれます）を取ります。
これは、復号されたデータ（「平文」とも呼ばれます）で履行される {{jsxref("Promise")}} を返します。

## 構文

```js-nolint
decrypt(algorithm, key, data)
```

### 引数

- `algorithm`
  - : 使用する[アルゴリズム](#対応しているアルゴリズム)と、必要に応じて追加の引数を指定するオブジェクトです。
    追加引数に指定された値は、対応する {{domxref("SubtleCrypto.encrypt()", "encrypt()")}} 呼び出しに渡された値と一致しなければなりません。
    - [RSA-OAEP](#rsa-oaep) を使用するには、 {{domxref("RsaOaepParams")}} を渡してください。
    - [AES-CTR](#aes-ctr) を使用するには、 {{domxref("AesCtrParams")}} を渡してください。
    - [AES-CBC](#aes-cbc) を使用するには、 {{domxref("AesCbcParams")}} を渡してください。
    - [AES-GCM](#aes-gcm) を使用するには、 {{domxref("AesGcmParams")}} を渡してください。

- `key`
  - : 復号に使用するキーを格納した {{domxref("CryptoKey")}} オブジェクト。
    RSA-OAEP を用いる場合、これは {{domxref("CryptoKeyPair")}} オブジェクトの `privateKey` プロパティとなります。
- `data`
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかで、復号するデータ（{{glossary("ciphertext", "暗号文")}} とも呼ばれます）を格納します。

### 返値

平文を格納した {{jsxref("ArrayBuffer")}} で履行される {{jsxref("Promise")}} です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : リクエストされた処理が指定された鍵に対して有効でない場合に発生します（無効な暗号化アルゴリズムや、指定した暗号化アルゴリズムに対して無効な鍵など）。
- `OperationError` {{domxref("DOMException")}}
  - : その演算処理固有の理由（アルゴリズム引数のサイズが不正、暗号文の復号にエラーがあったなど）で失敗した場合に発生します。

## 対応しているアルゴリズム

`decrypt()` メソッドは、 [`encrypt()`](/ja/docs/Web/API/SubtleCrypto/encrypt#対応しているアルゴリズム) メソッドと同じアルゴリズムに対応しています。

## 例

> [!NOTE]
> GitHub 上の[動作例を試してみてください](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)。

### RSA-OAEP

このコードは RSA-OAEP を用いて `ciphertext` を復号します。[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function decryptMessage(privateKey, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    ciphertext,
  );
}
```

### AES-CTR

このコードは `ciphertext` を、 CTR モードの AES を使用して復号します。
`counter` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "AES-CTR", counter, length: 64 },
    key,
    ciphertext,
  );
}
```

### AES-CBC

このコードは `ciphertext` を、 CBC モードの AES を使用して復号します。 `iv` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  // iv 値は暗号化に使用した値と同じ
  return window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
}
```

### AES-GCM

このコードは `ciphertext` を、 GCM モードで AES を用いて復号します。 `iv` は暗号化に用いた値と一致しなければならないことに注意してください。[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function decryptMessage(key, ciphertext) {
  // iv 値は暗号化に使用した値と同じ
  return window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SubtleCrypto.encrypt()")}}
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) は RSAOAEP を定義しています。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) は CTR モードを定義しています。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) は CBC モードを定義しています。
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) は GCM モードを定義しています。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) は HMAC を定義しています。
