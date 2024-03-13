---
title: HTMLCanvasElement.toDataURL()
slug: Web/API/HTMLCanvasElement/toDataURL
---

{{APIRef("Canvas API")}}

**`HTMLCanvasElement.toDataURL()`** — метод, который возвращает [data URI](/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) изображения в
формате, заданном параметром `type` (по умолчанию [PNG](https://ru.wikipedia.org/wiki/PNG)). Возвращаемое изображение имеет
разрешение 96 dpi.

- Если высота или ширина холста равна `0` или больше [максимального размера холста](/ru/docs/Web/HTML/Element/canvas#maximum_canvas_size),
  возвращается строка `"data:,"`.
- Если запрошенный тип отличается от `image/png`, но возвращаемое значение начинается с `data:image/png`, то запрошенный тип не поддерживается.
- Chrome также поддерживает тип `image/webp`.

## Синтаксис

```js
canvas.toDataURL(type, encoderOptions);
```

### Параметры

- `type` {{optional_inline}}
  - : Строка ({{domxref("DOMString")}}), указывающая формат изображения. По умолчанию — `image/png`.
- `encoderOptions` {{optional_inline}}
  - : Число (типа {{jsxref("Number")}}) между `0` и `1`, указывающее качество изображения для форматов, использующих сжатие с потерями, таких как
    `image/jpeg` и `image/webp`.
    Если передан невалидный аргумент, то используется значение по умолчанию `0.92`. Остальные аргументы игнорируются.

### Возвращаемое значение

Строка ({{domxref("DOMString")}}), содержащая запрошенный [data URI](/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs).

### Исключения

- `SecurityError`
  - : Растровое изображение холста не соответствует источнику; по крайней мере часть его содержимого могла быть загружена с сайта, отличного от того, с которого был загружен
    сам документ.

## Примеры

Возьмём следующий {{HTMLElement("canvas")}} элемент:

```html
<canvas id="canvas" width="5" height="5"></canvas>
```

Вы можете получить его data-URL следующим образом:

```js
var canvas = document.getElementById("canvas");
var dataURL = canvas.toDataURL();
console.log(dataURL);
// "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNby
// blAAAADElEQVQImWNgoBMAAABpAAFEI8ARAAAAAElFTkSuQmCC"
```

### Настройка качества изображения с помощью jpegs

```js
var fullQuality = canvas.toDataURL("image/jpeg", 1.0);
// data:image/jpeg;base64,/9j/4AAQSkZJRgABAQ...9oADAMBAAIRAxEAPwD/AD/6AP/Z"
var mediumQuality = canvas.toDataURL("image/jpeg", 0.5);
var lowQuality = canvas.toDataURL("image/jpeg", 0.1);
```

### Пример: Динамическое изменение изображений

Вы можете использовать эту технику вместе с событиями мыши, чтобы динамически изменять изображения (оттенки серого или цвет в этом примере):

#### HTML

```html
<img class="grayscale" src="myPicture.png" alt="Описание моей картинки" />
```

#### JavaScript

```js
window.addEventListener("load", removeColors);

function showColorImg() {
  this.style.display = "none";
  this.nextSibling.style.display = "inline";
}

function showGrayImg() {
  this.previousSibling.style.display = "inline";
  this.style.display = "none";
}

function removeColors() {
  var aImages = document.getElementsByClassName("grayscale"),
    nImgsLen = aImages.length,
    oCanvas = document.createElement("canvas"),
    oCtx = oCanvas.getContext("2d");
  for (
    var nWidth, nHeight, oImgData, oGrayImg, nPixel, aPix, nPixLen, nImgId = 0;
    nImgId < nImgsLen;
    nImgId++
  ) {
    oColorImg = aImages[nImgId];
    nWidth = oColorImg.offsetWidth;
    nHeight = oColorImg.offsetHeight;
    oCanvas.width = nWidth;
    oCanvas.height = nHeight;
    oCtx.drawImage(oColorImg, 0, 0);
    oImgData = oCtx.getImageData(0, 0, nWidth, nHeight);
    aPix = oImgData.data;
    nPixLen = aPix.length;
    for (nPixel = 0; nPixel < nPixLen; nPixel += 4) {
      aPix[nPixel + 2] =
        aPix[nPixel + 1] =
        aPix[nPixel] =
          (aPix[nPixel] + aPix[nPixel + 1] + aPix[nPixel + 2]) / 3;
    }
    oCtx.putImageData(oImgData, 0, 0);
    oGrayImg = new Image();
    oGrayImg.src = oCanvas.toDataURL();
    oGrayImg.onmouseover = showColorImg;
    oColorImg.onmouseout = showGrayImg;
    oCtx.clearRect(0, 0, nWidth, nHeight);
    oColorImg.style.display = "none";
    oColorImg.parentNode.insertBefore(oGrayImg, oColorImg);
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс {{domxref("HTMLCanvasElement")}}.
- Статья о [Data URIs](/ru/docs/Web/HTTP/Basics_of_HTTP/Data_URIs) в разделе [HTTP](/ru/docs/Web/HTTP).
