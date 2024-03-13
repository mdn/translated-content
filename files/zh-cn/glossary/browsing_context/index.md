---
title: 浏览上下文（Browsing context）
slug: Glossary/Browsing_context
---

{{GlossarySidebar}}

**浏览上下文**（browsing context）是浏览器（browser）展示{{domxref("Document","文档")}}的环境。在现代浏览器中，通常是一个*标签页*（tab），也可能是一个*窗体*（window）或只是页面的一部分，如 _frame_ 或 _iframe_。

每个浏览上下文都有一个活动文档的源（origin）和一个记录所有展示文档的有序历史（history）。

浏览上下文之间的通讯被严格限制，只有两个同源的浏览上下文，才能打开和使用通讯接口（{{domxref("BroadcastChannel")}}）。

## 参见

- 参见 {{glossary("origin")}}
