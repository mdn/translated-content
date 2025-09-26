---
title: <mtr>
slug: Web/MathML/Reference/Element/mtr
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`<mtr>`** [MathML](/zh-CN/docs/Web/MathML) 元素表示表格或矩阵中的一行。它只能出现在 {{ MathMLElement("mtable") }} 元素中，其子元素是表示单元格的 {{ MathMLElement("mtd") }} 元素。该元素类似于 HTML 中的 {{ HTMLElement("tr") }} 元素。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。一些浏览器还可能支持以下属性：

- `columnalign` {{Non-standard_Inline}}
  - : 覆盖由 {{ MathMLElement("mtable") }} 对此行单元格指定的水平对齐方式。允许使用以空格分隔的多个值，并应用于相应的列（例如 `columnalign="left center right"`）。可能的值为：`left`、`center` 和 `right`。
- `rowalign` {{Non-standard_Inline}}
  - : 覆盖由 {{ MathMLElement("mtable") }} 对此行单元格指定的垂直对齐方式。可能的值为：`axis`、`baseline`、`bottom`、`center` 和 `top`。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtd") }}
