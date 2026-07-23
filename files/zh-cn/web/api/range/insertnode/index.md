---
title: Range：insertNode() 方法
slug: Web/API/Range/insertNode
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.insertNode()`** 方法在 {{domxref("Range")}} 的起始位置插入一个节点。

新节点插入到 `Range` 的起始边界点。如果要将新节点添加到文本 {{domxref("Node")}} 中，该 `Node` 会在插入点处被拆分，插入操作发生在两个文本节点之间。

如果新节点是文档片段，则会插入文档片段的子节点。

## 语法

```js-nolint
insertNode(newNode)
```

### 参数

- `newNode`
  - : 要插入到 `range` 起始位置的 {{domxref("Node")}}。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

```js
range = document.createRange();
newNode = document.createElement("p");
newNode.appendChild(document.createTextNode("新节点插入于此"));
range.selectNode(document.getElementsByTagName("div").item(0));
range.insertNode(newNode);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
