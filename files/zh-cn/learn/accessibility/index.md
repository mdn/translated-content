---
title: 无障碍
slug: Learn/Accessibility
---

{{LearnSidebar}}

如果你想成为一个 web 开发者，学习一些 HTML、CSS 和 JavaScript 是很有用的，但是仅仅使用这些技术是不够的，重要的是要学会如何**负责任**地使用这些技术，以便所有读者都可能在网上使用你的创作。为了达到这个目的，要遵循一般最佳实践（这些最佳实践已经被 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 相关的主题所证明）进行[跨浏览器测试](/zh-CN/docs/Learn/Tools_and_testing/Cross_browser_testing)，并且从项目最初阶段就把无障碍性考虑在内。在这个模块中我们将会详细讨论后者。

## 概述

当有人将一个网站描述为“无障碍”时，他们的意思是，任何用户都可以使用其所有的功能和内容，无论用户是如何访问网络的——甚至特别是有身体或精神障碍的用户。

- 键盘、鼠标和触摸屏用户，以及用户访问网络的任何其他方式，包括像 Alexa 和 Google Home 这样的屏幕阅读器等语音助手，都应该能够访问网站。
- 无论人们的听觉、视觉、身体或认知能力如何，应用程序都应该是可以理解和使用的。
- 网站也不应该造成伤害：像动画（motion）这样的 web 特性会导致偏头痛或癫痫发作。

**默认情况下，HTML 在使用正确的时候是可以实现无障碍的**。Web 无障碍涉及确保内容保持无障碍，无论访问 web 的人员或方式。

Firefox 浏览器无障碍检查器是一个非常有用的工具，用于检查网页的无障碍问题。下面的视频对它做了很好的介绍：

{{EmbedYouTube("7mqqgIxX_NU")}}

> **标注：**
>
> #### 想要成为一名前端工程师？
>
> 我们汇总了一门课程，其中包含你实现成为前端工程师目标所需要的所有基本信息。
>
> [**从这里开始**](/zh-CN/docs/Learn/Front-end_web_developer)

## 预备知识

为了充分理解这个模块，你至少需要读过 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 各个主题的前两个模块，或者有可能的话，在你学习相关联的技术话题时也把无障碍相关的内容学习了，这样会更好。

> **备注：** 如果在你所使用的设备上不能建立自己的文件，你可以使用在线编码平台运行大多数样例代码，比如 [JSBin](http://jsbin.com/) 或者 [Glitch](https://glitch.com/)。

## 指南

- [什么是无障碍？](/zh-CN/docs/Learn/Accessibility/What_is_accessibility)
  - : 这篇文章开头很好地阐述了到底什么是无障碍——这包括我们要考虑哪一群人，为什么要考虑这些人，不同用户使用什么工具与网页交互，以及我们如何在 web 开发工作流中构建无障碍部分。
- [HTML: 无障碍的良好基础](/zh-CN/docs/Learn/Accessibility/HTML)
  - : 只要确保恰当的 HTML 元素被用于适当的目的，大量的网页内容即可具有无障碍，这篇文章详细地讲述了 HTML 的用法，以确保网页有最大的无障碍性。
- [CSS 与 JavaScript 无障碍最佳实践](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : 当正确使用 CSS 与 JavaScript 的时候，也能够使得网页具有很好的无障碍，但是如果错误地使用它们将极大地破坏无障碍。这篇文章罗列了一些应该被考虑的 CSS 和 JavaScript 的最佳实践，确保再复杂的内容都可以有尽可能好的无障碍。
- [WAI-ARIA 基础](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 继上一篇文章之后，有时候制作复杂的 UI 控件会涉及到非语义的 HTML 和动态的 JavaScript 更新内容会很难。WAI-ARIA 是一种可以帮助解决这些问题的技术，通过增加浏览器和辅助技术可以识别和使用的进一步语义来让用户知道正在发生的事情。在这里，我们将展示如何在基本级别上使用它来提高无障碍。
- [多媒体无障碍](/zh-CN/docs/Learn/Accessibility/Multimedia)
  - : 可以提高无障碍的另一类内容是多媒体——视频，音频和图像内容需要提供适当的文本替代方案，以便辅助技术和相应的用户能够理解。这篇文章展示了如何这样做。
- [移动端无障碍](/zh-CN/docs/Learn/Accessibility/Mobile)
  - : 随着移动设备上网页访问的流行，以及主流平台（如 iOS 和 Android）具备了完善的辅助功能工具，考虑在这些平台上 Web 内容的无障碍也是非常重要的。本文讨论针对移动设备的无障碍注意事项。

## 评估

- [无障碍诊断](/zh-CN/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : 在这个模块的评估部分中，我们向你展示了一个简单的网站，它有几个无障碍问题，需要你进行诊断和修复。

## 参见

- [现在开始构建无障碍的 web 应用](https://egghead.io/courses/start-building-accessible-web-applications-today)——来自 Marcy Sutton 的一系列优质的视频教程。
- [Deque University 资源](https://dequeuniversity.com/resources/)——包含代码示例，屏幕阅读参考和其他有用的资源。
- [WebAIM 资源](https://webaim.org/resources/)——包含指引、清单、工具和其他资源。
- [Web 无障碍性评估工具列表](https://www.w3.org/WAI/ER/tools/)——包含一系列 web 无障碍评估工具。
