---
title: SubtleCrypto.sign()
slug: Web/API/SubtleCrypto/sign
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`sign()`** 方法用于生成数字{{glossary("signature", "签名")}}。

它以签名{{glossary("key", "密钥")}}、一些特定于算法的参数和待签名的数据作为参数，返回一个 {{jsxref("Promise")}}，会兑现数据的签名。

你可以使用对应的 {{domxref("SubtleCrypto.verify()")}} 方法来验证签名。

## 语法

```js-nolint
sign(algorithm, key, data)
```

### 参数

- `algorithm`
  - : 一个字符串或指定了算法和要使用的参数的对象：
    - 要使用 [RSASSA-PKCS1-v1_5](#rsassa-pkcs1-v1_5)，请传递字符串 `"RSASSA-PKCS1-v1_5"` 或 `{ "name": "RSASSA-PKCS1-v1_5" }` 形式的对象。
    - 要使用 [RSA-PSS](#rsa-pss)，请传递 {{domxref("RsaPssParams")}} 对象。
    - 要使用 [ECDSA](#ecdsa)，请传递 {{domxref("EcdsaParams")}} 对象。
    - 要使用 [HMAC](#hmac)，请传递字符串 `"HMAC"` 或 `{ "name": "HMAC" }` 形式的对象。
- `key`
  - : 一个包含了用于签名的密钥的 {{domxref("CryptoKey")}} 对象。
    如果 `algorithm` 标识了公开密钥加密算法，则它是一个私钥。
- `data`
  - : 一个包含待签名数据的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现包含数据签名的
{{jsxref("ArrayBuffer")}} 对象。

### 异常

当遇到以下异常时，promise 将会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当签名密钥不是要求的签名算法的密钥，或尝试使用未知或不适用于签名的算法时触发。

## 支持的算法

Web Crypto API 提供了 4 种可用于签名和签名验证的算法。

其中的三种算法（RSASSA-PKCS1-v1_5、RSA-PSS 和 ECDSA）是{{Glossary("public-key cryptography", "公开密钥加密算法")}}，它们使用私钥进行签名，使用公钥验证签名。所有的算法均使用[摘要算法](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法)在签名前将消息计算为短的、固定大小的散列值。除了 ECDSA（是将摘要算法传递给 `algorithm` 对象），其他算法均是通过将参数传递给 {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} 或 {{domxref("SubtleCrypto.importKey()", "importKey()")}} 函数来选择摘要算法的。

第四种算法（HMAC）使用相同的算法、密钥来签名和验证签名：这意味着签名验证的密钥必须保密，换句话说，该算法不适用与很多签名的场景。但是，当签名者和验证签名者是同一个实体时，这也是一个不错的选择。

### RSASSA-PKCS1-v1_5

RSASSA-PKCS1-v1_5 算法在 [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 中定义。

### RSA-PSS

RSA-PSS 算法在 [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 中定义。

它与 RSASSA-PKCS1-v1_5 算法的不同之处在于：它在签名运算中使用了加盐操作，因此使用相同密钥对相同的消息进行签名会产生不同的结果。其使用一个额外的属性来定义盐的长度，需要在调用时传递给 {{domxref("SubtleCrypto.sign()", "sign()")}} 和 {{domxref("SubtleCrypto.verify()", "verify()")}} 函数。

### ECDSA

ECDSA（椭圆曲线数字签名算法）是 [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) 中定义的数字签名算法的一种变体，它使用了椭圆曲线密码学（Elliptic Curve Cryptography，[RFC 6090](https://datatracker.ietf.org/doc/html/rfc6090)）。

签名被编码为 RFC 6090 中指定的 `s1` 和 `s2` 值（在 [RFC 4754](https://datatracker.ietf.org/doc/html/rfc4754#section-3) 中分别被称为 `r` 和 `s`）。两个值都是大端字节数组，长度为曲线的位数，向上取整为整数个字节。这些值按顺序连接在一起。

这种编码也被 [IEEE 1363-2000](https://standards.ieee.org/ieee/1363/2049/) 标准所提出，因此有时也被称为 IEEE P1363 格式。它不同于 [X.509](https://www.itu.int/rec/T-REC-X.509) 签名结构，后者是一些工具和库（例如 [OpenSSL](https://www.openssl.org)）默认生成的格式。

### HMAC

HMAC 算法根据 [FIPS 198-1 标准](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) 计算和验证基于散列的消息认证码。

需要在传入 {{domxref("SubtleCrypto.generateKey()", "generateKey()")}} 的 [`HmacKeyGenParams`](/zh-CN/docs/Web/API/HmacKeyGenParams) 对象或传入 {{domxref("SubtleCrypto.importKey()", "importKey()")}} 的 [`HmacImportParams`](/zh-CN/docs/Web/API/HmacImportParams) 对象中指定要使用的散列算法。

## 示例

> **备注：** 你可以在 Github 上[尝试可用的示例](https://mdn.github.io/dom-examples/web-crypto/sign-verify/index.html)。

### RSASSA-PKCS1-v1_5

以下代码从文本框获取内容，将其编码，并使用私钥对其进行签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsassa-pkcs1.js)

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

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign(
  "RSASSA-PKCS1-v1_5",
  privateKey,
  encoded,
);
```

### RSA-PSS

以下代码获取文本框的内容，将其编码，并使用私钥对其进行签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/rsa-pss.js)

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

以下代码获取文本框的内容，将其编码，并使用私钥对其进行签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/ecdsa.js)

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

以下代码获取文本框的内容，将其编码，并使用密钥对其进行签名。[在 GitHub 上查看完整代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/sign-verify/hmac.js)

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

let encoded = getMessageEncoding();
let signature = await window.crypto.subtle.sign("HMAC", key, encoded);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.verify()")}}
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 定义了 RSASSA-PKCS1-v1_5。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 定义了 RSA-PSS。
- [FIPS-186](https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-4.pdf) 定义了 ECDSA。
- [FIPS 198-1](https://csrc.nist.gov/csrc/media/publications/fips/198/1/final/documents/fips-198-1_final.pdf) 定义了 HMAC。
