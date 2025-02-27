---
title: NodeList.item
slug: Web/API/NodeList/item
---

{{ ApiRef() }}

### 概述

根据给定的索引，返回一个 [`NodeList`](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-536297177)对象中包含的 Node 对象。

### 语法

```plain
nodeItem = nodeList.item(index)
```

- `nodeList`是一个`NodeList`对象。通常是由某个 DOM 属性或方法返回的，比如[childNodes](/zh-CN/docs/Web/API/Node/childNodes).
- `index` 是给定的索引。从 0 开始。
- `nodeItem` 是根据索引`index` 由 `item` 方法从 `nodeList` 中获取到的节点。

JavaScript 有更简单的语法来从一个 NodeList 对象中获取指定索引的节点：

```plain
nodeItem = nodeList[index]
```

### 例子

```plain
var tables = document.getElementsByTagName("table");
var firstTable = tables.item(1); // 或者简写为 tables[1]，返回一个文档中的第二个 table 元素。
```

### 备注

如果索引越界，该方法不会抛出异常，只会返回 `null`。

`item()` 不是 DOM [元素](/zh-CN/docs/Web/API/element)或者 DOM 节点的方法，而是 NodeList 对象的方法。

### 规范

[DOM Level 1 Core: NodeList.item()](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-item)

[DOM Level 2 Core: NodeList.item()](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-844377136)
