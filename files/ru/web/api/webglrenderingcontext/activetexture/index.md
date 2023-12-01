---
title: WebGLRenderingContext.activeTexture()
slug: Web/API/WebGLRenderingContext/activeTexture
---

{{APIRef("WebGL")}}

**`WebGLRenderingContext.activeTexture()`** метод [WebGL API](/ru/docs/Web/API/WebGL_API) указывает какую текстуру сделать активной.

## Синтаксис

```
void gl.activeTexture(texture);
```

### Параметры

- `texture`
  - : Номер текстуры которую необходимо активировать. Значение `gl.TEXTUREI` где _I_ значение в диапазоне от 0 до `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`.

### Возвращаемое значение

None.

### Исключения

Если _texture_ не относится к `gl.TEXTUREI`, где _I_ значение в диапазоне от 0 до `gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS - 1`, то получаем исключение `gl.INVALID_ENUM` .

## Примеры

Вызов со значением `gl.TEXTURE1` выберет текстуру в качестве текущей. Последующие вызовы будут изменять эту текстуру.

```js
gl.activeTexture(gl.TEXTURE1);
```

Количество текстур зависит от реализации, вы можете получить количество текстур с помощью константы `MAX_COMBINED_TEXTURE_IMAGE_UNITS`. Согласно спецификации не менее 8.

```js
gl.getParameter(gl.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
```

чтобы получить текущую активную текстуру вызовите `gl.getParameter` с константой `ACTIVE_TEXTURE`.

```js
gl.activeTexture(gl.TEXTURE0);
gl.getParameter(gl.ACTIVE_TEXTURE);
// вернёт "33984" (0x84C0, gl.TEXTURE0 enum value)
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.getParameter()")}}
