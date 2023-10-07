---
title: Range.collapsed
slug: Web/API/Range/collapsed
---

{{ APIRef("DOM") }}

**`Range.collapsed`** 是只读属性。它返回一个 {{domxref("Boolean")}} 值表示是否起始点和结束点是同一个位置。如果返回 `true` 表示{{domxref("Range")}} 的起始位置和结束位置重合，`false` 表示不重合。

一个折叠的{{domxref("Range")}} 是空的，不包含内容，表示 Dom 树中的一个点。collapsed 属性是只读的。可以调用 {{domxref("Range.collapse()")}} 方法来折叠选区。

## 语法

```plain
isCollapsed = range.collapsed;
```

## 例子

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参阅

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
