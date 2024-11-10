---
title: 可交互时间
slug: Glossary/Time_to_interactive
l10n:
  sourceCommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{GlossarySidebar}}

**可交互时间**（TTI）是一种非标准的 Web 性能“进度”指标，定义为最后一个[长任务](/zh-CN/docs/Web/API/PerformanceLongTaskTiming)完成后，经过 5 秒的网络和主线程空闲时间。

TTI 由 Web 孵化器社区组于 2018 年提出。它旨在提供一个描述页面或应用程序何时包含有用的内容、主线程何时处于空闲状态并可以响应用户交互（包括注册事件处理器）的指标。

#### 注意

TTI 是通过利用[长任务 API](/zh-CN/docs/Web/API/PerformanceLongTaskTiming) 中的信息推导出来的。尽管某些性能监控工具中提供了 TTI，但在撰写本文时，TTI 并不是属于任何官方 Web 规范。

## 参见

- Web 孵化器社区组关于 [TTI 的定义](https://github.com/WICG/time-to-interactive)
- Radimir Bitsov 写的[可交互时间——以人为本的单位](https://calibreapp.com/blog/time-to-interactive)
- [计算 TTI](https://web.dev/articles/user-centric-performance-metrics#tracking_tti)
