---
title: 线程
slug: Glossary/Thread
l10n:
  sourceCommit: 3734941b8a491f3d95741669d68b827602f83954
---

计算机科学中的线程是同时运行多个任务或程序的执行。每个能够执行代码的单元称为**线程**。

[**主线程**](/zh-CN/docs/Glossary/Main_thread)是浏览器用来处理用户事件、渲染和绘制显示以及运行组成典型网页或应用程序的大部分代码的线程。因为这些事情都发生在一个线程中，一个缓慢的网站或者应用程序脚本会减低整个浏览器的速度；更糟糕的是，如果一个网站或者应用程序脚本进入无限循环，整个浏览器将会挂起。这导致了令人沮丧、迟缓（或更糟）的用户体验。

然而，现代 {{Glossary("JavaScript")}} 提供了创建额外线程的方式，每个线程独立执行，同时可能相互通信。这是使用如 [Web Worker](/zh-CN/docs/Web/API/Web_Workers_API) 等技术实现的，这些技术可以用来衍生出一个在自己的线程中与主线程同时运行的子程序。这允许缓慢、复杂或者长时间运行的任务独立于主线程执行，以保护网站或者应用程序的整体性能，以及浏览器的整体性能。这也允许 Web 应用利用现代多核处理器：提供在甚至比单核上运行的多线程应用更好的性能。

一种特殊类型的 worker 被称为 **[Service Worker](/zh-CN/docs/Web/API/Service_Worker_API)**，可以被网站留下，以便在用户当前不使用该网站的情况下（在用户许可的情况下）运行。这用于创建能够在用户不活跃地与网站交互时通知用户发生事情的网站。例如，即使用户当前没有登录邮箱服务，也可以通知用户收到了新的电子邮件。

总的来说，可以观察到，我们的操作系统中的这些线程非常有帮助。它们有助于最大限度地减少上下文切换时间，实现更高效的通信，并允许进一步使用多处理器体系结构。

## 参见

- [异步 JavaScript](/zh-CN/docs/Learn_web_development/Extensions/Async_JS)
- [Web worker API](/zh-CN/docs/Web/API/Web_Workers_API)
- [Service worker API](/zh-CN/docs/Web/API/Service_Worker_API)
- [术语表](/zh-CN/docs/Glossary)
  - {{Glossary("Main_thread", "主线程")}}
