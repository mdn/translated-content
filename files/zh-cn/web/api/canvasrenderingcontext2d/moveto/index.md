---
title: CanvasRenderingContext2D：moveTo() 方法
slug: Web/API/CanvasRenderingContext2D/moveTo
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.moveTo()`** 方法用于将一个新的子路径的起始点移动到 `(x，y)` 坐标。

## 语法

```js-nolint
moveTo(x, y)
```

### 参数

- `x`
  - : 点的 x 轴。
- `y`
  - : 点的 y 轴。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 绘制多条子路径

这个例子使用了 `moveTo()` 方法在单个路径中创建了两个子路径。然后，这两个子路径通过单个 `stroke()` 方法调用进行渲染。

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

第一条线从 (50, 50) 处开始，至 (200, 50) 处结束。第二条线从 (50, 90) 处开始，至 (280, 120) 处结束。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50); // 开始第一个子路径
ctx.lineTo(200, 50);
ctx.moveTo(50, 90); // 开始第二个子路径
ctx.lineTo(280, 120);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('绘制多条子路径', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
