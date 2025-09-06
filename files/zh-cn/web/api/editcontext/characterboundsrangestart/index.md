---
title: EditContext：characterBoundsRangeStart 属性
slug: Web/API/EditContext/characterBoundsRangeStart
l10n:
  sourceCommit: c9fe79713a9323e8f1492c3c5b802fc8776a5f6a
---

{{APIRef("EditContext API")}}{{SeeCompatTable}}

{{domxref("EditContext")}} 接口的只读属性 **`characterBoundsRangeStart`** 表示可编辑文本内容中与 {{domxref("EditContext.characterBounds()", "characterBounds")}} 数组中的第一项对应的字符索引。

例如，如果 `EditContent` 包含字符 `abc`，且 `characterBoundRangeStart` 为 `1`，则 `characterBounds` 数组中的第一个项包含字符 `b` 的边界。

## 值

一个 {{jsxref("Number")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
