---
title: "SubtleCrypto: deriveKey() メソッド"
short-title: deriveKey()
slug: Web/API/SubtleCrypto/deriveKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`deriveKey()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、マスター鍵から秘密鍵を導出するために使用することができます。

引数として、初期鍵素材、使用する導出アルゴリズム、導出する鍵に必要なプロパティを取ります。これは新しい鍵を表す {{domxref("CryptoKey")}} オブジェクトで履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) を返します。

なお、使用することのできる 3 つの鍵導出アルゴリズムには、それぞれかなり異なる特徴があり、かなり異なる状況に適しています。[対応しているアルゴリズム](#対応しているアルゴリズム)を参照してください。

## 構文

```js-nolint
deriveKey(algorithm, baseKey, derivedKeyAlgorithm, extractable, keyUsages)
```

### 引数

- `algorithm`
  - : 使用している[導出アルゴリズム](#対応しているアルゴリズム)を定義するオブジェクト。
    - [ECDH](#ecdh) を使用するには、 [`EcdhKeyDeriveParams`](/ja/docs/Web/API/EcdhKeyDeriveParams) オブジェクトを渡してください。
    - [HKDF](#hkdf) を使用するには、 [`HkdfParams`](/ja/docs/Web/API/HkdfParams) オブジェクトを渡してください。
    - [PBKDF2](#pbkdf2) を使用するには、 [`Pbkdf2Params`](/ja/docs/Web/API/Pbkdf2Params) オブジェクトを渡してください。
- `baseKey`
  - : 導出アルゴリズムへの入力を表す {{domxref("CryptoKey")}} 。 `algorithm` が ECDH の場合、これは ECDH 秘密鍵となります。例えば、 PBKDF2 の場合、 [`SubtleCrypto.importKey()`](/ja/docs/Web/API/SubtleCrypto/importKey) を使用して `CryptoKey` としてインポートしたパスワードになります。
- `derivedKeyAlgorithm`
  - : 導出鍵を使用するアルゴリズムを定義するオブジェクトです。
    - [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) の場合、 [`HmacKeyGenParams`](/ja/docs/Web/API/HmacKeyGenParams) オブジェクトを渡してください。
    - [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)、[AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) のいずれかの場合、 [`AesKeyGenParams`](/ja/docs/Web/API/AesKeyGenParams) オブジェクトを渡してください。
- `extractable`
  - : 論理値で、 {{domxref("SubtleCrypto.exportKey()")}} または {{domxref("SubtleCrypto.wrapKey()")}} を使用して鍵をエクスポートすることが可能かどうかを示します。
- `keyUsages`
  - : 導出鍵で何ができるかを示す {{jsxref("Array")}} です。鍵の使用は `derivedKeyAlgorithm` で設定するにはアルゴリズムで許可されていなければならないことに注意してください。配列の使用可能な値は以下の通りです。
    - `encrypt`: この鍵はメッセージの{{domxref("SubtleCrypto.encrypt()", "暗号化", "", 1)}}で使用される可能性があります。
    - `decrypt`: この鍵はメッセージの{{domxref("SubtleCrypto.decrypt()", "復号", "", 1)}}で使用される可能性があります。
    - `sign`: この鍵はメッセージの{{domxref("SubtleCrypto.sign()", "署名", "", 1)}}で使用される可能性があります。
    - `verify`: この鍵は署名の{{domxref("SubtleCrypto.verify()", "検証", "", 1)}}で使用される可能性があります。
    - `deriveKey`: この鍵は{{domxref("SubtleCrypto.deriveKey()", "新しい鍵の導出", "", 1)}}で使用される可能性があります。
    - `deriveBits`: この鍵は{{domxref("SubtleCrypto.deriveBits()", "ビットの導出", "", 1)}}で使用される可能性があります。
    - `wrapKey`: この鍵は{{domxref("SubtleCrypto.wrapKey()", "鍵をラップする", "", 1)}}のに使用される可能性があります。
    - `unwrapKey`: この鍵は{{domxref("SubtleCrypto.unwrapKey()", "鍵のラップを解除する", "", 1)}}のに使用される可能性があります。

### 返値

{{domxref("CryptoKey")}} で履行される {{jsxref("Promise")}} です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `InvalidAccessError` {{domxref("DOMException")}}
  - : マスター鍵がリクエストされた導出アルゴリズムの鍵でない場合、またはその鍵の `keyUsages` 値に `deriveKey` が格納されていない場合に発生します。
- `NotSupported` {{domxref("DOMException")}}
  - : 不明なアルゴリズムや導出に適さないアルゴリズムを使用しようとした場合、 あるいは導出鍵にリクエストされたアルゴリズムが鍵長を定義していない場合に発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : `keyUsages` が空で、ラップされていない鍵の種類が `secret` または `private` である場合に発生します。

## 対応しているアルゴリズム

`deriveKey()` が対応している 3 つのアルゴリズムはかなり異なる特徴を持っており、それぞれの状況に適しています。

### ECDH

ECDH (Elliptic Curve Diffie-Hellman) は鍵合意アルゴリズムです。 ECDH の公開鍵と秘密鍵のペアをそれぞれ保有する二人が共有する秘密、すなわち、二人が共有し、他の人とは共有されない秘密を生成することができます。この共有秘密を共通鍵として使用して通信を安全にしたり、（例えば HKDF アルゴリズムを使用して）そのような鍵を導出するための入力として使用したりすることができます。

ECDH は [RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090) で定義されています。

### HKDF

HKDF は鍵導出関数です。 HKDF は、 ECDH 鍵合意処理の出力など、高エントロピーの入力から 鍵素材を導出するように設計されています。

パスワードのような相対的にエントロピーの低い入力から鍵を導出するようには設計されていません。 PBKDF2 を使用してください。

HKDF は [RFC 5869](https://datatracker.ietf.org/doc/html/rfc5869) で定義されています。

### PBKDF2

PBKDF2 は鍵導出関数でもあります。これは、パスワードのような相対的にエントロピーの低い入力から鍵素材を導出するように設計されています。 PBKDF2 は、入力されたパスワードに HMAC のような機能とソルトを適用し、この処理を何度も繰り返すことで鍵素材を導出します。この処理を繰り返す回数が多ければ多いほど、鍵の導出にはコンピューターが必要とする計算量が増えます。これにより、攻撃者がブルートフォース（総当り）を使用して 辞書攻撃で鍵を発見することが難しくなります。

PBKDF2 は [RFC 2898](https://datatracker.ietf.org/doc/html/rfc2898) で定義されています。

## 例

> [!NOTE]
> GitHub の[動作例を試してみる](https://mdn.github.io/dom-examples/web-crypto/derive-key/index.html)ことができます。

### ECDH

この例では Alice と Bob がそれぞれ ECDH 鍵ペアを生成し、公開鍵を交換します。そして `deriveKey()` を使って共有 AES 鍵を生成し、それを使用してメッセージを暗号化します。[完全なコードは GitHub でご覧ください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/ecdh.js)

```js
/*
Derive an AES key, given:
- our ECDH private key
- their ECDH public key
*/
function deriveSecretKey(privateKey, publicKey) {
  return window.crypto.subtle.deriveKey(
    {
      name: "ECDH",
      public: publicKey,
    },
    privateKey,
    {
      name: "AES-GCM",
      length: 256,
    },
    false,
    ["encrypt", "decrypt"],
  );
}

