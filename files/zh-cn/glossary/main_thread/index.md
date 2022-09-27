---
title: 主线程
slug: Glossary/Main_thread
---

**主线程**用于浏览器处理用户事件和页面绘制等。默认情况下，浏览器在一个线程中运行一个页面中的所有 JavaScript 脚本，以及呈现布局，回流，和垃圾回收。这意味着一个长时间运行的 JavaScript 会阻塞线程，导致页面无法响应，造成不佳的用户体验。

除非故意使用 [web worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)，比如 [service worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)，不然 JavaScript 只在线程中运行，所以脚本的运行时，很容易导致事件处理流程或绘制的延迟。主线程中运行的工作越少，就有越多的余地来处理用户事件，页面绘制和对用户保持响应。

## 参见

- 另可参考

  - [异步 JavaScript](/zh-CN/docs/Learn/JavaScript/Asynchronous)
  - [Web worker API](/zh-CN/docs/Web/API/Web_Workers_API)
  - [Service worker API](/zh-CN/docs/Web/API/Service_Worker_API)

- [词汇表](/zh-CN/docs/Glossary)

  - {{Glossary("Thread")}}
