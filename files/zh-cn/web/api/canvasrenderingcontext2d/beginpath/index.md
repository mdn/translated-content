---
title: CanvasRenderingContext2D.beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
---

{{APIRef}}

**`CanvasRenderingContext2D.beginPath()`** 是 Canvas 2D API 通过清空子路径列表开始一个新路径的方法。当你想创建一个新的路径时，调用此方法。

## 语法

```
void ctx.beginPath();
```

## 示例

### 创建不同的路径

这是一段受用 `beginPath` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// First path
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Second path
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

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
