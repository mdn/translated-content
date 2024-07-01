---
title: WebGLRenderingContext.clear()
slug: Web/API/WebGLRenderingContext/clear
---

{{APIRef("WebGL")}}

Метод **`WebGLRenderingContext.clear()`** из библиотеки [WebGL API](/ru/docs/Web/API/WebGL_API) очищает буфер заданными значениями.

Заданные значения могут быть установлены {{domxref("WebGLRenderingContext.clearColor", "clearColor()")}}, {{domxref("WebGLRenderingContext.clearDepth", "clearDepth()")}} или {{domxref("WebGLRenderingContext.clearStencil", "clearStencil()")}}.

The scissor box, dithering, and buffer writemasks can affect the `clear()` method.

## Синтаксис

```
void gl.clear(mask);
```

### Параметры

- `mask`

  - : Побитовая маска ИЛИ {{domxref("GLbitfield")}} указывает какие конкретно буферы нужно очистить. Возможные значения:

    - `gl.COLOR_BUFFER_BIT`
    - `gl.DEPTH_BUFFER_BIT`
    - `gl.STENCIL_BUFFER_BIT`

### Возвращаемое значение

Ничего.

### Исключения

Если _mask_ не является ни одним из перечисленных значений, то генерируется ошибка `gl.INVALID_ENUM`.

## Примеры

Метод `clear()` принимает несколько значений.

```js
gl.clear(gl.DEPTH_BUFFER_BIT);
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT);
```

Чтобы получить текущее значение очистки буфера, нужно воспользоваться следующими константами: `COLOR_CLEAR_VALUE`, `DEPTH_CLEAR_VALUE`, и `STENCIL_CLEAR_VALUE`.

```js
gl.getParameter(gl.COLOR_CLEAR_VALUE);
gl.getParameter(gl.DEPTH_CLEAR_VALUE);
gl.getParameter(gl.STENCIL_CLEAR_VALUE);
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.clearColor()")}}
- {{domxref("WebGLRenderingContext.clearDepth()")}}
- {{domxref("WebGLRenderingContext.clearStencil()")}}
