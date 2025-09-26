---
title: Node：lastChild 属性
slug: Web/API/Node/lastChild
l10n:
  sourceCommit: 7de82e7152a2891e9aee5b6f630f1f43849748df
---

{{APIRef("DOM")}}

{{domxref("Node")}} 接口的 **`lastChild`** 只读属性返回节点的最后一个子节点，如果没有子节点，则返回 `null`。

> [!NOTE]
> 此属性返回作为此节点最后一个子节点的任何类型的节点。它可能是 {{domxref("Text")}} 或 {{domxref("Comment")}} 节点。如果你要获取另一个元素的最后一个 {{domxref("Element")}} 子元素，可以考虑使用 {{domxref("Element.lastElementChild")}}。

## 值

作为节点最后一个子节点的 {{domxref("Node")}}，如果没有子节点，则为 `null`。

## 示例

```js
const tr = document.getElementById("row1");
const corner_td = tr.lastChild;
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Node.firstChild")}}
- {{domxref("Element.lastElementChild")}}
