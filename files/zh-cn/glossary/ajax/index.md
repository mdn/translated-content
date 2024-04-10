---
title: AJAX
slug: Glossary/AJAX
l10n:
  sourceCommit: 5d6c210c89552b590f035e78b5c4f48cb48b32b6
---

{{GlossarySidebar}}

**AJAX**（Asynchronous {{glossary("JavaScript")}} And {{glossary("XML")}} ）是一种在网页 App 中通过异步地发送 HTTP 请求向服务器获取内容，并使用这些新内容更新页面中相关的部份，而无需重新加载整个页面的网页开发技术。这可以让网页更具有响应性，因为只有那些需要更新的部分向服务器请求了。

AJAX 可以被用来创建 {{Glossary("SPA", "单页应用")}}，那些使用 AJAX 来更新需要的内容的、由单一文档构成的一整个网页 App。

一开始的时候 AJAX 通过使用 {{domxref("XMLHttpRequest")}} 接口实现，但是 {{domxref("fetch()")}} API 更适合用于开发现代网页 App：更出色、更灵活、更好地与一些网页 App 的基础技术相结合（如 [service workers](/en-US/docs/Web/API/Service_Worker_API)）。现代网页框架也为 AJAX 提供了抽象化概念。

AJAX 在现代网页开发中太过常见了，以至于 AJAX 这个术语很少被使用到。

## 参见

- {{DOMxRef("XMLHttpRequest")}}
- {{DOMxRef("Fetch API")}}
- [使用 Fetch API](/zh-CN/docs/Web/API/Fetch_API/Using_Fetch)
- 维基百科上的 [AJAX](https://zh.wikipedia.org/wiki/AJAX)
- [同步与异步通信](https://peoplesofttutorial.com/difference-between-synchronous-and-asynchronous-messaging/)（2014）
