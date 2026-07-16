---
title: Selection：focusOffset 属性
short-title: focusOffset
slug: Web/API/Selection/focusOffset
l10n:
  sourceCommit: eea0f3e4950c73b3f648e86a96ab245f4bc958e7
---

{{ ApiRef("DOM") }}

**`Selection.focusOffset`** 只读属性用于返回当 {{domxref("Selection.focusNode")}} 是 {{domxref("Text")}}、{{domxref("CDATASection")}} 或 {{domxref("Comment")}} 类型节点时，选区焦点在该节点内偏移的字符数量。

如果 {{domxref("Selection.focusNode")}} 是其他类型的节点，**`Selection.focusOffset`** 会返回选区焦点在 {{domxref("Selection.focusNode")}} 中相对于其 {{domxref("Node.childNodes")}} 的偏移数量。

这个数值是从零开始计数的。如果选区在 {{domxref("Selection.focusNode")}} 的第一个字符处结束，则返回 `0`。

## 值

一个数字。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 所属的 {{domxref("Selection")}} 接口。
