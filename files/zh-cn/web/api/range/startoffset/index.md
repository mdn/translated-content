---
title: Range：startOffset 属性
slug: Web/API/Range/startOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.startOffset`** 只读属性返回一个数字，表示 `Range` 在 `startContainer` 中的起始位置。

如果 `startContainer` 是 {{domxref("Text")}}、{{domxref("Comment")}} 或 {{domxref("CDATASection")}} 类型的 {{domxref("Node")}}，那么偏移量是从 `startContainer` 的起始位置到 {{domxref("Range")}} 边界点的字符数。对于其他 {{domxref("Node")}} 类型，`startOffset` 是从 `startContainer` 的起始位置到 {{domxref("Range")}} 边界点之间的子节点数量。

要更改 {{domxref("Range")}} 的 `startOffset`，请使用 {{domxref("Range.setStart")}} 方法。

## 值

数字。

## 示例

```js
const range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
const startRangeOffset = range.startOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
