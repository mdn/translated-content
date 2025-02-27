---
title: HTMLTableColElement：align 属性
slug: Web/API/HTMLTableColElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

{{domxref("HTMLTableColElement")}} 接口的 **`align`** 属性是一个指示如何在表格 {{htmlelement("col")}} 列元素中水平对齐文本的字符串。

> [!NOTE]
> 此属性已弃用，应使用 CSS 在单元格中水平对齐文本。使用 CSS {{cssxref("text-align")}} 属性，其用于水平对齐单元格中文本，且优先级更高。
>
> 由于 {{htmlelement("td")}} 不是 {{htmlelement("col")}} 的子元素，因此不能直接在 {{HTMLElement("col")}} 上设置它，需要使用 `td:nth-last-child(n)` 或类似值（`n` 是列号，从末尾开始计数）来选择列的单元格。

## 值

可能的值有：

- `left`
  - : 将文本向左对齐。使用直接应用于 {{HTMLElement("td")}} 或 {{HTMLElement("th")}} 的 `text-align: left` 代替。
- `right`
  - : 将文本向右对齐。使用直接应用于 `<td>` 或 `<th>` 的 `text-align: right` 代替。
- `center`
  - : 将文本居中对齐。使用 `text-align: center` 代替。

## 示例

在 {{htmlelement("td")}} 和 {{htmlelement("th")}} 元素上使用 CSS `text-align`。由于列的 {{htmlelement("td")}} 元素不是 {{htmlelement("col")}} 的子元素，在 HTML 中设置 `align` 属性或在 CSS 中对 {{HTMLElement("col")}} 元素设置 `text-align` 属性将不起作用。相反，使用 [`:is(td, tr):nth-child(n)`](/zh-CN/docs/Web/CSS/:nth-child) 选择列的单元格，其中 `n` 是列号，或类似值。

{{cssxref(":nth-child()")}} 页面有一个[示例](/zh-CN/docs/Web/CSS/:nth-child#为表格列添加样式)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-align")}}
- {{cssxref(":nth-child()")}}
- {{cssxref(":nth-last-child()")}}
- [样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)
