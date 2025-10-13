---
title: AJAX
slug: Glossary/AJAX
l10n:
  sourceCommit: 998a4e6fc713678381e6bc31130e3a0a53158d69
---

**AJAX**（Asynchronous {{glossary("JavaScript")}} And {{glossary("XML")}}）是一种在 Web 应用中通过异步发送 HTTP 请求向服务器获取内容，并使用这些新内容更新页面中相关的部分，而无需重新加载整个页面的 Web 开发技术。这可以让网页更具有响应性，因为只请求了需要更新的部分。

AJAX 可以用于创建{{Glossary("SPA", "单页应用")}}——那些使用 AJAX 来更新需要的内容的、由单一文档构成的一整个 Web 应用。

一开始的时候 AJAX 通过使用 {{domxref("XMLHttpRequest")}} 接口实现，但是 {{domxref("Window/fetch", "fetch()")}} API 更适合用于开发现代 Web 应用：更出色、更灵活、更好地与一些 Web 应用的基础技术相结合（如 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)）。现代 Web 框架也为 AJAX 提供了抽象。

这项技术在现代 Web 开发中太过常见了，以至于 AJAX 这个术语很少被使用到。

## 参见

- [从服务器获取数据](/zh-CN/docs/Learn_web_development/Core/Scripting/Network_requests)
- [Fetch API](/zh-CN/docs/Web/API/Fetch_API)
- 相关术语：
  - {{Glossary("SPA", "单页应用")}}
- [使用 Fetch API](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- 维基百科上的 [AJAX](https://zh.wikipedia.org/wiki/AJAX)
