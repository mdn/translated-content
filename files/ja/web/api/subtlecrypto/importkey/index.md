---
title: "SubtleCrypto: importKey() メソッド"
short-title: importKey()
slug: Web/API/SubtleCrypto/importKey
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

**`importKey()`** は {{domxref("SubtleCrypto")}} インターフェイスのメソッドで、鍵をインポートします。つまり、外部のポータブル形式の鍵を入力として取り、[ウェブ暗号 API](/ja/docs/Web/API/Web_Crypto_API) で使用できる {{domxref("CryptoKey")}} オブジェクトを返します。

この関数はいくつかのインポート形式を受け入れます。詳細は[対応している形式](#対応している形式)を参照してください。

## 構文

```js-nolint
importKey(format, keyData, algorithm, extractable, keyUsages)
```

### 引数

- `format`
  - : インポートする鍵のデータ形式を記述する文字列。以下のいずれかになります。
    - `raw`: [Raw](#raw) 形式です。
    - `pkcs8`: [PKCS #8](#pkcs_8) 形式です。
    - `spki`: [SubjectPublicKeyInfo](#subjectpublickeyinfo) 形式です。
    - `jwk`: [JSON Web Key](#json_web_key) 形式です。
- `keyData`
  - : {{jsxref("ArrayBuffer")}}、[TypedArray](/ja/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)、 {{jsxref("DataView")}}、または指定された形式で鍵を格納した `JSONWebKey` オブジェクトです。
- `algorithm`
  - : インポートする鍵の種類を定義し、アルゴリズム固有の追加引数を提供するオブジェクトです。
    - [RSASSA-PKCS1-v1_5](/ja/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5), [RSA-PSS](/ja/docs/Web/API/SubtleCrypto/sign#rsa-pss), [RSA-OAEP](/ja/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) の場合:
      [`RsaHashedImportParams`](/ja/docs/Web/API/RsaHashedImportParams) オブジェクトを渡してください。
    - [ECDSA](/ja/docs/Web/API/SubtleCrypto/sign#ecdsa) または [ECDH](/ja/docs/Web/API/SubtleCrypto/deriveKey#ecdh) の場合:
      [`EcKeyImportParams`](/ja/docs/Web/API/EcKeyImportParams) オブジェクトを渡してください。
    - [HMAC](/ja/docs/Web/API/SubtleCrypto/sign#hmac) の場合:
      [`HmacImportParams`](/ja/docs/Web/API/HmacImportParams) オブジェクトを渡してください。
    - [AES-CTR](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-ctr), [AES-CBC](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-cbc),
      [AES-GCM](/ja/docs/Web/API/SubtleCrypto/encrypt#aes-gcm), [AES-KW](/ja/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) の場合:
      アルゴリズムを識別する文字列、または `{ "name": ALGORITHM }` の形のオブジェクト。 `ALGORITHM` はアルゴリズム名です。
    - [PBKDF2](/ja/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) の場合: 文字列 `PBKDF2` を渡してください。
    - [HKDF](/ja/docs/Web/API/SubtleCrypto/deriveKey#hkdf) の場合: 文字列 `HKDF` を渡してください。
- `extractable`
  - : 論理値で、 {{domxref("SubtleCrypto.exportKey()")}} または {{domxref("SubtleCrypto.wrapKey()")}} を使用して鍵をエクスポートすることが可能かどうかを示します。
- `keyUsages`
  - : その鍵で何ができるかを示す {{jsxref("Array")}} です。鍵の使用は 使用可能な値は以下の通りです。
    - `encrypt`: この鍵はメッセージの{{domxref("SubtleCrypto.encrypt()", "暗号化", "", 1)}}で使用することができます。
    - `decrypt`: この鍵はメッセージの{{domxref("SubtleCrypto.decrypt()", "復号", "", 1)}}で使用することができます。
    - `sign`: この鍵はメッセージの{{domxref("SubtleCrypto.sign()", "署名", "", 1)}}で使用することができます。
    - `verify`: この鍵は署名の{{domxref("SubtleCrypto.verify()", "検証", "", 1)}}で使用することができます。
    - `deriveKey`: この鍵は{{domxref("SubtleCrypto.deriveKey()", "新しい鍵の導出", "", 1)}}で使用することができます。
    - `deriveBits`: この鍵は{{domxref("SubtleCrypto.deriveBits()", "ビットの導出", "", 1)}}で使用することができます。
    - `wrapKey`: この鍵は{{domxref("SubtleCrypto.wrapKey()", "鍵をラップする", "", 1)}}のに使用することができます。
    - `unwrapKey`: この鍵は{{domxref("SubtleCrypto.unwrapKey()", "鍵のラップを解除する", "", 1)}}のに使用することができます。

### 返値

インポートされた鍵を {{domxref("CryptoKey")}} オブジェクトとして履行される [`Promise`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Promise) です。

### 例外

以下の例外が発生した場合、プロミスは拒否されます。

- `SyntaxError` {{domxref("DOMException")}}
  - : `keyUsages` が空で、ラップされていない鍵の種類が `secret` または `private` である場合に発生します。
- {{jsxref("TypeError")}}
  - : 無効な形式を使用しようとした場合や `keyData` がその形式に適していない場合に発生します。

## 対応している形式

この API は、4 つの異なる鍵形式、Raw、PKCS #8、SubjectPublicKeyInfo、JSON ウェブ鍵のインポート/エクスポートに対応しています。

### Raw

この形式を使用して、AES や HMAC 秘密鍵、楕円曲線公開鍵をインポートまたはエクスポートできます。

この形式では、鍵は鍵の生のバイトを格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) として提供されます。

### PKCS #8

この形式を使用して、RSA または楕円曲線秘密鍵をインポートまたはエクスポートできます。

PKCS #8 の形式は、[RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208)で [ASN.1 記法](https://en.wikipedia.org/wiki/ASN.1)を用いて定義されています。

```plain
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

`importKey()` メソッドは、このオブジェクトを [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に `PrivateKeyInfo` の [DER エンコード](https://luca.ntop.org/Teaching/Appunti/asn1.html)されたものが入ったものとして受け取ることを期待します。 DER は ASN.1 構造体をバイナリー形式にエンコードするための一連のルールです。

このオブジェクトは [PEM 形式](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)で表示されることがほとんどです。 PEM 形式はバイナリーデータを ASCII でエンコードする方法です。ヘッダーとフッターで構成され、その間に [base64 エンコード](/ja/docs/Glossary/Base64)のバイナリーデータがあります。 PEM エンコードされた `PrivateKeyInfo` は次のようになります。

```plain
-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDAU9BD0jxDfF5OV380z
9VIEUN2W5kJDZ3hbuaDenCxLiAMsoquKTfFaou71eLdN0TShZANiAARMUhCee/cp
xmjGc1roj0D0k6VlUqtA+JVCWigXcIAukOeTHCngZDKCrD4PkXDBvbciJdZKvO+l
ml2FIkoovZh/8yeTKmjUMb804g6OmjUc9vVojCRV0YdaSmYkkJMJbLg=
-----END PRIVATE KEY-----
```

これを `importKey()` に渡せる形式に取得するには、 2 つのことを行う必要があります。

- [`window.atob()`](/ja/docs/Web/API/Window/atob) を使用して、ヘッダーとフッターの間の部分を base64 デコードします。
- 結果の文字列を [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に変換します。

[例](#例)の節を参照してください。

### SubjectPublicKeyInfo

この形式を使用して、 RSA または楕円曲線公開鍵をインポートまたはエクスポートできます。

`SubjectPublicKey` は [RFC 5280, Section 4.1](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1) において、 [ASN.1 notation](https://en.wikipedia.org/wiki/ASN.1) を使用して定義されています。

```plain
SubjectPublicKeyInfo  ::=  SEQUENCE  {
    algorithm            AlgorithmIdentifier,
    subjectPublicKey     BIT STRING  }
```

[PKCS #8](#pkcs_8) と同様に、 `importKey()` メソッドはこのオブジェクトを `SubjectPublicKeyInfo` の [DER エンコード](https://luca.ntop.org/Teaching/Appunti/asn1.html)形式のデータを格納した [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) として受け取ることを期待します。

繰り返しますが、このオブジェクトは [PEM 形式](https://en.wikipedia.org/wiki/Privacy-Enhanced_Mail)で表示されることがほとんどです。
PEM エンコードされた `SubjectPublicKeyInfo` は次のようになります：

```plain
-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEA3j+HgSHUnc7F6XzvEbD0
r3M5JNy+/kabiJVu8IU1ERAl3Osi38VgiMzjDBDOrFxVzNNzl+SXAHwXIV5BHiXL
CQ6qhwYsDgH6OqgKIwiALra/wNH4UHxj1Or/iyAkjHRR/kGhUtjyVCjzvaQaDpJW
2G+syd1ui0B6kJov2CRUWiPwpff8hBfVWv8q9Yc2yD5hCnykVL0iAiyn+SDAk/rv
8dC5eIlzCI4efUCbyG4c9O88Qz7bS14DxSfaPTy8P/TWoihVVjLaDF743LgM/JLq
CDPUBUA3HLsZUhKm3BbSkd7Q9Ngkjv3+yByo4/fL+fkYRa8j9Ypa2N0Iw53LFb3B
gQIDAQAB
-----END PUBLIC KEY-----
```

[PKCS #8](#pkcs_8) と同様に、これを `importKey()` に渡せる形式で取得するには、 2 つのことを行う必要があります。

- [`window.atob()`](/ja/docs/Web/API/Window/atob) を使用して、ヘッダーとフッターの間の部分を base64 デコードします。
- 結果の文字列を [`ArrayBuffer`](/ja/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) に変換します。

[例](#例)節を参照してください。

### JSON ウェブ鍵

JSON ウェブ鍵形式を使用して、RSA または楕円曲線公開鍵や秘密鍵、AES や HMAC 秘密鍵をインポートまたはエクスポートできます。

JSON ウェブ鍵形式は、[RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517)で定義されています。
公開鍵、秘密鍵、秘密鍵を JSON オブジェクトとして表す方法が記述されています。

JSON ウェブ鍵は次のようなものです（これは EC 秘密鍵です）。

```json
{
  "crv": "P-384",
  "d": "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  "ext": true,
  "key_ops": ["sign"],
  "kty": "EC",
  "x": "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  "y": "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW"
};
```

## 例

> [!NOTE]
> You can [try the working examples](https://mdn.github.io/dom-examples/web-crypto/import-key/index.html) on GitHub.

### Raw インポート

この例では、使用する生のバイトを格納した `ArrayBuffer` から AES 鍵をインポートします。[完全なコードは GitHub で確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/raw.js)

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

/*
Import an AES secret key from an ArrayBuffer containing the raw bytes.
Takes an ArrayBuffer string containing the bytes, and returns a Promise
that will resolve to a CryptoKey representing the secret key.
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}
```

### PKCS #8 インポート

この例では、PEM エンコードされた PKCS #8 オブジェクトから RSA 秘密鍵をインポートします。
[完全なコードは GitHub で確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/pkcs8.js)

```js
/*
Convert a string into an ArrayBuffer
from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
*/
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

const pemEncodedKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDD0tPV/du2vftjvXj1t/gXTK39sNBVrOAEb/jKzXae+Xa0H+3LhZaQIQNMfACiBSgIfZUvEGb+7TqXWQpoLoFR/R7MvGWcSk98JyrVtveD8ZmZYyItSY7m2hcasqAFiKyOouV5vzyRe87/lEyzzBpF3bQQ4IDaQu+K9Hj5fKuU6rrOeOhsdnJc+VdDQLScHxvMoLZ9Vtt+oK9J4/tOLwr4CG8khDlBURcBY6gPcLo3dPU09SW+6ctX2cX4mkXx6O/0mmdTmacr/vu50KdRMleFeZYOWPAEhhMfywybTuzBiPVIZVP8WFCSKNMbfi1S9A9PdBqnebwwHhX3/hsEBt2BAgMBAAECggEABEI1P6nf6Zs7mJlyBDv+Pfl5rjL2cOqLy6TovvZVblMkCPpJyFuNIPDK2tK2i897ZaXfhPDBIKmllM2Hq6jZQKB110OAnTPDg0JxzMiIHPs32S1d/KilHjGff4Hjd4NXp1l1Dp8BUPOllorR2TYm2x6dcCGFw9lhTr8O03Qp4hjn84VjGIWADYCk83mgS4nRsnHkdiqYnWx1AjKlY51yEK6RcrDMi0Th2RXrrINoC35sVv+APt2rkoMGi52RwTEseA1KZGFrxjq61ReJif6p2VXEcvHeX6CWLx014LGk43z6Q28P6HgeEVEfIjyqCUea5Du/mYb/QsRSCosXLxBqwQKBgQD1+fdC9ZiMrVI+km7Nx2CKBn8rJrDmUh5SbXn2MYJdrUd8bYNnZkCgKMgxVXsvJrbmVOrby2txOiqudZkk5mD3E5O/QZWPWQLgRu8ueYNpobAX9NRgNfZ7rZD+81vh5MfZiXfuZOuzv29iZhU0oqyZ9y75eHkLdrerNkwYOe5aUQKBgQDLzapDi1NxkBgsj9iiO4KUa7jvD4JjRqFy4Zhj/jbQvlvM0F/uFp7sxVcHGx4r11C+6iCbhX4u+Zuu0HGjT4d+hNXmgGyxR8fIUVxOlOtDkVJa5sOBZK73/9/MBeKusdmJPRhalZQfMUJRWIoEVDMhfg3tW/rBj5RYAtP2dTVUMQKBgDs8yr52dRmT+BWXoFWwaWB0NhYHSFz/c8v4D4Ip5DJ5M5kUqquxJWksySGQa40sbqnD05fBQovPLU48hfgr/zghn9hUjBcsoZOvoZR4sRw0UztBvA+7jzOz1hKAOyWIulR6Vca0yUrNlJ6G5R56+sRNkiOETupi2dLCzcqb0PoxAoGAZyNHvTLvIZN4iGSrjz5qkM4LIwBIThFadxbv1fq6pt0O/BGf2o+cEdq0diYlGK64cEVwBwSBnSg4vzlBqRIAUejLjwEDAJyA4EE8Y5A9l04dzV7nJb5cRak6CrgXxay/mBJRFtaHxVlaZGxYPGSYE6UFS0+3EOmmevvDZQBf4qECgYEA0ZF6Vavz28+8wLO6SP3w8NmpHk7K9tGEvUfQ30SgDx4G7qPIgfPrbB4OP/E0qCfsIImi3sCPpjvUMQdVVZyPOIMuB+rV3ZOxkrzxEUOrpOpR48FZbL7RN90yRQsAsrp9e4iv8QwB3VxLe7X0TDqqnRyqrc/osGzuS2ZcHOKmCU8=
-----END PRIVATE KEY-----`;

/*
Import a PEM encoded RSA private key, to use for RSA-PSS signing.
Takes a string containing the PEM encoded key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length,
  );
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "pkcs8",
    binaryDer,
    {
      name: "RSA-PSS",
      hash: "SHA-256",
    },
    true,
    ["sign"],
  );
}
```

### SubjectPublicKeyInfo インポート

この例では、PEM エンコードされた SubjectPublicKeyInfo オブジェクトから RSA 公開暗号化鍵をインポートします。
[完全なコードは GitHub で確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/spki.js)

```js
// from https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
function str2ab(str) {
  const buf = new ArrayBuffer(str.length);
  const bufView = new Uint8Array(buf);
  for (let i = 0, strLen = str.length; i < strLen; i++) {
    bufView[i] = str.charCodeAt(i);
  }
  return buf;
}

const pemEncodedKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAy3Xo3U13dc+xojwQYWoJLCbOQ5fOVY8LlnqcJm1W1BFtxIhOAJWohiHuIRMctv7dzx47TLlmARSKvTRjd0dF92jx/xY20Lz+DXp8YL5yUWAFgA3XkO3LSJgEOex10NB8jfkmgSb7QIudTVvbbUDfd5fwIBmCtaCwWx7NyeWWDb7A9cFxj7EjRdrDaK3ux/ToMLHFXVLqSL341TkCf4ZQoz96RFPUGPPLOfvN0x66CM1PQCkdhzjE6U5XGE964ZkkYUPPsy6Dcie4obhW4vDjgUmLzv0z7UD010RLIneUgDE2FqBfY/C+uWigNPBPkkQ+Bv/UigS6dHqTCVeD5wgyBQIDAQAB
-----END PUBLIC KEY-----`;

function importRsaKey(pem) {
  // fetch the part of the PEM string between header and footer
  const pemHeader = "-----BEGIN PUBLIC KEY-----";
  const pemFooter = "-----END PUBLIC KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length - 1,
  );
  // base64 decode the string to get the binary data
  const binaryDerString = window.atob(pemContents);
  // convert from a binary string to an ArrayBuffer
  const binaryDer = str2ab(binaryDerString);

  return window.crypto.subtle.importKey(
    "spki",
    binaryDer,
    {
      name: "RSA-OAEP",
      hash: "SHA-256",
    },
    true,
    ["encrypt"],
  );
}
```

### JSON ウェブ鍵インポート

このコードは、 ECDSA 秘密署名鍵を指定された JSON ウェブ鍵オブジェクトにインポートします。[完全なコードは GitHub で確認してください。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/jwk.js)

```js
const jwkEcKey = {
  crv: "P-384",
  d: "wouCtU7Nw4E8_7n5C1-xBjB4xqSb_liZhYMsy8MGgxUny6Q8NCoH9xSiviwLFfK_",
  ext: true,
  key_ops: ["sign"],
  kty: "EC",
  x: "SzrRXmyI8VWFJg1dPUNbFcc9jZvjZEfH7ulKI1UkXAltd7RGWrcfFxqyGPcwu6AQ",
  y: "hHUag3OvDzEr0uUQND4PXHQTXP5IDGdYhJhL-WLKjnGjQAw0rNGy5V29-aV-yseW",
};

/*
Import a JSON Web Key format EC private key, to use for ECDSA signing.
Takes an object representing the JSON Web Key, and returns a Promise
that will resolve to a CryptoKey representing the private key.
*/
function importPrivateKey(jwk) {
  return window.crypto.subtle.importKey(
    "jwk",
    jwk,
    {
      name: "ECDSA",
      namedCurve: "P-384",
    },
    true,
    ["sign"],
  );
}
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
