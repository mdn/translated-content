---
title: HTMLTableElement
slug: Web/API/HTMLTableElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

**`HTMLTableElement`** 接口提供了特殊属性和方法（除继承自常规 {{DOMxRef("HTMLElement")}} 对象接口的功能外），用于操作 HTML 文档中表格的布局与呈现效果。

{{InheritanceDiagram}}

## 属性

_继承自父接口 {{DOMxRef("HTMLElement")}}。_

- {{DOMxRef("HTMLTableElement.caption")}}
  - : 表示该元素首个子元素 {{HTMLElement("caption")}} 的 {{DOMxRef("HTMLTableCaptionElement")}} 对象，若未找到则返回 `null`。当设置此属性时，若对象不代表 `<caption>` 元素，则抛出名称为 `HierarchyRequestError` 的 {{DOMxRef("DOMException")}} 异常。若提供正确的对象，则将其插入树中作为该元素的首个子元素，同时移除树中该元素的首个 `<caption>` 子元素（若存在）。
- {{DOMxRef("HTMLTableElement.tHead")}}
  - : 表示该元素首个子元素 {{HTMLElement("thead")}} 的 {{DOMxRef("HTMLTableSectionElement")}} 对象，若未找到则返回 `null`。当设置此属性时，若对象不代表 `<thead>` 元素，则抛出名称为 `HierarchyRequestError` 的 {{DOMxRef("DOMException")}} 异常。若提供正确的对象，则将其插入树结构中：若存在既非 {{HTMLElement("caption")}} 也非 {{HTMLElement("colgroup")}} 的首个元素，则置于该元素之前；若不存在此类元素，则作为最后一个子元素插入。同时，若存在该元素的首个子元素为 `<thead>`，则将其从树结构中移除。
- {{DOMxRef("HTMLTableElement.tFoot")}}
  - : 表示该元素首个子元素 {{HTMLElement("tfoot")}} 的 {{DOMxRef("HTMLTableSectionElement")}} 对象，若未找到则返回 `null`。当设置此属性时，若对象不代表 `<tfoot>` 元素，则抛出名称为 `HierarchyRequestError` 的 {{DOMxRef("DOMException")}} 异常。若提供正确的对象，则将其插入树结构中，位置紧邻首个既非 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 且非 {{HTMLElement("thead")}} 的元素之前插入树中；若不存在此类元素，则作为最后一个子元素插入。同时，若存在该元素的首个子元素为 `<tfoot>`，则将其从树结构中移除。
- {{DOMxRef("HTMLTableElement.rows")}}{{ReadOnlyInline}}
  - : 返回一个包含元素所有行（即该元素的所有 {{HTMLElement("tr")}} 子元素，或其某个 {{HTMLElement("thead")}}、{{HTMLElement("tbody")}} 或 {{HTMLElement("tfoot")}} 元素的子元素）的实时 {{DOMxRef("HTMLCollection")}}。`<thead>` 的行成员按树结构顺序优先呈现，`<tbody>` 的行成员按树结构顺序最后呈现。该 `HTMLCollection` 为实时集合，当 `HTMLTableElement` 发生变更时会自动更新。
- {{DOMxRef("HTMLTableElement.tBodies")}}{{ReadOnlyInline}}
  - : 返回一个实时的 {{DOMxRef("HTMLCollection")}}，它包含元素中所有的 {{HTMLElement("tbody")}}。该 `HTMLCollection` 为实时集合，当 `HTMLTableElement` 发生变更时会自动更新。

### 过时的属性

> [!WARNING]
> 以下属性已经过时，应当避免使用它们。

