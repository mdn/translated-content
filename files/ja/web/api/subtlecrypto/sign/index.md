---
title: "SubtleCrypto: sign() メソッド"
short-title: sign()
slug: Web/API/SubtleCrypto/sign
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`sign()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、デジタル{{glossary("signature", "署名")}}を生成します。

引数として、署名する{{glossary("key", "鍵")}}、アルゴリズム固有の引数、署名するデータを取ります。署名で履行されるプロミス ({{jsxref("Promise")}}) を返します。

対応する {{domxref("SubtleCrypto.verify()")}} メソッドを使用して、署名を検証することができます。

## 構文

```js-nolint
sign(algorithm, key, data)
```

### 引数

- `algorithm`
  - : 使用する署名アルゴリズムとその引数を指定する文字列またはオブジェクトです。
    - [RSASSA-PKCS1-v1_5](#rsassa-pkcs1-v1_5) を使用する場合は、`"RSASSA-PKCS1-v1_5"` という文字列か、 `{ "name": "RSASSA-PKCS1-v1_5" }` の形の文字列を渡してください。
    - [RSA-PSS](#rsa-pss) を使用するには、 {{domxref("RsaPssParams")}} を渡してください。
    - [ECDSA](#ecdsa) を使用するには、 {{domxref("EcdsaParams")}} を渡してください。
    - [HMAC](#hmac) を使用するには、 `"HMAC"` という文字列か、 `{ "name": "HMAC" }` の形の文字列を渡してください。
- `key`
  - : 署名に用いる鍵を格納した {{domxref("CryptoKey")}} オブジェクトです。
    もし `algorithm` が公開鍵暗号方式であれば、これは秘密鍵です。
- `data`
  - : 署名するデータを格納した {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}}、{{jsxref("DataView")}} のいずれかのオブジェクト。

### 返値

署名を格納した {{jsxref("ArrayBuffer")}} で履行される {{jsxref("Promise")}} です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 署名鍵がリクエストされた署名アルゴリズムの鍵でない場合、または未知の、あるいは署名に適さないアルゴリズムを使用しようとした場合に発生します。

## 対応しているアルゴリズム

ウェブ暗号 API は、署名と署名の検証に使用できるアルゴリズムを 4 つ提供しています。

これらのアルゴリズムのうち、 RSASSA-PKCS1-v1_5、RSA-PSS、ECDSA の 3 つは{{Glossary("public-key cryptography", "公開鍵暗号システム")}}でらい、署名に秘密鍵を使用し、検証に公開鍵を使用します。
これらのシステムはすべて[ダイジェストアルゴリズム](/ja/docs/Web/API/SubtleCrypto/digest#対応しているアルゴリズム)を使用して、署名の前にメッセージを短い固定長のデータにハッシュ化します。
ECDSA （これは `algorithm` オブジェクトに渡されます）を除き、ダイジェストアルゴリズムの選択は {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} または {{domxref("SubtleCrypto.importKey()", "importKey()")}} 関数に渡されます。

4 番目のアルゴリズムである HMAC は、署名と検証に同じアルゴリズムと鍵を用います。これは、検証鍵を秘密にしなければならないことを意味しています。しかし、署名者と検証者が同じエンティティである場合には良い選択となります。

### RSASSA-PKCS1-v1_5

RSASSA-PKCS1-v1_5 アルゴリズムは [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) で定義されています。

### RSA-PSS

RSA-PSS アルゴリズムは [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) で定義されています。

RSASSA-PKCS1-v1_5 とは異なる形で、署名処理にランダムなソルトを組み込んでいるため、同じ鍵で署名された同じメッセージが毎回同じ署名になることはありません。ソルトの長さを定義する追加のプロパティは、 {{domxref("SubtleCrypto.sign()", "sign()")}} と {{domxref("SubtleCrypto.verify()", "verify()")}} 関数を呼び出す際に渡されます。

### ECDSA

ECDSA (Elliptic Curve Digital Signature Algorithm) は、 [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) で定義されている、楕円曲線暗号 ([RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090)) を使用するデジタル署名アルゴリズムの一種です。

署名は RFC 6090 で指定されている `s1` と `s2` の値（[RFC 4754](https://datatracker.ietf.org/doc/html/rfc4754#section-3) ではそれぞれ `r` と `s` として知られている）をビッグエンディアンのバイト配列でエンコードしたものです。
これらの値はこの順番で連結されます。

このエンコーダーは [IEEE 1363-2000](https://standards.ieee.org/ieee/1363/2049/) 標準でも 提案されており、 IEEE P1363 形式と呼ばれることもあります。これは [X.509](https://www.itu.int/rec/T-REC-X.509) の署名構造とは異なり、 [OpenSSL](https://www.openssl.org) などのいくつかのツールやライブラリーでは既定で生成される形式です。

### HMAC

HMAC アルゴリズムは、 [FIPS 198-1 標準](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf)に従ってハッシュベースのメッセージ認証コードを計算し、検証します。

使用するダイジェストアルゴリズムは、 [`HmacKeyGenParams`](/ja/docs/Web/API/HmacKeyGenParams) オブジェクトを {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} に渡すか、または [`HmacImportParams`](/ja/docs/Web/API/HmacImportParams) オブジェクトを {{domxref("SubtleCrypto.importKey()", "importKey()")}} に渡すことで指定します。

## 例

> [!NOTE]
> GitHub の[動作例](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html)をご覧ください。

### RSASSA-PKCS1-v1_5

このコードはテキストボックスの内容を取得し、署名用にエンコードし、秘密鍵で署名します。
[完全なソースコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  "RSASSA-PKCS1-v1_5",
  privateKey,
  encoded,
);
```

### RSA-PSS

このコードはテキストボックスの内容を取得し、署名用にエンコードし、秘密鍵で署名します。
[完全なソースコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "RSA-PSS",
    saltLength: 32,
  },
  privateKey,
  encoded,
);
```

### ECDSA

このコードはテキストボックスの内容を取得し、署名用にエンコードし、秘密鍵で署名します。
[完全なソースコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  {
    name: "ECDSA",
    hash: { name: "SHA-384" },
  },
  privateKey,
  encoded,
);
```

### HMAC

このコードはテキストボックスの内容を取得し、署名用にエンコードし、秘密鍵で署名します。
[完全なソースコードは GitHub で参照してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
Fetch the contents of the "message" textbox, and encode it
in a form we can use for the sign operation.
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign("HMAC", key, encoded);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("SubtleCrypto.verify()")}}
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) で RSASSA-PKCS1-v1_5 を定義しています。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) で RSA-PSS を定義しています。
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) で ECDSA を定義しています。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) で HMAC を定義しています。
