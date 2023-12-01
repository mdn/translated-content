---
title: WebGLRenderingContext.getContextAttributes()
slug: Web/API/WebGLRenderingContext/getContextAttributes
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.getContextAttributes()`** 方法返回一个包含实际上下文参数的 `WebGLContextAttributes` 对象。如果上下文丢失，可能返回 {{jsxref("null")}}。

## 语法

```plain
gl.getContextAttributes();
```

### 返回值

一个包含实际上下文参数的 `WebGLContextAttributes` 的对象，或 {{jsxref("null")}}（如果上下文丢失）。

## 实例

给定 {{HTMLElement("canvas")}} 元素

```html
<canvas id="canvas"></canvas>
```

和给定 WebGL 上下文

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
gl.getContextAttributes();
```

`getContextAttributes` 方法返回描述在此上下文中设置的属性的对象，例如：

```js
{
  alpha: true,
  antialias: true,
  depth: true,
  failIfMajorPerformanceCaveat: false,
  premultipliedAlpha: true,
  preserveDrawingBuffer: false,
  stencil: false
}
```

上下文的属性可以在用 {{domxref("HTMLCanvasElement.getContext()")}} 方法创建上下文时设置：

```js
canvas.getContext("webgl", { antialias: false, depth: false });
```

有关各个属性的更多信息，请参阅 {{domxref("HTMLCanvasElement.getContext()", "getContext()")}}。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext")}}
