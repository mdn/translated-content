---
title: HTMLTableRowElement：bgColor 属性
slug: Web/API/HTMLTableRowElement/bgColor
l10n:
  sourceCommit: cdb23fdf261a071951e1e46a0a6c7bc6daa691ff
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`HTMLTableRowElement.bgColor`** 属性用于设置行的背景色或者检索已弃用的 [`bgColor`](/zh-CN/docs/Web/HTML/Element/tr#bgcolor) 属性的值（如果存在）。

> [!NOTE]
> 此属性已弃用，且应使用 CSS 设置背景色。使用 {{cssxref("background-color")}} 属性代替。

## 值

可以使用以下值类型之一：

- 命名的颜色，像 `red` 或 `blue`
- 十六进制代码，像 `#0000dd`

> [!NOTE]
> 这里接受的值是 CSS 颜色值的子集。你可以在 CSS 中重用 HTML 颜色值，但不能在另一个方向上重用：未知的颜色会与预期不同。

## 示例

使用 CSS `background-color` 代替。在 {{cssxref("background-color")}} 页面有个[示例](/zh-CN/docs/Web/CSS/background-color#着色表) 可用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableCellElement.bgColor")}}
