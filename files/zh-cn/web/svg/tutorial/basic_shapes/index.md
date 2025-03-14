---
title: 基本形状
slug: Web/SVG/Tutorial/Basic_Shapes
---

{{SVGRef}}

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}

这里介绍的几个基本的形状用于大多数的 SVG 绘图。通过这些形状的命名可以知道其用途。给它们一些属性可以确定它们的位置和大小，但一个元素参考可能包含对元素属性的更准确和完整的描述，这里先不做介绍。然而，由于有些元素可以用在大多数 SVG 文档中，所以很有必要在这里介绍这部分元素。

## 基本形状

要想插入一个形状，你可以在文档中创建一个元素。不同的元素对应着不同的形状，并且使用不同的属性来定义图形的大小和位置。有一些形状因为可以由其他的形状创建而略显冗余，但是它们用起来方便，可让我们的 SVG 文档简洁易懂。右边的图片展示了所有的基本形状。生成它们的代码如下：

![](shapes.png)

```xml
<?xml version="1.0" standalone="no"?>
<svg width="200" height="250" version="1.1" xmlns="http://www.w3.org/2000/svg">

  <rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
  <rect x="60" y="10" rx="10" ry="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>

  <circle cx="25" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
  <ellipse cx="75" cy="75" rx="20" ry="5" stroke="red" fill="transparent" stroke-width="5"/>

  <line x1="10" x2="50" y1="110" y2="150" stroke="orange" stroke-width="5"/>
  <polyline points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      stroke="orange" fill="transparent" stroke-width="5"/>

  <polygon points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stroke="green" fill="transparent" stroke-width="5"/>

  <path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
</svg>
```

> **备注：** `stroke`、`stroke-width` 和 `fill` 等属性在后面的章节中解释。

### 矩形

就像你能联想到的，`rect`元素会在屏幕上绘制一个矩形。其实只要 6 个基本属性就可以控制它在屏幕上的位置和形状。上面的图例中最先展示了 2 个矩形，虽然这有点冗余了。右边的那个图形设置了 rx 和 ry 属性用来控制圆角。如果没有设置圆角，则默认为 0。

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- x
  - : 矩形左上角的 x 位置
- y
  - : 矩形左上角的 y 位置
- width
  - : 矩形的宽度
- height
  - : 矩形的高度
- rx
  - : 圆角的 x 方位的半径
- ry
  - : 圆角的 y 方位的半径

### 圆形

正如你猜到的，`circle`元素会在屏幕上绘制一个圆形。它只有 3 个属性用来设置圆形。

```xml
<circle cx="25" cy="75" r="20"/>
```

- r
  - : 圆的半径
- cx
  - : 圆心的 x 位置
- cy
  - : 圆心的 y 位置

### 椭圆

[Ellipse](/zh-CN/docs/Web/SVG/Element/ellipse) 是`circle`元素更通用的形式，你可以分别缩放圆的 x 半径和 y 半径（通常数学家称之为长轴半径和短轴半径）。

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- rx
  - : 椭圆的 x 半径
- ry
  - : 椭圆的 y 半径
- cx
  - : 椭圆中心的 x 位置
- cy
  - : 椭圆中心的 y 位置

### 线条

[Line](/zh-CN/docs/Web/SVG/Element/line) 绘制直线。它取两个点的位置作为属性，指定这条线的起点和终点位置。

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- x1
  - : 起点的 x 位置
- y1
  - : 起点的 y 位置
- x2
  - : 终点的 x 位置
- y2
  - : 终点的 y 位置

### 折线

[Polyline](/zh-CN/docs/Web/SVG/Element/polyline)是一组连接在一起的直线。因为它可以有很多的点，折线的所有点位置都放在一个 points 属性中：

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- points
  - : 点集数列。每个数字用空白、逗号、终止命令符或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。

### 多边形

[`polygon`](/zh-CN/docs/SVG/Element/polygon)和折线很像，它们都是由连接一组点集的直线构成。不同的是，`polygon`的路径在最后一个点处自动回到第一个点。需要注意的是，矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个矩形。

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- points
  - : 点集数列。每个数字用空白符、逗号、终止命令或者换行符分隔开。每个点必须包含 2 个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 (0,0), (1,1) 和 (2,2) 可以写成这样：“0 0, 1 1, 2 2”。路径绘制完后闭合图形，所以最终的直线将从位置 (2,2) 连接到位置 (0,0)。

### 路径

`path`可能是 SVG 中最常见的形状。你可以用 path 元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、2 次曲线等曲线。因为 path 很强大也很复杂，所以会在[下一章](/zh-CN/docs/SVG/Tutorial/Paths)进行详细介绍。这里只介绍一个定义路径形状的属性。

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- d
  - : 一个点集数列以及其他关于如何绘制路径的信息。请阅读[路径](/zh-CN/docs/Web/SVG/Tutorial/Paths)章节以了解更多信息。

{{ PreviousNext("Web/SVG/Tutorial/Positions", "Web/SVG/Tutorial/Paths") }}
