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

    | 值                   | 渲染示例                                                    | 在你的浏览器上的渲染效果                                                                                                                       | 描述                                                                                                                |
    | -------------------- | ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------- |
    | `longdiv` (default)  | ![longdiv](default.png)                                     | <math><menclose notation="longdiv"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | long division symbol                                                                                                |
    | `actuarial`          | ![actuarial](actuarial.png)                                 | <math><menclose notation="actuarial"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>          | [actuarial symbol](https://en.wikipedia.org/wiki/Actuarial_notation)                                                |
    | `box`                | ![box](box.png)                                             | <math><menclose notation="box"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | box                                                                                                                 |
    | `roundedbox`         | ![roundedbox](roundedbox.png)                               | <math><menclose notation="roundedbox"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>         | rounded box                                                                                                         |
    | `circle`             | ![circle](circle.png)                                       | <math><menclose notation="circle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | circle                                                                                                              |
    | `left`               | ![left](left.png)                                           | <math><menclose notation="left"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>               | line to the left of the contents                                                                                    |
    | `right`              | ![right](right.png)                                         | <math><menclose notation="right"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>              | line to the right of the contents                                                                                   |
    | `top`                | ![top](top.png)                                             | <math><menclose notation="top"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>                | line above of the contents                                                                                          |
    | `bottom`             | ![bottom](bottom.png)                                       | <math><menclose notation="bottom"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>             | line below of the contents                                                                                          |
    | `updiagonalstrike`   | ![updiagonalstrike](updiagonalstrike.png)                   | <math><menclose notation="updiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | strikeout line through contents from lower left to upper right                                                      |
    | `downdiagonalstrike` | ![downdiagonalstrike](downdiagonalstrike.png)               | <math><menclose notation="downdiagonalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math> | strikeout line through contents from upper left to lower right                                                      |
    | `verticalstrike`     | ![verticalstrike](verticalstrike.png)                       | <math><menclose notation="verticalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>     | vertical strikeout line through contents                                                                            |
    | `horizontalstrike`   | ![horizontalstrike](horizontalstrike.png)                   | <math><menclose notation="horizontalstrike"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>   | horizontal strikeout line through contents                                                                          |
    | `madruwb`            | ![madruwb](madruwb.png)                                     | <math><menclose notation="madruwb"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>            | [Arabic factorial symbol](https://en.wikipedia.org/wiki/Modern_Arabic_mathematical_notation#Arithmetic_and_algebra) |
    | `updiagonalarrow`    | ![Arrow pointing up and to the right.](updiagonalarrow.png) | <math><menclose notation="updiagonalarrow"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>    | diagonal arrow                                                                                                      |
    | `phasorangle`        | ![Screenshot of the phasorangle notation](phasorangle.png)  | <math><menclose notation="phasorangle"><msup><mi>a</mi><mn>2</mn></msup> <mo>+</mo> <msup><mi>b</mi><mn>2</mn></msup></menclose></math>        | phasor angle                                                                                                        |

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
