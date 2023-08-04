---
title: WEBGL_lose_context
slug: Web/API/WEBGL_lose_context
---

{{APIRef("WebGL")}}

**WEBGL_lose_context** 是属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一个扩展 API，它提供一组方法用来模拟一个 {{domxref("WebGLRenderingContext")}} 上下文的丢失和恢复。

WebGL 扩展可以通过 {{domxref("WebGLRenderingContext.getExtension()")}} 方法来使用。更多信息可参阅 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial) 中的 [使用 WebGL 扩展](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions) 。

> **备注：** 该扩展在 {{domxref("WebGLRenderingContext", "WebGL1", "", 1)}} 和 {{domxref("WebGL2RenderingContext", "WebGL2", "", 1)}} 上下文中都是可用的。

## 方法

- {{domxref("WEBGL_lose_context.loseContext()")}}
  - : 模拟上下文丢失。
- {{domxref("WEBGL_lose_context.restoreContext()")}}
  - : 模拟上下文恢复。

## 示例

使用这个扩展，你可以模拟 [`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event) 和 [`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) 事件：

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

// 打印了 "webglcontextlost" 类型的 WebGLContextEvent 事件。
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- 事件：[`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)、[`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)、[`webglcontextcreationerror`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
