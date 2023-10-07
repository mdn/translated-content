---
title: Range.endContainer
slug: Web/API/Range/endContainer
---

{{ApiRef("DOM")}}

**`Range.endContainer`** 是一个只读属性。它会返回{{domxref("Range")}}对象结束的{{domxref("Node")}}。如果要改变一个节点结束的位置，使用方法{{domxref("Range.setEnd()")}}或者相似的方法。

## 语法

```plain
endRangeNode = range.endContainer;
```

## 示例

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
endRangeNode = range.endContainer;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
