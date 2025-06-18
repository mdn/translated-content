---
title: aria-colindextext
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-colindextext
l10n:
  sourceCommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

`aria-colindextext` 属性定义了数字 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 的可读文本替代。

## 描述

当你有一个非常大的表格，或者当你有意地只想显示表格的一部分时，可能不是所有的列都会出现在 DOM 中。当出现这种情况时，我们使用具有整数值的 [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount) 来定义表格（或网格）在所有列都存在时会有多少列，并在每一列上添加 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 属性，以提供有关该较大表格中列索引的信息。

在下面的 HTML 片段中，我们的表格有 8 列，但我们只显示了 4 列。“城市”列是我们较大表格的第五列，由 `aria-colindex="5"` 定义。

```html
<table aria-colcount="8">
  <thead>
    <tr>
      <th aria-colindex="1" scope="col">名字</th>
      <th aria-colindex="2" scope="col">姓氏</th>
      <th aria-colindex="5" scope="col">城市</th>
      <th aria-colindex="7" scope="col">邮编</th>
    </tr>
  </thead>
  …
</table>
```

这个表格并不是很复杂。如果这是一个拥有 100 多列的电子表格，或者是一个没有列标题的网格，比如象棋棋盘，那么 `aria-colindex` 的提供或计算出的值可能不具有意义，或者可能不反映出显示的索引。在这种情况下，可以包含 `aria-colindextext`。该值是一个字符串，是数字 `aria-colindex` 的可读文本替代。

```html
<table aria-colcount="128">
  <thead>
    <tr>
      <th
        aria-colindex="1"
        aria-colindextext="纽约证券交易所股票代码"
        scope="col">
        NYSE
      </th>
      <th aria-colindex="110" aria-colindextext="2021 年初值" scope="col">
        01/21
      </th>
      <th aria-colindex="122" aria-colindextext="2022 年初值" scope="col">
        01/22
      </th>
      <th aria-colindex="124" scope="col">推荐</th>
    </tr>
  </thead>
  …
</table>
```

在上面的示例中，表格有 128 列，但只显示了 4 列。`aria-colindextext` 在三列中使用，提供了可读的文本替代。通过包含 `aria-colindextext="2021 年初值"`，辅助技术可以宣告“2021 年初值”，而不是“110 列”。

只有在提供或计算的 `aria-colindex` 的值不具有意义或不反映出显示的索引时，才使用 `aria-colindextext`。每当包含 `aria-colindextext` 时，也要保留 `aria-colindex`，因为一些辅助技术依赖于数字列索引来跟踪用户的位置，并提供替代的表格导航。

> [!NOTE]
> 虽然当所有存在的列都是连续的时，`aria-colindex` 可以添加到行中，因为可以推断出顺序值，但 `aria-colindextext` 不是 [`row`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/row_role) 的受支持属性。

请参阅相关的 [`aria-rowindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)。

## 值

- `<string>`
  - : 数字 [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex) 的可读文本替代

## 关联接口

- {{domxref("Element.ariaColIndexText")}}
  - : {{domxref("Element")}} 接口的 [`ariaColIndexText`](/zh-CN/docs/Web/API/Element/ariaColIndexText) 属性，反映了 HTML 属性 `aria-colindextext` 的值。
- {{domxref("ElementInternals.ariaColIndexText")}}
  - : {{domxref("ElementInternals")}} 接口的 [`ariaColIndexText`](/zh-CN/docs/Web/API/ElementInternals/ariaColIndexText) 属性反映了 HTML 属性 `aria-colindextext` 的值。

## 关联角色

用于角色：

- [`cell`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)

继承到角色：

- [`columnheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)

## 规范

{{Specifications}}

## 参见

- [`Element.ariaColIndexText`](/zh-CN/docs/Web/API/Element/ariaColIndexText)
- [`aria-colindex`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colindex)
- [`aria-rowindextext`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-rowindextext)
- [`aria-colcount`](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-colcount)
- [`cell` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/cell_role)
- [`columnheader` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
- [`rowheader` 角色](/zh-CN/docs/Web/Accessibility/ARIA/Reference/Roles/columnheader_role)
