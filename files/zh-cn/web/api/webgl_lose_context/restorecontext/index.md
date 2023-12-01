---
title: WEBGL_lose_context.restoreContext()
slug: Web/API/WEBGL_lose_context/restoreContext
---

{{APIRef("WebGL")}}

**WEBGL_lose_context.restoreContext()** 属于 [WebGL API](/zh-CN/docs/Web/API/WebGL_API)，一般用来模拟 {{domxref("WebGLRenderingContext")}} 的上下文恢复。

## 语法

```plain
gl.getExtension('WEBGL_lose_context').restoreContext();
```

### 抛出错误

- `INVALID_OPERATION` 上下文尚未丢失

## 示例

你可以用这个方法模拟 [`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event) 事件：

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");

canvas.addEventListener(
  "webglcontextrestored",
  function (e) {
    console.log(e);
  },
  false,
);

gl.getExtension("WEBGL_lose_context").restoreContext();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.isContextLost()")}}
- 事件： [`webglcontextlost`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextlost_event), [`webglcontextrestored`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event), [`webglcontextcreationerror`](/zh-CN/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
