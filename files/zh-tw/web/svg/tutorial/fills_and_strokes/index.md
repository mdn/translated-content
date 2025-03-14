---
title: 填充与边框
slug: Web/SVG/Tutorial/Fills_and_Strokes
---

{{SVGRef}}

{{ PreviousNext("SVG/Tutorial/Paths", "SVG/Tutorial/Gradients") }}

现在你掌握的知识已经可以绘制任何图形，下一个目标是给它们上色。在 SVG 绘图中，可以使用若干方法上色，比如给图形对象增加指定的属性，使用行间 CSS，使用 CSS 嵌入段落，或者使用外部引用的 CSS 文件。你会发现大部分 web 上的 SVG 使用的是行间 CSS，但每种方法都有自身的优点和缺点，在不同情况下，应该酌情选择合适的方法。

## fill（填充）和 stroke（边框）属性

### 上色

大多数基本的颜色可以使用`fill`和`stroke`两个属性来设置。`fill`设置的是对象的填充色，`stroke`设置的是对象的边框颜色，你可以使用在 HTML 中设置 CSS 颜色的方式定义它们的颜色，比如颜色名（_red_），*rgb*值，*hex*值，*rgba*值。

```xml
 <rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"

       fill-opacity="0.5" stroke-opacity="0.8"/>
```

此外，在 SVG 中你可以分别定义填充色和边框色的透明度，它们分别由 `fill-opacity` 和 `stroke-opacity` 两个属性控制。

> [!NOTE]
> FireFox 3+支持 rgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和边框/填充的透明度分开使用。如果同时定义了 rgba 值和透明度，它们将被一起调用。

### 边框

除了颜色属性，还有其他一些属性用来控制绘制边框的方式。

![](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>

<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">

  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>

  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>

  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>

</svg>
```

我要特别提醒一点，边框是围绕路径绘制的，在上面的例子里，路径是粉色的，边框是黑色的。`stroke-width`属性定义了边框的粗细，如你所见，路径的每一侧都有均匀分布的边框。

第二个要介绍的是`stroke-linecap`属性，它控制边框终点的形状。`stroke-linecap`属性的值有三种，`butt`表示用直边结束边框，`square`的效果差不多，但是会稍微超出`path`的范围，超出的大小是`stroke-width`控制的。`round`表示边框的终点是圆角，圆角的半径也是`stroke-width`控制的。

还有一个`stroke-linejoin`属性，用来控制两条边框线段之间，用什么方式连接。

![](svg_stroke_linejoin_example.png)

```xml
<?xml version="1.0" standalone="no"?>

<svg width="160" height="280" xmlns="http://www.w3.org/2000/svg" version="1.1">

  <polyline points="40 60 80 20 120 60" stroke="black" stroke-width="20"

      stroke-linecap="butt" fill="none" stroke-linejoin="miter"/>



  <polyline points="40 140 80 100 120 140" stroke="black" stroke-width="20"

      stroke-linecap="round" fill="none" stroke-linejoin="round"/>



  <polyline points="40 220 80 180 120 220" stroke="black" stroke-width="20"

      stroke-linecap="square" fill="none" stroke-linejoin="bevel"/>

</svg>
```

折线是由两个线段连接起来的，连接处的样式由`stroke-linejoin`属性控制，它有三个可用的值，`miter`是默认值，表示用方形画笔在连接处形成直角，`round`表示用圆角连接，实现平滑效果。最后还有一个值`bevel`，连接处会形成一个斜线。

最后，你可以使用`stroke-dasharray`属性，将边框定义成虚线。

![](svg_stroke_dasharray_example.png)

```xml
<?xml version="1.0" standalone="no"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">

  <path d="M 10 75 Q 50 10 100 75 T 190 75" stroke="black"

    stroke-linecap="round" stroke-dasharray="5,10,5" fill="none"/>

  <path d="M 10 75 L 190 75" stroke="red"

    stroke-linecap="round" stroke-width="1" stroke-dasharray="5,5" fill="none"/>

</svg>
```

`stroke-dasharray`属性的参数，是一组用逗号分割的数字组成的序列。需要注意的是，这里的数字必须用逗号分割，虽然也可以插入空格，但是数字之间必须用逗号分开。每一组数字，第一个用来表示实线，第二个用来表示空白。所以在上面的例子里，第二个路径会先画 5px 实线，紧接着是 5px 空白，然后又是 5px 实线，从而形成虚线。如果你想要更复杂的虚线模式，你可以定义更多的数字。上面例子里的第一个，就定义了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式。所以该路径首先是 5px 实线，然后是 10px 空白，然后是 5px 实线，接下来循环这组数字，形成 5px 空白、10px 实线、5px 空白。然后这种模式会继续循环。

另外还有一些关于填充和边框的属性，包括`fill-rule`，用于定义如何给图形重叠的区域上色；`stroke-miterlimit`，定义什么情况下绘制或不绘制边框连接的`miter`效果；还有`stroke-dashoffset`，定义虚线开始的位置。

## 使用 CSS

除了定义对象的属性外，你也可以通过 CSS 来定义`fill`和`stroke`。语法和在 html 里使用 CSS 一样，只不过你要把`background-color`、`border`改成`fill`和`stroke`。注意，不是所有的属性都能用 CSS 来设置。上色和填充的部分一般是可以用 CSS 来设置的，比如`fill`，`stroke`，`stroke-dasharray`等，但是不包括下面会提到的渐变和模式等功能。另外，宽、高，以及路径的 d 命令，都不能用 css 设置。判断它们能不能用 CSS 设置还是比较容易的。

> **備註：** [SVG 规范](https://www.w3.org/TR/SVG/propidx.html)将属性区分成*properties*和*其他 attributes*，前者是可以用 CSS 设置的，后者不能。

CSS 可以通过 style 属性插入到元素的行间:

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

或者通过\<style>设置一段样式段落。在 html 里这样的段落一般放在里，在 svg 则放在 [`<defs>`](/zh-TW/docs/Web/SVG/Element/defs) 标签里。`<defs>` 表示定义，这里可以定义一些不会在 SVG 图形中出现的元素，但是它们可以被其他元素使用。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style type="text/css"><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

通过使用 style 段落你可以更轻易地调整一大组元素的样式，同样你也可以通过 **hover** 这样的伪类来创建翻转之类的效果:

```css
#MyRect {
  stroke: black;
  fill: red;
}
```

你最好读一下 CSS 教程以便掌握它，一些可以在 html 里使用的 css，在 svg 里可能无法正常工作，比如 `before` 和 `after` 伪类。所以这里需要一点经验。

你也可以定义一个外部的样式表，但是要符合 [normal XML-stylesheet syntax](https://www.w3.org/TR/xml-stylesheet/) 的 CSS 规则:

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>
<svg width="200" height="150" xmlns="http\://www\.w3.org/2000/svg" version="1.1">
<rect height="10" width="10" id="MyRect"/>
</svg>
```

style.css 看起来就像这样：

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("SVG/Tutorial/Paths", "SVG/Tutorial/Gradients") }}
