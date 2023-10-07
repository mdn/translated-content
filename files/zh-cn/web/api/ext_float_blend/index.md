---
title: EXT_float_blend
slug: Web/API/EXT_float_blend
---

{{APIRef("WebGL")}}

[WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的 `EXT_float_blend` 扩展允许使用 32 位浮点数组件来混合和绘制缓冲区。

若要查询该扩展是否存在，可以用方法：{{domxref("WebGLRenderingContext.getExtension()")}}。更多信息可以参考 [WebGL tutorial](/zh-CN/docs/Web/API/WebGL_API/Tutorial) 中的 [Using Extensions](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions)。

> **备注：** 该扩展在 {{domxref("WebGLRenderingContext", "WebGL1")}} 和{{domxref("WebGL2RenderingContext", "WebGL2")}} 上下文中均存在。但是，要使用它，你需要启用对 32 位浮点绘制缓冲区的使用{{domxref("WEBGL_color_buffer_float")}}（for WebGL1）或 {{domxref("EXT_color_buffer_float")}}（WebGL2）。通过启用 32 位浮点缓冲区扩展，将自动启用`EXT_float_blend`。

该组件启用后，使用 32 位浮点数混合方式绘制，调用 {{domxref("WebGLRenderingContext.drawArrays", "drawArrays()")}} 或 {{domxref("WebGLRenderingContext.drawElements", "drawElements()")}} 时，将不再产生 `INVALID_OPERATION` 异常。

## 使用说明

在支持 `EXT_float_blend` 扩展的设备上，当以下几种有一种或几种扩展启用时{{domxref("EXT_color_buffer_float")}}, {{domxref("OES_texture_float")}}, 或 {{domxref("WEBGL_color_buffer_float")}}，该扩展将会自动、隐式的启用。这确保了在该扩展定义之前的内容也都能够按照预期正确执行。

## 例子

```js
const gl = canvas.getContext("webgl2");

// enable necessary extensions
gl.getExtension("EXT_color_buffer_float");
gl.getExtension("EXT_float_blend");

const tex = gl.createTexture();
gl.bindTexture(gl.TEXTURE_2D, tex);

// use floating point format
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA32F, 1, 1, 0, gl.RGBA, gl.FLOAT, null);

const fb = gl.createFramebuffer();
gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
gl.framebufferTexture2D(
  gl.FRAMEBUFFER,
  gl.COLOR_ATTACHMENT0,
  gl.TEXTURE_2D,
  tex,
  0,
);

// enable blending
gl.enable(gl.BLEND);

gl.drawArrays(gl.POINTS, 0, 1);
// won't throw gl.INVALID_OPERATION with the extension enabled
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 其他参考

- [WebGL API](/zh-CN/docs/Web/API/WebGL_API)
- [Using WebGL extensions](/zh-CN/docs/Web/API/WebGL_API/Using_Extensions)
- [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)
- {{domxref("WebGLRenderingContext.getExtension()")}}
- {{domxref("EXT_color_buffer_float")}}
- {{domxref("WEBGL_color_buffer_float")}}
- {{domxref("WebGLRenderingContext.drawArrays()")}}
- {{domxref("WebGLRenderingContext.drawElements()")}}
