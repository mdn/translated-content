---
title: Web Crypto API
slug: Web/API/Web_Crypto_API
---

{{DefaultAPISidebar("Web Crypto API")}}

**Web Crypto API** 为脚本提供了一套关于密码学原语的接口，以便用于构建需要使用加密的系统。

{{AvailableInWorkers}}

{{securecontext_header}}

> **警告：** 此 API 提供了许多底层密码学原语。滥用它们很容易陷入微妙的陷阱中。
>
> 即使你正确地运用了基础加密方法，也很难设计一套正确的安全密钥管理及整体安全设计方案，这些往往是安全专家所做的事情。
>
> 错误的安全系统设计和实现会使系统的安全性完全失效。
>
> 你可以学习并进行实验，但我们并不能保证这些内容的安全性，最好有熟悉该领域的人对你的相关工作进行彻底的审查以保证其安全性。如果你要学习安全系统的设计和部署，可以学习 [Crypto 101 课程](https://www.crypto101.io/)。

## 接口

有些浏览器实现了叫作 {{domxref("Crypto")}} 的接口，但是它缺乏良好的定义，或在密码学上是不健全的。为了避免混乱，这个接口的方法和属性已经被实现 Web Crypto API 的浏览器所移除，并且所有的 Web Crypto API 方法都可以在新的接口中使用：{{domxref("SubtleCrypto")}}。{{domxref("Crypto.subtle")}} 属性可以获取到一个实现了新接口的对象。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
