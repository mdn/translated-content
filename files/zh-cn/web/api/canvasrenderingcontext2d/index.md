---
title: CanvasRenderingContext2D
slug: Web/API/CanvasRenderingContext2D
---

{{APIRef}}

**`CanvasRenderingContext2D`** 接口是 Canvas API 的一部分，可为 {{HTMLElement("canvas")}} 元素的绘图表面提供 2D 渲染上下文。它用于绘制形状，文本，图像和其他对象。

请参阅侧边栏和下方的界面属性和方法。[Canvas 教程](/zh-CN/docs/Web/API/Canvas_API/Tutorial)提供了更多的信息，例子和资源。

## 基础示例

要获得 `CanvasRenderingContext2D` 实例，你必须首先具有 HTML `<canvas>` 元素才能使用：

```html
<canvas id="my-house" width="300" height="300"></canvas>
```

要获取画布的 2D 渲染上下文，请在 `<canvas>` 元素上调用 {{domxref("HTMLCanvasElement.getContext()", "getContext()")}}，并提供 `'2d'` 作为参数：

```js
const canvas = document.getElementById("my-house");
const ctx = canvas.getContext("2d");
```

有了上下文，您就可以绘制任何喜欢的东西。此代码绘制了一个房子：

```js
// Set line width
ctx.lineWidth = 10;

// Wall
ctx.strokeRect(75, 140, 150, 110);

// Door
ctx.fillRect(130, 190, 40, 60);

// Roof
ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(150, 60);
ctx.lineTo(250, 140);
ctx.closePath();
ctx.stroke();
```

生成的图形如下所示：

{{EmbedLiveSample('基础示例', 700, 330)}}

## 绘制矩形

以下是 3 个绘制矩形位图的方法。

- {{domxref("CanvasRenderingContext2D.clearRect()")}}
  - : 设置指定矩形区域内（以点 _(x, y)_ 为起点，范围是 _(width, height)_）所有像素变成透明，并擦除之前绘制的所有内容。
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
  - : 绘制填充矩形，矩形的起点在 _(x, y)_ 位置，矩形的尺寸是 _width_ 和 _height_。
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
  - : 在 canvas 中，使用当前的笔触样式，描绘一个起点在 _(x, y)_、宽度为 _w_、高度为 _h_ 的矩形。

## 绘制文本

下面是绘制文本的方法。参见 {{domxref("TextMetrics")}} 对象获取文本属性。

- {{domxref("CanvasRenderingContext2D.fillText()")}}
  - : 在 (x,y) 位置绘制（填充）文本。
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
  - : 在 (x,y) 位置绘制（描边）文本。
- {{domxref("CanvasRenderingContext2D.measureText()")}}
  - : 返回 {{domxref("TextMetrics")}} 对象。

## 线型

下面的方法和属性控制如何绘制线。

- {{domxref("CanvasRenderingContext2D.lineWidth")}}
  - : 线的宽度。默认 `1.0`
- {{domxref("CanvasRenderingContext2D.lineCap")}}
  - : 线末端的类型。允许的值：`butt`（默认）、`round`、`square`。
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
  - : 定义两线相交拐点的类型。允许的值：`round`、`bevel`、`miter`（默认）。
- {{domxref("CanvasRenderingContext2D.miterLimit")}}
  - : 斜接面限制比例。默认 `10`。
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
  - : 返回当前线段样式的数组，数组包含一组数量为偶数的非负数数字。
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
  - : 设置当前的线段样式。
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
  - : 描述在哪里开始绘制线段。

## 文本样式

下面的属性控制如何设计文本。

- {{domxref("CanvasRenderingContext2D.font")}}
  - : 字体设置。默认值 `10px sans-serif`。
- {{domxref("CanvasRenderingContext2D.textAlign")}}
  - : 文本对齐设置。允许的值：`start`（默认）、`end`、`left`、`right` 或 `center`。
- {{domxref("CanvasRenderingContext2D.textBaseline")}}
  - : 基线对齐设置。允许的值：`top`、`hanging`、`middle`、`alphabetic`（默认）、`ideographic`、`bottom`。
