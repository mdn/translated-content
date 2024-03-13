---
title: CanvasRenderingContext2D.isPointInStroke()
slug: Web/API/CanvasRenderingContext2D/isPointInStroke
---

{{APIRef}}

**`CanvasRenderingContext2D.isPointInStroke()`** 是 Canvas 2D API 用于检测某点是否在路径的描边线上的方法。

## 语法

```
boolean ctx.isPointInStroke(x, y);
boolean ctx.isPointInStroke(path, x, y);
```

### 参数

- x
  - : 检测点的 X 坐标。
- y
  - : 检测点的 Y 坐标。
- `path`
  - : {{domxref("Path2D")}} 路径。

### 返回值

- {{jsxref("Boolean")}}
  - : 一个布尔值，当这个点在路径的描边线上，则返回 true，否则返回 false。

## 示例

### 检查当前路径中的点

这只是一个使用 **`isPointInStroke`** 方法的简单的代码片段，用于检测一个点是否在路径的描边线上。

#### HTML

```html
<canvas id="canvas"></canvas>
<p>In stroke: <code id="result">false</code></p>
```

#### JavaScript

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const result = document.getElementById("result");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
result.innerText = ctx.isPointInStroke(50, 10);
```

#### 结果

{{ EmbedLiveSample('检查当前路径中的点', 700, 220) }}

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- 接口定义， {{domxref("CanvasRenderingContext2D")}}.
