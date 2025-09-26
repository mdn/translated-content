---
title: AesKeyGenParams
slug: Web/API/AesKeyGenParams
l10n:
  sourceCommit: bca8d1ab2bc4f5a1ef6b39c454b0229539178e98
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`AesKeyGenParams`** 字典表示在生成 AES 密钥时（即当算法被标记为 [AES-CBC](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-cbc)、[AES-CTR](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-ctr)、[AES-GCM](/zh-CN/docs/Web/API/SubtleCrypto/encrypt#aes-gcm) 或 [AES-KW](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey#aes-kw) 中的任一种时），应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.generateKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `AES-CBC`、`AES-CTR`、`AES-GCM` 或 `AES-KW`，依据你想要使用的算法。
- `length`
  - : 一个 `Number`——要生成密钥的位数。此值必须是以下之一：128、192 或 256。

## 示例

参见 {{domxref("SubtleCrypto.generateKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.generateKey()")}} 方法中使用任何基于 AES 算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.generateKey()")}}
