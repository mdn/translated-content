---
title: 基本形状
slug: Web/SVG/Tutorial/Basic_Shapes
---

{{SVGRef}}

{{ PreviousNext("SVG/Tutorial/Positions", "SVG/Tutorial/Paths") }}

下面将介绍一些 SVG 绘图常用的形状命令，通过它们名字，你可以很轻易的看出它们可以画出什么。这里也会给出一些定义位置和尺寸的属性，但不会介绍如何将元素定义得更准确更完善。在这里我们只介绍必须的基本功能，因为它们会被广泛应用在 SVG 文件里。

## 基本形状

你需要在文档里创建一个元素，来新增相应的形状。不同的元素用来定义不同的形状，并采用不同的属性定义尺寸和位置。其中一些是可以被其他形状命令替代的，所以显得有点多余，但是它们的存在是有意义的，它们可以让你用起来更方便，并且保证你的 SVG 文档尽可能简洁易懂。所有的基本形状都在右边的图例里展示出来了，生成它们的代码如下：

![](shapes.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" fill="transparent" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> **備註：** `stroke`, `stroke-width` 和 `fill` 等属性会在后面的章节里介绍。

### 矩形 rect

[rect](/zh-TW/SVG/Element/rect)元素用来创建矩形，它有 6 个基本属性，用于设定它的位置以及样式。上面的图例里，最开始的两个图形都是矩形，右边的矩形设定了 rx 和 ry 属性，从而增加了圆角，如果不给它们赋值，其默认值为 0，也就没有圆角。

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- x
  - : 矩形左上角的 x 轴坐标
- y
  - : 矩形左上角的 y 轴坐标
- width
  - : 矩形的宽
- height
  - : 矩形的高
- rx
  - : 圆角的 x 轴半径
- ry
  - : 圆角的 y 轴半径

### 圆形 circle

[circle](/zh-TW/SVG/Element/circle) 元素用来创建圆形，这里给出了 3 个属性：

```xml
<circle cx="25" cy="75" r="20"/>
```

- r
  - : 半径
- cx
  - : 圆心的 x 轴坐标
- cy
  - : 圆心的 y 轴坐标

### 椭圆 ellipse

[椭圆 ellipse](/zh-TW/SVG/Element/ellipse)其实就是一种特殊的圆形，这里可以改变 x 和 y 轴的半径来区分它们（数学上称为长轴半径和短轴半径）。

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- rx
  - : x 轴半径
- ry
  - : y 轴半径
- cx
  - : 圆心的 x 轴坐标
- cy
  - : 圆心的 y 轴坐标

### 线 line

[line](/zh-TW/SVG/Element/line)画的是线段，通过在属性中定义起点和终点的坐标，构成两点之间的线段。

```xml
<line x1="10" x2="50" y1="110" y2="150"/>
```

- x1
  - : 第一个点的 x 轴坐标
- y1
  - : 第一个点的 y 轴坐标
- x2
  - : 第二个点的 x 轴坐标
- y2
  - : 第二个点的 y 轴坐标

### 折线 polyline

[折线 polyline](/zh-TW/SVG/Element/polyline)是一组连接起来的线段，折线上所有的点都放在一个属性里:

```xml
<polyline points="60 110, 65 120, 70 115, 75 130, 80 125, 85 140, 90 135, 95 150, 100 145"/>
```

- points 属性
  - : points 属性是点的列表，每个数字用空格、逗号、换行或回车分隔开。每个点包括两个数字，一个 x 轴坐标一个 y 轴坐标，所以，(0,0)、(1,1)、(2,2)这三个点的列表应该写成「0 0, 1 1, 2 2」。

### 多边形 polygon

[多边形 polygon](/zh-TW/SVG/Element/polygon)和折线很像，它们都是定义一组点，然后将点用线段连接起来，从而形成一个图形。不同的是，多边形的起点和终点会连起来，形成一个闭合的形状。需要注意的是，矩形也是一种多边形，如果需要的话，你也可以用多边形来创建一个矩形。

```xml
<polygon points="50 160, 55 180, 70 180, 60 190, 65 205, 50 195, 35 205, 40 190, 30 180, 45 180"/>
```

- points 属性
  - : 多边形的 points 属性也是点的列表，每个数字用空格、逗号、换行或回车分隔开。每个点包括两个数字，一个 x 轴坐标一个 y 轴坐标，所以，(0,0)、(1,1)、(2,2)这三个点的列表应该写成「0 0, 1 1, 2 2」。这些都和折线的 points 属性一样。不同的是，这里的最后一个点和第一个点会自动连接起来，形成闭合路径。

### 路径 path

[路径 path](/zh-TW/SVG/Element/path)可能是 SVG 中最通用的一种形状，通过 path 元素，我们可以创建矩形（有没有圆角都行）、圆形、椭圆形、折线、多边形，以及其他一些形状，比如二次贝塞尔曲线、三次贝塞尔曲线，等等。因为 path 很强大也很复杂，所以会在[下一章](/zh-TW/SVG/Tutorial/Paths)进行详细介绍。这里只介绍一个定义路径形状的属性。

```xml
<path d="M 20 230 Q 40 205, 50 230 T 90230"/>
```

- d 属性
  - : d 属性的值是由一些点的坐标，以及控制这些坐标的命令组成的，它们一起描述了路径的形状。具体内容在[path 章节](/zh-TW/SVG/Tutorial/Paths)里介绍。

{{ PreviousNext("SVG/Tutorial/Positions", "SVG/Tutorial/Paths") }}
