---
title: HTMLTableCellElement
slug: Web/API/HTMLTableCellElement
translation_of: Web/API/HTMLTableCellElement
---

{{ APIRef("HTML DOM") }}

Интерфейс **`HTMLTableCellElement`** содержит специальные свойства и методы (beyond the regular {{domxref("HTMLElement")}} interface it also has available to it by inheritance) for manipulating the layout and presentation of table cells, either header or data cells, in an HTML document.

## Properties

_Inherits properties from its parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLTableCellElement.colSpan")}}
  - : Is an `unsigned` `long` that represents the number of columns this cell must span. It reflects the {{htmlattrxref("colspan", "td")}} attribute.
- {{domxref("HTMLTableCellElement.rowSpan")}}
  - : Is an `unsigned` `long` that represents the number of rows this cell must span. It reflects the {{htmlattrxref("rowspan", "td")}} attribute.
- {{domxref("HTMLTableCellElement.headers")}} {{readonlyInline}}
  - : Is a {{domxref("DOMSettableTokenList")}} describing a list of `id` of {{HTMLElement("th")}} elements that represents headers associated with the cell. It reflects the {{htmlattrxref("headers", "td")}} attribute.
- {{domxref("HTMLTableCellElement.cellIndex")}} {{readonlyInline}}
  - : Is a `long` representing the cell position in the cells collection of the {{HTMLElement("tr")}} it belongs to. If the cell doesn't belong to a `<tr>`, it returns `-1`.
- {{domxref("HTMLTableCellElement.align")}}
  - : Is a {{domxref("DOMString")}} containing an enumerated value reflecting the {{htmlattrxref("align", "td")}} attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{domxref("HTMLTableCellElement.bgColor")}}
  - : Is a {{domxref("DOMString")}} containing the background color of the cells. It reflects the obsolete {{htmlattrxref("bgColor", "td")}} attribute.
- {{domxref("HTMLTableCellElement.axis")}}
  - : Is a {{domxref("DOMString")}} containing a name grouping cells in virtual. It reflects the obsolete {{htmlattrxref("axis", "td")}} attribute.
- {{domxref("HTMLTableCellElement.height")}}
  - : Is a {{domxref("DOMString")}} containing a length of pixel of the hinted height of the cell. It reflects the obsolete {{htmlattrxref("height", "td")}} attribute.
- {{domxref("HTMLTableCellElement.width")}}
  - : Is a {{domxref("DOMString")}} containing a length of pixel of the hinted width of the cell. It reflects the obsolete {{htmlattrxref("width", "td")}} attribute.
- {{domxref("HTMLTableCellElement.ch")}}
  - : Is a {{domxref("DOMString")}} containing one single chararcter. This character is the one to align all the cell of a column on. It reflects the {{htmlattrxref("char", "td")}} and default to the decimal points associated with the language, e.g. `'.'` for English, or `','` for French. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.chOff")}}
  - : Is a {{domxref("DOMString")}} containing a integer indicating how many characters must be left at the right (for left-to-right scripts; or at the left for right-to-left scripts) of the character defined by `HTMLTableCellElement.ch`. This property was optional and was not very well supported.
- {{domxref("HTMLTableCellElement.noWrap")}}
  - : Is a {{domxref("Boolean")}} value reflecting the {{htmlattrxref("nowrap", "td")}} attribute and indicating if cell content can be broken in several lines.
- {{domxref("HTMLTableCellElement.vAlign")}}
  - : Is a {{domxref("DOMString")}} representing an enumerated value indicating how the content of the cell must be vertically aligned. It reflects the {{htmlattrxref("valign", "td")}} attribute and can have one of the following values: `"top"`, `"middle"`, `"bottom"`, or `"baseline"`.

## Methods

_No specific method; inherits methods from its parent, {{domxref("HTMLElement")}}_.

## Specifications

| Specification                                                                                                                | Status                           | Comment                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}} | {{Spec2('HTML WHATWG')}} | No change from {{SpecName("HTML5 W3C")}}.                                                                                                                                                                                                                                                                                                                 |
| {{SpecName('HTML5 W3C', "tabular-data.html#htmltablecellelement", "HTMLTableCellElement")}}     | {{Spec2('HTML5 W3C')}}     | The following properties have been obsoleted: `align`, `axis`, `bgColor`, `height`, `width`, `ch`, `chOff`, `noWrap`, and `vAlign`. The `headers` property is now read-only and contains a {{domxref("DOMSettableTokenList")}} rather than a mere {{domxref("DOMString")}}. The `colspan` and `rowspan` properties are now `unsigned long`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-82915075', 'HTMLTableCellElement')}}                         | {{Spec2('DOM2 HTML')}}     | The `cellIndex` property is now read-only.                                                                                                                                                                                                                                                                                                                       |
| {{SpecName('DOM1', 'level-one-html.html#ID-82915075', 'HTMLTableCellElement')}}                     | {{Spec2('DOM1')}}         | Initial definition.                                                                                                                                                                                                                                                                                                                                              |

## Browser compatibility

{{Compat}}

## See also

- The HTML elements implementing this interface: {{HTMLElement("th")}} and {{HTMLElement("td")}} by inheritance via {{domxref("HTMLTableHeaderCellElement")}} and {{domxref("HTMLTableDataCellElement")}}.
