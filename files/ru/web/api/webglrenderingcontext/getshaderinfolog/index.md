---
title: WebGLRenderingContext.getShaderInfoLog()
slug: Web/API/WebGLRenderingContext/getShaderInfoLog
---

{{APIRef("WebGL")}}

**WebGLRenderingContext.getShaderInfoLog** возвращает логи для указанной шейдерной программы {{domxref("WebGLShader")}}. Оно содержит предупреждения, информацию для отладки и информацию о компиляции.

## Синтаксис

```
gl.getShaderInfoLog(shader);
```

### Параметры

- shader
  - : Шейдер {{domxref("WebGLShader")}} чьи логи мы запрашиваем.

### Возвращаемое значение

{{domxref("DOMString")}} может содержать диагностические сообщения, предупреждения и другую информацию о последней операции компиляции. Когда {{domxref("WebGLShader")}} объект создан, его информационный журнал будет строкой длинной 0.

## Примеры

### Проверить сообщения компиляции

```js
/* Загружаем исходный код программы. */
gl.shaderSource(shader, shaderCode);

/* Компилируем программу. */
gl.compileShader(shader);

/* Получаем список сообщений */
var message = gl.getShaderInfoLog(shader);

if (message.length > 0) {
  /* Сообщение может быть ошибкой или предупреждением */
  throw message;
}
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLRenderingContext.getShaderParameter()")}} – использование с `gl.COMPILE_STATUS` для проверки ошибок компиляции.
- {{domxref("WebGLRenderingContext.getError()")}}
