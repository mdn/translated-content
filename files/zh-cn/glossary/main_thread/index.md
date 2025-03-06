---
title: 主线程
slug: Glossary/Main_thread
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**主线程**是浏览器处理用户事件和页面绘制的地方。默认情况下，浏览器在一个线程中运行一个页面中的所有 JavaScript 脚本，并执行布局、重排和垃圾回收。这意味着一个长时间运行的 JavaScript 会阻塞线程，导致页面无法响应，造成不佳的用户体验。

除非故意使用 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API/Using_web_workers)，比如 [Service Worker](/zh-CN/docs/Web/API/Service_Worker_API/Using_Service_Workers)，否则 JavaScript 只在主线程中运行，因此，脚本很容易导致事件处理或绘制延迟。主线程中运行的工作越少，就有越多的余地来处理用户事件、页面绘制，并对用户保持响应。

## 参见

- [异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
- [Web Worker API](/zh-CN/docs/Web/API/Web_Workers_API)
- [Service Worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [术语](/zh-CN/docs/Glossary)

  - {{Glossary("Thread", "线程")}}
