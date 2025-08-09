---
title: Node.isSameNode
slug: Web/API/Node/isSameNode
---

{{ ApiRef() }}

## 概述

判断两个节点是否是相同的节点，即指向同一个对象。

> [!WARNING]
> 该方法已在 DOM level 4 中被废弃，最近的浏览器版本 (Gecko 10.0) 已经删除了这个方法。也就是说，不要再使用 `node1.isSameNode(node2)` 而使用 `node1 === node2` 或者 `node1 == node2` 来代替。

## 语法

```js
var isSameNode = node.isSameNode(other);
```

- `other` 是要和 `node` 判断相同性的另一个节点。

## 规范

- [DOM Level 3 Core: isSameNode](https://www.w3.org/TR/DOM-Level-3-Core/core.html#Node3-isSameNode)
- This has been removed from [DOM Core Level 4](https://www.w3.org/TR/domcore/)
