---
title: <msub>
slug: Web/MathML/Element/msub
---

{{MathMLRef}}

MathML **`<msub>`** 元素用来为表达式加下标，语法如下：**`<msub> base subscript </msub>`**。

## 属性

- class, id, style
  - : 供[样式表](/zh-CN/docs/CSS)使用。
- href
  - : 用来设置标签点击后跳转的链接。
- mathbackground
  - : 用来设置标签的背景色，可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- mathcolor
  - : 用来设置标签文字的颜色，同样可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- subscriptshift
  - : 用来设置下标相对于表达式的基线的最小距离，它是一个[长度值](/zh-CN/docs/MathML/Attributes/Values#Lengths)。

## 例子

下述代码表示：![x1](/files/3202/msub.png)

您的浏览器的渲染结果： <math><msub><mi>X</mi> <mn>1</mn></msub></math>

```html
<math>

  <msub>
    <mi>X</mi>
    <mn>1</mn>
  </msub>

</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 关于 Gecko 的特殊说明

- 从 Gecko 26.0 {{geckoRelease("26")}}开始，不允许使用\<none />作为子元素。The rendering has been made more consistent with equivalent configurations of {{MathMLElement("msup")}} and {{MathMLElement("mmultiscripts")}} and a bug with an incorrect application of the `superscriptshift` attribute has been fixed (see {{bug("827713")}} for details).

## 相关链接

- {{ MathMLElement("msup") }} (Superscript)
- {{ MathMLElement("msubsup") }} (Subscript-superscript pair)
- {{ MathMLElement("mmultiscripts") }} (Prescripts and tensor indices)
