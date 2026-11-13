---
title: RsaOaepParams
slug: Web/API/RsaOaepParams
l10n:
  sourceCommit: 2937558d5ed1e03d7f60b2de71dd9c17f490166e
---

{{APIRef("Web Crypto API")}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`RsaOaepParams`** 字典表示当使用 [RSA_OAEP](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#rsa-oaep) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `RSA-OAEP`。
- `label` {{optional_inline}}
  - : {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}——一个字节数组，其本身不需要被加密，但应与密文绑定。标签的摘要是加密运算输入的一部分。

    除非应用程序需要使用标签，否则可以省略此参数，且不会影响加密运算的安全性。

## 示例

参见 {{domxref("SubtleCrypto.encrypt()")}} 和 {{domxref("SubtleCrypto.decrypt()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用“RSA-OAEP”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
