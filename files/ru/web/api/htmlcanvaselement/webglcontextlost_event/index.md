---
title: "HTMLCanvasElement: событие webglcontextlost"
slug: Web/API/HTMLCanvasElement/webglcontextlost_event
---

{{APIRef}}

Событие **`webglcontextlost`** [WebGL API](/ru/docs/Web/API/WebGL_API) вызывается когда {{Glossary("User agent")}}
обнаруживает, что буфер, связанный с {{domxref("WebGLRenderingContext")}}, потерян.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Всплытие</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Отменяемое</th>
      <td>Да</td>
    </tr>
    <tr>
      <th scope="row">Интерфейс</th>
      <td>{{domxref("WebGLContextEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Свойство для обработки события</th>
      <td>Нет</td>
    </tr>
  </tbody>
</table>

## Пример

Вы можете эмулировать `webglcontextlost` событие с помощью расширения {{domxref("WEBGL_lose_context")}}:

```js
const canvas = document.getElementById("canvas");
const gl = canvas.getContext("webgl");

canvas.addEventListener("webglcontextlost", (event) => {
  console.log(event);
});

gl.getExtension("WEBGL_lose_context").loseContext();

// будет выведено "webglcontextlost".
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("WebGLContextEvent")}}
- {{domxref("WebGLRenderingContext.isContextLost()")}}
- {{domxref("WEBGL_lose_context")}}, {{domxref("WEBGL_lose_context.loseContext()")}}, {{domxref("WEBGL_lose_context.restoreContext()")}}
