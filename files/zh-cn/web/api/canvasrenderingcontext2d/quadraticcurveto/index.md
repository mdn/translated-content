---
title: CanvasRenderingContext2D：quadraticCurveTo() 方法
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
l10n:
  sourceCommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.quadraticCurveTo()`** 方法用于新增二次[贝塞尔曲线](/zh-CN/docs/Glossary/Bezier_curve)路径。它需要 2 个点。第一个点是控制点，第二个点是终点。起始点是当前路径最新的点——在创建二次贝赛尔曲线之前，可以使用 {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} 方法进行改变。

## 语法

```js-nolint
quadraticCurveTo(cpx, cpy, x, y)
```

### 参数

- `cpx`
  - : 控制点的 x 轴坐标。
- `cpy`
  - : 控制点的 y 轴坐标。
- `x`
  - : 终点的 x 轴坐标。
- `y`
  - : 终点的 y 轴坐标。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### quadraticCurveTo 如何工作

这个示例展示如何绘制二次贝赛尔曲线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 二次贝塞尔曲线
ctx.beginPath();
ctx.moveTo(50, 20);
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

// 起始点和结束点
ctx.fillStyle = "blue";
ctx.beginPath();
ctx.arc(50, 20, 5, 0, 2 * Math.PI); // 起始点
ctx.arc(50, 100, 5, 0, 2 * Math.PI); // 结束点
ctx.fill();

// 控制点
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(230, 30, 5, 0, 2 * Math.PI);
ctx.fill();
```

#### 结果

在这个示例中，控制点是红色的，起始点和结束点是蓝色的。

{{ EmbedLiveSample('quadraticCurveTo 如何工作', 315, 165) }}

### 简单的二次曲线

此示例使用 `quadraticCurveTo()` 绘制了简单的二次贝塞尔曲线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

曲线从 `moveTo()` 指定的点开始：(20, 110)。控制点位于 (230, 150)。曲线在 (250, 20) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 110);
ctx.quadraticCurveTo(230, 150, 250, 20);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('简单的二次曲线', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- [贝塞尔曲线](/zh-CN/docs/Glossary/Bezier_curve)
