---
title: CSS 的简写属性
slug: Web/CSS/Shorthand_properties
---

{{CSSRef}}

**简写属性**是可以让你同时设置好几个 CSS 属性值的 CSS 属性。使用简写属性，Web 开发人员可以编写更简洁、更具可读性的样式表，节省时间和精力。

CSS 规范定义简写属性的目的在于将那些关于同一主题的常见属性的定义集中在一起。比如 CSS 的 {{cssxref("background")}} 属性就是一个简写属性，它可以定义 {{cssxref("background-color")}}、{{cssxref("background-image")}}、{{cssxref("background-repeat")}} 和 {{cssxref("background-position")}} 的值。类似地，最常见的字体相关的属性可以使用 {{cssxref("font")}} 的简写，盒子（box）各方向的外边距（margin）可以使用 {{cssxref("margin")}} 这个简写。

## 棘手的边界情况

虽然它们使用起来非常方便，但在使用时，仍需牢记一些边界情况：

### 省略属性

没有指定的值会被设置为它的初始值。这听起来似乎本来就很合理的样子，但这确实意味着，它将会覆盖之前设置的值。因此：

```css
p {
  background-color: red;
  background: url(images/bg.gif) no-repeat left top;
}
```

以上样式不会将 background 的 color 值设置为 `red`，而是 {{cssxref("background-color")}} 的默认值 `transparent`。

关键词 inherit 只可以应用于单独属性（individual properties），如果应用于一个简写属性（shorthand property），则必须整体应用，而能对简写属性值的每一个部分单独应用。由于单独属性的漏掉的值会被它们的初始值（initial value）替代，因此不可能允许单个属性通过省略继承的。这意味着让一个属性的值使用继承值的唯一方法就是使用值是 `inherit` 的普通属性（longhand property）。

### 属性的顺序

简写属性不试图强制它们替代属性的值的特定顺序。这适用于当这些属性使用不同类型的值时，因为这个时候顺序并不重要。但当几个属性可以设置相同值的时候，就没那么简单了。

两种非常重要的情况如下：

- 与盒子（box）边界（edge）相关的属性，比如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或者 {{cssxref("padding")}}
- 与盒子的角（corner）相关的属性，比如 {{cssxref("border-radius")}}

#### 盒子边界

在处理和盒子的边界相关的属性时，比如 {{cssxref("border-style")}}、{{cssxref("margin")}} 或者 {{cssxref("padding")}}，始终使用一致的 1 个到 4 个值的语法表示：

- **单值语法**：`border-width: 1em`，这一个值表示所有的边框宽度：![Box edges with one-value syntax](border1.png)

- **双值语法**：`border-width: 1em 2em`，第一个值表示垂直方向的值，即 top 和 bottom；第二个值表示水平方向的值，即 left 和 right：![Box edges with two-value syntax](border2.png)

- **三值语法**：`border-width: 1em 2em 3em`，第一个值表示 top；第二个值表示水平方向的，即 left 和 right；第三个值表示 bottom：![Box edges with three-value syntax](border3.png)

- **四值语法**：`border-width: 1em 2em 3em 4em`，这四个值分别表示 top、right、bottom、left，即总是从 top 开始的顺时针顺序：![Box edges with four-value syntax](border4.png) Top-Right-Bottom-Left 的首字母与英文单词 _trouble_ 的辅音字母顺序一致：TRBL。你可以按照时钟指针旋转的顺序来记忆：`1em` 在 12 点钟方向，而 `2em`、`3em` 及 `4em` 分别在 2、3、4 点钟方向。

#### 盒子角

在处理和盒子的角相关的属性时，比如 {{cssxref("border-radius")}}，也始终使用一致的 1 个到 4 个值的语法表示：

- **单值语法**：`border-radius: 1em`，这一个值表示所有的边框宽度：![Box corners with one-value syntax](corner1.png)

- **双值语法：** `border-radius: 1em 2em`，第一个值表示 top-left 和 bottom-right 方向的角；第二个值表示 top-right 和 bottom-left 方向的角：![Box corners with two-value syntax](corner2.png)

- **三值语法**：`border-radius: 1em 2em 3em`，第一个值表示 top-left 方向的角，第二个值表示 top-right 和 bottom-left 方向的角，第三个值表示 bottom-right 方向的角：![Box corners with three-value syntax](corner3.png)

- **四值语法**：`border-radius: 1em 2em 3em 4em`，这四个值分别表示 top left、top right、bottom right、bottom left，即总是从 top left 开始的顺时针顺序：![Box corners with four-value syntax](corner4.png)

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