- {{DOMxRef("HTMLTableElement.align")}} {{deprecated_inline}}
  - : 包含枚举值的字符串，反映了 [`align`](/zh-CN/docs/Web/HTML/Reference/Elements/table#align) 属性。它表示元素内容相对于周围环境的对齐方式。可能的值有 `"left"`、`"right"` 和 `"center"`。
- {{DOMxRef("HTMLTableElement.bgColor")}} {{deprecated_inline}}
  - : 包含单元格背景颜色的字符串。它反映已过时的 [`bgColor`](/zh-CN/docs/Web/HTML/Reference/Elements/table#bgcolor) 属性。
- {{DOMxRef("HTMLTableElement.border")}} {{deprecated_inline}}
  - : 包含表格边框像素宽度的字符串。它反映已过时的 [`border`](/zh-CN/docs/Web/HTML/Reference/Elements/table#border) 属性。
- {{DOMxRef("HTMLTableElement.cellPadding")}} {{deprecated_inline}}
  - : 包含表格边框像素宽度的字符串。它反映已过时的 [`cellpadding`](/zh-CN/docs/Web/HTML/Reference/Elements/table#cellpadding) 属性。
- {{DOMxRef("HTMLTableElement.cellSpacing")}} {{deprecated_inline}}
  - : 包含单元格内容与单元格边框之间水平和垂直间距像素宽度的字符串。它反映已过时的 [`cellspacing`](/zh-CN/docs/Web/HTML/Reference/Elements/table#cellspacing) 属性。
- {{DOMxRef("HTMLTableElement.frame")}} {{deprecated_inline}}
  - : 包含表示表格外部边框类型的字符串。它反映已过时的 [`frame`](/zh-CN/docs/Web/HTML/Reference/Elements/table#frame) 属性，可取值为以下之一：`"void"`、`"above"`、`"below"`、`"hsides"`、`"vsides"`、`"lhs"`、`"rhs"`、`"box"` 或 `"border"`。
- {{DOMxRef("HTMLTableElement.rules")}} {{deprecated_inline}}
  - : 包含表格内部边框类型的字符串。它反映已过时的 [`rules`](/zh-CN/docs/Web/HTML/Reference/Elements/table#rules) 属性，可取值为以下之一：`"none"`、`"groups"`、`"rows"`、`"cols"` 或 `"all"`。
- {{DOMxRef("HTMLTableElement.summary")}} {{deprecated_inline}}
  - : 包含表格用途或结构描述的字符串。它反映已过时的 [`summary`](/zh-CN/docs/Web/HTML/Reference/Elements/table#summary) 属性。
- {{DOMxRef("HTMLTableElement.width")}} {{deprecated_inline}}
  - : 包含整个表格期望宽度（以像素或百分比为单位）的字符串。它反映已过时的 [`width`](/zh-CN/docs/Web/HTML/Reference/Elements/table#width) 属性。

## 方法

_继承自父接口 {{DOMxRef("HTMLElement")}}_。

- {{DOMxRef("HTMLTableElement.createTHead()")}}
  - : 返回表示子元素中的第一个 {{HTMLElement("thead")}} 的 {{DOMxRef("HTMLTableSectionElement")}}。如果找不到该元素，则创建一个新的并且立即插入到 DOM 树中既不是 {{HTMLElement("caption")}} 也不是 {{HTMLElement("colgroup")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话）。
- {{DOMxRef("HTMLTableElement.deleteTHead()")}}
  - : 移除子元素中的第一个 {{HTMLElement("thead")}}。
- {{DOMxRef("HTMLTableElement.createTFoot()")}}
  - : 返回表示子元素中的第一个 {{HTMLElement("tfoot")}} 的 {{DOMxRef("HTMLTableSectionElement")}}。如果找不到该元素，则创建一个新的并且立即插入到 DOM 树中既不是 {{HTMLElement("caption")}}、{{HTMLElement("colgroup")}} 也不是 {{HTMLElement("thead")}} 的第一个元素之前，或者直接被作为最后一个元素插入（如果找不到上述元素的话）。
- {{DOMxRef("HTMLTableElement.deleteTFoot()")}}
  - : 移除子元素中的第一个 {{HTMLElement("tfoot")}}。
- {{DOMxRef("HTMLTableElement.createTBody()")}}
  - : 返回表示子元素中的第一个 {{HTMLElement("tbody")}} 的 {{DOMxRef("HTMLTableSectionElement")}}。该元素将插入到树结构中，位于最后一个 {{HTMLElement("tbody")}} 元素之后；若不存在此类元素，则作为最后一个子元素插入。
- {{DOMxRef("HTMLTableElement.createCaption()")}}
  - : 返回表示子元素中的第一个 {{HTMLElement("caption")}} 的 {{DOMxRef("HTMLElement")}}。如果找不到该元素，则创建一个新的并且插入到 DOM 树中作为 {{HTMLElement("table")}} 的第一个子元素。
- {{DOMxRef("HTMLTableElement.deleteCaption()")}}
  - : 移除子元素中的第一个 {{HTMLElement("caption")}}。
- {{DOMxRef("HTMLTableElement.insertRow()")}}
  - : 返回表示表格中的一个新行的 {{DOMxRef("HTMLTableRowElement")}}。它会被立即插入到行集合中给定 `index` 位置所表示的 {{HTMLElement("tr")}} 元素之前。如果有必要一个 {{HTMLElement("tbody")}} 会被创建。如果 `index` 值为 `-1`，这个新行会被追加到集合中。如果 `index` 值小于 `-1` 或者大于集合中的行总数，则会抛出值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}} 异常。
- {{DOMxRef("HTMLTableElement.deleteRow()")}}
  - : 移除与参数中给定 `index` 值相关的行。如果 `index` 值为 `-1`，最后一行会被移除；如果 `index` 值小于 `-1` 或者大于集合中的行总数，则会抛出值为 `IndexSizeError` 的 {{DOMxRef("DOMException")}} 异常。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 实现了这个接口的 HTML 元素：{{HTMLElement("table")}}。
