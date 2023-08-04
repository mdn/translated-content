---
title: <maction>
slug: Web/MathML/Element/maction
---

{{MathMLRef}}

MathML **`<maction>`** 元素提供了一种让表达式（或子表达式）具有某种特定行为的可能性。具体行为方式由 **`actiontype`** 属性的取值来确定。也可以使用 **`selection`** 属性来手动指定该行为作用在哪个子元素上。

## 属性

- actiontype

  - : 该属性描述元素上发生了哪种行为，有如下几种取值：

    - `statusline`: 当元素被点击或屏幕阅读器的指针指向该元素时触发，message 会在浏览器的状态栏中显示。语法如下：`<maction actiontype="statusline"> expression message </maction>`。
    - `toggle`: 当子表达式被点击时触发，子表达式会依次显示。因此每次点击时 selection 的值都会增加。语法如下：`<maction actiontype="toggle" selection="positive-integer" > expression1 expression2 expressionN </maction>`。
    - `tooltip`: 当指针指向表达式时触发，会在表达式附近显示一个提示框。语法如下：`<maction actiontype="tooltip"> expression message </maction>`。

- class, id, style
  - : 供[样式表](/zh-CN/docs/CSS)使用。
- href
  - : 用来设置标签点击后跳转的链接。
- mathbackground
  - : 用来设置标签的背景色，可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- mathcolor
  - : 用来设置文字和分数的线的颜色，同样可以使用 **`#rgb`**、**`#rrggbb`** 或者[HTML 颜色名](/zh-CN/docs/Web/CSS/color_value)。
- selection
  - : 用来设置该行为作用在哪个子元素上，默认为**`1`**，代表第一个子元素。

## 例子

下面的例子演示了如何使用“toggle”这个**`actiontype`**：

```html
<math>
  <maction actiontype="toggle">
    <mfrac>
      <mn>6</mn>
      <mn>8</mn>
    </mfrac>

    <mfrac>
      <mrow>
        <mn>3</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mrow>
      <mrow>
        <mn>4</mn>
        <mo>&sdot;</mo>
        <mn>2</mn>
      </mrow>
    </mfrac>

    <mfrac>
      <mn>3</mn>
      <mn>4</mn>
    </mfrac>
  </maction>
</math>
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
