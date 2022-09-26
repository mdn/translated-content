---
title: <msqrt>
slug: Web/MathML/Element/msqrt
---

{{MathMLRef}}

MathML **`<msqrt>`** 元素用于表示一个平方根（不显示根指数）。它只接受一个参数，语法如下：**`<msqrt> base </msqrt>`**。

## 属性

- class, id, style
  - : 供[样式表](/zh-CN/docs/CSS)使用。
- href
  - : 用来设置标签点击后跳转的链接
- mathbackground
  - : 用来设置标签的背景色，可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- mathcolor
  - : 用来设置文字（包括根底数、根指数和根号本身）的颜色，同样可以使用 **`#rgb`**、**`#rrggbb`**或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。

## 例子

下述代码表示： ![root-x](/files/3201/msqrt.png)

您的浏览器的渲染结果： <math><msqrt><mi>x</mi></msqrt></math>

```html
<math>

  <msqrt>
    <mi>x</mi>
  </msqrt>

</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{ MathMLElement("mroot") }} (Radical with an index)
