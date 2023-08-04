---
title: WebGLRenderingContext.canvas
slug: Web/API/WebGLRenderingContext/canvas
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.canvas`** 只读属性，对 {{domxref("HTMLCanvasElement")}} 和 {{domxref("OffscreenCanvas")}} 对象的引用。如果绘图上下文没有相关联的 {{HTMLElement("canvas")}} 元素或 {{domxref("OffscreenCanvas")}} 对象，值为 {{jsxref("null")}}。

## 语法

```plain
gl.canvas;
```

### 返回值

{{domxref("HTMLCanvasElement")}} 或 {{domxref("OffscreenCanvas")}} 或 {{jsxref("null")}}。

## 示例

### Canvas 元素

指定 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以通过 canvas 得到一个从 `WebGLRenderingContext` 返回的引用：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.canvas; // HTMLCanvasElement
```

### 离屏 Canvas

下面是一个使用试验阶段 {{domxref("OffscreenCanvas")}} 对象的示例：

```js
var offscreen = new OffscreenCanvas(256, 256);
var gl = offscreen.getContext("webgl");
gl.canvas; // OffscreenCanvas
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("CanvasRenderingContext2D.canvas")}}
- {{domxref("OffscreenCanvas")}}
