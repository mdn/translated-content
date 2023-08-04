---
title: <mrow>
slug: Web/MathML/Element/mrow
---

{{MathMLRef}}

MathML `<mrow>` 元素用于对连续多行表达式的不同子表达式进行分组，一条子表达式通常算作一行，至少包含一或多个[操作符](/zh-CN/docs/MathML/Element/mo)与其运算对象（比如 {{ MathMLElement("mi") }} 和 {{ MathMLElement("mn") }}）。此元素呈现为包含其内容的水平行。

在编写 MathML 表达式时，您应该使用 `<mrow>` 将表达式中的元素分组，就像它们在数学解释时的分成一行行一样。正确的分组有助于表达式的呈现，具体体现在以下几个方面：

- 如果有需要，它会改变间距来改善显示效果。
- 它允许采用更明智的断行和缩进算法。
- 通过自动化系统，如计算机代数系统和音频渲染器（automated systems such as computer algebra systems and audio renderers），它能简化表达式的解释（interpretation）过程。

## 属性

- class, id, style
  - : 用来供[样式表](/zh-CN/docs/Web/CSS)使用。
- dir
  - : 行内公式的书写方向。可能的值为 `ltr`（自左向右）或 `rtl`（自右向左）。
- href
  - : 用于设置一个指向指定的 URI 的超链接。
- mathbackground
  - : 背景色。支持 `#rgb`、`#rrggbb` 和 [HTML 颜色](/zh-CN/docs/CSS/color_value#Color_Keywords)。
- mathcolor
  - : 文本颜色。支持 `#rgb`、`#rrggbb` 和 [HTML 颜色](/zh-CN/docs/CSS/color_value#Color_Keywords)。

## 示例

```html
<math>
  <mrow>
    <mn> 1 </mn>
    <mo> + </mo>
    <mn> 1 </mn>
  </mrow>

  <mrow>
    <mo> ( </mo>
    <mrow>
      <mi> x </mi>
      <mo> , </mo>
      <mi> y </mi>
    </mrow>
    <mo> ) </mo>
  </mrow>
</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- HTML 分组元素：{{ HTMLElement("div") }}
