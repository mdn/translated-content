---
title: CanvasRenderingContext2D：translate() 方法
slug: Web/API/CanvasRenderingContext2D/translate
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.translate()`** 方法用于对当前网格添加平移变换。

## 语法

```js-nolint
translate(x, y)
```

`translate()` 方法通过在网格上将画布和原点水平移动 `x` 单位和垂直移动 `y` 单位，向当前矩阵添加一个平移变换。

![基于 translate 方法的值将画布的原点在 x 和 y 轴上移动。](canvas_grid_translate.png)

### 参数

- `x`
  - : 在水平方向上移动的距离。正值向右移动，负值向左移动。
- `y`
  - : 在垂直方向上移动的距离。正值向下移动，负值向上移动。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 移动形状

这个例子使用 `translate()` 方法将一个正方形从其默认位置移动。然后绘制了一个大小相同但未移动的正方形以进行比较。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

`translate()` 方法将上下文在水平方向上移动 110 个单位，在垂直方向上移动 30 个单位。第一个正方形根据这些量从其默认位置移动。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 移动的正方形
ctx.translate(110, 30);
ctx.fillStyle = "red";
ctx.fillRect(0, 0, 80, 80);

// 重置当前的变换矩阵为单位矩阵
ctx.setTransform(1, 0, 0, 1, 0, 0);

// 未移动的正方形
ctx.fillStyle = "gray";
ctx.fillRect(0, 0, 80, 80);
```

#### 结果

移动后的正方形为红色，未移动的正方形为灰色。

{{ EmbedLiveSample('移动形状', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
