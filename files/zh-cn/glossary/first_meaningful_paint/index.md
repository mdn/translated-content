---
title: 首次有效绘制
slug: Glossary/First_meaningful_paint
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

**首次有效绘制**（FMP）是在发生最大的首屏布局更改与 Web 字体加载后进行的绘制。在首次有效绘制后，问题“这次的绘制有用？”的答案变成了“是”。

首次有效绘制对页面加载中的微小差异非常敏感。这可能导致不一致（双峰分布）的结果。该指标的定义依赖于特定于浏览器的实现细节，这意味着它无法标准化，并且尚未在所有的 Web 浏览器中实现。

> [!WARNING]
> 首次有效绘制（FMP）已在 Lighthouse 6.0 中弃用。在未来，请考虑使用 [LargestContentfulPaint API](https://wicg.github.io/largest-contentful-paint/)。

## 参见

- [首次内容绘制](/zh-CN/docs/Glossary/First_contentful_paint)
- [最大内容绘制](https://wicg.github.io/largest-contentful-paint/)
