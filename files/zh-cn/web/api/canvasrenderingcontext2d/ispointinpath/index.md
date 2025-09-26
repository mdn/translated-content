---
title: CanvasRenderingContext2D：isPointInPath() 方法
slug: Web/API/CanvasRenderingContext2D/isPointInPath
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.isPointInPath()`** 方法用于判断当前路径中是否包含指定点。

## 语法

```js-nolint
isPointInPath(x, y)
isPointInPath(x, y, fillRule)
isPointInPath(path, x, y)
isPointInPath(path, x, y, fillRule)
```

### 参数

- `x`
  - : 不受上下文当前变换影响的点的 x 轴坐标。
- `y`
  - : 不受上下文当前变换影响的点的 y 轴坐标。
- `fillRule`
  - : 确定点是在路径内部还是外部的算法。可能的值包括：
    - `nonzero`
      - : [非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule)。默认规则。
    - `evenodd`
      - : [奇偶环绕规则](https://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)。
- `path`
  - : 要检查的 {{domxref("Path2D")}} 路径。如果未指定，则使用当前路径。

### 返回值

- {{jsxref("Boolean")}}
  - : 一个布尔值，若指定点包含在当前或指定的路径内，返回 `true`；否则返回 `false`。

## 示例

### 检查当前路径中的点

此示例使用 `isPointInPath` 方法检查某点是否在当前的路径内。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>在路径内：<code id="result">否</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.fill();
result.innerText = ctx.isPointInPath(30, 70) ? "是" : "否";
```

#### 结果

{{ EmbedLiveSample('检查当前路径中的点', 700, 220) }}

### 检查特定路径中的点

此示例在鼠标移动时检测光标是否在一个圆形的 `Path2D` 路径内。如果是，圆形变为绿色，否则为红色。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 创建圆形
const circle = new Path2D();
circle.arc(150, 75, 50, 0, 2 * Math.PI);
ctx.fillStyle = "red";
ctx.fill(circle);

// 监听鼠标移动
canvas.addEventListener("mousemove", (event) => {
  // 检查鼠标位置是否在圆形内
  const isPointInPath = ctx.isPointInPath(circle, event.offsetX, event.offsetY);
  ctx.fillStyle = isPointInPath ? "green" : "red";

  // 绘制圆形
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fill(circle);
});
```

{{ EmbedLiveSample('检查特定路径中的点', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

### Gecko 特定说明

Gecko 7.0（Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4）之前，这个方法在比较指定点与路径位置时，未正确地将指定点的坐标乘以当前的变换矩阵。现在，即使上下文进行了旋转、缩放或其他变换，该方法也能正确地工作了。

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
