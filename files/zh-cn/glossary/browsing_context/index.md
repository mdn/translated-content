---
title: Browsing context
slug: Glossary/Browsing_context
---

**浏览上下文**（browsing context）是一个浏览器（browser）展示文档（{{domxref("Document")}}）的环境。在现代浏览器中，通常是一个标签页（tab），也可能是一个窗体（window）或只是页面的一部分，如 frame 或 iframe。

每个浏览器上下文都有一个特殊源，一个的活动文档源（origin）和一个记录所有展示文档的历史（history）。

每个浏览器上下文都有一个活动文档的源（origin）和一个记录所有展示文档的历史（history）。

浏览器上下文之间的通讯被严格限制，两个同源的浏览器上下文，通讯接口（{{domxref("BroadcastChannel")}}）才能被打开和使用。

## Learn more

- See {{glossary("origin")}}
