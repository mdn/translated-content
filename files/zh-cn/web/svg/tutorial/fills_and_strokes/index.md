---
title: 填充和边框
slug: Web/SVG/Tutorial/Fills_and_Strokes
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}

可以使用几种方法来着色（包括指定对象的属性）使用内联 CSS 样式、内嵌 CSS 样式，或者使用外部 CSS 样式文件。大多数的 web 网站的 SVG 使用的是内联样式 CSS，对于这些方法都有优缺点。

## Fill 和 Stroke 属性

### 上色

现在你难免面露难色，但是大多数基本的涂色可以通过在元素上设置两个属性来搞定：`fill`属性和`stroke`属性。`fill`属性设置对象内部的颜色，`stroke`属性设置绘制对象的线条的颜色。你可以使用在 HTML 中的 CSS 颜色命名方案定义它们的颜色，比如说颜色名（像*red*这种）、rgb 值（像 rgb(255,0,0) 这种）、十六进制值、rgba 值，等等。

```xml
 <rect x="10" y="10" width="100" height="100" stroke="blue" fill="purple"
       fill-opacity="0.5" stroke-opacity="0.8"/>
```

此外，在 SVG 中你可以分别定义填充色和边框色的不透明度，属性`fill-opacity`控制填充色的不透明度，属性`stroke-opacity`控制描边的不透明度。

> **备注：** FireFox 3+ 支持 rgba 值，并且能够提供同样的效果，但是为了在其他浏览器中保持兼容，最好将它和填充/描边的不透明度分开使用。如果同时指定了 rgba 值和填充/描边不透明度，它们将都被调用。

### 描边

除了颜色属性，还有其他一些属性用来控制绘制描边的方式。

![](svg_stroke_linecap_example.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="160" height="140" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <line x1="40" x2="120" y1="20" y2="20" stroke="black" stroke-width="20" stroke-linecap="butt"/>
  <line x1="40" x2="120" y1="60" y2="60" stroke="black" stroke-width="20" stroke-linecap="square"/>
  <line x1="40" x2="120" y1="100" y2="100" stroke="black" stroke-width="20" stroke-linecap="round"/>
</svg>
```

`stroke-width`属性定义了描边的宽度。注意，描边是以路径为中心线绘制的，在上面的例子里，路径是粉红色的，描边是黑色的。如你所见，路径的每一侧都有均匀分布的描边。

第二个影响描边的属性是`stroke-linecap`属性，如上所示。它控制边框终点的形状。

`stroke-linecap`属性的值有三种可能值：

- `butt`用直边结束线段，它是常规做法，线段边界 90 度垂直于描边的方向、贯穿它的终点。
- `square`的效果差不多，但是会稍微超出`实际路径`的范围，超出的大小由`stroke-width`控制。
- `round`表示边框的终点是圆角，圆角的半径也是由`stroke-width`控制的。

还有一个`stroke-linejoin`属性，用来控制两条描边线段之间，用什么方式连接。

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

每条折线都是由两个线段连接起来的，连接处的样式由`stroke-linejoin`属性控制，它有三个可用的值，`miter`是默认值，表示用方形画笔在连接处形成尖角，`round`表示用圆角连接，实现平滑效果。最后还有一个值`bevel`，连接处会形成一个斜接。

最后，你可以通过指定`stroke-dasharray`属性，将虚线类型应用在描边上。

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

`stroke-dasharray`属性的参数，是一组用逗号分割的数字组成的数列。注意，和`path`不一样，这里的数字**必须**用逗号分割（空格会被忽略）。每一组数字，第一个用来表示填色区域的长度，第二个用来表示非填色区域的长度。所以在上面的例子里，第二个路径会先做 5 个像素单位的填色，紧接着是 5 个空白单位，然后又是 5 个单位的填色。如果你想要更复杂的虚线模式，你可以定义更多的数字。第一个例子指定了 3 个数字，这种情况下，数字会循环两次，形成一个偶数的虚线模式（奇数个循环两次变偶数个）。所以该路径首先渲染 5 个填色单位，10 个空白单位，5 个填色单位，然后回头以这 3 个数字做一次循环，但是这次是创建 5 个空白单位，10 个填色单位，5 个空白单位。通过这两次循环得到偶数模式，并将这个偶数模式不断重复。

另外还有一些关于填充和边框的属性，包括`fill-rule`，用于定义如何给图形重叠的区域上色；`stroke-miterlimit`，定义什么情况下绘制或不绘制边框连接的`miter`效果；还有`stroke-dashoffset`，定义虚线开始的位置。

## 使用 CSS

除了定义对象的属性外，你也可以通过 CSS 来样式化`填充`和`描边`。语法和在 HTML 里使用 CSS 一样，只不过你要把`background-color`、`border`改成`fill`和`stroke`。注意，不是所有的属性都能用 CSS 来设置。上色和填充的部分一般是可以用 CSS 来设置的，比如`fill`，`stroke`，`stroke-dasharray`等，但是不包括下面会提到的渐变和图案等功能。另外，`width`、`height`，以及路径的命令等等，都不能用 CSS 设置。判断它们能不能用 CSS 设置还是比较容易的。

> **备注：** [SVG 规范](http://www.w3.org/TR/SVG/propidx.html)将属性区分成 properties 和其他 attributes，前者是可以用 CSS 设置的，后者不能。

CSS 可以利用 style 属性插入到元素的行间：

```xml
 <rect x="10" height="180" y="10" width="180" style="stroke: black; fill: red;"/>
```

或者，它可以被移到你所包含的一个特殊的样式部分。不过，我们不会像 HTML 那样把这样的部分塞进 `<head>` 部分，而是把它包含在一个叫做 {{SVGElement("defs")}} 的区域。

{{SVGElement("defs")}} 表示定义，这里面可以定义一些不会在 SVG 图形中出现、但是可以被其他元素使用的元素。

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>
    <style><![CDATA[
       #MyRect {
         stroke: black;
         fill: red;
       }
    ]]></style>
  </defs>
  <rect x="10" height="180" y="10" width="180" id="MyRect"/>
</svg>
```

如上把样式放到一块你可以更轻松地调整一大组元素的样式，同样你也可以使用**hover**这样的伪类来创建翻转之类的效果：

```css
#MyRect:hover {
  stroke: black;
  fill: blue;
}
```

你最好读一下 CSS 教程以便掌握它，一些可以在 HTML 里使用的 CSS，在 svg 里可能无法正常工作，比如`before`和`after`伪类。所以这里需要一点经验。

你也可以定义一个外部的样式表，但是要符合[normal XML-stylesheet syntax](http://www.w3.org/TR/xml-stylesheet/)的 CSS 规则：

```xml
<?xml version="1.0" standalone="no"?>
<?xml-stylesheet type="text/css" href="style.css"?>

<svg width="200" height="150" xmlns="http://www.w3.org/2000/svg" version="1.1">
  <rect height="10" width="10" id="MyRect"/>
</svg>
```

`style.css` 看起来就像这样：

```css
#MyRect {
  fill: red;
  stroke: black;
}
```

{{ PreviousNext("Web/SVG/Tutorial/Paths", "Web/SVG/Tutorial/Gradients") }}
