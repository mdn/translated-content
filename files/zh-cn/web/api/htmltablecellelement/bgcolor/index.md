---
title: HTMLTableCellElement：bgColor 属性
slug: Web/API/HTMLTableCellElement/bgColor
l10n:
  sourceCommit: 245715b48674c1729cb63417e4a27628e30ae28c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

**`HTMLTableCellElement.bgColor`** 属性用于设置单元格的背景色或者检索已弃用的 [`bgColor`](/zh-CN/docs/Web/HTML/Element/td#bgcolor) 属性的值（如果存在）。

> [!NOTE]
> 此属性已弃用，且应使用 CSS 设置背景色。使用 {{cssxref("background-color")}} 属性代替。

## 值

可以使用以下值类型之一：

- 命名的颜色，像 `red` 或 `blue`
- 十六进制代码，像 `#0000dd` 或 `#00d`

> [!NOTE]
> 这里接受的值是 CSS 颜色值的子集。仅限 {{cssxref("named-color")}} 和 3 位 或 6 位 {{cssxref("hex-color")}}（没有 alpha 通道）。虽然所有 HTML 颜色值在 CSS 中都是有效的，但在另一个方向上并非如此。

## 示例

使用 CSS `background-color` 代替。在 {{cssxref("background-color")}} 页面有个[带有 HTML 表格元素的 `background-color`](/zh-CN/docs/Web/CSS/background-color#着色表) 可用。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLTableRowElement.bgColor")}}
