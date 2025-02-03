---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: 049632675ccb83fe2e257c43071d366d3f80ee2b
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`EcdsaParams`** 字典表示当使用 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 算法时，对象应该以 `algorithm` 参数传递给 {{domxref("SubtleCrypto.sign()")}} 或 {{domxref("SubtleCrypto.verify()")}}。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `ECDSA`。
- `hash`

  - : 一个表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)的字符串。可以是以下值之一：

    - `SHA-256`：选择 [SHA-256](/zh-CN/docs/Web/API/SubtleCrypto/digest#supported_algorithms) 算法。
    - `SHA-384`：选择 [SHA-384](/zh-CN/docs/Web/API/SubtleCrypto/digest#supported_algorithms) 算法。
    - `SHA-512`：选择 [SHA-512](/zh-CN/docs/Web/API/SubtleCrypto/digest#supported_algorithms) 算法。

    > [!WARNING]
    > 此处也支持 `SHA-1`，但 [SHA-1](/zh-CN/docs/Web/API/SubtleCrypto/digest#supported_algorithms) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 方法中使用“ECDSA”算法的浏览器将会支持此类型。

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}}
