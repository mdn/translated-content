---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
---

{{APIRef}}

**`CanvasRenderingContext2D.canvas`** 属性是 [Canvas API](/zh-CN/docs/Web/API/Canvas_API) 的一部分，是对与给定上下文关联的{{domxref("HTMLCanvasElement")}}对象的只读引用。如果没有 {{HTMLElement("canvas")}} 元素与之对应，对象值为{{jsxref("null")}} 。

## 语法

```plain
ctx.canvas;
```

## 示例

给出 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以通过 CanvasRenderingContext2D 调用内部的 canvas 属性，获取 canvas 的一个反向引用：

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## 规范描述

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("CanvasRenderingContext2D")}} 接口
- [Canvas API](/zh-CN/docs/Web/API/Canvas_API)
