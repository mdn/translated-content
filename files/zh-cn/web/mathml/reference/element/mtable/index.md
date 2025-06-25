---
title: <mtable>
slug: Web/MathML/Reference/Element/mtable
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

**`<mtable>`** [MathML](/zh-CN/docs/Web/MathML) 元素允许你创建表格或矩阵。其子元素是 {{MathMLElement("mtr")}} 元素（表示行），每个子元素都有 {{MathMLElement("mtd")}} 元素作为其子元素（表示单元格）。这些元素类似于 [HTML](/zh-CN/docs/Web/HTML) 中的 {{HTMLElement("table")}}、{{HTMLElement("tr")}} 和 {{HTMLElement("td")}}元素。

## 属性

该元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Reference/Global_attributes)。某些浏览器还可能支持以下属性：

- `align` {{Non-standard_Inline}}
  - : 指定表格相对于其环境的**垂直**对齐方式。
    可能的值包括：
    - `axis`（默认）：表格的垂直中心与环境的轴线（通常是负号）对齐。
    - `baseline`：表格的垂直中心与环境的基线对齐。
    - `bottom`：表格的底部与环境的基线对齐。
    - `center`：参见基线。
    - `top`：表格的顶部与环境的基线对齐。

    此外，`align` 属性的值可以*行号*结尾（例如 `align="center 3"`）。这样可以对齐指定的行而不是整个表格。负整数值从表格底部开始计算行数。

- `columnalign` {{Non-standard_Inline}}
  - : 指定单元格的水平对齐方式。允许多个值以空格分隔，并应用于相应的列（例如 `columnalign="left right center"`）。可能的值包括：`left`、`center`（默认）和 `right`。
- `columnlines` {{Non-standard_Inline}}
  - : 指定列边框。允许多个值以空格分隔，并应用于相应的列（例如 `columnlines="none none solid"`）。可能的值包括：`none`（默认）、`solid` 和 `dashed`。
- `columnspacing` {{Non-standard_Inline}}
  - : 指定表格列之间的间距。允许多个值以空格分隔，并应用于相应的列（例如 `columnspacing="1em 2em"`）。可能的值是 {{cssxref("length-percentage")}}。
- `frame` {{Non-standard_Inline}}
  - : 指定整个表格的边框。可能的值包括：`none`（默认）、`solid` 和 `dashed`。
- `framespacing` {{Non-standard_Inline}}
  - : 指定表格和框架之间添加的额外空间。第一个值指定右侧和左侧的间距；第二个值指定上方和下方的间距。可能的值是 {{cssxref("length-percentage")}}。
- `rowalign` {{Non-standard_Inline}}
  - : 指定单元格的垂直对齐方式。允许多个值以空格分隔，并应用于相应的行（例如 `rowalign="top bottom axis"`）。可能的值包括：`axis`、`baseline`（默认）、`bottom`、`center` 和 `top`。
- `rowlines` {{Non-standard_Inline}}
  - : 指定行边框。允许多个值以空格分隔，并应用于相应的行（例如 `rowlines="none none solid"`）。可能的值包括：`none`（默认）、`solid` 和 `dashed`。
- `rowspacing` {{Non-standard_Inline}}
  - : 指定表格行之间的间距。允许多个值以空格分隔，并应用于相应的行（例如 `rowspacing="1em 2em"`）。可能的值是 {{cssxref("length-percentage")}}。
- `width` {{Non-standard_Inline}}
  - : 一个用于指定整个表格的宽度的 {{cssxref("length-percentage")}}。

> [!NOTE]
> 对于 `width` 属性，某些浏览器还可能接受[旧版 MathML 长度](/zh-CN/docs/Web/MathML/Reference/Values#旧版_mathml_长度)。

## 示例

### 与行号对齐

```html
<math display="block">
  <mi>X</mi>
  <mo>=</mo>
  <mtable frame="solid" rowlines="solid" align="axis 3">
    <mtr>
      <mtd><mi>A</mi></mtd>
      <mtd><mi>B</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>C</mi></mtd>
      <mtd><mi>D</mi></mtd>
    </mtr>
    <mtr>
      <mtd><mi>E</mi></mtd>
      <mtd><mi>F</mi></mtd>
    </mtr>
  </mtable>
</math>
```

{{EmbedLiveSample('与行号对齐')}}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{ MathMLElement("mtd") }}（表格单元）
- {{ MathMLElement("mtr") }}（表格行）
