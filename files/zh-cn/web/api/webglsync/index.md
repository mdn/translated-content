---
title: WebGLSync
slug: Web/API/WebGLSync
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

The **`WebGLSync`** interface is part of the [WebGL 2](/zh-CN/docs/Web/API/WebGL_API) API and is used to synchronize activities between the GPU and the application.

When working with `WebGLSync` objects, the following methods of the {{domxref("WebGL2RenderingContext")}} are useful:

- {{domxref("WebGL2RenderingContext.fenceSync()")}}
- {{domxref("WebGL2RenderingContext.deleteSync()")}}
- {{domxref("WebGL2RenderingContext.isSync()")}}
- {{domxref("WebGL2RenderingContext.clientWaitSync()")}}
- {{domxref("WebGL2RenderingContext.waitSync()")}}
- {{domxref("WebGL2RenderingContext.getSyncParameter()")}}

## 示例

### 创建一个 WebGLSync 对象

in this example, `gl` must be a {{domxref("WebGL2RenderingContext")}}. `WebGLSync` objects are not available in WebGL 1.

```js
var sync = gl.fenceSync(gl.SYNC_GPU_COMMANDS_COMPLETE, 0);
```

## Specifications

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 相关链接

- {{domxref("WebGLRenderingContext.finish()")}}
