---
title: HTMLTableCaptionElement：align 属性
slug: Web/API/HTMLTableCaptionElement/align
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

{{domxref("HTMLTableCaptionElement")}} 接口的 **`align`** 属性是一个指示如何在 {{htmlelement("caption")}} 表格元素中水平对齐文本的字符串。

> [!NOTE]
> 此属性已弃用，应使用 CSS 在单元格中水平对齐文本。使用 CSS {{cssxref("text-align")}} 属性，其用于水平对齐单元格中文本，且优先级更高。

## 值

可能的值：

- `left`
  - : 将文本向左对齐。使用 `text-align: left` 代替。
- `right`
  - : 将文本向右对齐。使用 `text-align: right` 代替。
- `center`
  - : 将文本居中对齐。使用 `text-align: center` 代替。

## 示例

使用 CSS `text-align` 替代，{{cssxref("text-align")}} 页面有一个[示例](/zh-CN/docs/Web/CSS/text-align#表格对齐)。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{cssxref("text-align")}}
- {{cssxref("caption-side")}}
- [样式化表格](/zh-CN/docs/Learn_web_development/Core/Styling_basics/Tables)
