---
title: Node.nodeName
slug: Web/API/Node/nodeName
---

{{APIRef}}概述

返回当前节点的节点名称

## 附注

下表列出了所有类型的节点的`nodeName`属性的值。

| 接口                                                               | nodeName 属性值                                                                                |
| ------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| [Attr](/zh-CN/docs/Web/API/Attr)                                   | 等同于 [`Attr.name`](/zh-CN/docs/DOM/Attr.name) 属性的值                                       |
| [CDATASection](/zh-CN/docs/Web/API/CDATASection)                   | "#cdata-section"                                                                               |
| [Comment](/zh-CN/docs/Web/API/Comment)                             | "#comment"                                                                                     |
| [Document](/zh-CN/docs/Web/API/Document)                           | "#document"                                                                                    |
| [DocumentFragment](/zh-CN/docs/Web/API/DocumentFragment)           | "#document-fragment"                                                                           |
| [DocumentType](/zh-CN/docs/Web/API/DocumentType)                   | 等同于 [`DocumentType.name`](/zh-CN/docs/DOM/DocumentType.name) 属性的值                       |
| [Element](/zh-CN/docs/Web/API/Element)                             | 等同于 [`Element.tagName`](/zh-CN/docs/Web/API/Element/tagName) 属性的值                       |
| [Entity](/zh-CN/docs/DOM/Entity)                                   | 实体名称                                                                                       |
| [EntityReference](/zh-CN/docs/DOM/EntityReference)                 | 实体引用名称                                                                                   |
| [Notation](/zh-CN/docs/DOM/Notation)                               | Notation 名称                                                                                  |
| [ProcessingInstruction](/zh-CN/docs/Web/API/ProcessingInstruction) | 等同于 [`ProcessingInstruction.target`](/zh-CN/docs/DOM/ProcessingInstruction.target) 属性的值 |
| [text](/zh-CN/docs/Web/API/Text)                                   | "#text"                                                                                        |

## 示例

假设已经存在下面的 HTML:

```html
<div id="d1">hello world</div>
<input type="text" id="t" />
```

以及下面的 JavaScript:

```js
var div1 = document.getElementById("d1");
var text_field = document.getElementById("t");

text_field.value = div1.nodeName;
```

在 XHTML(以及属于 XML 类型的文档) 中，变量 `text_field` 包含的值会是小写的"div".还在 HTML 中，变量 `text_field`包含的值会是大写的"DIV", `nodeName` 和 `tagName` 属性都有这种表现。查看[details on nodeName case sensitivity in different browsers](http://ejohn.org/blog/nodename-case-sensitivity/)一文深入了解。

如果是元素节点，`nodeName` 属性和 `tagName` 属性返回相同的值，但如果是文本节点，`nodeName` 属性会返回 `"#text"`，而 `tagName` 属性会返回 `undefined`。

## 规范

{{Specifications}}
