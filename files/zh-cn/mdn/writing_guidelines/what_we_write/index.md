---
title: MDN 收录规则
slug: MDN/Writing_guidelines/What_we_write
original_slug: MDN/Guidelines/Does_this_belong_on_MDN
---

{{MDNSidebar}}

在本文中，你将找到 MDN Web 文档收录规则的有关信息，我们将从主题和类型两方面告诉你什么样的内容是合适的。有些内容如果不适合放置在这里，我们将和你讨论它应该被放置在什么地方，尽管我们的讨论不会很深入。

## 问题

如果你正准备记录什么信息，你可能想知道是否要将这些信息放入 MDN。更进一步地，你可能想在你的源代码中维护文档，并将文档写入 [Mozilla wiki](https://wiki.mozilla.org/Main_Page)，或者写入某 Git 仓库的 readme 文件中。本文的目的是帮助你确认你的内容是否适合 MDN。

文档是否应放入 MDN 主要取决于两点：

- 文档的主题（它是讲什么内容的？）
- 文档的性质（它是什么类型的文档？）

请注意，对 MDN 的所有贡献都基于特定的开源许可证。这些在我们的[关于 MDN](/zh-CN/docs/MDN/About) 页面中有[详细介绍](/zh-CN/docs/MDN/About#版权和许可)。

> **备注：** Mozilla 的 [Websites & Communications Terms of Use](https://www.mozilla.org/zh-CN/about/legal/terms/mozilla/) 所声明的条例在你使用 MDN 或对其做贡献时是生效的。仔细阅读这个文档，确保你知道在 Mozilla 的网站上什么是能发表的，什么是不能发表的。

## 哪些话题在 MDN 的范畴内？

一般来说，如果它是一种开放的、面向 web 的技术，我们会在 MDN 上对其进行记录。这意味着我们的内容涵盖 Web 开发人员在创建站点和应用程序时可以使用的任何技术。如果多个浏览器实现了该功能，并且它是一项标准，或者正在朝着标准化发展，那么我们肯定可以收录它。如果它仍然处在实验阶段，没有在多个浏览器中实现，可能会发生一些变化，那么它仍然适合被收录，但可能不会被视为文档的写作团队优先事项。

我们主要关注前端 Web 技术：

- [HTML](/zh-CN/docs/Web/HTML)
- [CSS](/zh-CN/docs/Web/CSS)
- [JavaScript](/zh-CN/docs/Web/JavaScript)
- [SVG](/zh-CN/docs/Web/SVG)
- [Web APIs](/zh-CN/docs/Web/API)
- [WebGL](/zh-CN/docs/Web/API/WebGL_API)
- 等等。

> **备注：** 后端技术通常在其他地方有自己的文档，MDN 不会试图取代这些文档，尽管我们确实有一些[例外](/zh-CN/docs/learn/Server-side)。

我们还欢迎一些跨端技术但与 Web 开发相关的主题，例如：

- [Accessibility](/zh-CN/docs/Web/Accessibility)
- [AJAX](/zh-CN/docs/Web/Guide/AJAX)
- [Web graphics](/zh-CN/docs/Web/Guide/Graphics)
- [Progressive web apps](/zh-CN/docs/Web/Progressive_web_apps)
- [Web-based games](/zh-CN/docs/Games)

> **备注：** MDN 涵盖了一些在网络上公开的非标准功能，特别是它们很常用的时候。例如，我们有 WebKit 特定的 CSS 属性的文档。MDN 还涵盖了一些非 Web 标准技术，如果这些技术被认为对 Web 开发人员很有用——参阅我们的 [Web 相关技术](/zh-CN/docs/Related)部分。

## 哪些主题不属于 MDN Web 文档？

一般来说，任何不是开放的 Web 标准的东西都不属于 MDN。以下各节提供了更多的详细信息。

### Mozilla 产品

MDN Web Docs 不再托管 Mozilla 产品的文档。

特别地，以下产品有自己的文档站点：

- [Firefox Developer Tools](https://firefox-source-docs.mozilla.org/devtools-user/index.html)
- [Building and configuring Firefox](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html)
- [SpiderMonkey](https://firefox-source-docs.mozilla.org/js/)

### 还有什么不属于 MDN Web 文档？

举一些不适合 MDN 的主题：

- 仅适用于某一非 Mozilla 浏览器的不开放的 Web 技术。
- 与 Web 或 Mozilla 产品无关的技术。
- 面向用户的文档；对于 Mozilla 产品来说，这些文档应属于 [Mozilla 技术支持](https://support.mozilla.org)。

## 哪些类型在 MDN 的范畴内？

一般情况下，MDN 是*产品*文档，而不是*项目*或记录过程的文档（除了 [MDN 本身](/zh-CN/docs/MDN)）。因此，如果文档是关于“如何使用一项技术”或“一项技术是如何工作的”（这项技术在上面提到的一个主题类别中）那么它可以被放在 MDN 上但如果它是关于“谁在开发一项技术”或“开发一项技术的计划”，那么它就不应该出现在 MDN 上。在这种情况下，如果这个东西是在 Mozilla 支持下开发的，那么 [Mozilla project wiki](https://wiki.mozilla.org/Main_Page) 可能是一个好地方。

以下是不应该放置在 MDN 上的文档类型的一些示例：

- 计划中的文档
- 设计文档
- 项目提案
- 规范或标准
- 宣传材料、广告或个人信息
