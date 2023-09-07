---
title: HTMLCanvasElement.height
slug: Web/API/HTMLCanvasElement/height
---

{{APIRef("Canvas API")}}

Свойство **`HTMLCanvasElement.height`** — это положительное
`целое число`, отображающее значение HTML атрибута [`height`](/ru/docs/Web/HTML/Element/canvas#height) элемента {{HTMLElement("canvas")}} в CSS пикселях. Если атрибут не указан или
для него задано недопустимое значение, например отрицательное, то используется значение по умолчанию `150`

Одно из двух свойств (другое — {{domxref("HTMLCanvasElement.width")}}), контролирующих размер холста.

## Синтаксис

```js
var pxl = canvas.height;
canvas.height = pxl;
```

## Примеры

Возьмём следующий {{HTMLElement("canvas")}} элемент:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Вы можете получить высоту холста следующим образом:

```js
var canvas = document.getElementById("canvas");
console.log(canvas.height); // 300
```

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLCanvasElement")}}.
- Другое свойство, контролирующее размер холста
  {{domxref("HTMLCanvasElement.width")}}.
