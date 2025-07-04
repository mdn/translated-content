---
title: AesGcmParams
slug: Web/API/AesGcmParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`AesGcmParams`** 字典表示当使用 [AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 的对象。

有关如何为此参数提供合适值的详细信息，请参阅 AES-GCM 规范：[NIST SP800-38D](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf)，特别是关于输入数据的 5.2.1.1 节。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `AES-GCM`。
- `iv`
  - : 一个具有初始化向量的 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。对于使用给定密钥执行的每次加密操作，此值必须是唯一的。换句话说：切勿使用相同的密钥重复使用 IV。AES-GCM 规范建议 IV 应为 96 位长，并且通常包含来自随机数生成器的位。[规范的第 8.2 节](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A65%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D)概述了构造 IV 的方法。请注意，IV 不需要保密，只需保持唯一性：因此，例如，可以将其与加密消息一起以明文形式传输。

- `additionalData` {{optional_inline}}
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。这包含了一些额外的不会被加密的数据，但会与加密数据一起进行认证。如果在此处提供了 `additionalData`，则在相应的 [`decrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/decrypt) 调用中也必须提供相同的数据：如果 `decrypt()` 调用中提供的数据与原始数据不匹配，解密操作将抛出异常。这提供了一种无需加密即可对关联数据进行认证的方法。

    `additionalData` 的位长度必须小于 `2^64 - 1`。

    `additionalData` 属性是可选的，且可以省略，而不会影响加密操作的安全性。

- `tagLength` {{optional_inline}}
  - : 一个 `Number`。这决定了加密操作中生成的认证标签的位数，用于相应解密过程中的认证。

    根据 [Web Crypto 规范](https://www.w3.org/TR/WebCryptoAPI/#dfn-AesGcmParams)，此值必须是以下之一：32、64、96、104、112、120 或 128。AES-GCM 规范建议该值应为 96、104、112、120 或 128，尽管在某些应用中，32 或 64 位也可能是可接受的：[规范的附录 C](https://nvlpubs.nist.gov/nistpubs/Legacy/SP/nistspecialpublication800-38d.pdf#%5B%7B%22num%22%3A92%2C%22gen%22%3A0%7D%2C%7B%22name%22%3A%22XYZ%22%7D%2C0%2C792%2Cnull%5D) 对此提供了更多指导。

    `tagLength` 是可选的，如果没有指定，默认是 128。

## 示例

参见 {{domxref("SubtleCrypto.encrypt()")}} 和 {{domxref("SubtleCrypto.decrypt()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.encrypt()")}}、{{domxref("SubtleCrypto.decrypt()")}}、{{domxref("SubtleCrypto.wrapKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey()")}} 方法中使用“AES-GCM”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.encrypt()")}}
- {{domxref("SubtleCrypto.decrypt()")}}
- {{domxref("SubtleCrypto.wrapKey()")}}
- {{domxref("SubtleCrypto.unwrapKey()")}}
