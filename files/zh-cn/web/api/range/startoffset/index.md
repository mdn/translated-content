---
title: Range.startOffset
slug: Web/API/Range/startOffset
---

{{ ApiRef("Range") }}

**`Range.startOffset`** 是一个只读属性，用于返回一个表示 `Range` 在 `startContainer` 中的起始位置的数字。

如果 `startContainer` 是一个文本（{{domxref("Text")}}）、注释（{{domxref("Comment")}}）或者 CDATA 区块（{{domxref("CDATASection")}}）节点，那么返回的偏移量是从 `startContainer` 开始到 {{domxref("Range")}} 的边界点的字符数量。对于其他的节点类型， `startOffset` 返回 `startContainer` 到边界点的子节点数量。

可使用{{domxref("Range.setStart")}} 方法改变 `Range` 的 `startOffset` 位置。

## 语法

```
startRangeOffset = range.startOffset;
```

## 示例

```js
range = document.createRange();
range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
startRangeOffset = range.startOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
