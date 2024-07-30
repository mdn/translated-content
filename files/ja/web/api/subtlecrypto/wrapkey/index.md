---
title: "SubtleCrypto: wrapKey() メソッド"
short-title: wrapKey()
slug: Web/API/SubtleCrypto/wrapKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`wrapKey()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、鍵を「ラップ」します。
これは、外部のポータブルな形式で鍵をエクスポートし、エクスポートされた鍵を暗号化することを意味しています。
鍵をラップすることで、保護されていないデータストア内や保護されていないネットワーク上での送信など、信頼されていない環境で鍵を保護することを支援します。

{{DOMxRef("SubtleCrypto.exportKey()")}} にて、鍵の[エクスポート形式](/ja/docs/Web/API/SubtleCrypto/importKey#対応している形式)を指定します。
鍵をエクスポートするには、{{DOMxRef("CryptoKey.extractable")}}を `true` に設定する必要があります。

しかし、`wrapKey()` はエクスポートする鍵も暗号化するので、暗号化に使用する鍵も渡す必要があります。
これは「ラッピング鍵」と呼ばれることもあります。

`wrapKey()` の逆は {{domxref("SubtleCrypto.unwrapKey()")}} です。`wrapKey` がエクスポート＋暗号化で構成されるのに対して、`unwrapKey` はインポート＋複合で構成されます。

## 構文

```js-nolint
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### 引数

