---
title: SVG：可缩放矢量图形
slug: Web/SVG
l10n:
  sourceCommit: be9ba40fbef7f96beae73e5dd6d48a3ca875826f
---

**可缩放矢量图形**（**Scalable Vector Graphics，SVG**）基于 [XML](/zh-CN/docs/Web/XML) 标记语言，用于描述二维的[矢量图形](https://zh.wikipedia.org/wiki/矢量图形)。

作为一个基于文本的开放 Web 标准，SVG 能够优雅而简洁地渲染不同大小的图形，并和 [CSS](/zh-CN/docs/Learn_web_development/Core/Styling_basics)、[DOM](/zh-CN/docs/Web/API/Document_Object_Model)、[JavaScript](/zh-CN/docs/Web/JavaScript) 和 [SMIL](/zh-CN/docs/Web/SVG/Guides/SVG_animation_with_SMIL) 等其他 Web 标准无缝衔接。本质上，SVG 相对于图像，就好比 [HTML](/zh-CN/docs/Web/HTML) 相对于文本。

SVG 图像及其相关行为被定义于 [XML](/zh-CN/docs/Web/XML/Guides/XML_introduction) 文本文件之中，这意味着可以对它们进行搜索、索引、编写脚本以及压缩。此外，这也意味着可以使用任何文本编辑器和绘图软件来创建和编辑它们。

和传统的点阵图像模式（如 {{Glossary("JPEG")}} 和 {{Glossary("PNG")}}）不同的是，SVG 格式提供的是矢量图，这意味着它的图像能够被无限放大而不失真或降低质量，并且可以方便地修改内容，无需图形编辑器。通过使用合适的库进行配合，SVG 文件甚至可以随时进行本地化。

SVG 是由[万维网联盟（W3C）](https://www.w3.org/)自 1999 年开始开发的开放标准。

## 教程

[SVG 教程](/zh-CN/docs/Web/SVG/Tutorials)是在假设你没有任何经验的情况下，从基础开始，逐步深入到更高级的技术。

- [从零开始介绍 SVG](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch)
  - : 本教程旨在解释 SVG 的内部结构，其中包含大量技术细节。如果你只想绘制漂亮的图像，你可以在 [Inkscape 文档页面](https://inkscape.org/learn/) 找到更多有用的资源。W3C 的 [SVG Primer](https://www.w3.org/Graphics/SVG/IG/resources/svgprimer.html) 提供了另一个很好的 SVG 介绍。此外，还可以查看以日历为主题的 [SVG 教程](https://svg-tutorial.com/)，该教程将指导你编程 25 个充满节日气氛的 SVG。

## 指南

[SVG 指南](/zh-CN/docs/Web/SVG/Guides)可帮助你在网络上使用 SVG，涵盖嵌入、MIME（媒体）类型、处理脚本、动画、过滤器等主题。

- [在 HTML 内容中应用 SVG 效果](/zh-CN/docs/Web/SVG/Guides/Applying_SVG_effects_to_HTML_content)
  - : 现代浏览器支持在 CSS 样式中使用 SVG，以便在 HTML 内容中应用图形效果。
- [内容类型](/zh-CN/docs/Web/SVG/Guides/Content_type)
  - : SVG 使用了多种数据类型。本文列出了这些类型及其语法和用途说明。
- [命名空间速成班](/zh-CN/docs/Web/SVG/Guides/Namespaces_crash_course)
  - : 命名空间对于支持多种 XML 方言的用户代理至关重要。浏览器必须非常严格；现在花时间了解命名空间，将来就不会再头疼了。
- [脚本](/zh-CN/docs/Web/SVG/Guides/Scripting)
  - : 用 JavaScript 创建和操作 SVG 有多种方法。本文档介绍了事件处理、交互性以及处理嵌入式 SVG 内容的方法。
- [使用 SMIL 制作 SVG 动画](/zh-CN/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : SMIL 是一种基于 XML 的语言，用于编写交互式多媒体演示。作者可以在 SVG 中使用 SMIL 语法来定义动画元素的时间和布局。
- [SVG 作为图像](/zh-CN/docs/Web/SVG/Guides/SVG_as_an_image)
  - : SVG 可在 HTML、CSS、某些 SVG 元素中作为图像格式使用，也可通过 Canvas API 使用。本页列出了可以将 SVG 用作图像源的功能。
- [SVG 滤镜](/zh-CN/docs/Web/SVG/Guides/SVG_filters)
  - : SVG 支持滤镜，因此作者可以应用阴影或模糊等效果，甚至合并不同滤镜的结果。
- [HTML 中的 SVG 简介](/zh-CN/docs/Web/SVG/Guides/SVG_in_HTML)
  - : 本文介绍了如何使用内联 SVG，并附有示例进行说明。

## 参考

[SVG 参考](/zh-CN/docs/Web/SVG/Reference)文档包含有关元素、属性和 DOM 接口的全面信息，并列出了相关规范和标准文档。

- [SVG 元素](/zh-CN/docs/Web/SVG/Reference/Element)
  - : 用于构建、绘制和布局矢量图形的 SVG 元素。
- [SVG 属性](/zh-CN/docs/Web/SVG/Reference/Attribute)
  - : 用于指定如何处理或渲染元素的 SVG 属性。
- [SVG DOM 接口参考](/zh-CN/docs/Web/API/Document_Object_Model#svg_接口)
  - : 用于使用 JavaScript 与 SVG 交互的 SVG DOM API。

## 资源

- [SVG 测试套件](https://github.com/w3c/svgwg/wiki/Testing)
- [标记验证器](https://validator.w3.org/#validate_by_input)
- [SVG 创作指南](https://jwatt.org/svg/authoring/)
- [SVG 教程](https://svg-tutorial.com/)
- [D3 数据可视化库](https://d3js.org/)
