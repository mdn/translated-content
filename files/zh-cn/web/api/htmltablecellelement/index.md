---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

**`HTMLTableCellElement`** 接口提供用于操作 HTML 文档中表格单元格、表头单元格（{{HTMLElement("th")}}）或者数据单元格（{{HTMLElement("td")}}）的布局和呈现的特定属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLTableCellElement.abbr")}}
  - : 一个可以使用在 `<th>` 元素（不可用于 {{HTMLElement("td")}}）的字符串，它为表头单元格指定备选的标签。此标签可以在其他上下文中使用，例如在描述适用于数据单元格的表头时。它特别用于为屏幕阅读器提供一个更短的术语；并且是一个有价值的无障碍工具。通常，`abbr` 的值是一个缩写或首字母缩略词，但也可以是任何在上下文中合适的文本。
- {{domxref("HTMLTableCellElement.cellIndex")}} {{ReadOnlyInline}}
  - : 一个表示单元格在其所属的 {{HTMLElement("tr")}} 元素的 {{domxref("HTMLTableRowElement.cells", "cells")}} 集合中的位置。如果单元格不属于任何 `<tr>`，则返回 `-1`。
- {{domxref("HTMLTableCellElement.colSpan")}}
  - : 一个指示此单元格必须跨越列数的正数；这允许单元格在表格的多列之间占据空间。它反映 [`colspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#colspan) 属性。
- {{domxref("HTMLTableCellElement.headers")}} {{ReadOnlyInline}}
  - : 一个描述与单元格相关联的由 {{HTMLElement("th")}} 的 `id` 构成的表头列表的 {{domxref("DOMTokenList")}}。它反映 [`headers`](/zh-CN/docs/Web/HTML/Reference/Elements/td#headers) 属性。
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : 一个指示此单元格必须跨越行数的正数；这允许单元格在表格的多行之间占据空间。它反映 [`rowspan`](/zh-CN/docs/Web/HTML/Reference/Elements/td#rowspan) 属性。
- {{domxref("HTMLTableCellElement.scope")}}
  - : 一个指示 {{HTMLElement("th")}} 单元格范围的字符串。`scope` 可能的值有：`col`、`colgroup`、`row`、`rowgroup` 或空字符串（`""`）。

## 实例方法

_没有特定的方法，从其父接口 {{domxref("HTMLElement")}} 继承方法。_

## 已弃用的属性

> [!WARNING]
> 这些属性已弃用，不应再使用。它们被记录下来主要是为了帮助理解旧的代码库。

- {{domxref("HTMLTableCellElement.align")}} {{deprecated_inline}}
  - : 一个包含 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/td#align) 属性的值的字符串（如果存在），或者如果未设置，则为空字符串。其用于设置元素内容相对于周围 `"left"`、`"right"` 和 `"center"` 上下文的对齐方式。请使用 CSS {{cssxref("text-align")}} 属性代替。
- {{domxref("HTMLTableCellElement.axis")}} {{deprecated_inline}}
  - : 一个包含虚拟中单元格分组名称的字符串。它反映已过时的 [`axis`](/zh-CN/docs/Web/HTML/Reference/Elements/td#axis) 属性。
- {{domxref("HTMLTableCellElement.bgColor")}} {{deprecated_inline}}
  - : 一个包含单元格背景色的字符串。它反映已过时的 [`bgColor`](/zh-CN/docs/Web/HTML/Reference/Elements/td#bgcolor) 属性。
- {{domxref("HTMLTableCellElement.ch")}} {{deprecated_inline}}
  - : 一个包含单字符的字符串。这个字符是用来对齐某一列所有单元格内容的基准。它反映 [`char`](/zh-CN/docs/Web/HTML/Reference/Elements/td#char) 并默认为与语言相关的小数点，例如，英语的默认值为 `'.'`，法语的默认值为 `','`。此属性是可选的，而且没有得到很好的支持。
- {{domxref("HTMLTableCellElement.chOff")}} {{deprecated_inline}}
  - : 一个包含整数的字符串，表示由 `HTMLTableRowElement.ch` 定义的字符的右侧（对于从左到右的文本；或者对于从右到左的文本的左侧）必须保留多少个字符。此属性是可选的，并没有得到很好的支持。
- {{domxref("HTMLTableCellElement.height")}} {{deprecated_inline}}
  - : 一个包含单元格提示高度的像素长度的字符串。此属性反映已过时的 [`height`](/zh-CN/docs/Web/HTML/Reference/Elements/td#height) 属性。
- {{domxref("HTMLTableCellElement.noWrap")}} {{deprecated_inline}}
  - : 一个反映 `nowrap` 属性，且支持是否单元格内容可以分成几行的布尔值。
- {{domxref("HTMLTableCellElement.vAlign")}} {{deprecated_inline}}
  - : 一个表示枚举值的字符串，指示单元格内容必须如何对齐。它反映 [`valign`](/zh-CN/docs/Web/HTML/Reference/Elements/td#valign) 属性，可以为以下值之一：`"top"`、`"middle"`、`"bottom"` 或 `"baseline"`。请使用 CSS {{cssxref("vertical-align")}} 属性代替。
- {{domxref("HTMLTableCellElement.width")}} {{deprecated_inline}}
  - : 如果可能的话，是一个指定应绘制单元格宽度的像素数的字符串。此属性反映已过时的 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/td#width) 属性。使用 CSS {{cssxref("width")}} 属性代替。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("tr")}} 和 {{HTMLElement("td")}}。
