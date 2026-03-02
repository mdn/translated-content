---
title: 基本形状
slug: Web/SVG/Tutorials/SVG_from_scratch/Basic_shapes
l10n:
  sourceCommit: c2fd97474834e061404b992c8397d4ccc4439a71
---

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}

大多数 SVG 绘图都使用几种基本形状。这些形状的用途从其名称中便不言自明。本文将介绍决定其位置和尺寸的部分参数，但元素参考文档可能包含更精确完整的描述以及本文未涉及的其他属性。鉴于它们在多数 SVG 文档中被广泛使用，有必要对其进行简要介绍。

要插入形状，需在文档中创建元素。不同元素对应不同形状，并通过不同参数描述形状的大小和位置。其中部分元素存在轻微冗余——它们可由其他形状派生创建，但所有元素的存在都是为了方便开发者，并使 SVG 文档尽可能简洁易读。所有基本形状如图所示。

![八种不同形状与图案的连续排列。左上角为黑色轮廓方形，其后接黑色圆角方形。左下方为红色轮廓圆形，其后接红色轮廓椭圆形。左下侧为黄色直线，其后接黄色锯齿线。黄色直线下方为绿色轮廓星形，图像末端为蓝色波浪线。](shapes.png)

用于生成图片的代码类似如下：

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

> [!NOTE]
> `stroke`、`stroke-width` 和 `fill` 等属性在后面的教程中解释。

## 矩形

{{SVGElement("rect")}} 元素在屏幕上绘制一个矩形。控制屏幕上矩形位置和形状的基本属性共有六项。右侧的矩形设置了 `rx` 和 `ry` 参数，使其呈现圆角效果。若未设置，则默认值为 `0`。

```xml
<rect x="10" y="10" width="30" height="30"/>
<rect x="60" y="10" rx="10" ry="10" width="30" height="30"/>
```

- `x`
  - : 矩形左上角的 x 坐标。
- `y`
  - : 矩形左上角的 y 坐标。
- `width`
  - : 矩形的宽度。
- `height`
  - : 矩形的高度。
- `rx`
  - : 矩形圆角的 x 半径。
- `ry`
  - : 矩形圆角的 y 半径。

## 圆形

{{SVGElement("circle")}} 元素在屏幕上绘制一个圆形。确定该元素的形状和尺寸需要三个基本参数。

```xml
<circle cx="25" cy="75" r="20"/>
```

- `r`
  - : 圆的半径。
- `cx`
  - : 圆心的 x 坐标。
- `cy`
  - : 圆心的 y 坐标。

## 椭圆

{{SVGElement("ellipse")}} 是 {{SVGElement("circle")}} 元素更通用的形式，你可以分别调整圆的 x 半径和 y 半径（通常数学家称之为*半长*轴和*半短*轴）。

```xml
<ellipse cx="75" cy="75" rx="20" ry="5"/>
```

- `rx`
  - : 椭圆的 x 半径。
- `ry`
  - : 椭圆的 y 半径。
- `cx`
  - : 椭圆中心的 x 坐标。
- `cy`
  - : 椭圆中心的 y 坐标。

## 线条

{{SVGElement("line")}} 元素以两个点的坐标为参数，并在两点之间之间绘制一条直线。

```xml
<line x1="10" x2="50" y1="110" y2="150" stroke="black" stroke-width="5"/>
```

- `x1`
  - : 第一个点的 x 坐标。
- `y1`
  - : 第一个点的 y 坐标。
- `x2`
  - : 第二个点的 x 坐标。
- `y2`
  - : 第二个点的 y 坐标。

## 折线

{{SVGElement("polyline")}} 是一组连接在一起的直线。由于点列表可能相当长，所有点都被包含在一个属性中：

```xml
<polyline points="60, 110 65, 120 70, 115 75, 130 80, 125 85, 140 90, 135 95, 150 100, 145"/>
```

- `points`
  - : 点列表。每个数字必须用空格、逗号、换行符或回车符分隔，允许额外添加空白字符。每个点必须包含两个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 `(0,0)`、`(1,1)` 和 `(2,2)` 可以写成 `0, 0 1, 1 2, 2`。

## 多边形

{{SVGElement("polygon")}} 和 {{SVGElement("polyline")}} 很像，它们都是由连接一组点集的直线构成。不同的是，`polygon` 的路径在最后一个点处自动回到第一个点，组成一个闭合图形。

> [!NOTE]
> 矩形也是一种多边形，如果需要更多灵活性的话，你也可以用多边形创建一个无圆角的 `<rect/>` 元素。

```xml
<polygon points="50, 160 55, 180 70, 180 60, 190 65, 205 50, 195 35, 205 40, 190 30, 180 45, 180"/>
```

- `points`
  - : 点列表。每个数字必须用空格、逗号或换行符分隔，允许额外添加空白字符。每个点必须包含两个数字，一个是 x 坐标，一个是 y 坐标。所以点列表 `(0,0)`、`(1,1)` 和 `(2,2)` 可以写成 `0, 0 1, 1 2, 2`。路径绘制完后闭合图形，所以最终的直线将从 `(2,2)` 连接到 `(0,0)`。

## 路径

{{SVGElement("path")}} 可能是 SVG 中最常见的形状。你可以用 `path` 元素绘制矩形（直角矩形或者圆角矩形）、圆形、椭圆、折线形、多边形，以及一些其他的形状，例如贝塞尔曲线、二次曲线等曲线。

因此，本教程的[下一节](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)将重点介绍路径。但目前请注意，控制其形状仅需一个参数。

```xml
<path d="M20,230 Q40,205 50,230 T90,230" fill="none" stroke="blue" stroke-width="5"/>
```

- `d`
  - : 路径绘制所需的点列表及其他相关信息。更多详情请参阅[路径](/zh-CN/docs/Web/SVG/Tutorials/SVG_from_scratch/Paths)章节。

{{ PreviousNext("Web/SVG/Tutorials/SVG_from_scratch/Positions", "Web/SVG/Tutorials/SVG_from_scratch/Paths") }}