- {{domxref("CanvasRenderingContext2D.direction")}}
  - : 文本的方向。允许的值：`ltr`、`rtl`、`inherit`（默认）。

## 填充和描边样式

填充设计用于图形内部的颜色和样式，描边设计用于图形的边线。

- {{domxref("CanvasRenderingContext2D.fillStyle")}}
  - : 图形内部的颜色和样式。默认 `#000`（黑色）。
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
  - : 图形边线的颜色和样式。默认 `#000`（黑色）。

## 渐变和图案

- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
  - : 创建一个沿着参数坐标指定的线的线性渐变。
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
  - : 创建一个沿着参数坐标指定的线的放射性性渐变。
- {{domxref("CanvasRenderingContext2D.createPattern()")}}
  - : 使用指定的图片创建图案。通过 repetition 变量指定的方向上重复源图片。此方法返回 {{domxref("CanvasPattern")}} 对象。

## 阴影

- {{domxref("CanvasRenderingContext2D.shadowBlur")}}
  - : 描述模糊效果。默认 `0`。
- {{domxref("CanvasRenderingContext2D.shadowColor")}}
  - : 阴影的颜色。默认 fully-transparent black。
- {{domxref("CanvasRenderingContext2D.shadowOffsetX")}}
  - : 阴影水平方向的偏移量。默认 0。
- {{domxref("CanvasRenderingContext2D.shadowOffsetY")}}
  - : 阴影垂直方向的偏移量。默认 0。

## 路径

下面的方法用来操作对象的路径。

- {{domxref("CanvasRenderingContext2D.beginPath()")}}
  - : 清空子路径列表开始一个新的路径。当你想创建一个新的路径时，调用此方法。
- {{domxref("CanvasRenderingContext2D.closePath()")}}
  - : 使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作。
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
  - : 将一个新的子路径的起始点移动到 (x，y) 坐标。
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
  - : 使用直线连接子路径的最后的点到 (x，y) 坐标。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()")}}
  - : 添加一个 3 次贝赛尔曲线路径。该方法需要三个点。第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 `moveTo()` 进行修改。
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()")}}
  - : 添加一个 2 次贝赛尔曲线路径。
- {{domxref("CanvasRenderingContext2D.arc()")}}
  - : 绘制一段圆弧路径，圆弧路径的圆心在 _(x, y)_ 位置，半径为 _r_，根据 _anticlockwise_（默认为顺时针）指定的方向从 _startAngle_ 开始绘制，到 _endAngle_ 结束。
- {{domxref("CanvasRenderingContext2D.arcTo()")}}
  - : 根据控制点和半径绘制圆弧路径，使用当前的描点（前一个 moveTo 或 lineTo 等函数的止点）。根据当前描点与给定的控制点 1 连接的直线，和控制点 1 与控制点 2 连接的直线，作为使用指定半径的圆的**切线**，画出两条切线之间的弧线路径。
- {{domxref("CanvasRenderingContext2D.ellipse()")}}
  - : 添加一个椭圆路径，椭圆的圆心在（x,y）位置，半径分别是 _radiusX_ 和 _radiusY_，按照 _anticlockwise_（默认顺时针）指定的方向，从 _startAngle_ 开始绘制，到 _endAngle_ 结束。
- {{domxref("CanvasRenderingContext2D.rect()")}}
  - : 创建一个矩形路径，矩形的起点位置是 _(x, y)_，尺寸为 _width_ 和 _height_。

## 绘制路径

- {{domxref("CanvasRenderingContext2D.fill()")}}
  - : 使用当前的样式填充子路径。
- {{domxref("CanvasRenderingContext2D.stroke()")}}
  - : 使用当前的样式描边子路径。
- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}}
  - : 如果给定的元素获取了焦点，那么此方法会在当前的路径绘制一个焦点。
- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}}
  - : 将当前或给定的路径滚动到窗口。
- {{domxref("CanvasRenderingContext2D.clip()")}}
  - : 从当前路径创建一个剪切路径。在 **clip()** 调用之后，绘制的所有信息只会出现在剪切路径内部。例如：参见 Canvas 教程中的[剪切路径](/zh-CN/docs/Web/API/Canvas_API/Tutorial/Compositing)。
