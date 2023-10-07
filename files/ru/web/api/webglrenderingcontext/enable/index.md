---
title: WebGLRenderingContext.enable()
slug: Web/API/WebGLRenderingContext/enable
---

{{APIRef("WebGL")}}

Метод **`WebGLRenderingContext.enable()`** из [WebGL API](/ru/docs/Web/API/WebGL_API) активирует определённые возможности WebGL для текущего контекста.

## Синтаксис

```
void gl.enable(cap);
```

### Параметры

- `cap`

  - : A {{domxref("GLenum")}} specifying which WebGL capability to enable. Possible values:

    | Константа                     | Описание                                                                                                                                          |
    | ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.BLEND`                    | Активирует смешение значений цветов вычисленного фрагмента. Смотри {{domxref("WebGLRenderingContext.blendFunc()")}}.                              |
    | `gl.CULL_FACE`                | Активирует отбраковку полигонов. Смотри {{domxref("WebGLRenderingContext.cullFace()")}}.                                                          |
    | `gl.DEPTH_TEST`               | Активирует сравнения глубин и обновления для буфера глубины. Смотри {{domxref("WebGLRenderingContext.depthFunc()")}}.                             |
    | `gl.DITHER`                   | Activates dithering of color components before they get written to the color buffer.                                                              |
    | `gl.POLYGON_OFFSET_FILL`      | Activates adding an offset to depth values of polygon's fragments. See {{domxref("WebGLRenderingContext.polygonOffset()")}}.                      |
    | `gl.SAMPLE_ALPHA_TO_COVERAGE` | Activates the computation of a temporary coverage value determined by the alpha value.                                                            |
    | `gl.SAMPLE_COVERAGE`          | Activates ANDing the fragment's coverage with the temporary coverage value. See {{domxref("WebGLRenderingContext.sampleCoverage()")}}.            |
    | `gl.SCISSOR_TEST`             | Activates the scissor test that discards fragments that are outside of the scissor rectangle. See {{domxref("WebGLRenderingContext.scissor()")}}. |
    | `gl.STENCIL_TEST`             | Activates stencil testing and updates to the stencil buffer. See {{domxref("WebGLRenderingContext.stencilFunc()")}}.                              |

    When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

    | Constant                | Description                                                                                                                                              |
    | ----------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
    | `gl.RASTERIZER_DISCARD` | Primitives are discarded immediately before the rasterization stage, but after the optional transform feedback stage. `gl.clear()` commands are ignored. |

### Return value

None.

## Examples

```js
gl.enable(gl.DITHER);
```

To check if a capability is enabled, use the {{domxref("WebGLRenderingContext.isEnabled()")}} method:

```js
gl.isEnabled(gl.DITHER);
// true
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.disable()")}}
- {{domxref("WebGLRenderingContext.isEnabled()")}}
