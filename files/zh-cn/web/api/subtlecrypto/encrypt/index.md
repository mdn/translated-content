---
title: SubtleCrypto.encrypt()
slug: Web/API/SubtleCrypto/encrypt
---

{{APIRef("Web Crypto API")}}

**`SubtleCrypto.encrypt()`** 方法以算法、密钥、明文为参数返回一个包含加密数据的 {{jsxref("Promise")}} 对象。

## 语法

```
var result = crypto.encrypt(algo, key, cleartext);
```

### 参数

- _`algo`_ 是一个使用加密函数的对象或者 {{domxref("DOMString")}}，后者是 `{"name": algo}` 的缩写。支持的值是：

  - `{"name": "AES-CBC", iv}` `iv` 是具有 16 个随机字节的 {{jsxref("ArrayBuffer")}} 或 {{jsxref("ArrayBufferView")}} (这些应该由 {{domxref("RandomSource.getRandomValues()")}} 生成)。
  - `{"name": "AES-CTR", counter, length}`
  - `{"name": "AES-GCM", iv, additionalData, tagLength}` (_`additionalData`_ 和 `tagLength` 是可选的)
  - `{"name": "RSA-OAEP", label}` (`label` 是可选的)

- `key` 是一个包含签名密钥的 {{domxref("CryptoKey")}}。
- _`cleartext`_ 是一个包含需要加密的明文 {{jsxref("ArrayBuffer")}} 或者 {{jsxref("ArrayBufferView")}} 对象。

### 返回值

- 返回值是一个 {{jsxref("Promise")}} 对象，返回一个由 {{glossary("cleartext")}} 加密生成的 {{glossary("ciphertext")}} 的 {{jsxref("ArrayBuffer")}}。

### 异常

当遇到以下异常时，promise 将会返回一次错误（reject）:

- InvalidAccessError
  - : 当针对提供的 key 值执行的操作无效时（例如加密算法或者 key 值无效），将会抛出该错误。
- OperationError
  - : 发生于由于特定于操作的原因使得操作失败时，例如算法参数的大小无效，或者 AES-GCM 明文长度超过 2³⁹−256 字节。

## 支持的算法

Crypto 接口提供了支持 `encrypt()` 和 `decrypt()` 操作的四种算法。

其中的 RSA-OAEP 算法是一种非对称加密的公钥密码（{{Glossary("public-key cryptography", "public-key cryptosystem")}}）。

其它三种算法则都是对称密钥加密（{{Glossary("Symmetric-key cryptography", "symmetric algorithms")}}），并且它们都是基于同一种基础加密，即 AES (Advanced Encryption Standard)。它们不同之处在于分组加密的操作方式（{{Glossary("Block cipher mode of operation", "mode")}}）。Crypto 接口支持以下三种 AES 加密类型：

- CTR (Counter Mode)
- CBC (Cipher Block Chaining)
- GCM (Galois/Counter Mode)

这里强烈建议使用***认证加密***（_authenticated encryption_），它可以检测密文是否已被攻击者篡改。使用认证也可以避免*选择密文攻击*（_chosen-ciphertext_ attacks），即攻击者可以请求系统解密任意的消息，然后使用解密结果来倒推出关于密钥的一些信息。虽然 CTR 和 CBC 模式可以添加认证，但是它们默认不提供该操作，并且在手动实现它们的时候，很同意犯一些微小但严重的错误。GCM 不支持内置的认证，由于这个原因，常常推荐使用另外两种 AES 加密算法。

### RSA-OAEP

关于 RSA-OAEP 公钥加密算法的规范位于 [RFC 3447](https://tools.ietf.org/html/rfc3447)。

### AES-CTR

使用 Counter 模式的 AES 算法，相关规范位于 [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final)。

### AES-CBC

使用 Cipher Block Chaining 模式的 AES 算法，规范位于[NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final)。

### AES-GCM

使用 Galois/Counter 模式的 AES 算法，规范位于 [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final)。

这种模式与上面的模式不同之处在于，GCM 是一种 "认证（authenticated）" 模式，意思就是它包含了检测密文是否未被攻击者篡改的功能。

## 示例

> **备注：** 你可以在 GitHub 尝试这个示例（[try the working examples](https://mdn.github.io/dom-examples/web-crypto/encrypt-decrypt/index.html)）。

### RSA-OAEP

以下代码获取文本框中的内容，编码后进行加密，使用的算法为 RSA-OAEP。可以在 GitHub 查看完整代码：[See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/rsa-oaep.js)。

```
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
      name: "RSA-OAEP"
    },
    publicKey,
    encoded
  );
}
```

### AES-CTR

以下代码同样获取文本框内容，进行编码后使用 AES 的 CTR 模式加密，完整代码：[See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-ctr.js)。

```
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-ctr #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // counter will be needed for decryption
  counter = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter,
      length: 64
    },
    key,
    encoded
  );
}
```

```
let iv = new Uint8array(16);
let key = new Uint8array(16);
let data = new Uint8array(12345);
//crypto functions are wrapped in promises so we have to use await and make sure the function that
//contains this code is an async function
//encrypt function wants a cryptokey object
const key_encoded = await crypto.subtle.importKey(  "raw",    key.buffer,   'AES-CTR' ,  false,   ["encrypt", "decrypt"]);
const encrypted_content = await window.crypto.subtle.encrypt(
    {
      name: "AES-CTR",
      counter: iv,
      length: 128
    },
    key_encoded,
    data
  );

//Uint8array
console.log(encrypted_content);
```

### AES-CBC

使用 AES 的 CBC 模式加密，完整代码：[See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-cbc.js)。

```
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-cbc #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // iv will be needed for decryption
  iv = window.crypto.getRandomValues(new Uint8Array(16));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-CBC",
      iv
    },
    key,
    encoded
  );
}
```

### AES-GCM

使用 AES 的 GCM 模式加密，完整代码：[See the complete code on GitHub](https://github.com/mdn/dom-examples/blob/master/web-crypto/encrypt-decrypt/aes-gcm.js)。

```
function getMessageEncoding() {
  const messageBox = document.querySelector(".aes-gcm #message");
  let message = messageBox.value;
  let enc = new TextEncoder();
  return enc.encode(message);
}

function encryptMessage(key) {
  let encoded = getMessageEncoding();
  // iv will be needed for decryption
  iv = window.crypto.getRandomValues(new Uint8Array(12));
  return window.crypto.subtle.encrypt(
    {
      name: "AES-GCM",
      iv: iv
    },
    key,
    encoded
  );
}
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("SubtleCrypto.decrypt()")}}.
- [RFC 3447](https://tools.ietf.org/html/rfc3447) specifies RSAOAEP.
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CTR mode.
- [NIST SP800-38A](https://csrc.nist.gov/publications/detail/sp/800-38a/final) specifies CBC mode.
- [NIST SP800-38D](https://csrc.nist.gov/publications/detail/sp/800-38d/final) specifies GCM mode.
