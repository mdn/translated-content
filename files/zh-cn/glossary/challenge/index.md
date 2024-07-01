---
title: 质询—响应认证
slug: Glossary/Challenge
---

{{GlossarySidebar}}

在安全协议中，_质询_（challenge）是服务器将某些数据发送到客户端，以便每次生成不同的响应。质询—响应认证协议是防御[重放攻击](https://zh.wikipedia.org/wiki/重放攻击)的一种方法。在重放攻击中，攻击者侦听先前的消息，并在以后的时间重新发送它们，以获取与原始消息相同的凭据。

[HTTP 认证协议](/zh-CN/docs/Web/HTTP/Authentication)是基于质询—响应认证协议的，尽管“Basic”协议未使用实际的质询（realm 始终相同）。

## 参见

- 维基百科上的[质询—响应认证](https://en.wikipedia.org/wiki/Challenge%E2%80%93response_authentication)词条。
