---
title: SubtleCrypto.encrypt()
slug: Web/API/SubtleCrypto/encrypt
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}

{{domxref("SubtleCrypto")}} 接口的 **`encrypt()`** 方法用于加密数据。

它以用于加密的{{glossary("key", "密钥")}}、一些特定于算法的参数，以及待加密的数据（也称为“明文”）为参数；返回一个 {{jsxref("Promise")}}，会兑现加密后的数据（也称为“密文”）。

## 语法

```js-nolint
encrypt(algorithm, key, data)
```

### 参数

- `algorithm`

  - : 一个对象，用于指定使用的[算法](支持的算法)，以及需要的任何额外的参数：

    - 使用 [RSA-OAEP](#rsa-oaep)，则传入 {{domxref("RsaOaepParams")}} 对象。
    - 使用 [AES-CTR](#aes-ctr)，则传入 {{domxref("AesCtrParams")}} 对象。
    - 使用 [AES-CBC](#aes-cbc)，则传入 {{domxref("AesCbcParams")}} 对象。
    - 使用 [AES-GCM](#aes-gcm)，则传入 {{domxref("AesGcmParams")}} 对象。

- `key`
  - : 一个包含了密钥的、用于加密的 {{domxref("CryptoKey")}} 对象。
- `data`
  - : 一个包含了待加密的数据（也称为{{glossary("ciphertext", "明文")}}）的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}} 对象。

### 返回值

一个 {{jsxref("Promise")}}，会兑现一个包含密文的 {{jsxref("ArrayBuffer")}}。

### 异常

当遇到以下异常时，promise 将会被拒绝：

- `InvalidAccessError` {{domxref("DOMException")}}
  - : 当针对提供的密钥执行的操作无效时（如：加密算法无效，或特定于加密算法的密钥无效），将抛出该错误。
- `OperationError` {{domxref("DOMException")}}
  - : 当特定于操作的原因使得操作失败时（如：算法参数的大小无效，或 AES-GCM 明文长度超过 2<sup>39</sup>−256 字节），将抛出该错误。

## 支持的算法

Web Crypto API 提供了支持 `encrypt()` 和 `decrypt()` 操作的四种算法。

其中的 RSA-OAEP 算法是一种{{Glossary("public-key cryptography", "公钥加密系统")}}。

其他三种算法则都是{{Glossary("Symmetric-key cryptography", "对称加密算法")}}，并且它们都是基于同一种基础加密，即 AES（Advanced Encryption Standard）。它们不同之处在于{{Glossary("Block cipher mode of operation", "模式")}}。Web Crypto API 支持以下三种 AES 模式：

- CTR（Counter Mode，计数器模式）
- CBC (Cipher Block Chaining，密码块链接)
- GCM (Galois/Counter Mode，伽罗瓦/计数器模式)

强烈建议使用*认证加密*（_authenticated encryption_），它可以检测密文是否已被攻击者篡改。使用认证也可以避免*选择密文攻击*（_chosen-ciphertext_ attack），即攻击者可以请求系统解密任意的消息，然后使用解密结果来倒推出关于密钥的一些信息。虽然 CTR 和 CBC 模式可以添加认证，但是它们默认不提供该操作，并且在手动实现它们的时候，很容易犯一些微小但严重的错误。GCM 提供了内置的认证，因此常常推荐使用这种模式。

### RSA-OAEP

RSA-OAEP 公钥加密系统，规范定于 [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447)。

### AES-CTR

使用计数器模式的 AES 算法，规范定于 [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final)。

AES 是一种分组加密算法，这意味着它将消息分成多个模块，然后逐块进行加密。在计数器模式下，每加密一个消息块，就会混入一个额外的数据块。这个额外的模块被称为“计数器模块”（counter block）。

给定的计数器模块绝不能与同一个密钥一起使用超过一次：

- 给定一条 _n_ 个模块长的消息，其中的每一个模块必须使用不同的计数器模块。
- 如果使用同一个密钥加密多条消息，则必须对所有消息的所有模块使用不同的计数器模块。

通常，这是通过将初始计数器模块拆分为两个拼接起来的部分来实现：

- 一个 [nonce](https://zh.wikipedia.org/zh-cn/Nonce)（即，仅能使用一次的数字）。对于消息中的每一个模块，模块的 nonce 部分保持不变。每次要加密一条新消息时，都会选择一个新的 nonce。nonce 不必是私密的，但不能将同一 nonce 与相同的密钥重复使用。
- 一个计数器。每次加密一个模块时，这一部分的值会递增。

本质上：nonce 应该确保计数器模块不会在不同的消息间重复使用，而计数器应能确保计数器模块不会在单条消息中重复使用。

> **备注：** 参见 [NIST SP800-38A 标准的附录 B](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D) 以了解详情。

### AES-CBC

使用密码块链接模式的 AES 算法，规范定于 [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final)。

### AES-GCM

使用伽罗瓦/计数器模式的 AES 算法，规范定于 [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final)。

这种模式与上面的模式不同之处在于，GCM 是一种“认证”（authenticated）模式，意味着它包含了检测密文是否被攻击者篡改的功能。

## 示例

> **备注：** 你可以在 GitHub 上[尝试这个可用的示例](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)。

### RSA-OAEP

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用 RSA-OAEP 加密数据。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/rsa-oaep.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".rsa-oaep #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(publicKey) {
  let encoded = getMessageEncoding();
  return window.crypto.subtle.encrypt(
    {
      name: "RSA-OAEP",
    },
    publicKey,
    encoded,
  );
}
```

### AES-CTR

以下代码同样获取文本框内容，进行编码后使用 AES 的计数器（CTR）模式加密，完整代码：以下代码获取文本框中的内容，并对其编码以进行加密，然后使用计数器（CTR）模式的 AES 加密数据。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-ctr.js)。

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // 解密时也需要使用 counter
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64,
    },
    key,
    encoded,
  );
}
```

```js
let iv = window.crypto.getRandomValues(new Uint8Array(16));
let key = window.crypto.getRandomValues(new Uint8Array(16));
let data = new Uint8Array(12345);
// 加密函数使用 promise 包裹，因此我们必须使用 await，
// 并确保包含此代码的函数是一个异步函数
// 加密函数需要一个 cryptokey 对象
const key_encoded = await crypto.subtle.importKey(
  "raw",
  key.buffer,
  "AES-CTR",
  false,
  ["encrypt", "decrypt"],
);
const encrypted_content = await window.crypto.subtle.encrypt(
  {
    name: "AES-CTR",
    counter: iv,
    length: 128,
  },
  key_encoded,
  data,
);

// Uint8Array
console.log(encrypted_content);
```

### AES-CBC

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用密码块链接（CBC）模式的 AES 加密数据。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/main/web-crypto/encrypt-decrypt/aes-cbc.js)

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // 解密时也需要使用 iv
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv: iv,
    },
    key,
    encoded,
  );
}
```

### AES-GCM

以下代码获取文本框中的内容，并对其编码以进行加密，然后使用伽罗瓦/计数器（GCM）模式的 AES 加密数据。[在 GitHub 中查看完整的代码。](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-gcm.js)。

```js
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  const message = messageBox.value;
  const enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  const encoded = getMessageEncoding();
  // 解密时也需要使用 iv
  const iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv },
    key,
    encoded,
  );
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.decrypt()")}}。
- [RFC 3447](https://datatracker.ietf.org/doc/html/rfc3447) 规定了 RSAOAEP。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) 规定了 CTR 模式。
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) 规定了 CBC 模式。
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) 规定了 GCM 模式。
