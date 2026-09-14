---
title: 长任务
slug: Glossary/Long_task
l10n:
  sourceCommit: 1391eec245db45782d4c73572ce7b375cbe43989
---

**长任务**是指需要超过 50 毫秒完成的任务。

这是指[主 UI 线程](/zh-CN/docs/Glossary/Main_thread)持续忙碌 50 毫秒或更长时间的不间断时段。常见的例子包括长时间运行的事件处理程序、耗费资源的[重排](/zh-CN/docs/Glossary/Reflow)和其他重新渲染，以及浏览器在事件循环的不同轮次之间执行的超过 50 毫秒的工作。

## 参见

- [长任务 API](/zh-CN/docs/Web/API/PerformanceLongTaskTiming)
- [长动画帧 API](/zh-CN/docs/Web/API/Performance_API/Long_animation_frame_timing)