async function agreeSharedSecretKey() {
  // Generate 2 ECDH key pairs: one for Alice and one for Bob
  // In more normal usage, they would generate their key pairs
  // separately and exchange public keys securely
  let alicesKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  let bobsKeyPair = await window.crypto.subtle.generateKey(
    {
      name: "ECDH",
      namedCurve: "P-384",
    },
    false,
    ["deriveKey"],
  );

  // Alice then generates a secret key using her private key and Bob's public key.
  let alicesSecretKey = await deriveSecretKey(
    alicesKeyPair.privateKey,
    bobsKeyPair.publicKey,
  );

  // Bob generates the same secret key using his private key and Alice's public key.
  let bobsSecretKey = await deriveSecretKey(
    bobsKeyPair.privateKey,
    alicesKeyPair.publicKey,
  );

  // Alice can then use her copy of the secret key to encrypt a message to Bob.
  let encryptButton = document.querySelector(".ecdh .encrypt-button");
  encryptButton.addEventListener("click", () => {
    encrypt(alicesSecretKey);
  });

  // Bob can use his copy to decrypt the message.
  let decryptButton = document.querySelector(".ecdh .decrypt-button");
  decryptButton.addEventListener("click", () => {
    decrypt(bobsSecretKey);
  });
}
```

### PBKDF2

この例では、ユーザーにパスワードを要求し、それを使用して PBKDF2 を使って AES 鍵を導出し、その AES 鍵を使ってメッセージを暗号化します。
[完全なコードは GitHub でご覧ください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/derive-key/pbkdf2.js)

```js
/*
deriveKeyメソッドの入力として使用する鍵素材を取得します。
鍵素材は、ユーザーから提供されたパスワードです。
*/
function getKeyMaterial() {
  const password = window.prompt("Enter your password");
  const enc = new TextEncoder();
  return window.crypto.subtle.importKey(
    "raw",
    enc.encode(password),
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"],
  );
}

async function encrypt(plaintext, salt, iv) {
  const keyMaterial = await getKeyMaterial();
  const key = await window.crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt,
      iterations: 100000,
      hash: "SHA-256",
    },
    keyMaterial,
    { name: "AES-GCM", length: 256 },
    true,
    ["encrypt", "decrypt"],
  );

  return window.crypto.subtle.encrypt({ name: "AES-GCM", iv }, key, plaintext);
}
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
