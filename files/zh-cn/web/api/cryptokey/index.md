---
title: CryptoKey
slug: Web/API/CryptoKey
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{SecureContext_header}}{{AvailableInWorkers}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 的 **`CryptoKey`** 接口表示从特定 {{domxref("SubtleCrypto")}} 方法（{{domxref("SubtleCrypto.generateKey", "generateKey()")}}、{{domxref("SubtleCrypto.deriveKey", "deriveKey()")}}、{{domxref("SubtleCrypto.importKey", "importKey()")}} 或 {{domxref("SubtleCrypto.unwrapKey", "unwrapKey()")}}）导出的密码学{{glossary("key", "密钥")}}。

出于安全考虑，`CryptoKey` 接口仅在[安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)中可用。

## 实例属性

- {{domxref("CryptoKey.type")}} {{ReadOnlyInline}}

  - : 该对象所表示的密钥类型可以是以下值之一：`"secret"`、`"private"` 或 `"public"`。

- {{domxref("CryptoKey.extractable")}} {{ReadOnlyInline}}

  - : 一个布尔值，表示原始信息是否能使用 [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey) 或 [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey) 导出。

- {{domxref("CryptoKey.algorithm")}} {{ReadOnlyInline}}

  - : 一个描述可使用此密钥的算法及任何关联的额外参数的对象。

- {{domxref("CryptoKey.usages")}} {{ReadOnlyInline}}

  - : 一个字符串的{{jsxref("Array", "数组", "", 1)}}，指明密钥的用途。数组元素可能的值有：`"encrypt"`、`"decrypt"`、`"sign"`、`"verify"`、`"deriveKey"`、`"deriveBits"`、`"wrapKey"` 和 `"unwrapKey"`。

## 示例

`SubtleCrypto` 方法的示例大多使用了 `CryptoKey` 对象。例如：

- [`SubtleCrypto.generateKey()`](/zh-CN/docs/Web/API/SubtleCrypto/generateKey)
- [`SubtleCrypto.deriveKey()`](/zh-CN/docs/Web/API/SubtleCrypto/deriveKey)
- [`SubtleCrypto.importKey()`](/zh-CN/docs/Web/API/SubtleCrypto/importKey)
- [`SubtleCrypto.exportKey()`](/zh-CN/docs/Web/API/SubtleCrypto/exportKey)
- [`SubtleCrypto.wrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/wrapKey)
- [`SubtleCrypto.unwrapKey()`](/zh-CN/docs/Web/API/SubtleCrypto/unwrapKey)
- [`SubtleCrypto.encrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/encrypt)
- [`SubtleCrypto.decrypt()`](/zh-CN/docs/Web/API/SubtleCrypto/decrypt)
- [`SubtleCrypto.sign()`](/zh-CN/docs/Web/API/SubtleCrypto/sign)
- [`SubtleCrypto.verify()`](/zh-CN/docs/Web/API/SubtleCrypto/verify)

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API)
- [Web 安全](/zh-CN/docs/Web/Security)
- [隐私、权限和信息安全](/zh-CN/docs/Web/Privacy)
- {{domxref("Crypto")}} 和 {{domxref("Crypto.subtle")}}。
