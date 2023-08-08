---
title: WebGLRenderingContext.shaderSource()
slug: Web/API/WebGLRenderingContext/shaderSource
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.shaderSource()`** метод [WebGL API](/ru/docs/Web/API/WebGL_API) записывает исходный код шейдера в шейдерную программу {{domxref("WebGLShader")}}.

## Синтаксис

```
void gl.shaderSource(shader, source);
```

### Параметры

- shader
  - : A {{domxref("WebGLShader")}} объект в который записывается исходный код.
- source
  - : A {{domxref("DOMString")}} исходный код шейдера на GLSL который будет записан.

### Возвращаемое значение

None.

## Примеры

```js
var shader = gl.createShader(gl.VERTEX_SHADER);
gl.shaderSource(shader, originalSource);

var source = gl.getShaderSource(shader);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
