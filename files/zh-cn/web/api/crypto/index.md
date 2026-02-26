---
title: Crypto
slug: Web/API/Crypto
l10n:
  sourceCommit: cc27a64bb555b250cf0984a3a744e5fd251e3565
---

{{APIRef("Web Crypto API")}}{{AvailableInWorkers}}

**`Crypto`** 接口提供了当前上下文中可用的基本的加密功能。它允许访问一个密码学安全的随机数生成器和密码学原语（cryptographic primitive）。

可以在窗口中使用 {{domxref("Window.crypto")}} 属性，或者在 worker 中使用 {{domxref("WorkerGlobalScope.crypto")}} 属性来访问 `Crypto`。

## 实例属性

_该接口实现的属性定义在 {{domxref("Crypto/getRandomValues", "RandomSource")}} 中。_

- {{domxref("Crypto.subtle")}} {{ReadOnlyInline}} {{SecureContext_inline}}
  - : 返回一个 {{domxref("SubtleCrypto")}} 对象，用来访问公共的密码学原语，例如散列、签名、加密以及解密。

## 实例方法

_该接口实现的方法定义在 {{domxref("Crypto/getRandomValues", "RandomSource")}} 中。_

- {{domxref("Crypto.getRandomValues()")}}
  - : 使用密码学安全的随机数填充传入的 {{ jsxref("TypedArray") }}。
- {{domxref("Crypto.randomUUID()")}}
  - : 返回一个随机生成的，长度为 36 字符的第四版 UUID。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [Web 安全](/zh-CN/docs/Web/Security)
- [安全上下文](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts)
- [仅限于安全上下文的特性](/zh-CN/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [传输层安全](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security)
- [Strict-Transport-Security](/zh-CN/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security)
