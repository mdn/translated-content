---
title: EcdsaParams
slug: Web/API/EcdsaParams
l10n:
  sourceCommit: 8e49db2182a5ad4ddfcaecdefd3d2d67db20f213
---

{{ APIRef("Web Crypto API") }}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`EcdsaParams`** 字典表示当使用 [ECDSA](/zh-CN/docs/Web/API/SubtleCrypto/sign#ecdsa) 算法时，应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.sign()")}} 或 {{domxref("SubtleCrypto.verify()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串。应设置为 `ECDSA`。
- `hash`
  - : 一个字符串或一个包含单个名为 `name` 且具有字符串值的属性的对象。表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest)的字符串。可以是以下值之一：
    - `SHA-256`：选择 [SHA-256](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-384`：选择 [SHA-384](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。
    - `SHA-512`：选择 [SHA-512](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法。

    > [!WARNING]
    > 此处也支持 `SHA-1`，但 [SHA-1](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法) 算法被认为是脆弱的，应该不再使用。

## 示例

参见 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}} 方法中使用“ECDSA”算法的浏览器将会支持此类型。

{{Compat}}

## 参见

- {{domxref("SubtleCrypto.sign()")}} 和 {{domxref("SubtleCrypto.verify()")}}
