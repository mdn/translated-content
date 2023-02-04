---
title: Node.contains
slug: Web/API/Node/contains
---

{{ApiRef}}

## 概述

[Node](/zh-CN/docs/Web/API/Node) 接口的 `contains()` 方法 返回一个布尔值，表示一个节点是否是给定节点的后代，即该节点本身、其直接子节点（[childNodes](/zh-CN/docs/Web/API/Node/childNodes)）、子节点的直接子节点等。

> **备注：** 节点包含在其本身内。

## 语法

```js
contains(otherNode)
```

## 参数

`otherNode`

要测试的节点。

> **备注：** `otherNode` 不是可选的，但是可以设置为 null。

## 返回值

返回一个布尔值，如果 `otherNode` 包含在节点中会返回 true，否则返回 false。

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
