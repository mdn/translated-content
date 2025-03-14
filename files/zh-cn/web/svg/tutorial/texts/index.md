---
title: 文本
slug: Web/SVG/Tutorial/Texts
---

{{SVGRef}}

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}

在 SVG 中有两种截然不同的文本模式。一种是写在图像中的文本，另一种是 SVG 字体。关于后者我们将在教程的后面进行讲解，现在我们主要集中前者：写在图像中的文本。

## 基础

我们已经在之前[入门示例](/zh-CN/docs/Web/SVG/Tutorial/Getting_Started)中看到了，在一个 SVG 文档中，`text` 元素内部可以放任何的文字。

```xml
<text x="10" y="10">Hello World!</text>
```

属性 x 和属性 y 性决定了文本在视口中显示的位置。属性`text-anchor`，可以有这些值：start、middle、end 或 inherit，允许决定从这一点开始的文本流的方向。

和形状元素类似，属性`fill`可以给文本填充颜色，属性`stroke`可以给文本描边，形状元素和文本元素都可以引用渐变或图案，相比较 CSS2.1 只能绘制简单的彩色文字，SVG 显得更具有优势。

## 设置字体属性

文本的一个至关重要的部分是它显示的字体。SVG 提供了一些属性，类似于它们的 CSS 同行，用来激活文本选区。下列每个属性可以被设置为一个 SVG 属性或者成为一个 CSS 声明：`font-family`、`font-style`、`font-weight`、`font-variant`、`font-stretch`、`font-size`、`font-size-adjust`、`kerning`、`letter-spacing`、`word-spacing`和`text-decoration`。

## 其他文本相关的元素

### tspan

该元素用来标记大块文本的子部分，它必须是一个`text`元素或别的`tspan`元素的子元素。一个典型的用法是把句子中的一个词变成粗体红色。

```xml
<text>
  <tspan font-weight="bold" fill="red">This is bold and red</tspan>
</text>
```

`tspan`元素有以下的自定义属性：

**x**
为容器设置一个新绝对`x`坐标。它覆盖了默认的当前的文本位置。这个属性可以包含一个数列，它们将一个一个地应用到`tspan`元素内的每一个字符上。

**dx**
从当前位置，用一个水平偏移开始绘制文本。这里，你可以提供一个值数列，可以应用到连续的字体，因此每次累积一个偏移。

此外还有属性**y**和属性**dy**作垂直转换。

**rotate**
把所有的字符旋转一个角度。如果是一个数列，则使每个字符旋转分别旋转到那个值，剩下的字符根据最后一个值旋转。

**textLength**
这是一个很模糊的属性，给出字符串的计算长度。它意味着如果它自己的度量文字和长度不满足这个提供的值，则允许渲染引擎精细调整字型的位置。

#### tref

`tref`元素允许引用已经定义的文本，高效地把它复制到当前位置。你可以使用`xlink:href`属性，把它指向一个元素，取得其文本内容。你可以独立于源样式化它、修改它的外观。

```xml
<text id="example">This is an example text.</text>

<text>
    <tref xlink:href="#example" />
</text>
```

#### textPath

该元素利用它的`xlink:href`属性取得一个任意路径，把字符对齐到路径，于是字体会环绕路径、顺着路径走：

```xml
<path id="my_path" d="M 20,20 C 40,40 80,40 100,20" fill="transparent" />
<text>
  <textPath xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#my_path">
    This text follows a curve.
  </textPath>
</text>
```

{{PreviousNext("Web/SVG/Tutorial/Patterns", "Web/SVG/Tutorial/Basic_Transformations")}}
