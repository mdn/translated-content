---
title: HTMLTableSectionElement
slug: Web/API/HTMLTableSectionElement
l10n:
  sourceCommit: 7e6e5f5d4c1c984af3d4ebf9399042d19eccea1e
---

{{ APIRef("HTML DOM") }}

**`HTMLTableSectionElement`** 接口提供特定的属性和方法（除了常规 {{domxref("HTMLElement")}} 接口之外，它还可以通过继承来使用），用于操作当前分段——即 HTML 表格中的表头、表尾和主体部分（{{HTMLElement("thead")}}、{{HTMLElement("tfoot")}} 和 {{HTMLElement("tbody")}}）——的布局和呈现。

{{InheritanceDiagram}}

## 实例属性

_从其父接口 {{domxref("HTMLElement")}} 继承属性。_

- {{domxref("HTMLTableSectionElement.align")}} {{deprecated_inline}}
  - : 一个反映 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#align) 属性的字符串枚举值。其指示元素内容相对于周围上下文的对齐方式，可能的值有：`"left"`、`"right"` 和 `"center"`。
- {{domxref("HTMLTableSectionElement.rows")}} {{ReadOnlyInline}}
  - : 返回包含 section 中行的动态 {{domxref("HTMLCollection")}}。`HTMLCollection` 是动态的，当添加或删除行时会自动更新。
- {{domxref("HTMLTableSectionElement.ch")}} {{deprecated_inline}}
  - : 一个包含单字符的字符串。这个字符是用来对齐某一列所有单元格内容的基准。它反映 [`char`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#char) 并默认为与语言相关的小数点，例如，英语的默认值为 `'.'`，法语的默认值为 `','`。此属性是可选的，而且没有得到很好的支持。
- {{domxref("HTMLTableSectionElement.chOff")}} {{deprecated_inline}}
  - : 一个包含整数的字符串，表示由 `HTMLTableRowElement.ch` 定义的字符的右侧（对于从左到右的文本；或者对于从右到左的文本的左侧）必须保留多少个字符。此属性是可选的，并没有得到很好的支持。
- {{domxref("HTMLTableSectionElement.vAlign")}} {{deprecated_inline}}
  - : 一个表示枚举值的字符串，指示单元格内容必须如何对齐。它反映 [`valign`](/zh-CN/docs/Web/HTML/Reference/Elements/tr#valign) 属性，可以为以下值之一：`"top"`、`"middle"`、`"bottom"` 或 `"baseline"`。

## 实例方法

_从其父接口 {{domxref("HTMLElement")}} 继承方法。_

- {{domxref("HTMLTableSectionElement.deleteRow()")}}
  - : 删除 section 中与参数给出的 `index` 对应的行。如果 `index` 值是 `-1`，则删除最后一行；如果索引小于 `-1` 或大于集合中的行数，引发值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}}。
- {{domxref("HTMLTableSectionElement.insertRow()")}}
  - : 返回一个表示 section 新行的 {{DOMxRef("HTMLTableRowElement")}}。它将其插入到行集合中给定索引（`index`）位置的 {{HTMLElement("tr")}} 元素之前。如果 `index` 是 `-1`，则新行添加到集合末尾，如果 `index` 小于 `-1` 或大于集合的行数，则引发值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现此接口的 HTML 元素：{{HTMLElement("tfoot")}}、{{HTMLElement("thead")}} 和 {{HTMLElement("tbody")}}。
