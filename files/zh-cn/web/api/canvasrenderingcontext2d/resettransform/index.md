---
title: CanvasRenderingContext2D.resetTransform()
slug: Web/API/CanvasRenderingContext2D/resetTransform
---

{{APIRef}} {{SeeCompatTable}}

**`CanvasRenderingContext2D.resetTransform()`** 是 Canvas 2D API 使用单位矩阵重新设置当前变形的方法。

## 语法

```
void ctx.resetTransform();
```

## 示例

### 重置矩阵

这是一段使用 `resetTransform` 方法的简单的代码片段。

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Draw a rotated rectangle
ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(60, 0, 100, 30);

// Reset transformation matrix to the identity matrix
ctx.resetTransform();
```

#### 结果

{{ EmbedLiveSample('重置矩阵', 700, 180) }}

## 综合设置

你可以使用 {{domxref("CanvasRenderingContext2D.setTransform()")}} 方法重新设置当前变形为单位矩阵，如下：

```js
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}
