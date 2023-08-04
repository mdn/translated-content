---
title: WebGLRenderingContext.bindBuffer()
slug: Web/API/WebGLRenderingContext/bindBuffer
---

{{APIRef("WebGL")}}

**`ebGLRenderingContext.bindBuffer()`** метод [WebGL API](/ru/docs/Web/API/WebGL_API) связывает {{domxref("WebGLBuffer")}} c точкой связывания(Атрибут регистром).

## Синтаксис

```
void gl.bindBuffer(target, buffer);
```

### Параметры

- target

  - : {{domxref("GLenum")}} определяет точку связывания (target). Возможные значения:

    - `gl.ARRAY_BUFFER`: Буфер содержащий вершинные атрибуты, такие как координаты, текстурные координаты(UV) или цвет вершины.
    - `gl.ELEMENT_ARRAY_BUFFER`: Буфер использующий для индексирования элементов.
    - When using a {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, the following values are available additionally:

      - `gl.COPY_READ_BUFFER`: Buffer for copying from one buffer object to another.
      - `gl.COPY_WRITE_BUFFER`: Buffer for copying from one buffer object to another.
      - `gl.TRANSFORM_FEEDBACK_BUFFER`: Buffer for transform feedback operations.
      - `gl.UNIFORM_BUFFER`: Buffer used for storing uniform blocks.
      - `gl.PIXEL_PACK_BUFFER`: Buffer used for pixel transfer operations.
      - `gl.PIXEL_UNPACK_BUFFER`: Buffer used for pixel transfer operations.

- buffer
  - : {{domxref("WebGLBuffer")}} с которым осуществляется связывание.

### Return value

Нет.

### Exceptions

Only one target can be bound to a given {{domxref("WebGLBuffer")}}. An attempt to bind the buffer to another target will throw an `INVALID_OPERATION` error and the current buffer binding will remain the same.

## Examples

### Binding a buffer to a target

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var buffer = gl.createBuffer();

gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
```

### Getting current bindings

To check the current buffer bindings, query the `ARRAY_BUFFER_BINDING` and `ELEMENT_ARRAY_BUFFER_BINDING` constants.

```js
gl.getParameter(gl.ARRAY_BUFFER_BINDING);
gl.getParameter(gl.ELEMENT_ARRAY_BUFFER_BINDING);
```

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("WebGLRenderingContext.createBuffer()")}}
- {{domxref("WebGLRenderingContext.deleteBuffer()")}}
- {{domxref("WebGLRenderingContext.isBuffer()")}}
- Other buffers: {{domxref("WebGLFramebuffer")}}, {{domxref("WebGLRenderbuffer")}}
