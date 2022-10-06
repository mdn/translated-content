---
title: SubtleCrypto.generateKey()
slug: Web/API/SubtleCrypto/generateKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

使用 {{domxref("SubtleCrypto")}} 接口的 **`generateKey()`** 方法可用于生成用于对称算法的密钥或用于非对称算法的密钥对

## 语法

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### 参数

- `algorithm`

  - : 一个对象，用于定义要生成的算法类型，并提供所需的参数，它的值可以是以下几种类型：

    - 对于 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)，[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 和 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 算法：这是一个 {{domxref('RsaHashedKeyGenParams')}} 对象。
    - 对于 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 和 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 算法：这是一个 {{domxref('EcKeyGenParams')}} 对象。
    - 对于 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac) 算法：这是一个 {{domxref('HmacKeyGenParams')}} 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)，[AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)，[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 和 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) 算法：这是一个 {{domxref("AesKeyGenParams")}} 对象。

- `extractable`
  - : 一个布尔值，用于表示生成的密钥是否可被 {{domxref("SubtleCrypto.exportKey()")}} 和
    {{domxref("SubtleCrypto.wrapKey()")}} 方法导出。
- `keyUsages`
  - : 一个数组，表示生成出来的密钥将被用于做什么，数组中的每个元素必须是以下几个字符串中的一个：
    - `encrypt`：密钥将被用于{{domxref("SubtleCrypto.encrypt()","加密")}}
    - `decrypt`：密钥将被用于{{domxref("SubtleCrypto.encrypt()","解密")}}
    - `sign`：密钥将被用于{{domxref("SubtleCrypto.sign()", "签名")}}
    - `verify`：密钥将被用于{{domxref("SubtleCrypto.verify()", "验签")}}
    - `deriveKey`：密钥将被用于{{domxref("SubtleCrypto.deriveKey()", "派生密钥")}}
    - `deriveBits`：密钥将被用于{{domxref("SubtleCrypto.deriveBits()", "派生比特位")}}
    - `wrapKey`：密钥将被用于{{domxref("SubtleCrypto.wrapKey()", "包装另一个密钥")}}
    - `unwrapKey`：密钥将被用于{{domxref("SubtleCrypto.unwrapKey()", "解包另一个密钥")}}

### 返回值

返回值是一个 {{jsxref("Promise")}}，promise将返回一个 {{domxref("CryptoKey")}}（对于对称加密算法） 或 {{domxref("CryptoKeyPair")}}（对于非对称加密算法）

### 异常

当遇到以下异常时，返回的promise会进入rejected状态

- `SyntaxError` {{domxref("DOMException")}}
  - : 当结果是{{domxref("CryptoKey")}}，但keyUsages为空时触发
- `SyntaxError` {{domxref("DOMException")}}
  - : 当结果是{{domxref("CryptoKeyPair")}}，但私钥的keyUsages为空时触发

## 示例

> **备注：** 你可以在 Github 上尝试[这个示例](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)。

### 生成 RSA 密钥对

以下为生成 RSA 密钥对的代码。完整的示例[在这里](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "RSA-OAEP",
    modulusLength: 4096,
    publicExponent: new Uint8Array([1, 0, 1]),
    hash: "SHA-256"
  },
  true,
  ["encrypt", "decrypt"]
);
```

### 生成 ECDSA 密钥对

以下为生成 ECDSA 密钥对的代码，完整的示例[在这里](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
let keyPair = await window.crypto.subtle.generateKey(
  {
    name: "ECDSA",
    namedCurve: "P-384"
  },
  true,
  ["sign", "verify"]
);
```

### 生成 HMAC 密钥

以下为生成 HMAC 密钥的代码，完整的示例[在这里](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "HMAC",
    hash: {name: "SHA-512"}
  },
  true,
  ["sign", "verify"]
);
```

### 生成 AES 密钥

以下为生成 AES 密钥的代码，完整的示例[在这里](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
let key = await window.crypto.subtle.generateKey(
  {
    name: "AES-GCM",
    length: 256
  },
  true,
  ["encrypt", "decrypt"]
);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Cryptographic key length recommendations](https://www.keylength.com/).
- [NIST Transitioning the Use of Cryptographic Algorithms and Key Lengths](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-1/archive/2015-11-06).
