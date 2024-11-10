---
title: HTMLTableSectionElement：vAlign 属性
slug: Web/API/HTMLTableSectionElement/vAlign
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

{{domxref("HTMLTableSectionElement")}} 接口的 **`vAlign`** 属性是一个指示如何在 {{htmlelement("thead")}}、{{htmlelement("tbody")}} 或 {{htmlelement("tfoot")}} 表格部分垂直对齐文本的字符串，单个行和单元格可以覆盖它。

> [!NOTE]
> 此属性已弃用。请使用 CSS {{cssxref("vertical-align")}} 属性来垂直对齐分段单元格中的文本。

## 值

可能的值有：`"top"`、`"middle"`、`"bottom"` 或 `"baseline"`。

- `top`
  - : 将文本与单元格顶部对齐。使用 `vertical-align: top` 代替。
- `center`
  - : 将文本与单元格垂直居中对齐，`middle` 的同义词。使用 `vertical-align: middle` 代替。
- `middle`
  - : 将文本与单元格垂直居中对齐。使用 `vertical-align: middle` 代替。
- `bottom`
  - : 将文本与单元格底部对齐。使用 `vertical-align:  bottom` 代替。
- `baseline`
  - : 与 `top` 相似，但使文本的基线贴近顶部，这样字符的任何部分都不会超出单元格。

## 示例

使用 CSS {{cssxref("vertical-align")}} 替代，它的优先级更高，如[垂直对齐表格单元格](/zh-CN/docs/Web/CSS/vertical-align#表格单元格中的垂直对齐)示例所示。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("vertical-align")}}
- [样式化表格](/zh-CN/docs/Learn/CSS/Building_blocks/Styling_tables)
