---
title: Node.contains
slug: Web/API/Node/contains
---

{{ApiRef}}

## 概述

**Node.contains()**返回的是一个布尔值，来表示传入的节点是否为该节点的后代节点。

## 语法

```plain
node.contains( otherNode )
```

- `node` 是否包含 otherNode 节点。
- `otherNode` 是否是 node 的后代节点。

如果 `otherNode` 是 `node 的后代节点或是` `node` 节点本身。则返回`true` , 否则返回 `false`.

## 例子

下面的函数用来检查一个元素是否是 body 元素的后代元素且非 body 元素本身。

```js
function isInPage(node) {
  return (node === document.body) ? false : document.body.contains(node);
}
```

- `node` 是我们想要检查的元素节点。

## 浏览器兼容性

{{Compat}}

## 规范

- [DOM Level 4: contains](http://www.w3.org/TR/domcore/#dom-node-contains)

## 相关链接

- {{domxref("Node.hasChildNodes")}}
