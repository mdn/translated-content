---
title: WEBGL_lose_context.loseContext()
slug: Web/API/WEBGL_lose_context/loseContext
---

{{APIRef("WebGL")}}

**WEBGL_lose_context.loseContext()**属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API)，一般用来模拟 {{domxref("WebGLRenderingContext")}} 的上下文丢失。

这个方法会触发 WebGL 规范中上下文丢失的相关事件。通过这个方法丢失的上下文可以通过 {{domxref("WEBGL_lose_context.restoreContext()")}} 恢复。

## 语法

```plain
gl.getExtension('WEBGL_lose_context').loseContext();
```

## 示例

你可以用这个方法模拟 [`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) 事件：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextlost",
  function (e) {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").loseContext();

// webglcontextlost 事件被触发。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- 事件： [`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
