---
title: Range：endOffset 属性
slug: Web/API/Range/endOffset
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ApiRef("DOM")}}

**`Range.endOffset`** 只读属性返回一个数字，表示 {{domxref("Range.endContainer")}} 在 {{domxref("Range")}} 中的结束位置。

如果 `endContainer` 是 {{domxref("Text")}}、{{domxref("Comment")}} 或 {{domxref("CDATASection")}} 类型的 {{domxref("Node")}}，那么偏移量是从 `endContainer` 的起始位置到 {{domxref("Range")}} 边界点之间的字符数。对于其他的 {{domxref("Node")}} 类型，`endOffset` 是从 `endContainer` 的起始位置到 {{domxref("Range")}} 边界点之间的子节点数。此属性为只读。要更改 {{domxref("Range")}} 的 `endOffset` 值，请使用 {{domxref("Range.setEnd")}} 方法。

## 值

数字。

## 示例

```js
const range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeOffset = range.endOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
