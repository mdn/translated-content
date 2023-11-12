---
title: SubtleCrypto.importKey()
slug: Web/API/SubtleCrypto/importKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`importKey()`** 方法用于导入密钥：也就是说，它以外部可移植格式的密钥作为输入，并给出对应的、可用于 [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 {{domxref("CryptoKey")}} 对象。

该函数接受多种导入的格式：参阅[支持的格式](#支持的格式)以获取详细信息。

## 语法

```js-nolint
importKey(format, keyData, algorithm, extractable, keyUsages)
```

### 参数

- `format`
  - : 一个字符串，用于描述要导入的密钥的数据格式。可以是以下值之一：
    - `raw`：[Raw](#raw) 格式。
    - `pkcs8`：[PKCS #8](#pkcs_8) 格式。
    - `spki`：[SubjectPublicKeyInfo](#subjectpublickeyinfo) 格式。
    - `jwk`：[JSON Web Key](#json_web_key) 格式。
- `keyData`
  - : 一个 {{jsxref("ArrayBuffer")}}、[TypedArray](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/TypedArray)、{{jsxref("DataView")}} 或 `JSONWebKey` 对象，包含了给定格式的密钥。
- `algorithm`
  - : 一个对象，定义了要导入的密钥的类型和特定于算法的额外参数。
    - 对于 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)：传递 [`RsaHashedImportParams`](/zh-CN/docs/Web/API/RsaHashedImportParams) 对象。
    - 对于 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 或 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh)：传递 [`EcKeyImportParams`](/zh-CN/docs/Web/API/EcKeyImportParams) 对象。
    - 对于 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac)：传递 [`HmacImportParams`](/zh-CN/docs/Web/API/HmacImportParams) 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 或 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw)：传递标识算法的字符串，或一个 `{ "name": ALGORITHM }` 形式的对象，其中的 `ALGORITHM` 是算法的名称。
    - 对于 [PBKDF2](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2)：传递字符串 `PBKDF2`。
    - 对于 [HKDF](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#hkdf)：传递字符串 `HKDF`。
- `extractable`
  - : 一个布尔值，表示是否可能使用 {{domxref("SubtleCrypto.exportKey()")}} 或 {{domxref("SubtleCrypto.wrapKey()")}} 方法来导出密钥。
- `keyUsages`
  - : 一个{{jsxref("Array", "数组", "", 1)}}，表示生成出来的密钥可被用于做什么，数组元素可能的值有：
    - `encrypt`：密钥可用于{{domxref("SubtleCrypto.encrypt()", "加密", "", 1)}}消息。
    - `decrypt`：密钥可用于{{domxref("SubtleCrypto.decrypt()", "解密", "", 1)}}消息。
    - `sign`：密钥可用于对消息进行{{domxref("SubtleCrypto.sign()", "签名", "", 1)}}。
    - `verify`：密钥可用于{{domxref("SubtleCrypto.verify()", "验证", "", 1)}}签名。
    - `deriveKey`：密钥可用于{{domxref("SubtleCrypto.deriveKey()", "派生新的密钥", "", 1)}}。
    - `deriveBits`：密钥可用于{{domxref("SubtleCrypto.deriveBits()", "派生比特序列", "", 1)}}。
    - `wrapKey`：密钥可用于{{domxref("SubtleCrypto.wrapKey()", "包装一个密钥", "", 1)}}。
    - `unwrapKey`：密钥可用于{{domxref("SubtleCrypto.unwrapKey()", "解开一个密钥的包装", "", 1)}}。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现为表示导入的密钥的 {{domxref("CryptoKey")}} 对象。

### 异常

当发生以下几种异常时，promise 会被拒绝：

- `SyntaxError` {{domxref("DOMException")}}
  - : 当结果是类型为 `secret` 或 `private` 的解包装的密钥，但 `keyUsages` 参数为空时触发。
- {{jsxref("TypeError")}}
  - : 当尝试使用无效的格式，或 `keyData` 与给定的格式不匹配时触发。

## 支持的格式

此 API 支持四种不同的密钥导入/导出格式：Raw、PKCS #8、SubjectPublicKeyInfo 和 JSON Web Key。

### Raw

你可以使用此格式导入或导出 AES 和 HMAC 的密钥，或椭圆曲线算法的公钥。

这种格式的密钥需要已包含密钥的原始字节的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象的形式提供。

### PKCS #8

你可以使用此格式导入或导出 RSA 和椭圆曲线算法的私钥。

PKCS #8 格式在 [RFC 5208](https://datatracker.ietf.org/doc/html/rfc5208) 中定义，并使用 [ASN.1 表示法](https://zh.wikipedia.org/wiki/ASN.1) 进行表示：

```plain
PrivateKeyInfo ::= SEQUENCE {
    version                   Version,
    privateKeyAlgorithm       PrivateKeyAlgorithmIdentifier,
    privateKey                PrivateKey,
    attributes           [0]  IMPLICIT Attributes OPTIONAL }
```

`importKey()` 方法期望接收一个包含 [DER 编码](https://luca.ntop.org/Teaching/Appunti/asn1.html)的 `PrivateKeyInfo` 的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象。DER 是一组将 ASN.1 结构编码为二进制格式的规则。

你最有可能遇到的此类对象的格式为 [PEM 格式](ttps://zh.wikipedia.org/wiki/Pem格式)。PEM 格式是一种使用 ASCII 编码二进制数据的方法。它由头部、尾部和中间 [base64 编码](/zh-CN/docs/Glossary/Base64) 的二进制数据组成。PEM 编码的 `PrivateKeyInfo` 类似于这样：

```plain
-----BEGIN PRIVATE KEY-----
MIG2AgEAMBAGByqGSM49AgEGBSuBBAAiBIGeMIGbAgEBBDAU9BD0jxDfF5OV380z
9VIEUN2W5kJDZ3hbuaDenCxLiAMsoquKTfFaou71eLdN0TShZANiAARMUhCee/cp
xmjGc1roj0D0k6VlUqtA+JVCWigXcIAukOeTHCngZDKCrD4PkXDBvbciJdZKvO+l
ml2FIkoovZh/8yeTKmjUMb804g6OmjUc9vVojCRV0YdaSmYkkJMJbLg=
-----END PRIVATE KEY-----
```

要将其转换为你可以传递给 `importKey()` 的格式，你需要做两件事：

- 头部和尾部之间的部分使用 [`window.atob()`](/zh-CN/docs/Web/API/atob) 进行 base64 解码。
- 将生成的字符串转换为 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

请参阅[示例](#示例)部分，以获得更具体的指导。

### SubjectPublicKeyInfo

你可以使用此格式来导入/导出 RSA 和椭圆曲线算法的公钥。

`SubjectPublicKey` 在 [RFC 5280 第 4.1 节](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1)中定义，使用 [ASN.1 表示法](https://zh.wikipedia.org/wiki/ASN.1) 进行表示：

```plain
SubjectPublicKeyInfo  ::=  SEQUENCE  {
    algorithm            AlgorithmIdentifier,
    subjectPublicKey     BIT STRING  }
```

类似于 [PKCS #8](#pkcs_8)，`importKey()` 方法期望接收一个包含 [DER 编码](https://luca.ntop.org/Teaching/Appunti/asn1.html)的 `SubjectPublicKeyInfo` 的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer) 对象。

同样地，你最有可能遇到的此类对象的格式为 [PEM 格式](ttps://zh.wikipedia.org/wiki/Pem格式)。PEM 编码的 `SubjectPublicKeyInfo` 类似于这样：

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

与 [PKCS #8](#pkcs_8) 一样，你可以传递给 `importKey()` 的格式，你需要做两件事：

- 头部和尾部之间的部分使用 [`window.atob()`](/zh-CN/docs/Web/API/atob) 进行 base64 解码。
- 将生成的字符串转换为 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

请参阅[示例](#示例)部分，以获得更具体的指导。

### JSON Web Key

你可以使用 JSON Web Key 格式来导入/导出 RSA 和椭圆曲线算法的公钥或私钥，以及 AES 和 HMAC 的密钥。

JSON Web Key 格式在 [RFC 7517](https://datatracker.ietf.org/doc/html/rfc7517) 中定义。它描述了一种将公钥、私钥和密钥表示为 JSON 对象的方法。

JSON Web Key 看起来像这样（这是一个椭圆曲线算法的私钥）：

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

## 示例

> **备注：** 你可以在 Github 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/import-key/index.html)。

### 导入 Raw 格式的密钥

该示例从一个包含字节序列的 `ArrayBuffer` 导入将被使用的 AES 密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/raw.js)

```js
const rawKey = window.crypto.getRandomValues(new Uint8Array(16));

/*
从一个包含原始字节序列的 ArrayBuffer 导入 AES 密钥。
传入包含字节序列的 ArrayBuffer，返回一个 Promise，
会被兑现为一个表示密钥的 CryptoKey 对象。
*/
function importSecretKey(rawKey) {
  return window.crypto.subtle.importKey("raw", rawKey, "AES-GCM", true, [
    "encrypt",
    "decrypt",
  ]);
}
```

### 导入 PKCS #8 格式的密钥

该示例从 PEM 编码的 PKCS #8 对象导入一个 RSA 私有签名密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/pkcs8.js)

```js
/*
将字符串转换为 ArrayBuffer
来自 https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
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
导入一个 PEM 编码的 RSA 私钥，用于 RSA-PSS 签名。
输入一个包含 PEM 编码的私钥的字符串，返回一个 Promise，
会兑现为一个表示私钥的 CryptoKey 对象。
*/
function importPrivateKey(pem) {
  // 获取 PEM 字符串在头部和尾部之间的部分
  const pemHeader = "-----BEGIN PRIVATE KEY-----";
  const pemFooter = "-----END PRIVATE KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length,
  );
  // 将字符串通过 base64 解码为二进制数据
  const binaryDerString = window.atob(pemContents);
  // 将二进制字符串转换为 ArrayBuffer
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

### 导入 SubjectPublicKeyInfo 格式的密钥

该示例从一个 PEM 编码的 SubjectPublicKeyInfo 对象导入一个 RSA 公钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/spki.js)

```js
// 来自 https://developers.google.com/web/updates/2012/06/How-to-convert-ArrayBuffer-to-and-from-String
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
  // 获取 PEM 字符串在头部和尾部之间的部分
  const pemHeader = "-----BEGIN PUBLIC KEY-----";
  const pemFooter = "-----END PUBLIC KEY-----";
  const pemContents = pem.substring(
    pemHeader.length,
    pem.length - pemFooter.length,
  );
  // 将字符串通过 base64 解码为二进制数据
  const binaryDerString = window.atob(pemContents);
  // 将二进制字符串转换为 ArrayBuffer
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

### 导入 JSON Web Key 格式的密钥

此示例从给定的 JSON Web Key 对象导入一个 ECDSA 私有签名密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/import-key/jwk.js)

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
以 JSON Web Key 格式导入椭圆曲线算法的私钥，用与 ECDSA 签名。
输入一个表示 JSON Web Key 的对象，返回一个 Promise，
会兑现为一个表示私钥的 CryptoKey 对象。
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 格式](https://datatracker.ietf.org/doc/html/rfc5208)。
- [SubjectPublicKeyInfo 格式](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1)。
- [JSON Web Key 格式](https://datatracker.ietf.org/doc/html/rfc7517)。
