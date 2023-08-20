---
title: SubtleCrypto.generateKey()
slug: Web/API/SubtleCrypto/generateKey
l10n:
  sourceCommit: 6f81db437ff479079728eee2edec8d3c3d291084
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} インターフェイスの **`generateKey()`** メソッドは、新しい (対称鍵アルゴリズム用の) 鍵または (公開鍵アルゴリズム用の) 鍵ペアを生成します。

## 構文

```js
generateKey(algorithm, extractable, keyUsages);
```

### 引数

- `algorithm`

  - : 生成する鍵の種類を指定し、アルゴリズム固有の追加パラメータを与えるオブジェクト。

    - [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss),
      [RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep):
      {{domxref("RsaHashedKeyGenParams")}} オブジェクトを渡します。
    - [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa), [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh):
      {{domxref("EcKeyGenParams")}} オブジェクトを渡します。
    - [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac):
      {{domxref("HmacKeyGenParams")}} オブジェクトを渡します。
    - [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), [AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw):
      {{domxref("AesKeyGenParams")}} オブジェクトを渡します。

- `extractable`
  - : {{domxref("SubtleCrypto.exportKey()")}} や {{domxref("SubtleCrypto.wrapKey()")}}
    を用いて鍵を取り出すことができるかを表す {{jsxref("Boolean")}} 値。
- `keyUsages`
  - : 新しく生成する鍵で何ができるかを表す {{jsxref("Array")}} 。
    配列の要素として使用可能な値は以下の通りです。
    - `encrypt`: 鍵をメッセージの {{domxref("SubtleCrypto.encrypt()", "暗号化")}} に用いてよい。
    - `decrypt`: 鍵をメッセージの {{domxref("SubtleCrypto.decrypt()", "復号")}} に用いてよい。
    - `sign`: 鍵をメッセージの {{domxref("SubtleCrypto.sign()", "署名")}} に用いてよい。
    - `verify`: 鍵を署名の {{domxref("SubtleCrypto.verify()", "検証")}} に用いてよい。
    - `deriveKey`: 鍵を {{domxref("SubtleCrypto.deriveKey()", "新しい鍵の導出")}} に用いてよい。
    - `deriveBits`: 鍵を {{domxref("SubtleCrypto.deriveBits()", "ビット列の導出")}} に用いてよい。
    - `wrapKey`: 鍵を {{domxref("SubtleCrypto.wrapKey()", "鍵のラップ")}} に用いてよい。
    - `unwrapKey`: 鍵を {{domxref("SubtleCrypto.unwrapKey()", "ラップされた鍵の取り出し")}} に用いてよい。

### 返り値

{{domxref("CryptoKey")}} (対称鍵アルゴリズムの場合) または {{domxref("CryptoKeyPair")}} (公開鍵アルゴリズムの場合) で解決される {{jsxref("Promise")}} を返します。

### 例外

以下の例外が発生した時、`Promise` は拒否されます。

- `SyntaxError` {{domxref("DOMException")}}
  - : 結果が、種類が `secret` または `private` である {{domxref("CryptoKey")}} であるが、
    `keyUsages` が空である時発生します。
- `SyntaxError` {{domxref("DOMException")}}
  - : 結果が {{domxref("CryptoKeyPair")}} であり、
    その `privateKey.usages` 属性が空である時発生します。

## 例

> **メモ:** GitHub 上で[動く例を試す](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)ことができます。

### RSA 鍵ペアの生成

このコードは、RSA-OAEP の暗号化用鍵ペアを生成します。
[GitHub でコード全体を見る](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256",
  },
  true,
  ["encrypt", "decrypt"],
);
```

### 楕円曲線鍵ペアの生成

このコードは、ECDSA の署名用鍵ペアを生成します。
[GitHub でコード全体を見る](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-384",
  },
  true,
  ["sign", "verify"],
);
```

### HMAC 鍵の生成

このコードは、HMAC の署名用鍵を生成します。
[GitHub でコード全体を見る](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: { name: "SHA-512" },
  },
  true,
  ["sign", "verify"],
);
```

### AES 鍵の生成

このコードは、AES-GCM の暗号化用鍵を生成します。
[GitHub でコード全体を見る](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256,
  },
  true,
  ["encrypt", "decrypt"],
);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [Cryptographic key length recommendations](https://www.keylength.com/)
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final)
- [暗号鍵設定ガイダンス～暗号鍵の鍵長選択方法と運用方法～：IPA 独立行政法人 情報処理推進機構](https://www.ipa.go.jp/security/vuln/ckms_setting.html)
