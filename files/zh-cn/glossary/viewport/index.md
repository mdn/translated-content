---
title: 视口
slug: Glossary/Viewport
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

在电脑图形学里面，**视口**代表了一个可看见的多边形区域（通常来说是矩形）。

在 Web 浏览器范畴里，它指的是在浏览器窗口中（或者如果文档是在移动浏览器或桌面浏览器的全屏模式下查看，则指的是屏幕上）查看的文档部分。视口外的内容在被滚动进来前都是不可见的。

视口当前可见的部分叫做[**可视视口**](/zh-CN/docs/Glossary/Visual_Viewport)。可视视口可能会比{{Glossary("layout viewport", "布局视口")}}更小。因为当用户缩小浏览器缩放比例时，布局视口不变，而可视视口变小了。

{{htmlelement("iframe")}}、{{svgelement("svg")}} 或 {{htmlelement("object")}} 元素的可视视口是指相应元素内部的宽度和高度，而不是父文档的宽度和高度。对于元素内部渲染的内容，可视视口和布局视口是相同的。

## 参见

- {{Glossary("Visual viewport", "可视视口")}}
- {{Glossary("Layout viewport", "布局视口")}}
- [视口概念](/zh-CN/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [CSSOM 视图](/zh-CN/docs/Web/CSS/Guides/CSSOM_view)模块
- [CSSOM 视图 API](/zh-CN/docs/Web/API/CSSOM_view_API)
- 维基百科上的[视口](https://zh.wikipedia.org/wiki/视口)
- [两种视口的故事](https://www.quirksmode.org/mobile/viewports.html)（Quirksmode）
