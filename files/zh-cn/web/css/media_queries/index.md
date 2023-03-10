---
title: 媒体查询
slug: Web/CSS/Media_Queries
original_slug: Web/CSS/媒体查询
---

{{CSSRef}}

通过**媒体查询**（**Media queries**），您可以根据各种设备特征和参数的值或者是否存在来调整您的网站或应用。

它们是[响应式设计](/zh-CN/docs/Web/Apps/Progressive/Responsive)的关键组成部分。例如，媒体查询可以缩小小型设备上的字体大小，在纵向模式下查看页面时增加段落之间的填充，或者增加触摸屏上按钮的大小。

在 CSS 中，使用 {{cssxref("@media")}} [at-rule](/zh-CN/docs/Web/CSS/At-rule) 根据媒体查询的结果有条件地应用样式表的一部分。使用 {{cssxref("@import")}} 有条件地应用整个样式表。

### 在 HTML 中使用媒体查询

在 [HTML](/zh-CN/docs/Web/HTML) 中，媒体查询可以应用于各种元素：

- 在{{HTMLElement("link")}}元素的{{htmlattrxref("media", "link")}}属性中，它们定义了待应用链接资源（通常是 CSS）的媒体。
- 在{{HTMLElement("source")}}元素的{{htmlattrxref("media", "source")}}属性中，它们定义待应用源的媒体。 （这仅在{{HTMLElement("picture")}}元素内有效。）
- 在{{HTMLElement("style")}}元素的{{htmlattrxref("media", "style")}}属性中，它们定义待应用样式的媒体。

### 在 JavaScript 中使用媒体查询

在[JavaScript](/zh-CN/docs/Web/JavaScript)中，您可以使用 {{domxref("Window.matchMedia()")}} 方法根据媒体查询测试窗口。您还可以使用{{domxref("MediaQueryList.addListener()")}}在查询状态发生变化时收到通知。借助此功能，您的站点或应用可以响应设备配置，方向或状态的更改。

您可以学习更多以编程方式使用媒体查询在[测试媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries)中。

## 参考

### At-rules

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## 指南

- [使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : 介绍媒体查询和媒体查询的的语法以及用于构造媒体查询表达式的运算符和媒体功能。
- [编程方式使用媒体查询](/zh-CN/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : 描述如何在 JavaScript 代码中使用媒体查询来确定设备的状态，以及设置在媒体查询结果发生更改时（例如，当用户旋转屏幕或调整浏览器大小时）通知代码的监听器。
- [使用媒体查询增强网站的无障碍](/zh-CN/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : 了解媒体查询如何帮助用户更好地了解您的网站。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- Use {{cssxref("@supports")}} to apply styles that depend on browser support for various CSS technologies.
