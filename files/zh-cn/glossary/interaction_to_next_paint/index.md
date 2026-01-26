---
title: 交互至下一次绘制（INP）
slug: Glossary/Interaction_to_next_paint
l10n:
  sourceCommit: 673746e15e5052c4fe39944f3d93d2e2d3227b3f
---

**交互至下一次绘制**（INP，Interaction to Next Paint）衡量网站对用户交互（例如点击链接、点击按钮或使用自定义 JavaScript 控件）的响应速度。

INP 由 Google 设计，是[核心 Web 指标](https://web.developers.google.cn/articles/vitals)（Core Web Vitals）之一，并于 2024 年 5 月取代了{{Glossary("First Input Delay", "首次输入延迟（FID）")}}。INP 与 FID 有两个关键区别，使其成为更可靠的页面响应性衡量标准：

- FID 只测量首次用户交互，而 INP 会考虑所有用户交互。
- FID 只测量交互的输入延迟，而 INP 测量的时间更长：从输入延迟开始，接着是事件处理程序的处理时间，直到浏览器绘制下一个帧的展示时间。

INP 测量用户在网页上交互后，处理完该交互并展示下一个帧之间的最长耗时（去除部分异常值），单位为毫秒。滚动和缩放不计入该指标。INP 通过[事件计时 API](/zh-CN/docs/Web/API/PerformanceEventTiming) 计算。异步操作（如 Web 请求或文件读取）通常不会延迟 INP，因为绘制可以在这些操作处理期间进行。

页面生命周期内所有合格的交互都会被考虑。对于交互频繁（50 次及以上）的页面，采用第 98 百分位以排除极端异常值。

延迟越长，用户体验越差。[长动画帧 API](/zh-CN/docs/Web/API/Performance_API/Long_animation_frame_timing) 可帮助定位高 INP 的原因。

## 参见

- [长动画帧计时](/zh-CN/docs/Web/API/Performance_API/Long_animation_frame_timing)
- [PerformanceEventTiming](/zh-CN/docs/Web/API/PerformanceEventTiming)
- web.developer.google.cn 上的 [INP](https://web.developers.google.cn/articles/inp)（2023）
- web.developer.google.cn 上的[优化交互至下一次绘制](https://web.developers.google.cn/articles/optimize-inp)（2023）
- web.developer.google.cn 上的 [INP 正式成为核心 Web 指标](https://web.developers.google.cn/blog/inp-cwv-launch)（2024）