请查阅 {{cssxref("background")}} 以了解更详细的信息，包含 CSS3 属性。

## Font 属性

下面的声明：

```css
font-style: italic;
font-weight: bold;
font-size: 0.8em;
line-height: 1.2;
font-family: Arial, sans-serif;
```

可以简写成下面的：

```css
font:
  italic bold 0.8em/1.2 Arial,
  sans-serif;
```

这个简写声明实际上等价于以上普通属性再加上 `font-variant: normal`、`font-size-adjust: none` 和 `font-stretch: normal`。

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

和下面的声明是一样的（注意，值是从 top 顺时针开始的：top、right、bottom、接着是 left，与“trouble”的辅音字母顺序相同）。

```css
margin: 10px 5px 10px 5px;
```

Margin 对于多个值有以下的简写规则：

- 当只有**一个**值声明时，该值会用于所有**四个**值。
- 当只有**两个**值声明时，第一个值用于**上边距**和**下边距**，第二个值用于**左边距**和**右边距**。
- 当有**三个**值声明时，第一个值用于**上边距**，第二个值用于**左边距**和**右边距**，第三个值用于**下边距。**
- 当有**四个**值声明时，其会按顺序用于**上**、**右**、**下**、**左**边距（按顺时针方向）。

## 通用简写属性

CSS 提供了一个通用的简写属性 {{cssxref("all")}}，它可以应用于文档里所有的属性。它的目的是改变属性的继承模型。

查看[层叠与继承](/zh-CN/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)或 [CSS 层叠基础](/zh-CN/docs/Web/CSS/Cascade)以了解更多关于继承的信息。

## 参见

- CSS 重要概念：

  - [CSS 语法](/zh-CN/docs/Web/CSS/Syntax)
  - [@ 规则](/zh-CN/docs/Web/CSS/At-rule)
  - [注释](/zh-CN/docs/Web/CSS/Comments)
  - [优先级](/zh-CN/docs/Web/CSS/Specificity)
  - [继承](/zh-CN/docs/Web/CSS/inheritance)
  - [盒模型](/zh-CN/docs/Web/CSS/CSS_box_model/Introduction_to_the_CSS_box_model)
  - [布局模式](/zh-CN/docs/Web/CSS/Layout_mode)
  - [视觉格式化模型](/zh-CN/docs/Web/CSS/Visual_formatting_model)
  - [外边距合并](/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)
  - 值

    - [初始值](/zh-CN/docs/Web/CSS/initial_value)
    - [计算值](/zh-CN/docs/Web/CSS/computed_value)
    - [应用值](/zh-CN/docs/Web/CSS/used_value)
    - [实际值](/zh-CN/docs/Web/CSS/actual_value)

  - [属性值定义语法](/zh-CN/docs/Web/CSS/Value_definition_syntax)
  - [可替换元素](/zh-CN/docs/Web/CSS/Replaced_element)

- 简写属性：{{cssxref("all")}}、{{cssxref("animation")}}、{{cssxref("background")}}、{{cssxref("border")}}、{{cssxref("border-block-end")}}、{{cssxref("border-block-start")}}、{{cssxref("border-bottom")}}、{{cssxref("border-color")}}、{{cssxref("border-image")}}、{{cssxref("border-inline-end")}}、{{cssxref("border-inline-start")}}、{{cssxref("border-left")}}、{{cssxref("border-radius")}}、{{cssxref("border-right")}}、{{cssxref("border-style")}}、{{cssxref("border-top")}}、{{cssxref("border-width")}}、{{cssxref("column-rule")}}、{{cssxref("columns")}}、{{cssxref("flex")}}、{{cssxref("flex-flow")}}、{{cssxref("font")}}、{{cssxref("gap")}}、{{cssxref("grid")}}、{{cssxref("grid-area")}}、{{cssxref("grid-column")}}、{{cssxref("grid-row")}}、{{cssxref("grid-template")}}、{{cssxref("list-style")}}、{{cssxref("margin")}}、{{cssxref("mask")}}、{{cssxref("offset")}}、{{cssxref("outline")}}、{{cssxref("overflow")}}、{{cssxref("padding")}}、{{cssxref("place-content")}}、{{cssxref("place-items")}}、{{cssxref("place-self")}}、{{cssxref("scroll-margin")}}、{{cssxref("scroll-padding")}}、{{cssxref("text-decoration")}}、{{cssxref("text-emphasis")}}、{{cssxref("transition")}}
