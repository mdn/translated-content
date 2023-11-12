---
title: SubtleCrypto.verify()
slug: Web/API/SubtleCrypto/verify
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`verify()`** 方法用于验证数字{{glossary("signature", "签名")}}。

其以一个用于验证签名的{{glossary("key", "密钥")}}、一些特定于算法的参数、签名和原始的已签名数据为参数。返回一个 {{jsxref("Promise")}}，会兑现一个布尔值，表示签名是否有效。

## 语法

```js-nolint
verify(algorithm, key, signature, data)
```

### 参数

- `algorithm`
  - : 定义要使用的算法的字符串或对象，对于某些算法，还需要提供一些额外的参数。额外提供的参数的值必须与对应的 {{domxref("SubtleCrypto.sign()", "sign()")}} 调用所传入的值相匹配。
    - 使用 [RSASSA-PKCS1-v1_5](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsassa-pkcs1-v1_5)，则传入字符串 `"RSASSA-PKCS1-v1_5"` 或形如 `{ "name": "RSASSA-PKCS1-v1_5" }` 的对象。
    - 使用 [RSA-PSS](/zh-CN/docs/Web/API/SubtleCrypto/sign#rsa-pss)，则传入 {{domxref("RsaPssParams")}} 对象。
    - 使用 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa)，则传入 {{domxref("EcdsaParams")}} 对象。
    - 使用 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac)，则传入字符串 `"HMAC"` 或形如 `{ "name": "HMAC" }` 的对象。
- `key`
  - : 一个包含了用于验证签名的密钥的 {{domxref("CryptoKey")}} 对象。若是对称加密算法，则为密钥本身；若是非对称加密算法，则为公钥。
- `signature`
  - : 一个包含了要验证的{{glossary("signature", "签名")}}的 {{jsxref("ArrayBuffer")}}。
- `data`
  - : 一个包含了要验证其签名的数据的 {{jsxref("ArrayBuffer")}}。

### 返回值

一个 {{jsxref("Promise")}}，如果签名有效，则兑现布尔值 `true`，否则兑现 `false`。

### 异常

当遇到以下异常时，promise 将被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当加密密钥不是所给定的验证算法的密钥，或尝试使用未知或不适用于验证签运算的算法时，将抛出该异常。

## 支持的算法

`verify()` 方法支持的算法与 [`sign()`](/zh-CN/docs/Web/API/SubtleCrypto/sign#支持的算法) 方法所支持的相同。
method.

## 示例

> **备注：** 你可以在 Github 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html)。

### RSASSA-PKCS1-v1_5

这个示例使用公钥验证签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsassa-pkcs1 #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“valid”样式类。
* 否则设置“invalid”样式类。
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(
    ".rsassa-pkcs1 .signature-value",
  );
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "RSASSA-PKCS1-v1_5",
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### RSA-PSS

以下代码使用公钥来验证签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-pss #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“valid”样式类。
* 否则设置“invalid”样式类。
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".rsa-pss .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "RSA-PSS",
      saltLength: 32,
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### ECDSA

以下代码使用公钥来验证签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".ecdsa #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“valid”样式类。
* 否则设置“invalid”样式类。
*/
async function verifyMessage(publicKey) {
  const signatureValue = document.querySelector(".ecdsa .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    {
      name: "ECDSA",
      hash: { name: "SHA-384" },
    },
    publicKey,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

### HMAC

以下代码使用密钥来验证签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

```js
/*
从“message”文本框获取内容，并将其编码为
我们可用于签名运算的形式。
*/
function getMessageEncoding() {
  const messageBox = document.querySelector(".hmac #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

/*
获取编码后的待签名消息，并根据存储的签名对其进行验证。
* 如果验证通过，则在签名上设置“valid”样式类。
* 否则设置“invalid”样式类。
*/
async function verifyMessage(key) {
  const signatureValue = document.querySelector(".hmac .signature-value");
  signatureValue.classList.remove("valid", "invalid");

  let encoded = getMessageEncoding();
  let result = await window.crypto.subtle.verify(
    "HMAC",
    key,
    signature,
    encoded,
  );

  signatureValue.classList.add(result ? "valid" : "invalid");
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.sign()")}}。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 规定了 RSASSA-PKCS1-v1_5。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 规定了 RSA-PSS。
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) 规定了 ECDSA。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) 规定了 HMAC。
