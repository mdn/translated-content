---
title: SubtleCrypto.decrypt()
slug: Web/API/SubtleCrypto/decrypt
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`decrypt()`** 方法用于解密加密数据。它以用于解密的{{glossary("key", "密钥")}}、一些可选的额外参数，以及待解密的数据（也称为“密文”）为参数；返回一个 {{jsxref("Promise")}}，会兑现解密后的数据（也称为“明文”）。

## 语法

```js-nolint
decrypt(algorithm, key, data)
```

### 参数

- `algorithm`

  - : 一个对象，用于指定使用的[算法](#支持的算法)，以及任何需要的额外参数。额外提供的参数的值必须与对应的 {{domxref("SubtleCrypto.encrypt()", "encrypt()")}} 调用所传入的值相匹配。

    - 使用 [RSA-OAEP](#rsa-oaep)，则传入 {{domxref("RsaOaepParams")}} 对象。
    - 使用 [AES-CTR](#aes-ctr)，则传入 {{domxref("AesCtrParams")}} 对象。
    - 使用 [AES-CBC](#aes-cbc)，则传入 {{domxref("AesCbcParams")}} 对象。
    - 使用 [AES-GCM](#aes-gcm)，则传入 {{domxref("AesGcmParams")}} 对象。

- `key`
  - : 一个包含了密钥的 {{domxref("CryptoKey")}} 对象，用于解密。
- `data`
  - : 一个包含了待解密的数据（也称为{{glossary("ciphertext", "密文")}}）的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个包含明文的 {{jsxref("ArrayBuffer")}}。

### 异常

当遇到以下异常时，promise 将会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当提供的密钥无法执行请求的操作时（如：解密算法无效，或对指定的解密算法提供了无效的密钥）。
- `OperationError` {{domxref("DOMException")}}
  - : 因特定的操作原因导致操作失败时（如：算法的参数大小无效，或解密密文时发生的错误）。

## 支持的算法

`decrypt()` 方法支持的算法与 [`encrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#支持的算法) 方法所支持的相同。

## 示例

> **备注：** 你可以在 GitHub 上[尝试这个可用的示例](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)。

### RSA-OAEP

以下代码使用 RSA-OAEP 解密 `ciphertext`。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function decryptMessage(privateKey, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "RSA-OAEP" },
    privateKey,
    ciphertext,
  );
}
```

### AES-CTR

以下代码使用计数器（CTR）模式的 AES 解密 `ciphertext`。请注意，`counter` 必须与加密时使用的值相匹配。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt(
    { name: "AES-CTR", counter, length: 64 },
    key,
    ciphertext,
  );
}
```

### AES-CBC

以下代码使用密码块链接（CBC）模式的 AES 解密 `ciphertext`。请注意，`iv` 必须与加密时使用的值相匹配。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt({ name: "AES-CBC", iv }, key, ciphertext);
}
```

### AES-GCM

以下代码使用伽罗瓦/计数器（GCM）模式的 AES 解密 `ciphertext`。请注意，`iv` 必须与加密时使用的值相匹配。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-gcm.js)

```js
function decryptMessage(key, ciphertext) {
  return window.crypto.subtle.decrypt({ name: "AES-GCM", iv }, key, ciphertext);
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.encrypt()")}}。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 规定了 RSAOAEP。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) 规定了 CTR 模式。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) 规定了 CBC 模式。
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) 规定了 GCM 模式。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) 规定了 HMAC。
