---
title: 媒体查询
slug: Web/CSS/Guides/Media_queries
l10n:
  sourceCommit: 72304bf90ccd530ff9dc9e5ff12397b2600248ed
---

**CSS 媒体查询**（media query）是[响应式设计](/zh-CN/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)的关键组成部分，你可以根据各种设备特征和参数是否存在以及对应的值来应用 CSS 样式。

通常根据{{Glossary("viewport", "视口")}}大小来应用媒体查询，以便可以为不同屏幕大小的设备做出布局调整。例如，你可以为小屏设备设置较小的字体，在纵向模式下查看页面时增加段落间的边距，或者增加触摸屏上按钮的大小。

![笔记本电脑和移动设备具有不同的视口大小，可以使用媒体查询进行查询，我们可以看到内容布局的不同。](media-queries.svg)

在 CSS 中，可以使用 {{cssxref("@media")}} [at 规则](/zh-CN/docs/Web/CSS/Guides/Syntax/At-rules)根据媒体查询的结果有条件地应用样式表的一部分。要有条件地应用整个样式表，请使用 {{cssxref("@import")}}。

在设置可重用的 HTML 组件时，你还可以使用容器查询，它允许你根据容器元素的大小而非视口或者其他设备特征来应用样式。

### 在 HTML 中使用媒体查询

在 [HTML](/zh-CN/docs/Web/HTML) 中，媒体查询可以应用于各种元素：

- 在 {{HTMLElement("link")}} 元素的 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/link#media) 属性中，其定义待应用链接资源（通常是 CSS）的媒体。
- 在 {{HTMLElement("source")}} 元素的 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/source#media) 属性中，其定义待应用源的媒体。（这仅在 {{HTMLElement("picture")}} 元素内有效。）
- 在 {{HTMLElement("style")}} 元素的 [`media`](/zh-CN/docs/Web/HTML/Reference/Elements/style#media) 属性中，其定义待应用样式的媒体。

### 在 JavaScript 中使用媒体查询

在 [JavaScript](/zh-CN/docs/Web/JavaScript) 中，你可以使用 {{domxref("Window.matchMedia()")}} 方法根据媒体查询测试窗口。你还可以使用 {{domxref("MediaQueryList.addListener()")}} 在查询状态发生变化时收到通知。借助此功能，你的站点或应用可以响应设备配置、方向或状态的更改。

你可以在[测试媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Testing)中学到更多通过编程方式使用媒体查询的知识。

## 参考

### At 规则

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## 指南

- [使用媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using)
  - : 介绍媒体查询及其语法，以及用于构造媒体查询表达式的运算符和媒体特性。
- [通过编程方式使用媒体查询](/zh-CN/docs/Web/CSS/Guides/Media_queries/Testing)
  - : 描述如何在 JavaScript 代码中使用媒体查询来确定设备的状态，以及设置在媒体查询结果发生更改时（例如，当用户旋转屏幕或调整浏览器大小时）通知代码的监听器。
- [使用媒体查询增强无障碍](/zh-CN/docs/Web/CSS/Guides/Media_queries/Using_for_accessibility)
  - : 了解媒体查询如何帮助用户更好地了解你的网站。
- [打印](/zh-CN/docs/Web/CSS/Guides/Media_queries/Printing)
  - : 帮助改进 Web 内容打印输出的技巧和技术。

## 规范

{{Specifications}}

## 参见

- [容器查询](/zh-CN/docs/Web/CSS/Guides/Containment/Container_queries)
- 使用 {{cssxref("@supports")}} 来根据浏览器支持的 CSS 技术应用样式。
