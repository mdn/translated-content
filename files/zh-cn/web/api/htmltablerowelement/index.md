---
title: HTMLTableRowElement
slug: Web/API/HTMLTableRowElement
---

{{ APIRef("HTML DOM") }}

The **`HTMLTableRowElement`** interface provides special properties and methods (beyond the {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of rows in an HTML table.

{{InheritanceDiagram(600, 120)}}

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableRowElement.align")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} containing an enumerated value reflecting the {{htmlattrxref("align", "tr")}} attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableRowElement.bgColor")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} containing the background color of the cells. It reflects the obsolete {{htmlattrxref("bgColor", "tr")}} attribute.
- {{domxref("HTMLTableRowElement.cells")}} {{readonlyInline}}
  - : Returns a live {{domxref("HTMLCollection")}} containing the cells in the row. The `HTMLCollection` is live and is automatically updated when cells are added or removed.
- {{domxref("HTMLTableRowElement.ch")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} containing one single character. This character is the one to align all the cell of a column on. It reflects the {{htmlattrxref("char", "tr")}} and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableRowElement.chOff")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableRowElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableRowElement.rowIndex")}} {{readonlyInline}}
  - : Returns a `long` value which gives the logical position of the row within the entire table. If the row is not part of a table, returns `-1`.
- {{domxref("HTMLTableRowElement.sectionRowIndex")}} {{readonlyInline}}
  - : Returns a `long` value which gives the logical position of the row within the table section it belongs to. If the row is not part of a section, returns `-1`.
- {{domxref("HTMLTableRowElement.vAlign")}} {{Deprecated_Inline}}
  - : Is a {{domxref("DOMString")}} representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the {{htmlattrxref("valign", "tr")}} attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

## Methods

_Inherits methods from its parent, {{domxref("HTMLElement")}}_.

- {{domxref("HTMLTableRowElement.deleteCell()")}}
  - : Removes the cell at the given position in the row. If the given position is greater (or equal as it starts at zero) than the amount of cells in the row, or is smaller than `0`, it raises a {{domxref("DOMException")}} with the `IndexSizeError` value.
- {{domxref("HTMLTableRowElement.insertCell()")}}
  - : Inserts a new cell just before the given position in the row. If the given position is not given or is `-1`, it appends the cell to the row. If the given position is greater (or equal as it starts at zero) than the amount of cells in the row, or is smaller than `-1`, it raises a {{domxref("DOMException")}} with the `IndexSizeError` value. Returns a reference to a [HTMLTableCellElement \[en-US\]](/zh-CN/docs/Web/API/HTMLTableCellElement).

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- The HTML element implementing this interface: {{HTMLElement("tr")}}.
