---
title: "SubtleCrypto: deriveBits() メソッド"
short-title: deriveBits()
slug: Web/API/SubtleCrypto/deriveBits
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`deriveBits()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、ベース鍵からビットの配列を導出するために使用することができます。

引数として、ベース鍵、使用する導出アルゴリズム、導出するビットの長さを用います。これは派生ビットを格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) で履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

このメソッドは [`SubtleCrypto.deriveKey()`](/ja/docs/Web/API/SubtleCrypto/deriveKey) ととても似ていますが、 `deriveKey()` が `ArrayBuffer` ではなく [`CryptoKey`](/ja/docs/Web/API/CryptoKey) オブジェクトを返す点が異なります。基本的に `deriveKey()` は `deriveBits()` に続く [`importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey) から構成されます。

この関数は `deriveKey()` と同じ導出アルゴリズム、ECDH、HKDF、PBKDF2 に対応しています。これらのアルゴリズムの詳細については、[対応しているアルゴリズム](/ja/docs/Web/API/SubtleCrypto/deriveKey#対応しているアルゴリズム)を参照してください。

## 構文

```js-nolint
deriveBits(algorithm, baseKey, length)
```

### 引数

- `algorithm`
  - : 使用する[導出アルゴリズム](/ja/docs/Web/API/SubtleCrypto/deriveKey#対応しているアルゴリズム)を定義するオブジェクトです。
    - [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) を使用するには、 [`EcdhKeyDeriveParams`](/ja/docs/Web/API/EcdhKeyDeriveParams) オブジェクトを渡してください。
    - [HKDF](/ja/docs/Web/API/SubtleCrypto/deriveKey#hkdf) を使用するには、 [`HkdfParams`](/ja/docs/Web/API/HkdfParams) オブジェクトを渡してください。
    - [PBKDF2](/ja/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) を使用するには、 [`Pbkdf2Params`](/ja/docs/Web/API/Pbkdf2Params) オブジェクトを渡してください。
- `baseKey`
  - : 導出アルゴリズムへの入力を表す {{domxref("CryptoKey")}} です。 `algorithm` が ECDH の場合、これは ECDH 秘密鍵となります。例えば、 PBKDF2 の場合、 [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey) を使用して `CryptoKey` としてインポートしたパスワードになります。
- `length`
  - : 導出するビット数を表す数値。すべてのブラウザーに対応するためには、 8 の倍数である必要があります。

### 返値

導出されたビットを格納する [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) で履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `OperationError` {{domxref("DOMException")}}
  - : `deriveBits()` 呼び出しの _length_ 引数が NULL の場合、または _length_ 引数が 8 の倍数でない一部の場合に発生します。
- `InvalidAccessError` {{domxref("DOMException")}}
  - : ベース鍵がリクエストされた導出アルゴリズムの鍵でない場合、またはその鍵の [`CryptoKey.usages`](/ja/docs/Web/API/CryptoKey) の値に `deriveBits` が格納されていない場合に発生します。
- `NotSupported` {{domxref("DOMException")}}
  - : ベース鍵がリクエストされた導出アルゴリズムの鍵でない場合、またはその鍵の [`CryptoKey.usages`](/ja/docs/Web/API/CryptoKey) の値に `deriveBits` が格納されていない場合に発生します。

## 対応しているアルゴリズム

[`deriveKey()` の記事のアルゴリズムの節](/ja/docs/Web/API/SubtleCrypto/deriveKey#対応しているアルゴリズム)を参照してください。

## 例

> [!NOTE]
> GitHub 上の[動作例を試してみてください](https://mdn.github.io/dom-examples/web-crypto/derive-bits/index.html)。

### ECDH

この例では、 Alice と Bob がそれぞれ ECDH 鍵ペアを生成します。

次に、アリスの秘密鍵とボブの公開鍵を使用して共有秘密を導出します。[動作例を試してみてください](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/ecdh.js)

```js
async function deriveSharedSecret(privateKey, publicKey) {
  const sharedSecret = await window.crypto.subtle.deriveBits(
    {
      name: "ECDH",
      namedCurve: "P-384",
      public: publicKey,
    },
    privateKey,
    128,
  );

  const buffer = new Uint8Array(sharedSecret, 0, 5);
  const sharedSecretValue = document.querySelector(".ecdh .derived-bits-value");
  sharedSecretValue.classList.add("fade-in");
  sharedSecretValue.addEventListener("animationend", () => {
    sharedSecretValue.classList.remove("fade-in");
  });
  sharedSecretValue.textContent = `${buffer}…[${sharedSecret.byteLength} bytes total]`;
}

// Generate 2 ECDH key pairs: one for Alice and one for Bob
// In more normal usage, they would generate their key pairs
// separately and exchange public keys securely
const generateAlicesKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

const generateBobsKeyPair = window.crypto.subtle.generateKey(
  {
    name: "ECDH",
    namedCurve: "P-384",
  },
  false,
  ["deriveBits"],
);

Promise.all([generateAlicesKeyPair, generateBobsKeyPair]).then((values) => {
  const alicesKeyPair = values[0];
  const bobsKeyPair = values[1];

  const deriveBitsButton = document.querySelector(".ecdh .derive-bits-button");
  deriveBitsButton.addEventListener("click", () => {
    // Alice then generates a secret using her private key and Bob's public key.
    // Bob could generate the same secret using his private key and Alice's public key.
    deriveSharedSecret(alicesKeyPair.privateKey, bobsKeyPair.publicKey);
  });
});
```

### PBKDF2

この例では、ユーザーにパスワードを要求し、それを使用してPBKDF2を使用してビットを導出します。[動作例を試してみてください](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-bits/pbkdf2.js)

```js
let salt;

/*
Get some key material to use as input to the deriveBits method.
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
Derive some bits from a password supplied by the user.
*/
async function getDerivedBits() {
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const derivedBits = await window.crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    256,
  );

  const buffer = new Uint8Array(derivedBits, 0, 5);
  const derivedBitsValue = document.querySelector(
    ".pbkdf2 .derived-bits-value",
  );
  derivedBitsValue.classList.add("fade-in");
  derivedBitsValue.addEventListener("animationend", () => {
    derivedBitsValue.classList.remove("fade-in");
  });
  derivedBitsValue.textContent = `${buffer}…[${derivedBits.byteLength} bytes total]`;
}

const deriveBitsButton = document.querySelector(".pbkdf2 .derive-bits-button");
deriveBitsButton.addEventListener("click", () => {
  getDerivedBits();
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HKDF 仕様書](https://datatracker.ietf.org/doc/html/rfc5869).
- [NIST guidelines for password-based key derivation](https://csrc.nist.gov/publications/detail/sp/800-132/final).
- [Password storage cheat sheet](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).
- [Advice on choosing an iteration count for PBKDF2](https://security.stackexchange.com/questions/3959/recommended-of-iterations-when-using-pbkdf2-sha256/3993#3993).
