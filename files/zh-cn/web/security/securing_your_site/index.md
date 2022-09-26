---
title: 确保你的站点安全
slug: Web/Security/Securing_your_site
---

你可以采取一些措施来确保你的网站安全。本文提供了各种建议，以及提供更多有用信息的其他文章的链接。

> **备注：** This article is a work in progress, and is neither complete nor does following its suggestions guarantee your site will be fully secure.

## 用户信息安全

- [如何关闭表单的自动完成功能](/zh-CN/How_to_Turn_Off_Form_Autocompletion)
  - : 在 Gecko 中表单字段支持自动完成功能; 因此他们的值可以被记住，并且在下一次用户访问你的网站时自动被填充。对于某些特定类型的数据，你可能希望禁止这个功能。
- [隐私和:visited 选择器](/zh-CN/CSS/Privacy_and_the_:visited_selector)
  - : 这篇文章讨论对于`getComputedStyle()`方法的改动，消除恶意站点获取用户浏览历史的能力。

## 内容安全

- [正确配置服务器的 MIME 类型](/zh-CN/Properly_Configuring_Server_MIME_Types)
  - : 不正确的 MIME 类型有几种方式可以对您的站点造成潜在的安全问题。这篇文章解释了其中的几种方式，并且向您展示如何配置您的服务器，以让它使用正确的 MIME 类型提供文件服务。
- [HTTP Strict Transport Security](/zh-CN/Security/HTTP_Strict_Transport_Security)
  - : `Strict-Transport-Security:` 这个 HTTP 头允许站点只能使用 HTTPS。
- [HTTP 访问控制](/En/HTTP_access_control)
  - : 跨源资源共享标准提供了一种指定可从其他域加载的内容的方法。您可以使用它来防止您的网站被不正当地使用; 此外，您可以使用它来建立明确允许其他站点使用的资源。
- [内容安全策略](/zh-CN/Security/CSP)
  - : 一种附加的安全层，有助于检测和减轻某些类型的攻击，包括跨站脚本 (XSS) 以及数据注入攻击。这些攻击用于从数据窃取到站点破坏或恶意软件分发的所有内容。
- [X-Frame-Options 响应头](/zh-CN/docs/Web/HTTP/X-Frame-Options)
  - : `X-Frame-Options:`该[HTTP](/zh-CN/HTTP) 响应头可用于指示是否应允许浏览器在{{HTMLElement("frame")}}中呈现页面。站点可以通过确保其内容未嵌入到其他站点中来避免点击劫持攻击。

## 另外参考

- [开放 Web 应用程序安全项目 (OWASP)](http://www.owasp.org/)
