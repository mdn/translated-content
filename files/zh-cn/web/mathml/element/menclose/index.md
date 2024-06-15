---
title: <menclose>
slug: Web/MathML/Element/menclose
l10n:
  sourceCommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

{{MathMLRef}}{{Non-standard_header}}

**`<menclose>`** [MathML](/zh-CN/docs/Web/MathML) 元素根据 `notation` 属性指定的符号，在其内部渲染内容。

## 属性

这个元素的属性包括[全局 MathML 属性](/zh-CN/docs/Web/MathML/Global_attributes)。

- `notation` {{Non-standard_Inline}}

  - : 以空格分隔的符号列表，用于应用于子元素。这些符号将分别绘制，好像其他符号不存在一样，因此可能会重叠。可能的值有：

    | 值                   | 渲染示例                                                    | 在你的浏览器上的渲染效果                                                                                                                       | 描述                                                                                                       |
    | -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)  | ![longdiv](default.png)                                     | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | 长除法符号                                                                                                 |
    | `actuarial`          | ![actuarial](actuarial.png)                                 | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [精算符号](https://zh.wikipedia.org/wiki/精算符號)                                                         |
    | `box`                | ![box](box.png)                                             | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | 方框                                                                                                       |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                               | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | 圆角方框                                                                                                   |
    | `circle`             | ![circle](circle.png)                                       | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | 圆圈                                                                                                       |
    | `left`               | ![left](left.png)                                           | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | 内容左边的线条                                                                                             |
    | `right`              | ![right](right.png)                                         | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | 内容右边的线条                                                                                             |
    | `top`                | ![top](top.png)                                             | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | 内容上方的线条                                                                                             |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | 内容下方的线条                                                                                             |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                   | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | 从左下到右上贯穿内容的斜线                                                                                 |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)               | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | 从左上到右下贯穿内容的斜线                                                                                 |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                       | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | 贯穿内容的竖线                                                                                             |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                   | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | 贯穿内容的横线                                                                                             |
    | `madruwb`            | ![madruwb](madruwb.png)                                     | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [阿拉伯阶乘符号](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Arrow pointing up and to the right.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | 斜箭头                                                                                                     |
    | `phasorangle`        | ![Screenshot of the phasorangle notation](phasorangle.png)  | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | 相量角度符号                                                                                               |

## 示例

```html
<math display="block">
  <menclose notation="circle box">
    <mi>x</mi>
    <mo>+</mo>
    <mi>y</mi>
  </menclose>
</math>
```

{{ EmbedLiveSample('menclose 示例', 700, 200, "", "") }}

## 规范

`<menclose>` 元素没有在任何面向浏览器的规范中定义，但你可以在 [MathML 4](https://w3c.github.io/mathml/#presm_menclose) 中找到描述。

## 浏览器兼容性

{{Compat}}
