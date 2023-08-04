---
title: WebGLRenderingContext.bindTexture()
slug: Web/API/WebGLRenderingContext/bindTexture
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.bindTexture()`** метод [WebGL API](/ru/docs/Web/API/WebGL_API) связывает {{domxref("WebGLTexture")}} с `target`.

## Синтаксис

```
void gl.bindTexture(target, texture);
```

### Параметры

- target

  - : {{domxref("GLenum")}} указывает тип объекта `texture` для связывания. Возможные значения:

    - `gl.TEXTURE_2D`: двухмерная текстура.
    - `gl.TEXTURE_CUBE_MAP`: кубическая текстура.
    - При использовании {{domxref("WebGL2RenderingContext", "WebGL 2 context", "", 1)}}, дополнительно доступны:

      - `gl.TEXTURE_3D`: трёхмерная текстура.
      - `gl.TEXTURE_2D_ARRAY`: массив двумерных текстур.

- texture
  - : {{domxref("WebGLTexture")}} объект связывания

### Возвращаемое значение

None.

### Исключения

`gl.INVALID_ENUM` исключение если `target` не `gl.TEXTURE_2D`, `gl.TEXTURE_CUBE_MAP`, `gl.TEXTURE_3D`, или `gl.TEXTURE_2D_ARRAY`.

## Примеры

### Привязка текстуры

```js
var canvas = document.getElementById("canvas");
var gl = canvas.getContext("webgl");
var texture = gl.createTexture();

gl.bindTexture(gl.TEXTURE_2D, texture);
```

### Получить текущую привязку

Для проверки текущей привязки текстуры, вызовите `gl.TEXTURE_BINDING_2D` или `gl.TEXTURE_BINDING_CUBE_MAP`.

```js
gl.getParameter(gl.TEXTURE_BINDING_2D);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

<!---->

- {{domxref("WebGLRenderingContext.createTexture()")}}
- {{domxref("WebGLRenderingContext.deleteTexture()")}}
- {{domxref("WebGLRenderingContext.isTexture()")}}
- {{domxref("WebGLRenderingContext.texImage2D()")}}
