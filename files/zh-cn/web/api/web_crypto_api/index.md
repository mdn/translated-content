---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
---

{{DefaultAPISidebar("Web Crypto API")}}

**Web Crypto API** 为脚本提供加密了一套关于密码（学）的接口，以便用于构建需要使用密码的系统。

> **警告：** Web Crypto API 提供了许多底层的密码学原语。它们很容易被误用，并且踩到一些微妙的陷阱。
>
> 即使正确地使用了这些基础的密码学函数，密钥管理和整体的安全系统设计也是非常困难的，这些通常都是属于安全专家的领域。
>
> 安全系统设计和实现过程中出现的错误可以使得整个系统的安全性不复存在。
>
> **如果你不确定你知道自己在做什么，那么你可能不应该使用这些 API。**

## 接口

有些浏览器实现了叫做 {{domxref("Crypto")}} 的接口，但是缺乏良好的定义，或在密码学上是不健全的。为了避免混乱，这个接口的方法和属性已经被实现 Web Crypto API 的浏览器所移除，并且所有的 Web Crypto API 方法都可以在新的接口中使用： {{domxref("SubtleCrypto")}}。{{domxref("Crypto.subtle")}} 属性可以获取到一个实现了新接口的对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
