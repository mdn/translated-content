---
title: XPath
slug: Web/XML/XPath
---

XPath 表示 XML 路径语言。它使用非 XML 语法来提供一种灵活地定位（指向）[XML](/zh-CN/docs/Web/XML) 文档的不同部分的方法。它也可以用于检查文档中某个定位节点是否与某个模式（pattern）匹配。

XPath 主要用于 [XSLT](/zh-CN/docs/Web/XML/XSLT)，但也可以作为一种更强大的方式使用——使用 {{DOMxRef("XPathExpression")}} 来导航任何类似 XML 语言文档的 [DOM](/zh-CN/docs/Web/API/Document_Object_Model)（例如 [HTML](/zh-CN/docs/Web/HTML) 和 [SVG](/zh-CN/docs/Web/SVG)）。而不是依赖于 {{DOMxRef("Document.getElementById()")}} 或 {{DOMxRef("Document.querySelectorAll()")}} 方法、{{DOMxRef("Node.childNodes")}} 属性和其他 DOM 核心特性。

XPath 使用路径标识符（类似于 URL）通过层级结构来导航 XML 文档。它使用非 XML 语法，使得它可被用于 URI 和 XML 属性值。

> [!NOTE]
> XPath 的浏览器支持差别很大；它在 Firefox 中得到来相当不错的支持（尽管没有计划进一步改进的计划），而其他浏览器则较小程度地实现了它（如果支持的话）。如果你需要 polyfill，你可以考虑使用 [js-xpath](https://sourceforge.net/projects/js-xpath/files/js-xpath/1.0.0/xpath.js/download) 或 [wicked-good-xpath](https://github.com/google/wicked-good-xpath)。

## 文档

- [在 JavaScript 中使用 XPath 的简介](/zh-CN/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
  - : 描述 XPath 的非 XSLT 使用。
- [XPath：轴](/zh-CN/docs/Web/XML/XPath/Reference/Axes)
  - : XPath 规范中定义的轴的列表和定义。轴用于描述节点之间的关系。
- [XPath：函数](/zh-CN/docs/Web/XML/XPath/Reference/Functions)
  - : 核心 XPath 函数和添加到 XPath 中的特定于 XSLT 的函数的列表和描述。
- [使用 XSLT 转换 XML](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT 使用 XPath 来定位它希望转换的 XML 文档中的代码段。
- [XPath 代码片段](/zh-CN/docs/Web/XML/XPath/Guides/Snippets)
  - : 一些可以在你自己的代码中使用的 JavaScript 实用函数，基于 [DOM Level 3 XPath](https://www.w3.org/TR/DOM-Level-3-XPath/) API。
- [什么是 XSLT？](https://www.xml.com/pub/a/2000/08/holman/)
  - : 对 XSLT 和 XPath 的详尽介绍，假设读者先前不了解这些技术，并引导读者了解背景、上下文、结构、概念和介绍性的术语。

## 工具

- [XPath 测试工具](https://extendsclass.com/xpath-tester.html)
  - : 在线的 XPath 构建器/调试器。

## 相关主题

- [XSLT](/zh-CN/docs/Web/XML/XSLT)、[XML](/zh-CN/docs/Web/XML)、[DOM](/zh-CN/docs/Web/API/Document_Object_Model)
- [CSS 选择器和 XPath 的比较](/zh-CN/docs/Web/XML/XPath/Guides/Comparison_with_CSS_selectors)
