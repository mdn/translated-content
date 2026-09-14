---
title: WebGLTexture
slug: Web/API/WebGLTexture
l10n:
  sourceCommit: 2b942f0d8f84641c233d701cb5d1f4e6c23120ff
---

{{APIRef("WebGL")}}{{AvailableInWorkers}}

**WebGLTexture** 接口是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 的一部分，表示一个不透明的纹理对象，为纹理操作提供存储和状态。

{{InheritanceDiagram}}

## WebGL 纹理

`WebGLTexture` 对象自身未定义任何方法或属性，其内容也无法直接访问。使用 `WebGLTexture` 对象时，{{domxref("WebGLRenderingContext")}} 的下列方法很有用：

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}

另请参阅 [WebGL 教程](/zh-CN/docs/Web/API/WebGL_API/Tutorial)中的[在 WebGL 中使用纹理](/zh-CN/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL)。

## WebXR 不透明纹理

使用 [WebXR](/zh-CN/docs/Web/API/WebXR_Device_API) 图层时，{{domxref("XRWebGLBinding")}} 对象会为颜色附件和深度/模板附件返回*不透明*的 `WebGLTexture` 实例。

返回*不透明* `WebGLTexture` 对象的 WebXR 方法：

- {{domxref("XRWebGLBinding.getSubImage()")}}
- {{domxref("XRWebGLBinding.getViewSubImage()")}}

WebXR *不透明纹理*与标准 `WebGLTexture` 相同，但有以下例外：

- 在其会话的 WebXR [`requestAnimationFrame()` 回调](/zh-CN/docs/Web/API/XRSession/requestAnimationFrame)之外，WebXR 不透明纹理无效。
- 在由 {{domxref("XRWebGLBinding.getSubImage()")}} 或 {{domxref("XRWebGLBinding.getViewSubImage()")}} 返回之前，WebXR 不透明纹理无效。
- 用于颜色附件的 WebXR 不透明纹理包含预乘 alpha 的颜色。
- 在 [`requestAnimationFrame()` 回调](/zh-CN/docs/Web/API/XRSession/requestAnimationFrame)结束时，WebXR 不透明纹理会被解除绑定，并与所有 {{domxref("WebGLShader")}} 对象分离。
- 即使使用 WebGL 1.0 上下文，WebXR 不透明纹理的行为也如同使用 {{domxref("WebGL2RenderingContext.texStorage2D", "texStorage2D")}} 或 {{domxref("WebGL2RenderingContext.texStorage3D", "texStorage3D")}}（视情况而定）分配。
- 若对 WebXR 不透明纹理调用 {{domxref("WebGLRenderingContext.deleteTexture()")}}，将抛出 `INVALID_OPERATION` 错误。
- 不允许更改 WebXR 不透明纹理的尺寸或格式。GL 函数只能修改纹素（texel）值和纹理参数。

## 示例

### 创建纹理

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");
const texture = gl.createTexture();
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("WebGLRenderingContext.bindTexture()")}}
- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.compressedTexImage2D()")}}
- {{domxref("WebGLRenderingContext.compressedTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexImage2D()")}}
- {{domxref("WebGLRenderingContext.copyTexSubImage2D()")}}
- {{domxref("WebGLRenderingContext.generateMipmap()")}}
- {{domxref("WebGLRenderingContext.getTexParameter()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
- {{domxref("WebGLRenderingContext.texSubImage2D()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameterf()")}}
- {{domxref("WebGLRenderingContext/texParameter", "WebGLRenderingContext.texParameteri()")}}
