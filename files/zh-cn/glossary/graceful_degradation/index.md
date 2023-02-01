---
title: Graceful degradation（优雅降级）
slug: Glossary/Graceful_degradation
---

**优雅降级**（Graceful degradation）是一种设计理念，其核心是尝试构建可在最新浏览器中运行的现代网站/应用程序，而作为降级体验，在低版本浏览器中仍然提供必要的内容和功能。

{{Glossary("Polyfill","Polyfill")}}可用于使用 JavaScript 构建缺少的功能，但应尽可能提供样式和布局等功能的可接受替代方案，例如使用 CSS 级联或 HTML 回退行为。在[处理常见的 HTML 和 CSS 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)中可以找到一些很好的例子。

这个技术很有用，因为它让 Web 开发者，在专注开发最强大的网站同时，和某些未知的用户代理，在访问网站时发生的问题间达到权衡。{{Glossary("渐进增强")}}相关而不同—通常被看做优雅降级的相反行为。实际上，这两种方法都是有效的，并且通常可以相互补充。

## 了解更多

### 基本知识

- 维基百科的[优雅降级](https://zh.wikipedia.org/wiki/优雅降级)
- [MDN Web 文档词汇表](/zh-CN/docs/Glossary)

  - {{Glossary("Graceful degradation")}}
  - {{Glossary("Polyfill")}}
  - {{Glossary("渐进增强")}}

- [处理常见的 HTML 和 CSS 问题](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [实现特性检测](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
