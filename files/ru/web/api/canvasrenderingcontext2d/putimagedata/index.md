---
title: CanvasRenderingContext2D.putImageData()
slug: Web/API/CanvasRenderingContext2D/putImageData
---

{{APIRef}}

**`CanvasRenderingContext2D.putImageData()`** метод Canvas 2D API рисует данные из заданного {{domxref("ImageData")}} объекта на холст. На этот метод не влияет матрица преобразования холста.

> **Примечание:** Данные изображения могут быть получены с холста с помощью метода {{domxref("CanvasRenderingContext2D.getImageData()", "getImageData()")}}.

Вы можете найти больше информации о `putImageData()` и общих манипуляциях с содержимым холста в статье [Пиксельные манипуляции с холстом](/ru/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas).

## Синтаксис

```
void ctx.putImageData(imageData, dx, dy);
void ctx.putImageData(imageData, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
```

### Параметры

- `imageData`
  - : Объект {{domxref("ImageData")}}, содержащий массив значений пикселей..
- `dx`
  - : Горизонтальная позиция (координата x), в которой необходимо разместить данные изображения на целевом холсте.
- `dy`
  - : Вертикальная позиция (координата y), в которой необходимо разместить данные изображения на целевом холсте.
- `dirtyX`{{optional_inline}}
  - : Горизонтальная позиция (координата x) верхнего левого угла, из которого будут извлечены данные изображения. По умолчанию 0.
- `dirtyY` {{optional_inline}}
  - : Вертикальная позиция (координата y) верхнего левого угла, из которого будут извлечены данные изображения. По умолчанию 0.
- `dirtyWidth` {{optional_inline}}
  - : Ширина прямоугольника для рисования. По умолчанию ширина данных изображения.
- `dirtyHeight` {{optional_inline}}
  - : Высота прямоугольника для рисования. По умолчанию высота данных изображения.

### Ошибки

- `NotSupportedError`
  - : Выбрасывается, если любой из аргументов бесконечен.
- `InvalidStateError`
  - : Выбрасывается, если данные объекта ImageData были отделены.

## Примеры

### Понимание putImageData

Чтобы понять, что этот алгоритм делает под капотом, вот реализация сверху {{domxref("CanvasRenderingContext2D.fillRect()")}}.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

function putImageData(
  ctx,
  imageData,
  dx,
  dy,
  dirtyX,
  dirtyY,
  dirtyWidth,
  dirtyHeight,
) {
  let data = imageData.data;
  let height = imageData.height;
  let width = imageData.width;
  dirtyX = dirtyX || 0;
  dirtyY = dirtyY || 0;
  dirtyWidth = dirtyWidth !== undefined ? dirtyWidth : width;
  dirtyHeight = dirtyHeight !== undefined ? dirtyHeight : height;
  let limitBottom = dirtyY + dirtyHeight;
  let limitRight = dirtyX + dirtyWidth;
  for (let y = dirtyY; y < limitBottom; y++) {
    for (let x = dirtyX; x < limitRight; x++) {
      var pos = y * width + x;
      ctx.fillStyle =
        "rgba(" +
        data[pos * 4 + 0] +
        "," +
        data[pos * 4 + 1] +
        "," +
        data[pos * 4 + 2] +
        "," +
        data[pos * 4 + 3] / 255 +
        ")";
      ctx.fillRect(x + dx, y + dy, 1, 1);
    }
  }
}

// Нарисуйте контент на холсте
ctx.fillRect(0, 0, 100, 100);
// Создайте объект ImageData из него
let imagedata = ctx.getImageData(0, 0, 100, 100);
// используйте функцию putImageData, которая иллюстрирует, как работает putImageData
putImageData(ctx, imagedata, 150, 0, 50, 50, 25, 25);
```

#### Результат

{{ EmbedLiveSample('Понимание_putImageData') }}

### Потеря данных из-за оптимизации браузера

> **Предупреждение:** Из-за характера потерь при преобразовании в и из предварительно умноженных значений альфа-цвета пиксели, которые были только что установлены с помощью `putImageData()`, могут быть возвращены в эквивалентный `getImageData()` в качестве различных значений.

#### JavaScript

```js
const canvas = document.createElement("canvas");
canvas.width = 1;
canvas.height = 1;
const context = canvas.getContext("2d");
const imgData = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels = imgData.data;

pixels[0 + 0] = 1;
pixels[0 + 1] = 127;
pixels[0 + 2] = 255;
pixels[0 + 3] = 1;

console.log("before:", pixels);
context.putImageData(imgData, 0, 0);
const imgData2 = context.getImageData(0, 0, canvas.width, canvas.height);
const pixels2 = imgData2.data;
console.log("after:", pixels2);
```

Вывод может выглядеть так:

```
before: Uint8ClampedArray(4) [ 1, 127, 255, 1 ]
after: Uint8ClampedArray(4) [ 255, 255, 255, 1 ]
```

## Спецификации

{{Specifications}}

## Совместимость с браузера

{{Compat}}

## Смотрите также

- Интерфейс, определяющий это свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("ImageData")}} объект
- {{domxref("CanvasRenderingContext2D.getImageData()")}}
- [Пиксельные манипуляции с холстом](/ru/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
