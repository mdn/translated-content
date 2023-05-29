---
title: Element.getAttributeNodeNS()
slug: Web/API/Element/getAttributeNodeNS
---

{{ APIRef("DOM") }}

## 概要

通过命名空间 URI 和名称来获取属性节点。

## 语法

```plain
attributeNode = element.getAttributeNodeNS(namespace,nodeName)
```

- `attributeNode` 获取的属性节点。
- `namespace` 命名空间字符串
- `nodeName` 属性节点的名称。

\== Example == TBD The example needs to be fixed pre> // html: \<div id="top" /> t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<http://www.mozilla.org/ns/specialspace>", "id"); // iNode.value = "full-top" \</pre

## 笔记

`getAttributeNodeNS` 相比 [getAttributeNode](en/DOM/element.getAttributeNode) 更加具体，允许你在特定的命名空间里获取属性。对应的 setter 方法是 [setAttributeNodeNS](en/DOM/element.setAttributeNodeNS).

{{ DOMAttributeMethods() }}

## 规格

[DOM Level 2 Core: getAttributeNodeNS](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)
