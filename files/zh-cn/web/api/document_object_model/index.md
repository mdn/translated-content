---
title: 文档对象模型（DOM）
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{DefaultAPISidebar("DOM")}}

**文档对象模型**（DOM）通过将文档的结构（例如表示网页的 HTML）以对象的形式存储在内存中，将网页与脚本或编程语言连接起来。尽管将 HTML、SVG 或 XML 文档建模为对象并不是 JavaScript 核心语言的一部分，但它通常与 JavaScript 相关。

DOM 使用逻辑树的形式来表示文档。树的每个分支末端都是一个节点，每个节点都包含对象。DOM 方法允许以编程方式来访问树。借助这些方法，你可以改变文档的结构、样式或内容。

节点还可以附加事件处理器。一旦事件被触发，相应的事件处理器就会被执行。

进一步了解 DOM 是什么以及它如何表示文档，请参阅我们的文章 [DOM 概述](/zh-CN/docs/Web/API/Document_Object_Model/Introduction)。

## DOM 接口

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMPoint")}}
- {{DOMxRef("DOMPointReadOnly")}}
- {{DOMxRef("DOMRect")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TextDecoder")}}
- {{DOMxRef("TextEncoder")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}

### 过时的 DOM 接口

文档对象模型已被高度简化。为了实现这一目标，已在 DOM 第 3 版或更早的各种规范中移除了以下接口。它们不再对 Web 开发者可用。

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## HTML DOM

包含 HTML 的文档通过 {{DOMxRef("Document")}} 接口进行描述，HTML 规范扩展了这个接口，包含了各种 HTML 特有的特性。尤其是 {{domxref("Element")}} 接口被拓展为 {{domxref("HTMLElement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。

HTML DOM API 提供了对各种浏览器特性的访问，如标签和窗口、CSS 样式和样式表、浏览器历史记录等。这些接口将在 [HTML DOM API](/zh-CN/docs/Web/API/HTML_DOM_API) 文档中进一步讨论。

## SVG DOM

同样，包含 SVG 的文档也通过 {{DOMxRef("Document")}} 接口来描述，接口由 SVG 规范扩展，包含了各种 SVG 特有的特性。尤其是 {{domxref("Element")}} 接口被拓展为 {{domxref("SVGElement")}} 以及很多不同的子类，每个子类代表一个（或一系列密切相关的）元素。这些接口将在 [SVG API](/zh-CN/docs/Web/API/SVG_API) 文档中进一步讨论。

## 规范

{{Specifications}}

## 参见

- [DOM 示例](/zh-CN/docs/Web/API/Document_Object_Model/Examples)
- [CSS 对象模型（CSSOM）](/zh-CN/docs/Web/API/CSS_Object_Model)
