---
title: AesCbcParams
slug: Web/API/AesCbcParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`AesCbcParams`** 字典表示当使用 [AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `AES-CBC`。
- `iv`
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。初始化向量，必须为 16 字节长，不可预测，且最好具有密码学上的随机性。然而它无需保密（例如，可以在未加密的情况下与密文一起传输）。

## 示例

参见 {{domxref("SubtleCrypto.encrypt()")}} 和 {{domxref("SubtleCrypto.decrypt()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用“AES-CBC”算法的浏览器将会支持此类型。

## 参见

- CBC 模式在 [NIST SP800-38A 标准](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38a.pdf#%5B%7B%22num%22%3A70%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22Fit%22%7D%5D)的 6.2 节中定义。
- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