- {{domxref("CanvasRenderingContext2D.isPointInPath()")}}
  - : 判断当前路径是否包含检测点。
- {{domxref("CanvasRenderingContext2D.isPointInStroke()")}}
  - : 判断检测点是否在路径的描边线上。

## 变换

在 `CanvasRenderingContext2D` 渲染背景中的对象会有一个当前的变换矩阵，一些方法可以对其进行控制。当创建当前的默认路径，绘制文本、图形和 {{domxref("Path2D")}} 对象的时候，会应用此变换矩阵。下面列出的方法保持历史和兼容性的原因，是为了 {{domxref("DOMMatrix")}} 对象现在能够应用于大部分 API，将来会被替换。

- {{domxref("CanvasRenderingContext2D.rotate()")}}
  - : 在变换矩阵中增加旋转，角度变量表示一个顺时针旋转角度并且用弧度表示。
- {{domxref("CanvasRenderingContext2D.scale()")}}
  - : 根据 x 水平方向和 y 垂直方向，为 canvas 单位添加缩放变换。
- {{domxref("CanvasRenderingContext2D.translate()")}}
  - : 通过在网格中移动 canvas 和 canvas 原点 x 水平方向、原点 y 垂直方向，添加平移变换。
- {{domxref("CanvasRenderingContext2D.transform()")}}
  - : 使用方法参数描述的矩阵多次叠加当前的变换矩阵。
- {{domxref("CanvasRenderingContext2D.setTransform()")}}
  - : 重新设置当前的变换为单位矩阵，并使用同样的变量调用 **transform()** 方法。
- {{domxref("CanvasRenderingContext2D.resetTransform()")}}
  - : 使用单位矩阵重新设置当前的变换。

## 合成

- {{domxref("CanvasRenderingContext2D.globalAlpha")}}
  - : 在合成到 canvas 之前，设置图形和图像透明度的值。默认 `1.0`（不透明）。
- {{domxref("CanvasRenderingContext2D.globalCompositeOperation")}}
  - : 通过 `globalAlpha` 应用，设置如何在已经存在的位图上绘制图形和图像。

## 绘制图像

- {{domxref("CanvasRenderingContext2D.drawImage()")}}
  - : 绘制指定的图片。该方法有多种格式，提供了很大的使用灵活性。

## 像素控制

参见 {{domxref("ImageData")}} 对象。

- {{domxref("CanvasRenderingContext2D.createImageData()")}}
  - : 使用指定的尺寸，创建一个新的、空白的 {{domxref("ImageData")}} 对象。所有的像素在新对象中都是透明的。
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
  - : 返回一个 {{domxref("ImageData")}} 对象，用来描述 canvas 区域隐含的像素数据，这个区域通过矩形表示，起始点为 _(sx, sy)_、宽为 _sw_、高为 _sh_。
- {{domxref("CanvasRenderingContext2D.putImageData()")}}
  - : 将数据从已有的 {{domxref("ImageData")}} 绘制到位图上。如果提供了脏矩形，只能绘制矩形的像素。

## 图像平滑

- {{domxref("CanvasRenderingContext2D.imageSmoothingEnabled")}}
  - : 图像平滑的方式；如果禁用，缩放时，图像不会被平滑处理。

## canvas 状态

**CanvasRenderingContext2D** 渲染环境包含了多种绘图的样式状态（属性有线的样式、填充样式、阴影样式、文本样式）。下面的方法会帮助你使用这些状态：

- {{domxref("CanvasRenderingContext2D.save()")}}
  - : 使用栈保存当前的绘画样式状态，你可以使用 **restore()** 恢复任何改变。
- {{domxref("CanvasRenderingContext2D.restore()")}}
  - : 恢复到最近的绘制样式状态，此状态是通过 **save()** 保存到“状态栈”中最新的元素。
- {{domxref("CanvasRenderingContext2D.canvas")}}
  - : 对 {{domxref("HTMLCanvasElement")}} 只读的反向引用。如果和 {{HTMLElement("canvas")}} 元素没有联系，可能为 {{jsxref("null")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("HTMLCanvasElement")}}
- {{HTMLElement("canvas")}}
