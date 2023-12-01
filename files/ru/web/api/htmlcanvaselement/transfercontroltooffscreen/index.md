---
title: HTMLCanvasElement.transferControlToOffscreen()
slug: Web/API/HTMLCanvasElement/transferControlToOffscreen
---

{{APIRef("Canvas API")}} {{SeeCompatTable}}

**`HTMLCanvasElement.transferControlToOffscreen()`**
передаёт управление объекту {{domxref("OffscreenCanvas")}}, который может использоваться либо в основном потоке, либо в {{domxref("Worker")}}.

## Синтаксис

```js
OffscreenCanvas HTMLCanvasElement.transferControlToOffscreen()
```

### Возвращаемое значение

Объект {{domxref("OffscreenCanvas")}}.

## Примеры

```js
var htmlCanvas = document.createElement("canvas");
var offscreen = htmlCanvas.transferControlToOffscreen();
var gl = offscreen.getContext("webgl");

// ... отрисовка с помощью  gl контекста ...

// Возвращаем кадры в исходный HTMLCanvasElement
gl.commit();
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий метод: {{domxref("HTMLCanvasElement")}}
- {{domxref("OffscreenCanvas")}}
- {{domxref("WebGLRenderingContext.commit()")}}
