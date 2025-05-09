---
title: XSLT：可扩展样式表语言转换
slug: Web/XML/XSLT
---

**可扩展样式表语言转换**（XSLT）是一种基于 [XML](/zh-CN/docs/Web/XML/Guides/XML_introduction) 的语言，和专门的处理软件一起使用，用于 XML 文档转换。

虽然这个处理过程被称作“转换”，但并没有改变原始文档，而是在原文档内容的基础上创建了一个新的 XML 文档。然后，这个新文档会被处理器序列化（输出）为标准的 XML 语法或其他格式（如 [HTML](/zh-CN/docs/Web/HTML) 或纯文本）。

XSLT 最常用于不同 XML 模式间的数据转换，或用于将 XML 数据转换为网页或 PDF 文档。

## 文档

- [XSLT 元素参考](/zh-CN/docs/Web/XML/XSLT/Reference/Element)
  - : 参考。
- [使用 XSLT 转换 XML](/zh-CN/docs/Web/XML/XSLT/Guides/Transforming_XML_with_XSLT)
  - : XSLT 允许样式表作者以两种重要的方式转换主 XML 文档：对内容进行操作或排序，包括根据需要对其进行整体重新排序，以及将内容转换为不同的格式。
- [使用 Mozilla JavaScript 接口进行 XSL 转换](/zh-CN/docs/Web/API/XSLTProcessor)
  - : 文档描述了 Mozilla 1.2 及以上版本中 XSLT 处理引擎的 JavaScript 接口。
- [使用处理指令指定参数](/zh-CN/docs/Web/XML/XSLT/Guides/PI_Parameters)
  - : Firefox 允许在使用 `<?xml-stylesheet?>` 处理指令时指定样式表参数。这是通过文档中描述的 `<?xslt-param?>` 处理指令完成的。
- [XSLT 教程](https://www.w3schools.com/xml/xsl_intro.asp)
  - : 此 [W3Schools](https://www.w3schools.com) 教程指导读者如何使用 XSLT 将 XML 文档转换为其他格式（如 XHTML）。
- [什么是 XSLT？](https://www.xml.com/pub/a/2000/08/holman/)
  - : 对 XSLT 和 XPath 的详尽介绍，假设读者先前不了解这些技术，并引导读者了解背景、上下文、结构、概念和介绍性的术语。
- [XSLT 的常见错误](/zh-CN/docs/Web/XML/XSLT/Guides/Common_errors)
  - : 本文列出了在 Firefox 中使用 XSLT 时的一些常见问题。

## 相关主题

- [XML](/zh-CN/docs/Web/XML/Guides/XML_introduction)、[XPath](/zh-CN/docs/Web/XML/XPath)
