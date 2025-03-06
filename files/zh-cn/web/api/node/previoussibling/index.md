---
title: Node.previousSibling
slug: Web/API/Node/previousSibling
---

{{ APIRef() }}

### 概述

返回当前节点的前一个兄弟节点，没有则返回`null.`

### 语法

```plain
previousNode = node.previousSibling
```

### 例子

```plain
// <a><b1 id="b1"/><b2 id="b2"/></a>
alert(document.getElementById("b1").previousSibling); // null
alert(document.getElementById("b2").previousSibling.id); // "b1"
```

### 备注

Gecko 内核的浏览器会在源代码中标签内部有空白符的地方插入一个文本结点到文档中。因此，使用诸如 [`Node.firstChild`](/zh-CN/docs/Web/API/Node/firstChild) 和 [`Node.previousSibling`](/zh-CN/docs/Web/API/Node/previousSibling) 之类的方法可能会引用到一个空白符文本节点，而不是使用者所预期得到的节点。

详情请参见 [DOM 中的空白符](/zh-CN/docs/Web/API/Document_Object_Model/Whitespace) 和[W3C DOM 3 FAQ: 为什么一些文本节点是空的](https://www.w3.org/DOM/faq.html#emptytext).

获取后一个兄弟节点，请使用[Node.nextSibling](/zh-CN/docs/Web/API/Node/nextSibling).

### 规范

[DOM Level 1 Core: previousSibling](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-previousSibling)

[DOM Level 2 Core: previousSibling](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-640FB3C8)
