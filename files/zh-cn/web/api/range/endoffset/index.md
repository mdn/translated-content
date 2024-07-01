---
title: Range.endOffset
slug: Web/API/Range/endOffset
---

{{ApiRef("DOM")}}

只读属性 **`Range.endOffset`** 返回代表 `Range` 结束位置在 {{domxref("Range.endContainer")}} 中的偏移值的数字。

如果 `endContainer` 的 {{domxref("Node")}} 类型为 {{domxref("Text")}}, {{domxref("Comment")}}，或 {{domxref("CDATASection")}}，偏移值是 `endContainer` 节点开头到 {{domxref("Range")}} 末尾的总字符个数。对其他类型的 {{domxref("Node")}} ， `endOffset` 指 `endContainer` 开头到 {{domxref("Range")}} 末尾的总 {{domxref("Node")}} 个数。如需修改 `endOffset` 的值，使用 {{domxref("Range.setEnd")}} 方法。

## 语法

```
endRangeOffset = range.endOffset;
```

## 示例

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeOffset = range.endOffset;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
