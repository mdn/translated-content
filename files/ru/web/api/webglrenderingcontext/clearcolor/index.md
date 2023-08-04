---
title: WebGLRenderingContext.clearColor()
slug: Web/API/WebGLRenderingContext/clearColor
---

{{APIRef("WebGL")}}

Метод **`WebGLRenderingContext.clearColor()`** из [WebGL API](/ru/docs/Web/API/WebGL_API) определяет значения, используемые для задания цвета во время очистки буферов цвета.

This specifies what color values to use when calling the {{domxref("WebGLRenderingContext.clear", "clear()")}} method. Эти значения находятся в пределах от 0 до 1.

## Syntax

```
void gl.clearColor(red, green, blue, alpha);
```

### Parameters

- `red`
  - : A {{domxref("GLclampf")}} specifying the red color value used when the color buffers are cleared. Default value: 0.
- `green`
  - : A {{domxref("GLclampf")}} specifying the green color value used when the color buffers are cleared. Default value: 0.
- `blue`
  - : A {{domxref("GLclampf")}} specifying the blue color value used when the color buffers are cleared. Default value: 0.
- `alpha`
  - : A {{domxref("GLclampf")}} specifying the alpha (transparency) value used when the color buffers are cleared. Default value: 0.

### Return value

None.

## Examples

```js
gl.clearColor(1, 0.5, 0.5, 3);
```

To get the current clear color, query the `COLOR_CLEAR_VALUE` constant which returns a {{jsxref("Float32Array")}}.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
// Float32Array[1, 0.5, 0.5, 1]
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.clear()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
