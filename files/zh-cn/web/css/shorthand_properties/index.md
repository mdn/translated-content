---
title: CSS 的简写属性
slug: Web/CSS/Shorthand_properties
---
{{cssref}}

**简写属性**是可以让你同时设置好几个 CSS 属性值的 CSS 属性。使用简写属性，Web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。

CSS 规范定义简写属性的目的在于将那些关于同一主题的常见属性的定义集中在一起。比如 CSS 的 {{cssxref("background")}} 属性就是一个简写属性，它可以定义 {{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-repeat")}} 和 {{cssxref("background-position")}} 的值。类似地，最常见的字体相关的属性可以使用 {{cssxref("font")}} 的简写，盒子（box）各方向的外边距（margin）可以使用 {{cssxref("margin")}} 这个简写。

## 棘手的边界情况

虽然它们使用起来非常方便，但在使用时，仍需牢记一些边界情况：

1. 没有指定的值会被设置为它的初始值。这听起来似乎本来就很合理的样子，但这确实意味着，它将会覆盖之前设置的值。因此：

    ```css
    background-color: red;
    background: url(images/bg.gif) no-repeat top right;
    ```

    以上样式不会将 background 的 color 值设置为 `red，而是` {{cssxref("background-color")}} 的默认值 `transparent，因为第二条规则优先。`

2. 关键词 inherit 只可以应用于单独属性（individual properties），如果应用于一个简写属性（shorthand property），则必须整体应用，而能对简写属性值的每一个部分单独应用。由于单独属性的漏掉的值会被它们的初始值（initial value）替代，因此不可能允许单个属性通过省略继承的。这意味着让一个属性的值使用继承值的唯一方法就是使用值是 inherit 的普通属性（longhand property）。
3. 简写属性不试图强制它们替代属性的值的特定顺序。这适用于当这些属性使用不同类型的值时，因为这个时候顺序并不重要。但当几个属性可以设置相同值的时候，就没那么简单了。处理这些情况分以下几种类型：

    1. 处理和盒子（box）边界（edge）相关的属性时，比如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或者 {{cssxref("padding")}}， 始终使用一致的 1 个到 4 个值的语法表示这些边界：

        | ![border1.png](/files/3646/border1.png) | _1 个值的语法：_`border-width: 1em` — 这一个值表示所有的边框宽度                                                                                                                                        |
        | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | ![border2.png](/files/3647/border2.png) | _2 个值的语法：_`border-width: 1em 2em` — 第一个值表示垂直方向的，即 top 和 bottom；第二个值表示水平方向的，即 left 和 right                                                                            |
        | ![border3.png](/files/3648/border3.png) | _3 个值的语法：_`border-width: 1em 2em 3em` — 第一个值表示 top；第二个值表示水平方向的，即 left 和 right；第三个值表示 bottom                                                                           |
        | ![border4.png](/files/3649/border4.png) | _4 个值的语法：_`border-width: 1em 2em 3em 4em` — 这四个值分别表示 top、right、bottom、left，总是按此顺序，即从 top 开始的顺时针顺序（Top-Right-Bottom-Left 首字母与英文单词 trouble 的顺序一致：TRBL） |

    2. 同样，在处理和盒子的角相关的属性时，比如 {{cssxref("border-radius")}}，也始终使用一致的 1 个到 4 个值的语法表示：

        | ![corner1.png](/files/3650/corner1.png) | _1 个值的语法：_`border-radius: 1em` — 这一个值表示所有的表框角度的半径                                                                                                   |
        | --------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
        | ![corner2.png](/files/3651/corner2.png) | _2 个值的语法：_`border-radius: 1em 2em` — 第一个值表示 top-left 和 bottom-right 方向的角；第二个值表示 top-right 和 bottom-left 方向的角                                 |
        | ![corner3.png](/files/3652/corner3.png) | _3 个值的语法：_`border-radius: 1em 2em 3em` — 第一个值表示 top-left 方向的角，第二个值表示 top-right 和 bottom-left 方向的角，第三个值表示 bottom-right 方向的角         |
        | ![corner4.png](/files/3653/corner4.png) | _4 个值的语法：_`border-radius: 1em 2em 3em 4em` — 这四个值分别表示 top-left、top-right、bottom-right、bottom-left 方向的角。总是按此顺序，即从 top-left 开始的顺时针顺序 |

## Background 属性

background 有以下属性：

```css
background-color: #000;
background-image: url(images/bg.gif);
background-repeat: no-repeat;
background-position: top right;
```

可以简写成一行声明：

```css
background: #000 url(images/bg.gif) no-repeat top right;
```

简写的形式实际上等价于以上普通属性再加上 `background-attachment: scroll` 以及 CSS3 中的一些附加属性。

## Font 属性

下面的声明：

```css
font-style: italic;
font-weight: bold;
font-size: .8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

可以简写成下面的：

```css
font: italic bold .8em/1.2 Arial, sans-serif;
```

这个简写声明实际上等价于以上普通属性再加上 `font-variant: normal` 和 `font-size-adjust: none` (CSS2.0 / CSS3)，`font-stretch: normal` (CSS3)。

## Border 属性

对于 border 来说，宽度、颜色和类型是可以被简写到一个声明里的。比如：

```css
border-width: 1px;
border-style: solid;
border-color: #000;
```

可以简写成：

```css
border: 1px solid #000;
```

## Margin 和 Padding 属性

margin 和 padding 值的简写版本类似。下面的 CSS 声明：

```css
margin-top: 10px;
margin-right: 5px;
margin-bottom: 10px;
margin-left: 5px;
```

和下面的声明是一样的（注意，值是从 top 顺时针开始的：top、right、bottom、接着是 left）

```css
margin: 10px 5px 10px 5px;
```

Margin 对于多个值有以下的简写规则：

- 当只有**一个**值声明时，该值会用于所有**四个**值。
- 当只有**两个**值声明时，第一个值用于**上边距**和**下边距**，第二个值用于**左边距**和**右边距**。
- 当有三个值声明时，第一个值用于**上边距**，第二个值用于**左边距**和**右边距**，第三个值用于**下边距。**
- 当有四个值声明时，其会按顺序用于上、右、下、左边距（按顺时针）。

## 通用简写属性

CSS 提供了一个通用的简写属性 {{cssxref("all")}}，它可以应用于文档里所有的属性。它的目的是改变属性的继承模型：

{{page("/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance", "Controlling_inheritance")}}

查看 [Cascade and inheritance](/zh-CN/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance) or [Introducing the CSS Cascade](/zh-CN/docs/Web/CSS/Cascade) 了解更多关于继承的信息。

## 另请参阅

- [CSS Reference](/zh-CN/docs/CSS/CSS_Reference)
- Shorthand properties: {{cssxref("background")}}, {{cssxref("font")}}, {{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("border-top")}}, {{cssxref("border-right")}}, {{cssxref("border-bottom")}}, {{cssxref("border-left")}}, {{cssxref("border-width")}}, {{cssxref("border-color")}}, {{cssxref("border-style")}}, {{cssxref("transition")}}, {{cssxref("transform")}}, {{cssxref("padding")}}, {{cssxref("list-style")}}, {{cssxref("border-radius")}}.
