---
title: Selection：anchorNode 属性
short-title: anchorNode
slug: Web/API/Selection/anchorNode
l10n:
  sourceCommit: 23de2280422ab52460507ff831915a08bb043d8e
---

{{ ApiRef("DOM") }}

**`Selection.anchorNode`** 只读属性返回选区开始所在的 {{domxref("Node")}}。如果文档中从未产生过选区（例如 iframe 从未被点击，或该节点属于另一个文档树），则可能返回 `null`。

用户可以从左到右（文档顺序）或从右到左（文档顺序的反向）进行选取。锚点是用户开始选取的位置。你可以按住 <kbd>Shift</kbd> 键并使用键盘上的方向键来直观地观察这一点：选区的锚点不会移动，而选区的另一端焦点会移动。

## 值

{{domxref("Node")}} 对象或 `null`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection")}}
- {{domxref("Selection.focusNode")}}
