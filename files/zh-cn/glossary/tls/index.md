---
title: TLS
slug: Glossary/TLS
l10n:
  sourceCommit: 50e5e8a9b8a6b7d0dd9877610c9639d8b90f329f
---

**传输层安全性协议**（Transport Layer Security，缩写作 TLS），前身安全套接层（Secure Sockets Layer，缩写作 SSL），是一个被应用程序用来在网络中安全通信的{{Glossary("protocol", "协议")}}，防止电子邮件、网页、消息以及其他协议被篡改或是窃听。TLS 和 SSL 都是客户端/服务器协议，通过使用加密协议来提供网络安全。当服务器和客户端使用 TLS 通信时，它确保没有第三方可以窃听或篡改任何消息。

所有现代浏览器都支持 TLS 协议，它们都要求服务器提供一个有效的{{Glossary("Digital certificate", "数字证书")}}来确认身份以建立安全连接。如果客户端和服务器都能提供自己的数字证书，则它们可以互相认证。

> [!NOTE]
> 从 2020 年初开始，所有主流浏览器都开始移除对 TLS 1.0 和 1.1 的支持；你需要确保你的 Web 服务器支持 TLS 1.2 或 1.3。从 Firefox 74 开始，当连接到使用较旧 TLS 版本的服务器时，Firefox 将返回一个 [Secure Connection Failed](https://support.mozilla.org/zh-CN/kb/secure-connection-failed-firefox-did-not-connect) 错误（[Firefox bug 1606734](https://bugzil.la/1606734)）。

## 参见

- 维基百科上的[传输层安全性协议](https://zh.wikipedia.org/wiki/傳輸層安全性協定)
- [RFC 8446](https://tools.ietf.org/html/rfc8446)（传输层安全性协议，版本 1.3）
- [RFC 8446](https://tools.ietf.org/html/rfc5246)（传输层安全性协议，版本 1.2）
- [传输层安全性](/zh-CN/docs/Web/Security/Defenses/Transport_Layer_Security)
- [传输层安全性备忘单](https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet)（OWASP）
- 相关术语：
  - {{Glossary("HTTPS")}}
  - {{Glossary("SSL")}}
