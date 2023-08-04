---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
---

{{ APIRef("HTML DOM") }}

Интерфейс **`HTMLTableCellElement`** содержит специальные свойства и методы (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.colSpan")}}
  - : Is an `unsigned` `long` that represents the number of columns this cell must span. It reflects the [`colspan`](/ru/docs/Web/HTML/Element/td#colspan) attribute.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : Is an `unsigned` `long` that represents the number of rows this cell must span. It reflects the [`rowspan`](/ru/docs/Web/HTML/Element/td#rowspan) attribute.
- {{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}
  - : Is a {{domxref("DOMSettableTokenList")}} describing a list of `id` of {{HTMLElement("th")}} elements that represents headers associated with the cell. It reflects the [`headers`](/ru/docs/Web/HTML/Element/td#headers) attribute.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{readonlyInline}}
  - : Is a `long` representing the cell position in the cells collection of the {{HTMLElement("tr")}} it belongs to. If the cell doesn't belong to a `<tr>`, it returns `-1`.
- {{domxref("HTMLTableCellElement.align")}}
  - : Is a {{domxref("DOMString")}} containing an enumerated value reflecting the [`align`](/ru/docs/Web/HTML/Element/td#align) attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableCellElement.bgColor")}}
  - : Is a {{domxref("DOMString")}} containing the background color of the cells. It reflects the obsolete [`bgColor`](/ru/docs/Web/HTML/Element/td#bgColor) attribute.
- {{domxref("HTMLTableCellElement.axis")}}
  - : Is a {{domxref("DOMString")}} containing a name grouping cells in virtual. It reflects the obsolete [`axis`](/ru/docs/Web/HTML/Element/td#axis) attribute.
- {{domxref("HTMLTableCellElement.height")}}
  - : Is a {{domxref("DOMString")}} containing a length of pixel of the hinted height of the cell. It reflects the obsolete [`height`](/ru/docs/Web/HTML/Element/td#height) attribute.
- {{domxref("HTMLTableCellElement.width")}}
  - : Is a {{domxref("DOMString")}} containing a length of pixel of the hinted width of the cell. It reflects the obsolete [`width`](/ru/docs/Web/HTML/Element/td#width) attribute.
- {{domxref("HTMLTableCellElement.ch")}}
  - : Is a {{domxref("DOMString")}} containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the [`char`](/ru/docs/Web/HTML/Element/td#char) and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.chOff")}}
  - : Is a {{domxref("DOMString")}} containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableCellElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.noWrap")}}
  - : Is a {{domxref("Boolean")}} value reflecting the [`nowrap`](/ru/docs/Web/HTML/Element/td#nowrap) attribute and indicating if cell content can be broken in several lines.
- {{domxref("HTMLTableCellElement.vAlign")}}
  - : Is a {{domxref("DOMString")}} representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the [`valign`](/ru/docs/Web/HTML/Element/td#valign) attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML elements implementing this interface: {{HTMLElement("th")}} and {{HTMLElement("td")}} by inheritance via {{domxref("HTMLTableHeaderCellElement")}} and {{domxref("HTMLTableDataCellElement")}}.
