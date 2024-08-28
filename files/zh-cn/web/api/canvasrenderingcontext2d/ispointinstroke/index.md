---
title: CanvasRenderingContext2D：isPointInStroke() 方法
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.isPointInStroke()`** 方法用于检测某点是否在路径的描边所在的区域内。

## 语法

```js-nolint
isPointInStroke(x, y)
isPointInStroke(path, x, y)
```

### 参数

- `x`
  - : 检测点的 X 坐标。
- `y`
  - : 检测点的 Y 坐标。
- `path`
  - : {{domxref("Path2D")}} 路径。如果没有指定，则会使用当前路径。

### 返回值

- 布尔值
  - : 一个布尔值，当这个点在路径的描边线上，则返回 `true`，否则返回 `false`。

## 示例

### 检查当前路径中的点

此示例使用 `isPointInStroke()` 方法检测一个点是否在当前路径的描边区域内。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>在描边内：<code id="result">否</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
result.innerText = ctx.isPointInStroke(50, 10) ? "是" : "否";
```

#### 结果

{{ EmbedLiveSample('检查当前路径中的点', 700, 220) }}

### 检查指定路径中的点

此示例在鼠标移动时检测光标是否在椭圆形 `Path2D` 路径的描边内。如果是，椭圆形的描边变为绿色，否则为红色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建椭圆路径
const ellipse = new Path2D();
ellipse.ellipse(150, 75, 40, 60, Math.PI * 0.25, 0, 2 * Math.PI);
ctx.lineWidth = 25;
ctx.strokeStyle = "red";
ctx.fill(ellipse);
ctx.stroke(ellipse);

// 监听鼠标移动
canvas.addEventListener("mousemove", (event) => {
  // 检查鼠标位置是否在椭圆的描边内
  const isPointInStroke = ctx.isPointInStroke(
    ellipse,
    event.offsetX,
    event.offsetY,
  );
  ctx.strokeStyle = isPointInStroke ? "green" : "red";

  // 绘制椭圆
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(ellipse);
  ctx.stroke(ellipse);
});
```

#### 结果

{{ EmbedLiveSample('检查指定路径中的点', 700, 220) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
