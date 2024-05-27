---
title: WorkerGlobalScope：crypto 属性
slug: Web/API/WorkerGlobalScope/crypto
l10n:
  sourceCommit: e897fbfbefff7a7178af36a57944821dbc49318f
---

{{APIRef("Web Crypto API")}}

{{domxref("WorkerGlobalScope")}} 接口的 **`crypto`** 只读属性返回当前 worker 的 {{domxref("Crypto")}} 对象。此对象允许网页访问某些加密相关的服务。

虽然该属性自身的只读的，但它的所有方法（以及其子对象的方法——{{domxref("SubtleCrypto")}}）不仅是只读的，因此容易受到 {{glossary("polyfill")}} 的攻击。

虽然 `crypto` 在所有 worker 上均可用，但其返回的 `Crypto` 对象在不安全的上下文中仅有一个可用的特性：{{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法。通常，你应该仅在安全上下文中使用此 API。

## 值

{{domxref("Crypto")}} 接口的实例，提供对通用的密码学功能和强随机数生成器的访问。

## 示例

参见 {{domxref("Window.crypto")}} 页面上的示例，该示例使用 `crypto` 属性访问 {{domxref("Crypto.getRandomValues", "getRandomValues()")}} 方法。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Crypto")}} 接口
- {{domxref("Window.crypto")}}
