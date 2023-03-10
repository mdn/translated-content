---
title: <mroot>
slug: Web/MathML/Element/mroot
---

{{MathMLRef}}

MathML 的 **`<mroot>`** 元素用来表示一个有明确根指数的根式。它接受两个参数，语法如下：**`<mroot> base index </mroot>`**。

## 属性

- class, id, style
  - : 供[样式表](/zh-CN/docs/CSS)使用。
- href
  - : 用来设置标签点击后跳转的链接。
- mathbackground
  - : 用来设置标签的背景色，可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- mathcolor
  - : 用来设置文字（包括根底数、根指数和根号本身）的颜色，同样可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。

## 例子

下述代码表示：![x](/files/3200/mroot.png)

您的浏览器的渲染结果：<math><mroot><mi>x</mi> <mn>3</mn></mroot></math>

```html
<math>

 <mroot>
    <mi>x</mi>
    <mn>3</mn>
 </mroot>

</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ MathMLElement("msqrt") }} (Square root without an index)
