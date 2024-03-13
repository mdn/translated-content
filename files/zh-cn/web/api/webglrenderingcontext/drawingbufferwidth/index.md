---
title: WebGLRenderingContext.drawingBufferWidth
slug: Web/API/WebGLRenderingContext/drawingBufferWidth
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.drawingBufferWidth`** 只读属性，指示当前绘图缓冲区的实际宽度。它应当匹配与绘图上下文相关联的 {{HTMLElement("canvas")}} 元素的宽度属性。如果实现未能提供所要求的宽度，值将有所不同。

## 语法

```plain
gl.drawingBufferWidth;
```

## 示例

指定{{HTMLElement("canvas")}} 元素：

```html
<canvas id="canvas"></canvas>
```

你可以通过下面几行代码来获取绘图缓冲区的宽度：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.drawingBufferWidth; // 300
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.drawingBufferHeight")}}
- {{domxref("WebGLRenderingContext.viewport()")}}
