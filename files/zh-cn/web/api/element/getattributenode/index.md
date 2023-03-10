---
title: Element.getAttributeNode()
slug: Web/API/Element/getAttributeNode
---

{{ APIRef("DOM") }}

## 概要

返回指定元素的指定属性节点

## 语法

```plain
var attrNode = element.getAttributeNode(attrName);
```

- `attrNode` 获得的属性返回值，是 Attr 节点，nodeType 为 2
- `attrName` 是一个包含属性名称的 字符串

## 举例

```plain
// html: <div id="top" />
var t = document.getElementById("top");
var idAttr = t.getAttributeNode("id");
alert(idAttr.value == "top")
```

## 注意

当在一个被标记为 HTML 文档的 DOM 中的 HTML 元素上调用这个方法时，getAttributeNode 会将参数转变为小写形式。

Attr 节点继承自 Node，但不被认为是文档树的一部分。Node 上定义的常用属性，如 parentNode, previousSibling，和 nextSibling 对于 Attr 节点来说都为 null。然而，你可以使用 ownerElement 来得到拥有这个属性的元素。

[getAttribute](/zh-CN/DOM/element.getAttribute) 通常用于替换 getAttributeNode 方法，来获得元素的属性值。性能也更快。性能对比是 element.id 大于 element.getAttribute('id') 大于 element.getAttributeNode('id').nodeValue.

{{ DOMAttributeMethods() }}

## 规范

- [DOM Level 2 Core: getAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-217A91B8) (introduced in [DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode))
- [HTML 5: APIs in HTML documents](http://www.whatwg.org/specs/web-apps/current-work/multipage/dom.html#apis-in-html-documents)
