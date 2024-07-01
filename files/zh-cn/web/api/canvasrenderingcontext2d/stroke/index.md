---
title: CanvasRenderingContext2D.stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
---

{{APIRef}}

**`CanvasRenderingContext2D.stroke()`** 是 Canvas 2D API 使用非零环绕规则，根据当前的画线样式，绘制当前或已经存在的路径的方法。

## 语法

```
void ctx.stroke();
void ctx.stroke(path);
```

### Parameters

- `path`
  - : 绘制的路径{{domxref("Path2D")}} 。

## 示例

### 一个简单的矩形轮廓线

这是一段简单的代码片段，使用 `stroke` 方法绘制一条路径。

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

{{ EmbedLiveSample('一个简单的矩形轮廓线', 700, 180) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
