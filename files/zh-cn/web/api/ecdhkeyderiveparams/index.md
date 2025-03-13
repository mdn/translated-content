---
title: EcdhKeyDeriveParams
slug: Web/API/EcdhKeyDeriveParams
l10n:
  sourceCommit: 223d903a52fb6a381b7c14f10e956822af38930c
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`EcdhKeyDeriveParams`** 字典表示当使用 [ECDH](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#ecdh) 或 [X25519](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#x25519) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.deriveKey()")}} 和 {{domxref("SubtleCrypto.deriveBits()")}} 的对象。

ECDH 允许两个各自拥有一对由公钥和私钥组成的密钥的人推导出一个共享密钥。他们交换公钥，并使用自己的私钥与对方的公钥相结合来推导出一个只有他们双方——而其他人无法得知的——共享密钥。

ECDH `deriveKey()` 方法的参数包括其他实体的公钥，该公钥与当前实体的私钥相结合，用于推导出共享密钥。

## 实例属性

- `name`
  - : 一个字符串。应依据所使用的算法，设置为 `ECDH` 或 `X25519`。
- `public`
  - : 一个表示其他实体的公钥的 {{domxref("CryptoKey")}} 对象。

## 示例

参见 {{domxref("SubtleCrypto.deriveKey()")}} 和 {{domxref("SubtleCrypto.deriveBits()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.deriveKey()")}} 方法中使用“ECDH”或“X25519”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.deriveKey()")}}
- {{domxref("SubtleCrypto.deriveBits()")}}
