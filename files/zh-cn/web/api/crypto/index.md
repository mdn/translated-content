---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

**`Crypto`** 接口提供了当前上下文中可用的基本的加密功能。它允许访问一个密码学安全的随机数生成器和密码学原语（cryptographic primitive）。

{{AvailableInWorkers}}

[Web Crypto API](/zh-CN/docs/Web/API/Web_Crypto_API) 可以通过 {{domxref("crypto_property", "crypto")}} 属性（一个 `Crypto` 对象）来访问。

## 实例属性

_该接口实现的属性定义在 {{domxref("Crypto/getRandomValues", "RandomSource")}} 中。_

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : 返回一个 {{domxref("SubtleCrypto")}} 对象，用来访问公共的密码学原语，例如哈希、签名、加密以及解密。

## 实例方法

_该接口实现的方法定义在 {{domxref("Crypto/getRandomValues", "RandomSource")}} 中。_

- {{domxref("Crypto.getRandomValues()")}}
  - : 使用密码学安全的随机数填充传入的 {{ jsxref("TypedArray") }}。
- {{domxref("Crypto.randomUUID()")}}
  - : 返回一个随机生成的，长度为 36 字符的第四版 UUID。

## 使用说明

即使不安全的上下文中存在 `Crypto` 接口（即 {{domxref("crypto_property", "crypto")}} 属性），你也应该避免在不安全的上下文中使用 Web Crypto API。`Crypto` 的 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法在不安全的上下文中可用，而 {{domxref("Crypto.subtle", "subtle")}} 属性则不可用。

通常，你应该将 `Crypto` 视为仅在安全上下文中可用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 安全](/zh-CN/docs/Web/Security)
- [安全上下文](/zh-CN/docs/Web/Security/Secure_Contexts)
- [仅限于安全上下文的特性](/zh-CN/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
- [传输层安全](/zh-CN/docs/Web/Security/Transport_Layer_Security)
- [Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Headers/Strict-Transport-Security)
