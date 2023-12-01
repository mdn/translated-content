---
title: SubtleCrypto：wrapKey() 方法
slug: Web/API/SubtleCrypto/wrapKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`wrapKey()`** 方法用于“包装”（wrap）密钥。这一味着它以外部可移植的格式导出密钥，然后对其进行加密。包装密钥有助于在不受信任的环境中保护它，例如在未受保护的数据存储，或在未受保护的网络上进行传输。

与 {{DOMxRef("SubtleCrypto.exportKey()")}} 一样，你需要指定密钥的[导出格式](/zh-CN/docs/Web/API/SubtleCrypto/importKey#支持的格式)。要导出密钥，必须将 {{DOMxRef("CryptoKey.extractable")}} 设置为 `true`。

但是，由于 `wrapKey()` 还会对要导出的密钥进行加密，因此还需要传入用于加密的密钥。这有时被称为“包装密钥”（wrapping key）。

`wrapKey()` 的逆运算是 {{domxref("SubtleCrypto.unwrapKey()")}}：`wrapKey` 由导出 + 加密组成，而 `unwrapKey` 由导入 + 解密组成。

## 语法

```js-nolint
wrapKey(format, key, wrappingKey, wrapAlgo)
```

### 参数

- `format`
  - : 描述密钥在加密之前所导出的数据格式的字符串。它可以是以下值之一：
    - `raw`
      - : [Raw](/zh-CN/docs/Web/API/SubtleCrypto/importKey#raw) 格式。
    - `pkcs8`
      - : [PKCS #8](/zh-CN/docs/Web/API/SubtleCrypto/importKey#pkcs_8) 格式。
    - `spki`
      - : [SubjectPublicKeyInfo](/zh-CN/docs/Web/API/SubtleCrypto/importKey#subjectpublickeyinfo) 格式。
    - `jwk`
      - : [JSON Web Key](/zh-CN/docs/Web/API/SubtleCrypto/importKey#json_web_key) 格式。
- `key`
  - : 将被包装的{{domxref("CryptoKey", "密钥", "", 1)}}。
- `wrappingkey`
  - : 用于加密导出密钥的{{domxref("CryptoKey", "密钥", "", 1)}}。密钥的用途必须包括 `wrapKey`。
- `wrapAlgo`
  - : 指定用于加密导出密钥的[算法](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#支持的算法)的对象，以及任何所需的额外参数：
    - 对于 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep)，请传入 [`RsaOaepParams`](/zh-CN/docs/Web/API/RsaOaepParams) 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)，请传入 [`AesCtrParams`](/zh-CN/docs/Web/API/AesCtrParams) 对象。
    - 对于 [AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)，请传入 [`AesCbcParams`](/zh-CN/docs/Web/API/AesCbcParams) 对象。
    - 对于 [AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm)，请传入 [`AesGcmParams`](/zh-CN/docs/Web/API/AesGcmParams) 对象。
    - 对于 [AES-KW](#aes-kw)，请传入字符串 `"AES-KW"`，或 `{ "name": "AES-KW" }` 形式的对象。

### 返回值

一个 [`Promise`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise)，会兑现一个包含已加密的导出密钥的 [`ArrayBuffer`](/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/ArrayBuffer)。

### 异常

当遇到以下异常时，promise 将会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当包装密钥不是要求的包装算法的密钥时触发。
- `NotSupported` {{domxref("DOMException")}}
  - : 当尝试使用未知或不适用于加密/包装的算法时触发。
- {{jsxref("TypeError")}}
  - : 当尝试使用无效格式时触发。

## 支持的算法

所有[可用于加密的算法](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#支持的算法)，只要设置了“wrapKey”用途，也都可以用于密钥包装。对于密钥包装，你还可以使用 [AES-KW](#aes-kw)。

### AES-KW

AES-KW 是一种使用 AES 密码来对密钥进行包装的方法。

使用 AES-KW 相比于其他 AES 模式（例如 AES-GCM）的一个有点是，AES-KW 不需要初始化向量。要使用 AES-KW，输入必须是 64 位的倍数。

AES-KW 规定于 [RFC 3394](https://datatracker.ietf.org/doc/html/rfc3394) 中。

## 示例

> **备注：** 你可以在 GitHub 上[尝试这个可用的示例](https://mdn.github.io/dom-examples/web-crypto/wrap-key/index.html)。

### Raw 包装

以下示例包装了一个 AES 密钥。它使用“raw”作为导出格式，并使用 AES-KW 和密码派生密钥对其进行加密。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/raw.js)

```js
let salt;

/*
获取用于作为 deriveKey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
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
给定密钥材料和随机盐，使用 PBKDF2 派生一个 AES-KW 密钥。
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
包装给定的密钥。
*/
async function wrapCryptoKey(keyToWrap) {
  // 获取密钥加密密钥
  const keyMaterial = await getKeyMaterial();
  salt = window.crypto.getRandomValues(new Uint8Array(16));
  const wrappingKey = await getKey(keyMaterial, salt);

  return window.crypto.subtle.wrapKey("raw", keyToWrap, wrappingKey, "AES-KW");
}

/*
生成加密/解密密钥，然后包装它。
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

### PKCS #8 包装

以下示例包装了一个 RSA 私有签名密钥。它使用“pkcs8”作为导出格式，并使用 AES-GCM 和密码派生密钥对其进行加密。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/pkcs8.js)

```js
let salt;
let iv;

/*
获取用于作为 deriveKey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
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
给定密钥材料和随机盐，使用 PBKDF2 派生一个 AES-GCM 密钥。
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
包装给定的密钥。
*/
async function wrapCryptoKey(keyToWrap) {
  // 获取密钥加密密钥
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
生成签名/验证密钥对，然后包装其中的私钥。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-PSS",
      // 考虑对需要长期安全性的系统使用 4096 位密钥
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

### SubjectPublicKeyInfo 包装

以下示例包装了一个 RSA 公开加密密钥。它使用“spki”作为导出格式，并使用 AES-CBC 算法和密码派生密钥对其进行加密。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/spki.js)

```js
let salt;
let iv;

/*
获取用于作为 deriveKey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
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
给定密钥材料和随机盐，使用 PBKDF2 派生一个 AES-CBC 密钥。
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
包装给定的密钥。
*/
async function wrapCryptoKey(keyToWrap) {
  // 获取密钥加密密钥
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
生成加密/解密密钥对，然后包装它。
*/
window.crypto.subtle
  .generateKey(
    {
      name: "RSA-OAEP",
      // 考虑对需要长期安全性的系统使用 4096 位密钥
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

### JSON Web Key 包装

以下示例包装了一个 ECDSA 私有签名密钥。它使用“jwk”作为导出格式，并使用 AES-GCM 和密码派生密钥对其进行加密。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/wrap-key/jwk.js)

```js
let salt;
let iv;

/*
获取用于作为 deriveKey 方法的输入的密钥材料。
密钥材料是用户提供的密码。
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
给定密钥材料和随机盐，使用 PBKDF2 派生一个 AES-GCM 密钥。
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
包装给定的密钥。
*/
async function wrapCryptoKey(keyToWrap) {
  // 获取密钥加密密钥
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
生成签名/验证密钥对，然后包装其中的私钥。
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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey)
- [PKCS #8 格式](https://datatracker.ietf.org/doc/html/rfc5208)。
- [SubjectPublicKeyInfo 格式](https://datatracker.ietf.org/doc/html/rfc5280#section-4.1)。
- [JSON Web Key 格式](https://datatracker.ietf.org/doc/html/rfc7517)。
- [AES-KW 规范](https://datatracker.ietf.org/doc/html/rfc3394)。
