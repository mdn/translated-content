---
title: Path2D
slug: Web/API/Path2D
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

Canvas 2D API 的接口 **`Path2D`** 用来声明路径，此路径稍后会被{{domxref("CanvasRenderingContext2D")}} 对象使用。`CanvasRenderingContext2D` 接口的 [路径方法](/zh-CN/docs/Web/API/CanvasRenderingContext2D#paths) 也存在于 Path2D 这个接口中，允许你在 canvas 中根据需要创建可以保留并重用的路径。

## 构造函数

- {{domxref("Path2D.Path2D", "Path2D()")}}
  - : `Path2D` 构造函数。创建一个新的 `Path2D` 对象。

## 方法

- {{domxref("Path2D.addPath()")}}
  - : 添加一条新路径到对当前路径。
- {{domxref("CanvasRenderingContext2D.closePath", "Path2D.closePath()")}}
  - : 使笔点返回到当前子路径的起始点。它尝试从当前点到起始点绘制一条直线。如果图形已经是封闭的或者只有一个点，那么此函数不会做任何操作。
- {{domxref("CanvasRenderingContext2D.moveTo()", "Path2D.moveTo()")}}
  - : 将一个新的子路径的起始点移动到 (x，y) 坐标。
- {{domxref("CanvasRenderingContext2D.lineTo()", "Path2D.lineTo()")}}
  - : 使用直线连接子路径的终点到 `x, y` 坐标。
- {{domxref("CanvasRenderingContext2D.bezierCurveTo()", "Path2D.bezierCurveTo()")}}
  - : 添加一条三次贝赛尔曲线到当前路径。该方法需要三个点。第一、第二个点是控制点，第三个点是结束点。起始点是当前路径的最后一个点，绘制贝赛尔曲线前，可以通过调用 `moveTo()` 进行修改。
- {{domxref("CanvasRenderingContext2D.quadraticCurveTo()", "Path2D.quadraticCurveTo()")}}
  - : 添加一条二次贝赛尔曲线到当前路径。
- {{domxref("CanvasRenderingContext2D.arc()", "Path2D.arc()")}}
  - : 添加一条圆弧路径。圆弧路径的圆心在 _(x, y)_ 位置，半径为 _r_，根据*anticlockwise* （默认为顺时针）指定的方向从 _startAngle_ 开始绘制，到 _endAngle_ 结束。
- {{domxref("CanvasRenderingContext2D.arcTo()", "Path2D.arcTo()")}}
  - : 根据控制点和半径添加一条圆弧路径，使用直线连接前一个点。
- {{domxref("CanvasRenderingContext2D.ellipse()", "Path2D.ellipse()")}}
  - : 添加一条椭圆路径。椭圆的圆心在（x,y）位置，半径分别是*radiusX* 和 _radiusY_，按照*anticlockwise* （默认顺时针）指定的方向，从 _startAngle_ 开始绘制，到 _endAngle_ 结束。
- {{domxref("CanvasRenderingContext2D.rect()", "Path2D.rect()")}}
  - : 创建一条矩形路径，矩形的起点位置是 _(x, y)_，尺寸为 _width_ 和 _height_。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D")}}
