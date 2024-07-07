---
title: 用户代理
slug: Glossary/User_agent
l10n:
  sourceCommit: 75ad4fdf5dd998e5926b2a8e9622f808fe8bb475
---

{{GlossarySidebar}}

用户代理（User agent）是代表一个人的计算机程序，例如，一个在 {{Glossary("World Wide Web", "Web")}} 上的{{Glossary("Browser","浏览器")}}。

除了浏览器之外，用户代理可以是抓取网页的机器人、下载管理器或可以访问 Web 的其他应用程序。随着向服务器发送的每个请求，浏览器包含一个可表明身份的 `User-Agent` {{Glossary("HTTP")}} 的协议头，叫作用户代理（UA）字符串。此字符串通常标识浏览器、及其版本号及其主机操作系统。

垃圾邮件机器人、下载管理器和一些浏览器通常会发送一个假 UA 字符串来宣称自己是不同的客户端。这被称为*用户代理欺骗*。

用户代理的字符串可以被 {{Glossary("JavaScript")}} 在客户端中使用 {{domxref("navigator.userAgent")}} 获取。

典型的用户代理字符串示例长这样：`"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:35.0) Gecko/20100101 Firefox/35.0"`.

## 参见

- 在维基百科上的[用户代理](https://zh.wikipedia.org/wiki/用户代理)
- {{domxref("Navigator/userAgent", "NavigatorID.userAgent")}}
- [使用用户代理检测浏览器](/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)
- {{RFC(2616, "", "14.43")}}：`User-Agent` 标头
- {{Glossary("Browser")}}（术语）
- HTTP 标头
  - {{HTTPHeader("User-agent")}}
