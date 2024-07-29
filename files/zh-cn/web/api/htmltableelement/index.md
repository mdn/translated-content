---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement`** 接口在常用的 {{DOMxRef("HTMLElement")}} 接口的基础上，提供了专门的属性和方法来处理 HTML 文档中表格的布局与展示。通过继承，它也可以访问父接口 {{DOMxRef("HTMLElement")}} 中的成员。

{{InheritanceDiagram(600, 120)}}

## 属性

_继承自父接口，{{DOMxRef("HTMLElement")}}。_

- {{DOMxRef("HTMLTableElement.caption")}}
  - : 这是一个 {{DOMxRef("HTMLTableCaptionElement")}} ，表示作为子元素中的第一个 {{HTMLElement("caption")}} ，如果找不到则为 `null`。当设置此属性时，如果给出的对象不是一个 `<caption>`，一个带有 `HierarchyRequestError` 名字的异常 {{DOMxRef("DOMException")}} 会被抛出。如果设置了正确的对象，它会被作为第一个子元素插入 DOM 树中，同时子元素中的第一个 `<caption>` 会被移除，如果存在的话。
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : 这是一个 {{DOMxRef("HTMLTableSectionElement")}}，表示子元素中的第一个 {{HTMLElement("thead")}}，如果找不到则为 `null` 。当设置此属性时，如果给出的对象不是一个 `<thead>`，一个带有 `HierarchyRequestError` 名字的异常 {{DOMxRef("DOMException")}} 会被抛出。如果设置了正确的对象，它会被立即插入到 DOM 树中既不是 {{HTMLElement("caption")}} 也不是 {{HTMLElement("colgroup")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话），同时子元素中的第一个 `<thead>` 会被移除，如果存在的话。
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : 这是一个 {{DOMxRef("HTMLTableSectionElement")}}，表示子元素中的第一个 {{HTMLElement("tfoot")}}，如果找不到则为 `null`。当设置此属性时，如果给出的对象不是一个 `<tfoot>`，一个带有 `HierarchyRequestError` 名字的异常 {{DOMxRef("DOMException")}} 会被抛出。如果设置了正确的对象，它会被立即插入到 DOM 树中既不是 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 也不是 {{HTMLElement("thead")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话），同时子元素中的第一个 `<tfoot>` 会被移除，如果存在的话。
- {{DOMxRef("HTMLTableElement.rows")}}{{ReadOnlyInline}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，它包含元素中的所有行，也就是子元素中的所有 {{HTMLElement("tr")}}，或者是 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 和 {{HTMLElement("tfoot")}} 三者子元素中的其中一个子元素。`<thead>` 中的行会按照 DOM 树的顺序出现在首位，`<tbody>` 中的行出现在末位，也会按照 DOM 树的顺序。`HTMLCollection` 对象是实时的，当 `HTMLTableElement` 发生变化时会自动更新。
- {{DOMxRef("HTMLTableElement.tBodies")}}{{ReadOnlyInline}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，它包含元素中所有的 {{HTMLElement("tbody")}}。`HTMLCollection` 对象是实时的，当 `HTMLTableElement` 发生变化时会自动更新。

### 过时的属性

> [!WARNING]
> 以下属性已经过时，应当避免使用它们。

- {{DOMxRef("HTMLTableElement.align")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing an enumerated value reflecting the [`align`](/zh-CN/docs/Web/HTML/Element/table#align) attribute. It indicates the alignment of the element's contents with respect to the surrounding context. The possible values are `"left"`, `"right"`, and `"center"`.
- {{DOMxRef("HTMLTableElement.bgColor")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the background color of the cells. It reflects the obsolete [`bgcolor`](/zh-CN/docs/Web/HTML/Element/table#bgcolor) attribute.
- {{DOMxRef("HTMLTableElement.border")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the border of the table. It reflects the obsolete [`border`](/zh-CN/docs/Web/HTML/Element/table#border) attribute.
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the horizontal and vertical sapce between cell content and cell borders. It reflects the obsolete [`cellpadding`](/zh-CN/docs/Web/HTML/Element/table#cellpadding) attribute.
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the width in pixels of the horizontal and vertical separation between cells. It reflects the obsolete [`cellspacing`](/zh-CN/docs/Web/HTML/Element/table#cellspacing) attribute.
- {{DOMxRef("HTMLTableElement.frame")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the type of the external borders of the table. It reflects the obsolete [`frame`](/zh-CN/docs/Web/HTML/Element/table#frame) attribute and can take one of the following values: `"void"`, `"above"`, `"below"`, `"hsides"`, `"vsides"`, `"lhs"`, `"rhs"`, `"box"`, or `"border"`.
- {{DOMxRef("HTMLTableElement.rules")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the type of the internal borders of the table. It reflects the obsolete [`rules`](/zh-CN/docs/Web/HTML/Element/table#rules) attribute and can take one of the following values: `"none"`, `"groups"`, `"rows"`, `"cols"`, or `"all"`.
- {{DOMxRef("HTMLTableElement.summary")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing a description of the purpose or the structure of the table. It reflects the obsolete [`summary`](/zh-CN/docs/Web/HTML/Element/table#summary) attribute.
- {{DOMxRef("HTMLTableElement.width")}} {{Deprecated_Inline}}
  - : Is a {{DOMxRef("DOMString")}} containing the length in pixels or in percentage of the desired width fo the entire table. It reflects the obsolete [`width`](/zh-CN/docs/Web/HTML/Element/table#width) attribute.

## 方法

_继承自父接口，{{DOMxRef("HTMLElement")}}_。

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : 返回一个 {{DOMxRef("HTMLElement")}}，表示子元素中的第一个 {{HTMLElement("thead")}}。如果找不到，则创建一个新的并且立即插入到 DOM 树中既不是 {{HTMLElement("caption")}} 也不是 {{HTMLElement("colgroup")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话）。
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : 移除子元素中的第一个 {{HTMLElement("thead")}}。
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : 返回一个 {{DOMxRef("HTMLElement")}}，表示子元素中的第一个 {{HTMLElement("tfoot")}}。如果找不到，则创建一个新的并且立即插入到 DOM 树中既不是 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 也不是 {{HTMLElement("thead")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话）。
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : 移除子元素中的第一个 {{HTMLElement("tfoot")}}。
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : 返回一个 {{DOMxRef("HTMLElement")}}，表示子元素中的第一个 {{HTMLElement("caption")}}。如果找不到，则创建一个新的并且插入到 DOM 树中作为 {{HTMLElement("table")}} 的第一个子元素。
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : 移除子元素中的第一个 {{HTMLElement("caption")}}。
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : 返回一个 {{DOMxRef("HTMLTableRowElement")}}，表示表格中的一个新行。它会被立即插入到行集合中给定 `index` 位置所表示的 {{HTMLElement("tr")}} 元素之前。如果有必要一个 {{HTMLElement("tbody")}} 会被创建。如果 `index` 值为 `-1`，这个新行会被追加到集合中。如果 `index` 值小于 `-1` 或者大于集合中的行总数，一个带有 `IndexSizeError` 值的异常 {{DOMxRef("DOMException")}} 会发生。
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : 移除与参数中给定 `index` 值相关的行。如果 `index` 值为 `-1`，最后一行会被移除；如果 `index` 值小于 `-1` 或者大于集合中的行总数，一个带有 `IndexSizeError` 值的异常 {{DOMxRef("DOMException")}} 会发生。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了这个接口的 HTML 元素：{{HTMLElement("table")}}。
