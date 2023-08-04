---
title: Range.setStart()
slug: Web/API/Range/setStart
---

{{ApiRef("DOM")}}

**`Range.setStart()`** 方法用于设置 {{ domxref("Range") }}的开始位置。

如果起始节点类型是 `Text`、`Comment` 或 `CDATASection`之一，那么 `startOffset` 指的是从起始节点算起字符的偏移量。对于其他 `Node` 类型节点，`startOffset` 是指从起始结点开始算起子节点的偏移量。

如果设置的起始位点在结束点之下（在文档中的位置），将会导致选区折叠，起始点和结束点都会被设置为指定的起始位置。

## 语法

```plain
range.setStart(startNode, startOffset);
```

### 参数

- _startNode_
  - : {{ domxref("startNode") }} 用于设定 {{ domxref("Range") }}的起始位置。
- _startOffset_``
  - : 必须为不小于 0 的整数。表示从`startNode`的开始位置算起的偏移量。

## 例子

```js
var range = document.createRange();
var startNode = document.getElementsByTagName("p").item(2);
var startOffset = 0;
range.setStart(startNode, startOffset);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/DOM/DOM_Reference)
