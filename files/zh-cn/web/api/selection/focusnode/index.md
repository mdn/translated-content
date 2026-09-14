---
title: Selection：focusNode 属性
short-title: focusNode
slug: Web/API/Selection/focusNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

**`Selection.focusNode`** 只读属性会返回选区结束所在的 {{domxref("Node")}}。如果文档中从未存在过选区（例如：一个从未被点击过的 iframe，或者该节点属于另一个文档树），则可能返回 `null`。

用户可以从左到右（按文档顺序）或从右到左（与文档顺序相反）进行选择。焦点是用户结束选区的位置。你可以通过按住键盘上的 <kbd>Shift</kbd> 键并按方向键来直观地理解这一点：此时选区的焦点会移动，但作为选区另一端的锚点不会移动。

## 值

{{domxref("Node")}} 对象或 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection")}}
- {{domxref("Selection.anchorNode")}}
