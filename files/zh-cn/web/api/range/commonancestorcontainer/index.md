---
title: Range.commonAncestorContainer
slug: Web/API/Range/commonAncestorContainer
---

{{ApiRef("DOM")}}

**`Range.commonAncestorContainer`** 只读属性，返回目标节点的共有祖先节点。因而需要注意：selectNode 方法中的该值为目标节点的父节点，selectNodeContents 方法中的该值为其本身。

在某些跨节点的选取操作时，取得最大"公约数"的节点为`commonAncestorContainer。`即{{domxref("Range.startContainer")}} 和 {{domxref("Range.endContainer")}} 相同的节点是目标节点的 共有祖先节点。

更改 {{domxref("Node")}}, 请使用 setStart setEnd 及这两种方法的延伸方法 {{domxref("Range")}}.

## 语法

```plain
rangeAncestor = range.commonAncestorContainer;
```

## 示例

```js
var range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
rangeAncestor = range.commonAncestorContainer;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 更多

- [DOM 接口相关内容](/zh-CN/docs/DOM/DOM_Reference)
