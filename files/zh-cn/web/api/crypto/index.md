---
title: Crypto
slug: Web/API/Crypto
---

{{APIRef("Web Crypto API")}}

**`Crypto`** 接口提供了基本的加密功能，可用于当前的上下文中。它允许访问一个密码强度的随机数生成器和 cryptographic primitives。

该接口在 Web 中可以通过 {{domxref("Window.crypto")}} 属性来访问。

## 属性

_该接口实现的属性定义在 {{domxref("RandomSource")}} 中。_

- {{domxref("Crypto.subtle")}} {{experimental_inline}}{{readOnlyInline}}
  - : 返回一个 {{domxref("SubtleCrypto")}} 对象，用来访问公共的 cryptographic primitives，例如哈希、签名、加密以及解密。

## 方法

_该接口实现的方法定义在 {{domxref("RandomSource")}} 中。_

- {{ domxref("RandomSource.getRandomValues()") }}
  - : 使用 cryptographically sound 随机数填充 {{ jsxref("TypedArray") }}。

## 规范

{{Specifications}}

## 浏览器兼容

{{Compat}}

## 参见

- [Components.utils.importGlobalProperties](/zh-CN/docs/Components.utils.importGlobalProperties)
