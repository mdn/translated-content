---
title: Range.setEnd()
slug: Web/API/Range/setEnd
---

{{ApiRef("DOM")}}

**`Range.setEnd()`**方法用于设置 [`Range`](/zh-CN/docs/Web/API/Range)的结束位置。

如果结束节点类型是 `Text`、`Comment` 或 `CDATASection`之一，那么 `endOffset` 指的是从结束节点算起字符的偏移量。对于其他 `Node` 类型节点，`endOffset` 是指从结束结点开始算起子节点的偏移量。

如果设置的结束点在起始点之上（在文档中的位置），将会导致选区折叠，起始点和结束点都会被设置为指定的结束位置。

## 语法

```plain
range.setEnd(endNode, endOffset);
```

### 参数

- _endNode_
  - : *endNode*用于设定 [`Range`](/zh-CN/docs/Web/API/Range)的结束位置。
- _endOffset_
  - : 必须为不小于 0 的整数。表示从*endNode*的结束位置算起的偏移量。

## 例子

```js
var range = document.createRange();
var endNode = document.getElementsByTagName("p").item(3);
var endOffset = endNode.childNodes.length;
range.setEnd(endNode, endOffset);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [The DOM interfaces index](/zh-CN/docs/Web/API/Document_Object_Model)
