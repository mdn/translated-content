---
title: Selection：isCollapsed 属性
slug: Web/API/Selection/isCollapsed
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{ ApiRef("DOM") }}

**`Selection.isCollapsed`** 只读属性返回一个布尔值，表示当前是否有任何文本被选中。当选定内容的起点和终点位于内容中的同一位置时，没有选定文本。

请注意，折叠的选择可能仍有一个（在 Gecko 中为多个）{{domxref("Range")}}，因此 {{domxref("Selection.rangeCount")}} 可能不为零。在这种情况下，调用 {{domxref("Selection")}} 对象的 {{domxref("Selection.getRangeAt", "getRangeAt()")}} 方法可能会返回折叠的 `Range` 对象。

## 值

一个布尔值。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Selection")}}
- {{domxref("Range")}}
