---
title: XPath
slug: Web/XPath
---

XPath 的意思是 XML 路径语言。它使用的一个非 XML 语法提供一种灵活地定位 [XML](/zh-CN/docs/XML) 文档的不同部分的方法。它同时也可以用于检测文档中某个节点是否与某个模式（pattern）匹配。

XPath 主要被用于 [XSLT](/zh-CN/docs/XSLT)，也可用于定位文档元素，像类 XML 语言文档（如 HTML 和 [XUL](/zh-CN/docs/XUL) ) 通过 [DOM](/zh-CN/docs/DOM) 定位元素一样。替代 {{Domxref("document.getElementById")}} 方法、 {{Domxref("element.childNodes")}} 属性和其他 DOM 核心特性。

XPath 使用路径标识符通过层级结构来导航 XML 文档。它使用非 XML 语法，以致于它可以被用在 URIs 和 XML 属性值上。

> **备注：** XPath 的浏览器支持差别很大；Firefox 支持地相当不错 (尽管没有计划进一步提高支持），而其他浏览器则较小程度地实现了它。如果你需要一个兼容主流浏览器的 XPath，你可以考虑试试 [js-xpath](http://nchc.dl.sourceforge.net/project/js-xpath/js-xpath/1.0.0/xpath.js) 或 [wicked-good-xpath](https://github.com/google/wicked-good-xpath).

## 文档

- [在 JavaScript 中使用 XPath 的介绍](/zh-CN/docs/Introduction_to_using_XPath_in_JavaScript)
  - : 描述了 XPath 的一个非 XSLT 使用。
- [XPath:Axes](/zh-CN/docs/XPath/Axes)
  - : List and definition of the axes defined in the XPath specification. Axes are used to describe the relationships between nodes.
- [XPath:Functions](/zh-CN/docs/XPath/Functions)
  - : List and description of the core XPath functions and XSLT-specific additions to XPath.
- [Transforming XML with XSLT](/zh-CN/docs/Transforming_XML_with_XSLT)
  - : XSLT uses XPath to address code segments in a XML document that it wishes to transform.
- [XPath snippets](/zh-CN/docs/Web/XPath/Snippets)
  - : JavaScript utility functions to use in your own code, based on [DOM Level 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/) APIs.
- [What is XSLT?](http://www.xml.com/pub/a/2000/08/holman/)
  - : This extensive introduction to XSLT and XPath assumes no prior knowledge of the technologies, and guides the reader through background, context, structure, concepts and introductory terminology.
- [JXON](/zh-CN/docs/JXON)
  - : **JXON** (lossless **J**avaScript **X**ML **O**bject **N**otation) is a generic name by which is defined the representation of JavaScript Objects using [XML](/zh-CN/XML). There are some cases in which the whole content of an XML document must be read from the JavaScript interpreter (like for web-apps languages or settings XML documents, for example). In these cases JXON could represent the most practical way and a valid alternative to XPath.

## 工具

- [XPather](https://addons.mozilla.org/zh-CN/firefox/addon/1192)
  - : Feature rich XPath generator, editor, inspector, and simple extraction tool (FireFox Add-On).
- [FireXPath](https://addons.mozilla.org/zh-CN/firefox/addon/11900)
  - : XPath panel that integrates tightly into FireBug, providing an editor and inspector (FireFox Add-On).
- [XMLQuire (formerly known as SketchPath)](http://qutoric.com/xmlquire/)
  - : A Graphical XPath Builder/Debugger(.NET).

## 相关主题

- [XSLT](/zh-CN/docs/XSLT), [XQuery](/zh-CN/docs/XQuery), [XML](/zh-CN/docs/XML), [DOM](/zh-CN/docs/DOM), [JXON](/zh-CN/docs/JXON), [JSONPath](/zh-CN/docs/JSON/JSONPath)

{{QuickLinksWithSubpages("/zh-CN/docs/Web/XPath")}}
