---
title: 首次输入延迟
slug: Glossary/First_input_delay
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**首次输入延迟**（FID）测量用户第一次与网站交互（如点击链接、点击按钮或使用自定义的 JavaScript 控件）到浏览器实际能够响应该交互的时间。

它是用户在网页上的首次交互与浏览器对该交互的响应之间的时间长度，以毫秒为单位。滚动和缩放不包括在此指标内。

从内容绘制到页面上到所有功能对人类交互变得响应的时间，通常取决于需要在主线程上下载、解析和执行的 JavaScript 的大小和复杂性，以及设备速度或其缺乏（如低端移动设备）。延迟时间越长，用户体验越差。减少网站初始化时间和消除[长任务](/zh-CN/docs/Web/API/PerformanceLongTaskTiming)有助于消除首次输入延迟。

## 参见

- [requestIdleCallback](/zh-CN/docs/Web/API/Window/requestIdleCallback)
- [延迟加载](/zh-CN/docs/Web/Performance/Lazy_loading)
