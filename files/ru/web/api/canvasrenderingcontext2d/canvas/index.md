---
title: CanvasRenderingContext2D.canvas
slug: Web/API/CanvasRenderingContext2D/canvas
---

{{APIRef}}

Свойство **`CanvasRenderingContext2D.canvas`** является доступной только для чтения ссылкой на объект {{domxref("HTMLCanvasElement")}}, связанный с текущим контекстом. Может иметь значение {{jsxref("null")}}, если контекст не связан с элементом {{HTMLElement("canvas")}}.

## Синтаксис

```
ctx.canvas;
```

## Примеры

Создадим элемент {{HTMLElement("canvas")}}:

```html
<canvas id="canvas"></canvas>
```

Вы можете получить ссылку на этот элемент из объекта `CanvasRenderingContext2D,` используя свойство `canvas`:

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.canvas; // HTMLCanvasElement
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("CanvasRenderingContext2D")}}
- [Canvas API](/ru/docs/Web/API/Canvas_API)
