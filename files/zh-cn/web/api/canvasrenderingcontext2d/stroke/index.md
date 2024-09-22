---
title: CanvasRenderingContext2D：stroke() 方法
slug: Web/API/CanvasRenderingContext2D/stroke
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.stroke()`** 方法用于根据当前的描边样式，绘制当前或指定的路径。

描边与路径的中心对齐，也就是说，描边的一半位于路径的内侧，另一半位于外侧。

描边使用[非零环绕规则](https://en.wikipedia.org/wiki/Nonzero-rule)进行绘制，这意味着路径交叉点仍会被填充。

## 语法

```js-nolint
stroke()
stroke(path)
```

### 参数

- `path`
  - : 要描边的 {{domxref("Path2D")}} 路径。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 简单的矩形轮廓线

此示例使用 `rect()` 方法创建一个矩形，然后使用 `stroke()` 方法将其绘制到画布上。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 150, 100);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('简单的矩形轮廓线', 700, 180) }}

### 重新对路径进行描边

通常情况下，每当你想要描边新的内容时，应调用 {{domxref("CanvasRenderingContext2D.beginPath()", "beginPath()")}} 方法。如果不这样做，之前的子路径将保留在当前路径中，并且每次调用 `stroke()` 方法时都会被描边。然而，在某些情况下，这可能是期望的效果。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

以下代码分别对第一个子路径描边三次，第二个子路径描边两次，第三个子路径描边一次。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 第一个子路径
ctx.lineWidth = 26;
ctx.strokeStyle = "orange";
ctx.moveTo(20, 20);
ctx.lineTo(160, 20);
ctx.stroke();

// 第二个子路径
ctx.lineWidth = 14;
ctx.strokeStyle = "green";
ctx.moveTo(20, 80);
ctx.lineTo(220, 80);
ctx.stroke();

// 第三个子路径
ctx.lineWidth = 4;
ctx.strokeStyle = "pink";
ctx.moveTo(20, 140);
ctx.lineTo(280, 140);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('重新对路径进行描边', 700, 180) }}

### 描边和填充

如果你想要同时描边和填充一个路径，执行这些操作的顺序将决定最终的结果。在这个示例中，左侧的正方形先填充后描边，右侧的正方形先描边后填充。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.lineWidth = 16;
ctx.strokeStyle = "red";

// 先填充后描边
ctx.beginPath();
ctx.rect(25, 25, 100, 100);
ctx.fill();
ctx.stroke();

// 先描边后填充
ctx.beginPath();
ctx.rect(175, 25, 100, 100);
ctx.stroke();
ctx.fill();
```

#### 结果

{{ EmbedLiveSample('描边和填充', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
