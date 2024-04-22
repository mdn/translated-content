---
title: WebGLProgram
slug: Web/API/WebGLProgram
---

{{APIRef("WebGL")}}

**WebGLProgram** это часть [WebGL API](/ru/docs/Web/API/WebGL_API) и комбинация двух составляющих {{domxref("WebGLShader")}}-ов, состоящих из вертикального и фрагментного шейдеров (оба написаны на GLSL). Затем они связываются в готовую к использованию программу.

```js
var program = gl.createProgram();

// Прикрепление уже существующих шейдеров
gl.attachShader(program, vertexShader);
gl.attachShader(program, fragmentShader);

gl.linkProgram(program);

if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
  var info = gl.getProgramInfoLog(program);
  throw "Could not compile WebGL program. \n\n" + info;
}
```

Смотрите {{domxref("WebGLShader")}} для информации о том, как создать `vertexShader` и `fragmentShader` в примере выше.

## Примеры

### Использование программы

Шаги для того, чтобы сделать какую-то работу с программой, включают сообщение GPU об использовании программы, связывание соответствующих данных и параметров конфигурации и наконец отрисовку чего-то на экране.

```js
// Использование программы
gl.useProgram(program);

// Связывание существующих атрибутов данных
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.enableVertexAttribArray(attributeLocation);
gl.vertexAttribPointer(attributeLocation, 3, gl.FLOAT, false, 0, 0);

// Отрисовка простого треугольника
gl.drawArrays(gl.TRIANGLES, 0, 3);
```

### Удаление программы

Если существует ошибка связывания программы или вы хотите удалить существующую программу, тогда это так же просто, как запустить {{domxref("WebGLRenderingContext.deleteProgram()")}}. Это освободит память от связанной программы.

```js
gl.deleteProgram(program);
```

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLShader")}}
- {{domxref("WebGLRenderingContext.attachShader()")}}
- {{domxref("WebGLRenderingContext.compileShader()")}}
- {{domxref("WebGLRenderingContext.createProgram()")}}
- {{domxref("WebGLRenderingContext.createShader()")}}
- {{domxref("WebGLRenderingContext.deleteProgram()")}}
- {{domxref("WebGLRenderingContext.deleteShader()")}}
- {{domxref("WebGLRenderingContext.detachShader()")}}
- {{domxref("WebGLRenderingContext.getAttachedShaders()")}}
- {{domxref("WebGLRenderingContext.getProgramParameter()")}}
- {{domxref("WebGLRenderingContext.getProgramInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderParameter()")}}
- {{domxref("WebGLRenderingContext.getShaderPrecisionFormat()")}}
- {{domxref("WebGLRenderingContext.getShaderInfoLog()")}}
- {{domxref("WebGLRenderingContext.getShaderSource()")}}
- {{domxref("WebGLRenderingContext.isProgram()")}}
- {{domxref("WebGLRenderingContext.isShader()")}}
- {{domxref("WebGLRenderingContext.linkProgram()")}}
- {{domxref("WebGLRenderingContext.shaderSource()")}}
- {{domxref("WebGLRenderingContext.useProgram()")}}
- {{domxref("WebGLRenderingContext.validateProgram()")}}
