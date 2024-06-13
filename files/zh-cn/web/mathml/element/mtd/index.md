---
title: <mtd>
slug: Web/MathML/Element/mtd
l10n:
  sourceCommit: a66ead0df0c9c0fd615ce926e459d7c4e279f8e1
---

{{MathMLRef}}

**`<mtd>`** [MathML](/zh-CN/docs/Web/MathML) 元素表示表格或矩阵中的单元格。它只能出现在 {{ MathMLElement("mtr") }} 元素中。该元素类似于 [HTML](/zh-CN/docs/Web/HTML) 中的 {{ HTMLElement("td") }} 元素。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)，以及以下属性：

- `columnspan`
  - : 一个非负整数值，表示单元格横跨的列数。
- `rowspan`
  - : 一个非负整数值，表示单元格横跨的行数。

某些浏览器还可能支持以下属性：

- `columnalign` {{Non-standard_Inline}}
  - : 指定此单元格的水平对齐方式，并覆盖由 {{ MathMLElement("mtable") }} 或 {{ MathMLElement("mtr") }} 指定的值。
    可能的值包括：`left`、`center` 和 `right`。
- `rowalign` {{Non-standard_Inline}}
  - : 指定此单元格的垂直对齐方式，并覆盖由 {{ MathMLElement("mtable") }} 或 {{ MathMLElement("mtr") }} 指定的值。
    可能的值包括：`axis`、`baseline`、`bottom`、`center` 和 `top`。

## 示例

### 使用 mtable、mrow、mtr 和 mtd 创建矩阵

```html
<math display="block">
  <mfrac>
    <mi>A</mi>
    <mn>2</mn>
  </mfrac>
  <mo>=</mo>
  <mrow>
    <mo>(</mo>
    <mtable>
      <mtr>
        <mtd><mn>1</mn></mtd>
        <mtd><mn>2</mn></mtd>
        <mtd><mn>3</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>4</mn></mtd>
        <mtd><mn>5</mn></mtd>
        <mtd><mn>6</mn></mtd>
      </mtr>
      <mtr>
        <mtd><mn>7</mn></mtd>
        <mtd><mn>8</mn></mtd>
        <mtd><mn>9</mn></mtd>
      </mtr>
    </mtable>
    <mo>)</mo>
  </mrow>
</math>
```

{{EmbedLiveSample('Alignment with row number')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mtable") }}
- {{ MathMLElement("mtr") }}
