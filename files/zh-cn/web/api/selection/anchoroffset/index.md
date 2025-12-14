---
title: Selection：anchorOffset 属性
short-title: anchorOffset
slug: Web/API/Selection/anchorOffset
l10n:
  sourceCommit: e1663b9aa12ab98ad6d9b054f3e25835242ddfad
---

{{ ApiRef("DOM") }}

**`Selection.anchorOffset`** 只读属性在 {{domxref("Selection.anchorNode")}} 属于 {{domxref("Text")}}、{{domxref("CDATASection")}} 或 {{domxref("Comment")}} 类型时，返回选区锚点在该节点内的字符偏移量。

当 {{domxref("Selection.anchorNode")}} 为其他类型的节点时，**`Selection.anchorOffset`** 返回锚点在该 {{domxref("Selection.anchorNode")}} 内偏移的 {{domxref("Node.childNodes")}} 数量。

这个数字从零开始计数。如果选区从 {{domxref("Selection.anchorNode")}} 的第一个字符开始，则返回 `0`。

## 值

一个数字。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
