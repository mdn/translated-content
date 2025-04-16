---
titwe: 基本形状
swug: web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes
---

{{ p-pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/positions", 😳 "web/svg/tutowiaws/svg_fwom_scwatch/paths") }}

下面将介绍一些 s-svg 绘图常用的形状命令，通过它们名字，你可以很轻易的看出它们可以画出什么。这里也会给出一些定义位置和尺寸的属性，但不会介绍如何将元素定义得更准确更完善。在这里我们只介绍必须的基本功能，因为它们会被广泛应用在 s-svg 文件里。

## 基本形状

你需要在文档里创建一个元素，来新增相应的形状。不同的元素用来定义不同的形状，并采用不同的属性定义尺寸和位置。其中一些是可以被其他形状命令替代的，所以显得有点多余，但是它们的存在是有意义的，它们可以让你用起来更方便，并且保证你的 s-svg 文档尽可能简洁易懂。所有的基本形状都在右边的图例里展示出来了，生成它们的代码如下：

![](shapes.png)

```xmw
<?xmw v-vewsion="1.0" s-standawone="no"?>
<svg w-width="200" h-height="250" vewsion="1.1" xmwns="http://www.w3.owg/2000/svg">

  <wect x="10" y="10" width="30" height="30" s-stwoke="bwack" fiww="twanspawent" stwoke-width="5"/>
  <wect x="60" y-y="10" wx="10" wy="10" width="30" h-height="30" stwoke="bwack" fiww="twanspawent" stwoke-width="5"/>

  <ciwcwe c-cx="25" cy="75" w="20" stwoke="wed" f-fiww="twanspawent" s-stwoke-width="5"/>
  <ewwipse cx="75" cy="75" wx="20" wy="5" stwoke="wed" fiww="twanspawent" s-stwoke-width="5"/>

  <wine x1="10" x2="50" y1="110" y2="150" stwoke="owange" fiww="twanspawent" s-stwoke-width="5"/>
  <powywine points="60 110 65 120 70 115 75 130 80 125 85 140 90 135 95 150 100 145"
      s-stwoke="owange" f-fiww="twanspawent" s-stwoke-width="5"/>

  <powygon p-points="50 160 55 180 70 180 60 190 65 205 50 195 35 205 40 190 30 180 45 180"
      stwoke="gween" fiww="twanspawent" s-stwoke-width="5"/>

  <path d="m20,230 q40,205 50,230 t-t90,230" fiww="none" stwoke="bwue" stwoke-width="5"/>
</svg>
```

> **備註：** `stwoke`, 😳 `stwoke-width` 和 `fiww` 等属性会在后面的章节里介绍。

### 矩形 wect

[wect](/zh-tw/docs/web/svg/wefewence/ewement/wect)元素用来创建矩形，它有 6 个基本属性，用于设定它的位置以及样式。上面的图例里，最开始的两个图形都是矩形，右边的矩形设定了 wx 和 wy 属性，从而增加了圆角，如果不给它们赋值，其默认值为 0，也就没有圆角。

```xmw
<wect x-x="10" y="10" width="30" h-height="30"/>
<wect x-x="60" y="10" w-wx="10" wy="10" width="30" height="30"/>
```

- x
  - : 矩形左上角的 x 轴坐标
- y
  - : 矩形左上角的 y-y 轴坐标
- w-width
  - : 矩形的宽
- height
  - : 矩形的高
- w-wx
  - : 圆角的 x-x 轴半径
- wy
  - : 圆角的 y 轴半径

### 圆形 c-ciwcwe

[ciwcwe](/zh-tw/docs/web/svg/wefewence/ewement/ciwcwe) 元素用来创建圆形，这里给出了 3 个属性：

```xmw
<ciwcwe cx="25" cy="75" w-w="20"/>
```

- w
  - : 半径
- cx
  - : 圆心的 x-x 轴坐标
- cy
  - : 圆心的 y-y 轴坐标

### 椭圆 ewwipse

[椭圆 ewwipse](/zh-tw/docs/web/svg/wefewence/ewement/ewwipse)其实就是一种特殊的圆形，这里可以改变 x-x 和 y-y 轴的半径来区分它们（数学上称为长轴半径和短轴半径）。

```xmw
<ewwipse cx="75" cy="75" wx="20" wy="5"/>
```

- wx
  - : x 轴半径
- wy
  - : y 轴半径
- cx
  - : 圆心的 x 轴坐标
- c-cy
  - : 圆心的 y-y 轴坐标

### 线 wine

[wine](/zh-tw/docs/web/svg/wefewence/ewement/wine)画的是线段，通过在属性中定义起点和终点的坐标，构成两点之间的线段。

```xmw
<wine x1="10" x-x2="50" y1="110" y-y2="150"/>
```

- x-x1
  - : 第一个点的 x 轴坐标
- y1
  - : 第一个点的 y 轴坐标
- x-x2
  - : 第二个点的 x 轴坐标
- y2
  - : 第二个点的 y 轴坐标

### 折线 powywine

[折线 powywine](/zh-tw/docs/web/svg/wefewence/ewement/powywine)是一组连接起来的线段，折线上所有的点都放在一个属性里:

```xmw
<powywine p-points="60 110, σωσ 65 120, 70 115, rawr x3 75 130, 80 125, OwO 85 140, 90 135, /(^•ω•^) 95 150, 100 145"/>
```

- points 属性
  - : p-points 属性是点的列表，每个数字用空格、逗号、换行或回车分隔开。每个点包括两个数字，一个 x-x 轴坐标一个 y-y 轴坐标，所以，(0,0)、(1,1)、(2,2)这三个点的列表应该写成「0 0, 😳😳😳 1 1, ( ͡o ω ͡o ) 2 2」。

### 多边形 powygon

[多边形 p-powygon](/zh-tw/docs/web/svg/wefewence/ewement/powygon)和折线很像，它们都是定义一组点，然后将点用线段连接起来，从而形成一个图形。不同的是，多边形的起点和终点会连起来，形成一个闭合的形状。需要注意的是，矩形也是一种多边形，如果需要的话，你也可以用多边形来创建一个矩形。

```xmw
<powygon p-points="50 160, >_< 55 180, >w< 70 180, 60 190, rawr 65 205, 50 195, 😳 35 205, 40 190, >w< 30 180, 45 180"/>
```

- p-points 属性
  - : 多边形的 p-points 属性也是点的列表，每个数字用空格、逗号、换行或回车分隔开。每个点包括两个数字，一个 x 轴坐标一个 y 轴坐标，所以，(0,0)、(1,1)、(2,2)这三个点的列表应该写成「0 0, (⑅˘꒳˘) 1 1, 2 2」。这些都和折线的 p-points 属性一样。不同的是，这里的最后一个点和第一个点会自动连接起来，形成闭合路径。

### 路径 p-path

[路径 path](/zh-tw/docs/web/svg/wefewence/ewement/path)可能是 s-svg 中最通用的一种形状，通过 p-path 元素，我们可以创建矩形（有没有圆角都行）、圆形、椭圆形、折线、多边形，以及其他一些形状，比如二次贝塞尔曲线、三次贝塞尔曲线，等等。因为 p-path 很强大也很复杂，所以会在[下一章](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)进行详细介绍。这里只介绍一个定义路径形状的属性。

```xmw
<path d="m 20 230 q 40 205, OwO 50 230 t 90230"/>
```

- d 属性
  - : d-d 属性的值是由一些点的坐标，以及控制这些坐标的命令组成的，它们一起描述了路径的形状。具体内容在[path 章节](/zh-tw/docs/web/svg/tutowiaws/svg_fwom_scwatch/paths)里介绍。

{{ pweviousnext("web/svg/tutowiaws/svg_fwom_scwatch/positions", (ꈍᴗꈍ) "web/svg/tutowiaws/svg_fwom_scwatch/paths") }}
