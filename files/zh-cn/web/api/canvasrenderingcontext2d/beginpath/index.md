---
title: CanvasRenderingContext2D：beginPath() 方法
slug: Web/API/CanvasRenderingContext2D/beginPath
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef}}

Canvas 2D API 的 **`CanvasRenderingContext2D.beginPath()`** 方法用于通过清空子路径列表开始一个新路径。当你想创建一个新的路径时，调用此方法。

> [!NOTE]
> 要创建一个新的子路径，即与当前画布状态匹配的路径，可以使用 {{domxref("CanvasRenderingContext2D.moveTo()")}}。

## 语法

```js-nolint
beginPath()
```

### 参数

无。

### 返回值

无（{{jsxref("undefined")}}）。

## 示例

### 创建不同的路径

此示例创建了两条都只包含一条线的路径。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

`beginPath()` 方法在开始每条线之前调用，以便它们可以用不同的颜色绘制。

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 第一条路径
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// 第二条路径
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

#### 结果

{{ EmbedLiveSample('创建不同的路径', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 定义此方法的接口：{{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
