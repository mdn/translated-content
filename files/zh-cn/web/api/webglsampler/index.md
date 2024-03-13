---
title: WebGLSampler
slug: Web/API/WebGLSampler
---

{{APIRef("WebGL")}} {{SeeCompatTable}}

[WebGL 2](/zh-CN/docs/Web/API/WebGL_API) API 的 **`WebGLSampler`** 接口存储一系列采样参数，供 {{domxref("WebGLTexture")}} 在着色器中访问。

当使用 `WebGLSampler` 对象时，有以下 {{domxref("WebGL2RenderingContext")}} 相关方法：

- {{domxref("WebGL2RenderingContext.createSampler()")}}
- {{domxref("WebGL2RenderingContext.deleteSampler()")}}
- {{domxref("WebGL2RenderingContext.isSampler()")}}
- {{domxref("WebGL2RenderingContext.bindSampler()")}}
- {{domxref("WebGL2RenderingContext.getSamplerParameter()")}}

## 示例

### 创建 `WebGLSampler` 对象

在本例中，`gl` 必须是一个 {{domxref("WebGL2RenderingContext")}} 对象。因为 `WebGLSampler` 在 WebGL 1 中是不可用的。

```js
var sampler = gl.createSampler();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
