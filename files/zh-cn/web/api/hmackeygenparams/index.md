---
title: HmacKeyGenParams
slug: Web/API/HmacKeyGenParams
l10n:
  sourceCommit: 387d0d4d8690c0d2c9db1b85eae28ffea0f3ac1f
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`HmacKeyGenParams`** 字典表示当为 [HMAC](/zh-CN/docs/Web/API/SubtleCrypto/sign#hmac) 算法生成密钥时，此对象应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.generateKey()")}}。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `HMAC`。
- `hash`
  - : 表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法)名称的字符串。可以取值为 `SHA-256`、`SHA-384` 或 `SHA-512`。
- `length` {{optional_inline}}
  - : 一个表示密钥位长度的 `Number`。如果省略此属性，则密钥的长度将等于所选摘要函数生成的摘要的长度。除非你有充分的理由使用不同的长度，否则请省略此属性并使用默认值。

## 示例

参见 {{domxref("SubtleCrypto.generateKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持 {{domxref("SubtleCrypto.generateKey()")}} 方法的“HMAC”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.generateKey()")}}
