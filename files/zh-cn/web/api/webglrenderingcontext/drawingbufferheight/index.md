---
title: WebGLRenderingContext.drawingBufferHeight
slug: Web/API/WebGLRenderingContext/drawingBufferHeight
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.drawingBufferHeight`** 只读属性，指示当前绘图缓冲区的实际高度。它应当匹配与绘图上下文相关联的 {{HTMLElement("canvas")}} 元素的高度属性，如果实现未能提供所要求的高度，其值将有所不同。

## 语法

```plain
gl.drawingBufferHeight;
```

## 示例

指定 {{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以通过下面几行代码来获取绘图缓冲区的高度：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.drawingBufferHeight; // 150
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.drawingBufferWidth")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
