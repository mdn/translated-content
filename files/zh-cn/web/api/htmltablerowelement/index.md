---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{ APIRef("HTML DOM") }}

**`HTMLTableRowElement`** 接口提供用于操作 HTML 表格中行的布局和呈现的特定属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用）。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLTableRowElement.cells")}} {{ReadOnlyInline}}
  - : 返回一个行中包含单元格的动态 {{domxref("HTMLCollection")}}。`HTMLCollection` 是动态的，且当单元格添加或移除时可自动更新。
- {{domxref("HTMLTableRowElement.rowIndex")}} {{ReadOnlyInline}}
  - : 返回一个所在行相对于整个表格逻辑位置的数字。如果该行不属于表的一部分，则返回 `-1`。
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{ReadOnlyInline}}
  - : 返回一个所在行相对其所属表片段中逻辑位置的数字。如果该行不是片段的部分，则返回 `-1`。

## 实例方法

_从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLTableRowElement.deleteCell()")}}
  - : 删除 `index` 对应的单元格。如果 `index` 值是 `-1`，则删除此行的最后一个单元格；如果索引小于 `-1` 或大于集合中单元格数量，引发值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}}。
- {{domxref("HTMLTableRowElement.insertCell()")}}
  - : 返回一个表示此行新单元格的 {{domxref("HTMLTableCellElement")}}。它将插入到单元格集合中给定索引（`index`）位置的元素之前。如果 `index` 是 `-1`，则新单元格添加到集合末尾，如果 `index` 小于 `-1` 或大于集合的单元格数，则引发值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}}。

## 已弃用的属性

> [!WARNING]
> 这些属性已被弃用，不应再使用。记录这些属性主要是为了帮助理解旧代码库。

- {{domxref("HTMLTableRowElement.align")}} {{deprecated_inline}}
  - : 一个反映 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#align) 属性的字符串枚举值。其指示元素内容相对于周围上下文的对齐方式，可能的值有：`"left"`、`"right"` 和 `"center"`。
- {{domxref("HTMLTableRowElement.bgColor")}} {{deprecated_inline}}
  - : 一个包含单元格背景色的字符串。它反映已弃用的 [`bgColor`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#bgcolor) 属性。
- {{domxref("HTMLTableRowElement.ch")}} {{deprecated_inline}}
  - : 一个包含单字符的字符串。这个字符是用来对齐某一列所有单元格内容的基准。它反映 [`char`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#char) 并默认为与语言相关的小数点，例如，英语的默认值为 `'.'`，法语的默认值为 `','`。此属性是可选的，而且没有得到很好的支持。
- {{domxref("HTMLTableRowElement.chOff")}} {{deprecated_inline}}
  - : 一个包含整数的字符串，表示由 `HTMLTableRowElement.ch` 定义的字符的右侧（对于从左到右的文本；或者对于从右到左的文本的左侧）必须保留多少个字符。此属性是可选的，并没有得到很好的支持。
- {{domxref("HTMLTableRowElement.vAlign")}} {{deprecated_inline}}
  - : 一个表示枚举值的字符串，指示单元格内容必须如何对齐。它反映 [`valign`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#valign) 属性，可以为以下值之一：`"top"`、`"middle"`、`"bottom"` 或 `"baseline"`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("tr")}}
