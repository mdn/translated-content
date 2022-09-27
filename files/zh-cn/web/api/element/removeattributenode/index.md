---
title: Element.removeAttributeNode()
slug: Web/API/Element/removeAttributeNode
---

{{ APIRef("DOM") }}

`removeAttributeNode` 从当前的 element(元素节点) 删除指定的属性

## Syntax

```plain
removedAttr = element.removeAttributeNode(attributeNode)
```

- `attributeNode` 是需要被删除的 Attr 节点。
- `removedAttr` 是被删除了的 Attr 节点。

## 例如

```plain
// <div id="top" align="center" />
var d = document.getElementById("top");
// getAttributeNode 返回指定元素的指定属性，返回值是 Attr 节点类型
var d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
//  现在 align 被删除了：<div id="top" />
```

## 注意

如果删除有默认值的属性，相当于将属性值替换为默认值。属性只有在具有同样的命名空间、本地名称以及原始前缀时，才会在被删除的时候替换为默认值。

不像 setAttributeNode 和 setAttributeNodeNS 配对使用那样，需要知道要替换哪个现有属性。removeAttributeNode 没有那样的要求，也没有 removeAttributeNodeNS。removeAttributeNode 可以删除命名空间以及非命名空间的属性。

{{ DOMAttributeMethods() }}

## 规范

[DOM Level 2 Core: removeAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-D589198) ([DOM Level 1 Core](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttributeNode) 里面的介绍)
