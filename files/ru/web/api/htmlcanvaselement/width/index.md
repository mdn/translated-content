---
title: HTMLCanvasElement.width
slug: Web/API/HTMLCanvasElement/width
---

{{APIRef("Canvas API")}}

Свойство **`HTMLCanvasElement.width`** — это положительное
`целое число`, отображающее значение HTML атрибута [`width`](/ru/docs/Web/HTML/Element/canvas#width) элемента {{HTMLElement("canvas")}} в CSS пикселях.
Если атрибут не указан или для него задано недопустимое значение, например отрицательное, то используется значение по умолчанию `300`.

Одно из двух свойств (другое — {{domxref("HTMLCanvasElement.height")}}), контролирующих размер холста.

## Синтаксис

```js
var pxl = canvas.width;
canvas.width = pxl;
```

## Примеры

Возьмём следующий {{HTMLElement("canvas")}} элемент:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Вы можете получить ширину холста следующим образом:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLCanvasElement")}}.
- Другое свойство, контролирующее размер холста,
  {{domxref("HTMLCanvasElement.height")}}.
