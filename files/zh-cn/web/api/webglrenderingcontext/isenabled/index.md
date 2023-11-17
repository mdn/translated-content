---
title: WebGLRenderingContext.isEnabled()
slug: Web/API/WebGLRenderingContext/isEnabled
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.isEnabled()`** 是 [WebGL API](/zh-CN/docs/Web/API/WebGL_API) 方法之一，用来检测给定的 WebGL 功能项在当前上下文是否可用。

默认的，除了 `gl.DITHER`，所有的功能项都是未启用的。

## 句法

```
void gl.isEnabled(cap);
```

### 参数

- `cap`

  - : {{domxref("GLenum")}} 指定待检测的 WebGL 功能项。可能的值有：

    | Constant                      | Description                                                                                                                         |
    | ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Blending of the computed fragment color values. See {{domxref("WebGLRenderingContext.blendFunc()")}}.                               |
    | `gl.CULL_FACE`                | Culling of polygons. See {{domxref("WebGLRenderingContext.cullFace()")}}.                                                           |
    | `gl.DEPTH_TEST`               | Depth comparisons and updates to the depth buffer. See {{domxref("WebGLRenderingContext.depthFunc()")}}.                            |
    | `gl.DITHER`                   | Dithering of color components before they get written to the color buffer.                                                          |
    | `gl.POLYGON_OFFSET_FILL`      | Adding an offset to depth values of polygon's fragments. See {{domxref("WebGLRenderingContext.polygonOffset()")}}.                  |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Computation of a temporary coverage value determined by the alpha value.                                                            |
    | `gl.SAMPLE_COVERAGE`          | ANDing the fragment's coverage with the temporary coverage value. See {{domxref("WebGLRenderingContext.sampleCoverage()")}}.        |
    | `gl.SCISSOR_TEST`             | Scissor test that discards fragments that are outside of the scissor rectangle. See {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Stencil testing and updates to the stencil buffer. See {{domxref("WebGLRenderingContext.stencilFunc()")}}.                          |

    当使用 {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}} 的时候，下列附加的值也是可选用的。

    | Constant                | Description                                                                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitives are discarded immediately before the rasterization stage, but after the optional transform feedback stage. `gl.clear()` commands are ignored. |

### 返回值

{{domxref("GLboolean")}} 指示能力项 _cap_ 可用 (`true`)，不可用 (`false`)。

## 示例

```js
gl.isEnabled(gl.STENCIL_TEST);
// false
```

启用或停用给定的能力项，使用 {{domxref("WebGLRenderingContext.enable()")}} 方法和 {{domxref("WebGLRenderingContext.disable()")}} 方法：

```js
gl.enable(gl.STENCIL_TEST);
gl.disable(gl.STENCIL_TEST);
```

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 另见

- {{domxref("WebGLRenderingContext.enable()")}}
- {{domxref("WebGLRenderingContext.disable()")}}
