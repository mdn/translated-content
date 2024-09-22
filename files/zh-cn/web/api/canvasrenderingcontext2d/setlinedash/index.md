---
title: CanvasRenderingContext2D：setLineDash() 方法
slug: Web/API/CanvasRenderingContext2D/setLineDash
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`setLineDash()`** 方法用于在描线时使用虚线模式。它使用一组值来指定描述模式的线和间隙的交替长度。

> [!NOTE]
> 如果要切换回至实线模式，将虚线列表设置为空数组。

## 语法

```js-nolint
setLineDash(segments)
```

### 参数

- `segments`
  - : 一个{{jsxref("Array", "数组", "", 1)}}，包含一组描述交替绘制线段和间隙（坐标空间单位）长度的数字。如果数组元素的数量是奇数，数组的元素会被复制和拼接。例如，`[5, 15, 25]` 会变成 `[5, 15, 25, 5, 15, 25]`。如果数组为空，则虚线列表会被清空，线条描边将恢复为实线。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 基本示例

这个示例使用了 `setLineDash()` 方法在一个实线上面绘制虚线。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 虚线
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();

// 实线
ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 100);
ctx.lineTo(300, 100);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('基本示例', 700, 360) }}

### 一些常见的模式

此示例说明了各种常见的线划线模式。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

下面创建的 `drawDashedLine()` 函数使得多个虚线的绘制变得简单。它接收模式数组作为其唯一参数。

```js
function drawDashedLine(pattern) {
  ctx.beginPath();
  ctx.setLineDash(pattern);
  ctx.moveTo(0, y);
  ctx.lineTo(300, y);
  ctx.stroke();
  y += 20;
}

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let y = 15;

drawDashedLine([]);
drawDashedLine([1, 1]);
drawDashedLine([10, 10]);
drawDashedLine([20, 5]);
drawDashedLine([15, 3, 3, 3]);
drawDashedLine([20, 3, 3, 3, 3, 3, 3, 3]);
drawDashedLine([12, 3, 3]); // 等于 [12, 3, 3, 12, 3, 3]
```

#### 结果

{{ EmbedLiveSample('一些常见的模式', 700, 180) }}

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
