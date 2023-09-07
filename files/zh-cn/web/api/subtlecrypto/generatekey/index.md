---
title: SubtleCrypto.generateKey()
slug: Web/API/SubtleCrypto/generateKey
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`generateKey()`** 方法用于生成新的密钥（用于对称加密算法）或密钥对（用于非对称加密算法）。

## 语法

```js-nolint
generateKey(algorithm, extractable, keyUsages)
```

### 参数

- `algorithm`

  - : 一个对象，用于定义要生成的算法类型，并提供所需的参数。

    - 对于 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)、[RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss) 或 [RSA-OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 算法：传递 [`RsaHashedKeyGenParams`](/zh-CN/docs/Web/API/RsaHashedKeyGenParams) 对象。
    - 对于 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 或 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 算法：传递 [`EcKeyGenParams`](/zh-CN/docs/Web/API/EcKeyGenParams) 对象。
    - 对于 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac) 算法：传递 [`HmacKeyGenParams`](/zh-CN/docs/Web/API/HmacKeyGenParams) 对象。
    - 对于 [AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 或 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) 算法：传递 [`AesKeyGenParams`](/zh-CN/docs/Web/API/AesKeyGenParams) 对象。

- `extractable`
  - : 一个布尔值，表示生成的密钥是否可被 {{domxref("SubtleCrypto.exportKey()")}} 和
    {{domxref("SubtleCrypto.wrapKey()")}} 方法导出。
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

一个 {{jsxref("Promise")}}，会兑现为 {{domxref("CryptoKey")}}（用于对称加密算法）或 {{domxref("CryptoKeyPair")}}（用于非对称加密算法）。

### 异常

当发生以下几种异常时，promise 会被拒绝：

- `SyntaxError` {{domxref("DOMException")}}
  - : 当结果是类型为 `secret` 或 `private` 的{{domxref("CryptoKey", "加密密钥", "", 1)}}，但 `keyUsages` 参数为空时触发。
- `SyntaxError` {{domxref("DOMException")}}
  - : 当结果是{{domxref("CryptoKeyPair", "加密密钥对", "", 1)}}，但它的 `privateKey.usages` 属性为空时触发。

## 示例

> **备注：** 你可以在 Github 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)。

### 生成 RSA 密钥对

以下代码生成 RSA-OAEP 加密密钥对。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

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

### 生成椭圆曲线密钥对

以下代码生成 ECDSA 签名密钥对。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

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

### 生成 HMAC 密钥

以下代码生成 HMAC 签名密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

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

### 生成 AES 密钥

以下代码生成 AES-GCM 加密密钥。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

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

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [加密密钥长度的建议](https://www.keylength.com/)。
- [NIST 过度使用的加密算法和密钥长度](https://csrc.nist.gov/publications/detail/sp/800-131a/rev-2/final)。
