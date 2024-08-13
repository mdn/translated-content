---
title: CanvasRenderingContext2D：closePath() 方法
slug: Web/API/CanvasRenderingContext2D/closePath
l10n:
  sourceCommit: 882679ef575f519ddb80095398a1235415ac01f1
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.closePath()`** 方法用于从当前点添加一条直线到当前子路径的起点。如果形状已经闭合或只有一个点，此函数将不执行任何操作。

该方法并不直接在画布上绘制任何内容。你可以使用 {{domxref("CanvasRenderingContext2D.stroke()", "stroke()")}} 或 {{domxref("CanvasRenderingContext2D.fill()", "fill()")}} 方法来渲染路径。

## 语法

```js-nolint
closePath()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 闭合三角形

这个例子使用 `lineTo()` 方法创建三角形的前两条（对角线）边。然后使用 `closePath()` 方法创建三角形的底边，该方法会自动连接形状的第一个点和最后一个点。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

三角形的三个角分别位于 (20, 140)、(120, 10) 和 (220, 140)。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 140); // 将笔移到左下角
ctx.lineTo(120, 10); // 连线到顶角
ctx.lineTo(220, 140); // 连线到右下角
ctx.closePath(); // 连线到左下角
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('闭合三角形', 700, 180) }}

### 只闭合一个子路径

这个例子绘制了一个笑脸，由三个不相连的子路径组成。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

前两个圆弧创建了脸部的眼睛，最后一个圆弧创建了嘴巴。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(240, 20, 40, 0, Math.PI);
ctx.moveTo(100, 20);
ctx.arc(60, 20, 40, 0, Math.PI);
ctx.moveTo(215, 80);
ctx.arc(150, 80, 65, 0, Math.PI);
ctx.closePath();
ctx.lineWidth = 6;
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('只闭合一个子路径', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