- `format`
  - : 鍵が暗号化される前にエクスポートされるデータ形式を記述する文字列。以下のいずれかになります。
    - `raw`
      - : [Raw](/ja/docs/Web/API/SubtleCrypto/importKey#raw) 形式。
    - `pkcs8`
      - : [PKCS #8](/ja/docs/Web/API/SubtleCrypto/importKey#pkcs_8) 形式。
    - `spki`
      - : [SubjectPublicKeyInfo](/ja/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) 形式。
    - `jwk`
      - : [JSON ウェブ鍵](/ja/docs/Web/API/SubtleCrypto/importKey#json_web_key) 形式。
- `key`
  - : ラップする {{domxref("CryptoKey")}}。
- `wrappingkey`
  - : エクスポートされたキーを暗号化する {{domxref("CryptoKey")}}。これは `wrapKey` の使用法がなければなりません。
- `wrapAlgo`
  - : エクスポートされた鍵を暗号化するために使用する[アルゴリズム](/ja/docs/Web/API/SubtleCrypto/encrypt#対応しているアルゴリズム)と、必要な追加引数を指定するオブジェクトです。
    - [RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) を使用するには、 [`RsaOaepParams`](/ja/docs/Web/API/RsaOaepParams) オブジェクトを渡してください。
    - [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr) を使用するには、 [`AesCtrParams`](/ja/docs/Web/API/AesCtrParams) オブジェクトを渡してください。
    - [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) を使用するには、 [`AesCbcParams`](/ja/docs/Web/API/AesCbcParams) オブジェクトを渡してください。
    - [AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) を使用するには、 [`AesGcmParams`](/ja/docs/Web/API/AesGcmParams) オブジェクトを渡してください。
    - [AES-KW](#aes-kw) を使用するには、文字列 `"AES-KW"` または `{ name: "AES-KW }` の形のオブジェクトを渡してください。

### 返値

暗号化されたエクスポート鍵を格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) で履行されるプロミス ([`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise)) です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : ラップキーがリクエストされたラップアルゴリズムのキーでない場合に発生します。
- `NotSupported` {{domxref("DOMException")}}
  - : 未知のアルゴリズム、または暗号化やラッピングに適していないアルゴリズムを使用しようとしたときに発生します。
- {{jsxref("TypeError")}}
  - : 無効な書式を使用しようとしたときに発生します。

## 対応しているアルゴリズム

[暗号化に使用できるアルゴリズム](/ja/docs/Web/API/SubtleCrypto/encrypt#対応しているアルゴリズム)はすべて、鍵に "wrapKey" の用途を設定している限り、鍵のラッピングにも使用できます。
鍵のラッピングには、 [AES-KW](#aes-kw) という追加オプションがあります。

### AES-KW

AES-KW は AES 暗号を鍵のラッピングに使用する方法です。

AES-GCM のような他の AES モードと比較して AES-KW を使用する利点の 1 つは、 AES-KW が初期化ベクトルを必要としないことです。
AES-KW を使用するには、入力は 64 ビットの倍数でなければなりません。

AES-KW は [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394) で定義されています。

## 例

> [!NOTE]
> GitHub で[動作例を試す](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html)ことができます。

### Raw ラップ

この例は AES 鍵をラップしています。
エクスポート形式として "raw" を使用し、暗号化にはパスワード由来の鍵による AES-KW を使用しています。[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js)

```js
let salt;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-KW key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-KW", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);

  return window.crypto.subtle.wrapKey("raw", keyToWrap, wrappingKey, "AES-KW");
}

/*
Generate an encrypt/decrypt secret key,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "AES-GCM",
      length: 256,
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((secretKey) => wrapCryptoKey(secretKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### PKCS #8 ラップ

この例は RSA 秘密署名鍵をラップしています。エクスポート形式として "pkcs8" を用い、暗号化にはパスワードから派生した鍵を用いた AES-GCM を使用しています。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey("pkcs8", keyToWrap, wrappingKey, {
    name: "AES-GCM",
    iv,
  });
}

/*
Generate a sign/verify key pair,
then wrap the private key.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => {
    console.log(wrappedKey);
  });
```

### SubjectPublicKeyInfo ラップ

この例では、 RSA 公開暗号鍵をラップしています。エクスポート形式として "spki" を用い、暗号化にはパスワード由来の鍵による AES-CBC を使用しています。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-CBC key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-CBC", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(16));

  return window.crypto.subtle.wrapKey("spki", keyToWrap, wrappingKey, {
    name: "AES-CBC",
    iv,
  });
}

/*
Generate an encrypt/decrypt key pair,
then wrap it.
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // Consider using a 4096-bit key for systems that require long-term security
      modulusLength: 2048,
      publicExponent: new Uint8Array([1, 0, 1]),
      hash: "SHA-256",
    },
    true,
    ["encrypt", "decrypt"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.publicKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

### JSON ウェブ鍵ラップ

この例は ECDSA 秘密鍵をラップしています。エクスポート形式として "jwk" を用い、暗号化にはパスワード由来の鍵による AES-GCM を使用しています。
[完全なコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

```js
let salt;
let iv;

/*
Get some key material to use as input to the deriveKey method.
The key material is a password supplied by the user.
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveBits", "deriveKey"],
  );
}

/*
Given some key material and some random salt
derive an AES-GCM key using PBKDF2.
*/
function getKey(keyMaterial, salt) {
  return window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["wrapKey", "unwrapKey"],
  );
}

/*
Wrap the given key.
*/
async function wrapCryptoKey(keyToWrap) {
  // get the key encryption key
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);
  iv = window.crypto.getRandomValues(new Uint8Array(12));

  return window.crypto.subtle.wrapKey("jwk", keyToWrap, wrappingKey, {
    name: "AES-GCM",
    iv,
  });
}

/*
Generate a sign/verify key pair,
then wrap the private key
*/
window.crypto.subtle
  .generateKey(
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign", "verify"],
  )
  .then((keyPair) => wrapCryptoKey(keyPair.privateKey))
  .then((wrappedKey) => console.log(wrappedKey));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`SubtleCrypto.exportKey()`](/ja/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 形式](https://datatracker.ietf.org/doc/html/rfc5208).
- [SubjectPublicKeyInfo 形式](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1).
- [JSON ウェブ鍵形式](https://datatracker.ietf.org/doc/html/rfc7517).
- [AES-KW 仕様書](https://datatracker.ietf.org/doc/html/rfc3394).
