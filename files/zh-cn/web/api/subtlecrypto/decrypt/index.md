---
title: SubtleCrypto.decrypt()
slug: Web/API/SubtleCrypto/decrypt
---

{{APIRef("Web Crypto API")}}

**`SubtleCrypto.decrypt()`** 以加密数据、算法和密钥为参数返回一个包含明文的 {{jsxref("Promise")}} 对象。

## 语法

```plain
var result = crypto.subtle.decrypt(algorithm, key, data);
```

### 属性

- _`algorithm`_ 是一个对象，用于指定解密函数及其参数。当没有参数时，_algorithm_ 也可以是包含了算法名称的 {{domxref("DOMString")}} 对象。支持的值[¹](https://www.w3.org/TR/WebCryptoAPI/#algorithm-overview) 如下：

  - `{"name": "AES-CBC", iv}` `iv` 与 {{domxref("SubtleCrypto.encrypt()")}} 中描述的相同。
  - `{"name": "AES-CTR", counter, length}` `counter` 和`length` 与 {{domxref("SubtleCrypto.encrypt()")}} 中描述的相同
  - `{"name": "AES-GCM", iv[, additionalData, tagLength]}` `iv`， `additionalData`和 `tagLength` 与 {{domxref("SubtleCrypto.encrypt()")}} 中描述的相同。
  - `{"name": "RSA-OAEP"[, label]}` `label` 与 {{domxref("SubtleCrypto.encrypt()")}} 中描述的相同。

- `key` 是一个包含了密钥的 {{domxref("CryptoKey")}} 对象，用于解密。
- _`data`_ 是一个包含了待解密的密文的 {{domxref("BufferSource")}} 对象。

### 返回值

- `result` 是一个 {{jsxref("Promise")}} 对象，它会返回由{{glossary("ciphertext")}} 解密的得来的 {{glossary("plaintext")}}。

### 异常

Promise 将会在以下的异常被触发时返回 rejected：

- InvalidAccessError
  - : 当提供的密钥无法执行请求的操作时（如：解密算法无效，或对指定的解密算法提供了无效的密钥）。
- OperationError
  - : 因特定的操作原因导致操作失败时（如：算法的参数大小无效，或解密结果失败）。

## 实例

```js
const decryptText = async (ctBuffer, iv, password) => {
    const pwUtf8 = new TextEncoder().encode(password);
    const pwHash = await crypto.subtle.digest('SHA-256', pwUtf8);

    const alg = { name: 'AES-GCM', iv: iv };
    const key = await crypto.subtle.importKey('raw', pwHash, alg, false, ['decrypt']);

    const ptBuffer = await crypto.subtle.decrypt(alg, key, ctBuffer);

    const plaintext = new TextDecoder().decode(ptBuffer);

    return plaintext;
}
```

`iv` 的含义在 {{domxref("SubtleCrypto.encrypt()")}} 中可以找到。`ctBuffer` 是 {{domxref("SubtleCrypto.encrypt()")}} 返回的密文。

## 规范

{{Specifications}}

## 浏览器支持

{{Compat}}

## 另请参见

- {{domxref("Crypto")}} 与 {{domxref("Crypto.subtle")}}。
- {{domxref("SubtleCrypto")}} 包含了该接口。
