---
title: Pbkdf2Params
slug: Web/API/Pbkdf2Params
l10n:
  sourceCommit: 95dff5ec1195f072b8e48a2273294933670b1e99
---

{{APIRef("Web Crypto API")}}

当使用 [PBKDF2](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey#pbkdf2) 算法时，[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`Pbkdf2Params`** 字典表示应作为 `algorithm` 参数传递给 {{domxref("SubtleCrypto.deriveKey()")}} 的对象。

## 实例属性

- `name`
  - : 一个字符串，应设置为 `PBKDF2`。
- `hash`

  - : 一个表示要使用的[摘要函数](/zh-CN/docs/Web/API/SubtleCrypto/digest#支持的算法)名称的字符串。可以是以下值之一：

    - `SHA-1`
    - `SHA-256`
    - `SHA-384`
    - `SHA-512`

    > **警告：** `SHA-1` 在大多数加密应用中被视为是脆弱的，但在 PBKDF2 中仍被视为是安全的。然而，建议在所有情况下逐步淘汰其使用，因此，除非必须使用 `SHA-1`，否则请不要使用它。请改用其他摘要算法。

- `salt`
  - : 一个 {{jsxref("ArrayBuffer")}}、{{jsxref("TypedArray")}} 或 {{jsxref("DataView")}}。它应是一个至少 16 字节的随机值或伪随机值。与传递给 [`deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey) 的输入密钥材料不同，`salt` 无须保密。
- `iterations`
  - : 一个 `Number`，表示在 `deriveKey()` 中哈希函数将执行的次数。这决定 `deriveKey()` 操作的计算成本（即速度有多慢）。在这种情况下，慢是好事，因为这会增加攻击者对密钥执行{{Glossary("dictionary attack", "字典攻击")}}的成本。此处的一般建议是，在保持应用程序可接受性能水平的前提下，使用尽可能多的迭代次数。

## 示例

参见 {{domxref("SubtleCrypto.deriveKey()")}} 的示例。

## 规范

{{Specifications}}

## 浏览器兼容性

支持在 {{domxref("SubtleCrypto.deriveKey()")}} 方法中使用“PBKDF2”算法的浏览器将会支持此类型。

## 参见

- {{domxref("SubtleCrypto.deriveKey()")}}
