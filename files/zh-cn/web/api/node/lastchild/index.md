---
title: Node.lastChild
slug: Web/API/Node/lastChild
---

{{APIRef()}}

## 概述

**`Node.lastChild`** 是一个只读属性，返回当前节点的最后一个子节点。如果父节点为一个元素节点，则子节点通常为一个元素节点，或一个文本节点，或一个注释节点。如果没有子节点，则返回 `null`。

## 语法

```plain
var last_child = element.lastChild
```

## 示例

```js
var tr = document.getElementById("row1");
var corner_td = tr.lastChild;
```

## 规范

{{Specifications}}
