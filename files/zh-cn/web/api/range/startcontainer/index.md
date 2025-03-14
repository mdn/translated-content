---
title: Range：startContainer 属性
slug: Web/API/Range/startContainer
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.startContainer`** 只读属性返回 `Range` 开始所在的 {{domxref("Node")}}。要更改节点的起始位置，请使用 {{domxref("Range.setStart()")}} 方法。

## 值

{{domxref("Node")}} 对象。

## 示例

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeNode = range.startContainer;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
