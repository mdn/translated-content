---
title: CanvasRenderingContext2D：getLineDash() 方法
slug: Web/API/CanvasRenderingContext2D/getLineDash
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef}}

Canvas 2D API 的 {{domxref("CanvasRenderingContext2D")}} 接口的 **`getLineDash()`** 方法用于获取当前的虚线样式。

## 语法

```js-nolint
getLineDash()
```

### 参数

无。

### 返回值

一个由数字组成的 {{jsxref("Array")}}，用于指定绘制虚线和空隙的距离（以坐标空间单位计算）。如果在设置数组元素时数组长度为奇数，则数组元素会被复制并连接起来。例如，将虚线设置为 `[5, 15, 25]` 将得到 `[5, 15, 25, 5, 15, 25]`。

## 示例

### 获取当前的虚线设置

此示例演示了 `getLineDash` 方法。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

ctx.setLineDash([10, 20]);
console.log(ctx.getLineDash()); // [10, 20]

// 画一条虚线
ctx.beginPath();
ctx.moveTo(0, 50);
ctx.lineTo(300, 50);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('获取当前的划线设置', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.setLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
