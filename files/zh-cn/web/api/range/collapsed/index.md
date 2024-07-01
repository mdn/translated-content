---
title: Range：collapsed 属性
slug: Web/API/Range/collapsed
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{ APIRef("DOM") }}

**`Range.collapsed`** 只读属性返回一个表示 {{domxref("Range")}} 的开始和结束节点是否重合的布尔标志。如果 {{domxref("Range")}} 的开始和结束节点在 DOM 中是同一个位置，则该属性返回 `true`；反之返回 `false`。

折叠后的 {{domxref("Range")}} 是空的（不含任何内容），并指向 DOM 树中的单个位置点。若要折叠一个范围，请参考 {{domxref("Range.collapse()")}} 方法。

## 值

一个布尔值。

## 示例

```js
let range = document.createRange();

range.setStart(startNode, startOffset);
range.setEnd(endNode, endOffset);
isCollapsed = range.collapsed;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- [DOM 接口索引](/zh-CN/docs/Web/API/Document_Object_Model)
