---
title: 无障碍
slug: Learn/Accessibility
l10n:
  sourceCommit: 33d92d501901ca505f1d33f914531753ca289f2e
---

{{LearnSidebar}}

如果你想成为一名 Web 开发者，学习一些 HTML、CSS、JavaScript 是有用的。除了机械地使用之外，重要的是学习如何**负责任**地使用这些技术，让所有用户能在 Web 上使用你的作品。为了帮你实现这个目标，本模块涉及常见的最佳实践（在 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 主题中有所体现），以及一些严格执行无障碍的技巧。接下来会特别详细地介绍无障碍。

## 概述

当有人将一个网站描述为“无障碍”时，意味着不论访问 Web 的方式如何，任何一个用户（甚至是有身体或精神障碍的用户）都能使用网站全部的特性和内容。

- 使用键盘、鼠标和触摸屏的用户，以及使用任何其他方式（包括屏幕阅读器和诸如 Alexa 和 Google Home 等的语音助手）访问 Web 的用户都应该能访问网站。
- 无论人们的听觉、视觉、身体或认知能力如何，都应该能理解和使用应用程序。
- 网站也不应该造成伤害：像动画（motion）这样的 Web 特性会导致偏头痛或癫痫发作。

**默认情况下，HTML 在使用得当的情况下是无障碍的**。Web 无障碍涉及确保内容无论由谁以何种方式访问都是无障碍的。

要检查 Web 页面上的无障碍问题时，火狐无障碍检查器是一个非常实用的工具。下面的视频对它进行了很好的介绍：

{{EmbedYouTube("7mqqgIxX_NU")}}

## 前提

为了充分理解本模块，最好先完成 [HTML](/zh-CN/docs/Learn/HTML)、[CSS](/zh-CN/docs/Learn/CSS) 和 [JavaScript](/zh-CN/docs/Learn/JavaScript) 主题的前两个模块，或者更好的做法是，在你学习相关技术主题的同时，完成无障碍模块的相关部分。

> [!NOTE]
> 如果你工作的计算机/掌上电脑/其他设备无法创建文件，可以使用在线编码程序（例如，[JSBin](https://jsbin.com/) 或者 [Glitch](https://glitch.com/)）实验大多数代码示例。

## 指南

- [什么是无障碍？](/zh-CN/docs/Learn/Accessibility/What_is_accessibility)
  - : 这篇文章从什么是无障碍开始，详细介绍了我们需要考虑哪一群人，为什么要考虑这些人，不同的人使用什么工具与 Web 交互，以及如何将无障碍融入到我们的 Web 开发工作流程中。
- [HTML：无障碍的良好基础](/zh-CN/docs/Learn/Accessibility/HTML)
  - : 大量的 Web 内容只要确保正确的 HTML 元素来实现正确的目的，就是无障碍的。这篇文章详细讲述 HTML 是如何确保最大程度的无障碍。
- [CSS 和 JavaScript 无障碍最佳实践](/zh-CN/docs/Learn/Accessibility/CSS_and_JavaScript)
  - : CSS 和 JavaScript 如果使用得当，也有潜力实现无障碍的 Web 体验，但如果使用不当，它们会严重损害无障碍。这篇文章概述了一些应该考虑的 CSS 和 JavaScript 最佳实践，以确保即使复杂的内容也能尽可能是无障碍的。
- [WAI-ARIA 基础](/zh-CN/docs/Learn/Accessibility/WAI-ARIA_basics)
  - : 接着上一篇文章，有时制作复杂的 UI 控件（涉及非语义化的 HTML 和使用 JavaScript 动态的更新内容）可能很难。WAI-ARIA 是通过添加额外的语义（浏览器和辅助技术能识别和使用这些语义让用户知道正在发生什么）来解决这类问题的技术。在这里，我们将从基础级别的视角展示如何使用它来提高无障碍。
- [多媒体无障碍](/zh-CN/docs/Learn/Accessibility/Multimedia)
  - : 另一类会出现无障碍问题的内容就是多媒体——视频、音频和图像内容需要提供合适的文本替代，这样辅助技术和相应的用户就能理解这些内容。这篇文章将介绍如何做到这一点。
- [移动端无障碍](/zh-CN/docs/Learn/Accessibility/Mobile)
  - : 随着用移动设备访问 Web 变得流行，以及主流平台（例如，iOS 和安卓）拥有完备的无障碍工具，考虑这些平台上的 Web 内容的无障碍非常重要。这篇文章讲解移动设备相关的无障碍注意事项。

## 评估

- [无障碍诊断](/zh-CN/docs/Learn/Accessibility/Accessibility_troubleshooting)
  - : 在本模块的评估环节，会向你展示一个包含多个无障碍问题的简单站点，你需要诊断并修复这些问题。

## 参见

- [学习无障碍 Web 设计](https://v2.scrimba.com/learn-accessible-web-design-c031?via=mdn) <sup>**MDN 课程合作伙伴**</sup>
  - : [Scrimba](https://scrimba.com?via=mdn) 的*学习无障碍 Web 设计*课程通过解决交互式编码挑战和修复真实网站的方式教授如何编写无障碍的 HTML。
- [现在开始构建无障碍的 Web 应用](https://egghead.io/courses/start-building-accessible-web-applications-today)
  - : 来自 Marcy Sutton 的优秀的视频教程系列。
- [Deque University 资源](https://dequeuniversity.com/resources/)
  - : 包含代码示例、屏幕阅读器参考和其他实用的资源。
- [WebAIM 资源](https://webaim.org/resources/)
  - : 包含指南、清单、工具和其他资源。
- [Web 无障碍评估工具列表](https://www.w3.org/WAI/ER/tools/)
  - : 包含一系列 Web 无障碍评估工具。
