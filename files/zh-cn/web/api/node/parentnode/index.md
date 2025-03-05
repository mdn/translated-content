---
title: Node.parentNode
slug: Web/API/Node/parentNode
---

{{ ApiRef() }}

## 概述

返回指定的节点在 DOM 树中的父节点。

## 语法

```plain
parentNode = node.parentNode
```

`parentNode` 是指定节点的父节点。一个元素节点的父节点可能是一个元素（`Element`）节点，也可能是一个文档（`Document`）节点，或者是个文档碎片（`DocumentFragment`）节点。

## 例子

```plain
if (node.parentNode) {
  // 从 DOM 树中删除 node 节点，除非它已经被删除了。
  node.parentNode.removeChild(node);
}
```

## 备注

对于下面的[节点类型](/zh-CN/docs/Web/API/Node/nodeType): `Attr`, `Document`, `DocumentFragment`, `Entity`, `Notation`,其`parentNode`属性返回`null`.

如果当前节点刚刚被建立，还没有被插入到 DOM 树中，则该节点的 `parentNode` 属性也返回 `null`.

## 相关链接

{{ Domxref("element.firstChild") }}, {{ Domxref("element.lastChild") }}, {{ Domxref("element.childNodes") }}, {{ Domxref("element.nextSibling") }}, {{ Domxref("element.previousSibling") }}.

## 浏览器兼容性

{{Compat}}

## 规范

[DOM Level 2 Core: Node.parentNode](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1060184317)
