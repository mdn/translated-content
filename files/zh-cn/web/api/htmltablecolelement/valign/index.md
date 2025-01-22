---
title: HTMLTableColElement：vAlign 属性
slug: Web/API/HTMLTableColElement/vAlign
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

{{domxref("HTMLTableColElement")}} 接口的 **`vAlign`** 属性是一个指示如何在表格 {{htmlelement("col")}} 列元素中垂直对齐文本的字符串。

> [!NOTE]
> 此属性已弃用，应使用 CSS 在表格列中垂直对齐文本。使用 CSS {{cssxref("vertical-align")}} 属性，其用于垂直对齐列单元格中文本，且优先级更高。
>
> 由于 {{htmlelement("td")}} 不是 {{htmlelement("col")}} 的子元素，因此不能直接在 {{HTMLElement("col")}} 上设置它，需要使用 `td:nth-child(n)` 或类似值（`n` 是列号）来选择列的单元格。

## 值

可能的值有：`"top"`、`"middle"`、`"bottom"` 或 `"baseline"`。

- `top`
  - : 将文本与单元格顶部对齐。使用 `vertical-align: top` 代替。
- `center`
  - : 将文本与单元格垂直居中对齐，`middle` 的同义词。使用 `vertical-align: middle` 代替。
- `middle`
  - : 将文本与单元格垂直居中对齐。使用 `vertical-align: middle` 代替。
- `bottom`
  - : 将文本与单元格底部对齐。使用 `vertical-align: bottom` 代替。
- `baseline`
  - : 与 `top` 相似，但使文本的基线贴近顶部，这样字符的任何部分都不会超出单元格。

## 示例

使用 CSS `vertical-align`。由于 {{htmlelement("td")}} 不是 {{htmlelement("col")}} 的子元素，因此不能直接在 {{HTMLElement("col")}} 上设置它，需要使用 `td:nth-child(n)` 或类似值（`n` 是列号）来选择列的单元格。

{{cssxref(":nth-child()")}} 页面有一个[示例](/zh-CN/docs/Web/CSS/:nth-child#为表格列添加样式)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("vertical-align")}}
- {{cssxref(":nth-child()")}}
- [样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)
