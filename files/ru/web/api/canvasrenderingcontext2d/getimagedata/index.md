---
title: CanvasRenderingContext2D.getImageData()
slug: Web/API/CanvasRenderingContext2D/getImageData
---

{{APIRef}}

**`CanvasRenderingContext2D.getImageData()`** - метод Canvas 2D API, возвращает объект {{domxref("ImageData")}}, представляющий базовые пиксельные данные для области холста, обозначенного прямоугольником, который начинается в точке _(sx, sy)_ и имеет ширину _sw_ и высоту _sh_.

## Синтаксис

```
ImageData ctx.getImageData(sx, sy, sw, sh);
```

### Параметры

- `sx`
  - : Координата x верхнего левого угла прямоугольника, из которого будет извлечён ImageData.
- `sy`
  - : Координата y верхнего левого угла прямоугольника, из которого будет извлечён ImageData.
- `sw`
  - : Ширина прямоугольника, из которого будет извлечён ImageData.
- `sh`
  - : Высота прямоугольника, из которого будет извлечён ImageData.

### Возвращаемое значение

Объект {{domxref("ImageData")}}, содержащий данные изображения для данного прямоугольника холста.

### Выбрасываемые ошибки

- `IndexSizeError`
  - : Выбрасывает, если аргумент высоты или ширины равен нулю.
- `SecurityError`
  - : The canvas contains or may contain pixels which were loaded from an origin other than the one from which the document itself was loaded. To avoid `SecurityError` being thrown in this situation, configure CORS to allow the source image to be used in this way. See [Allowing cross-origin use of images and canvas](/ru/docs/Web/HTML/CORS_enabled_image).

## Примеры

### Getting image data from a canvas

This example draws a rectangle, and then uses `getImageData()` to grab a portion of the canvas.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

The object retrieved by `getImageData()` has a width of 200 and a height of 100, for a total of 20,000 pixels. Of those pixels, most are either transparent or taken from off the canvas; only 5,000 of them are opaque black (the color of the drawn rectangle).

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();

let imageData = ctx.getImageData(60, 60, 200, 100);
ctx.putImageData(imageData, 150, 10);
```

#### Result

{{EmbedLiveSample("Getting_image_data_from_a_canvas", 700, 180)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий его, {{domxref("CanvasRenderingContext2D")}}.
- {{domxref("ImageData")}}
- [Pixel manipulation with canvas](/ru/docs/Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas)
