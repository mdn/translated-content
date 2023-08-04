---
title: CanvasRenderingContext2D.drawImage()
slug: Web/API/CanvasRenderingContext2D/drawImage
---

{{APIRef}}

**`CanvasRenderingContext2D.drawImage()`** метод Canvas 2D API предоставляет разные способы рисования изображения на холсте.

## Синтаксис

```
void ctx.drawImage(image, dx, dy);
void ctx.drawImage(image, dx, dy, dWidth, dHeight);
void ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
```

![drawImage](canvas_drawimage.jpg)

### Параметры

- `image`
  - : Элемент для отображения в контексте. Функция принимает любой источник изображения, пригодный для отображения на холсте ({{domxref("CanvasImageSource")}}), конкретнее, {{domxref("CSSImageValue")}}, {{domxref("HTMLImageElement")}}, {{domxref("SVGImageElement")}}, {{domxref("HTMLVideoElement")}}, {{domxref("HTMLCanvasElement")}}, {{domxref("ImageBitmap")}} или {{domxref("OffscreenCanvas")}}.
- `dx`
  - : Координата по оси Х, обозначающая стартовую точку холста-приёмника, в которую будет помещён верхний левый угол исходного `image`.
- `dy`
  - : Координата по оси Y, обозначающая стартовую точку холста-приёмника, в которую будет помещён верхний левый угол исходного `image`.
- `dWidth`
  - : Ширина изображения, полученного из исходного `image`. Эта опция позволяет масштабировать изображение по ширине. Если опция не задана, изображение не будет масштабировано.
- `dHeight`
  - : Высота изображения, полученного из исходного `image`. Эта опция позволяет масштабировать изображение по высоте. Если опция не задана, изображение не будет масштабировано.
- `sx`
  - : Координата по оси X верхнего левого угла фрагмента, который будет вырезан из изображения-источника и помещён в контекст-приёмник.
- `sy`
  - : Координата по оси Y верхнего левого угла фрагмента, который будет вырезан из изображения-источника и помещён в контекст-приёмник.
- `sWidth`
  - : Ширина фрагмента, который будет вырезан из изображения источника и помещён в контекст-приёмник. Если не задана, фрагмент от точки, заданной `sx` и `sy` до правого нижнего угла источника будет целиком скопирован в контекст-приёмник.
- `sHeight`
  - : Высота фрагмента, который будет вырезан из изображения источника и помещён в контекст-приёмник.

### Исключения

- `INDEX_SIZE_ERR`
  - : Выбрасывается, если ширина или высота источника или приёмника равна нулю.
- `INVALID_STATE_ERR`
  - : Источник не имеет данных изображения.
- `TYPE_MISMATCH_ERR`
  - : Тип данных источника не поддерживается.

## Примеры

### Использование метода `drawImage`

Вот простой пример использования `drawImage`.

#### HTML

```html
<canvas id="canvas"></canvas>
  <img id="source" src="rhino.jpg"
       width="300" height="227">
</div>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");

ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);
```

Отредактируйте код ниже и посмотрите, как ваши изменения отражаются на холсте:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
  <img id="source" src="rhino.jpg" width="300" height="227">
</div>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.drawImage(image, 33, 71, 104, 124, 21, 20, 87, 104);</textarea>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var edit = document.getElementById("edit");
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

### Понимание размеров изображения-источника

Метод `drawImage()` использует _внутренние размеры_ элемента-источника, выраженные в CSS-пикселях (а не реальные размеры самой картинки).

Например, если изображение было загружено с использованием необязательных параметров `width` и `height` в конструкторе {{domxref("HTMLImageElement")}}, вместо `element.width` и `element.height` вам следует использовать свойства `naturalWidth` и `naturalHeight` экземпляра картинки (или `videoWidth` и `videoHeight`, если источник {{htmlelement("video")}}), чтобы добиться правильного масштабирования и получения фрагментов картинки.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var image = new Image(60, 45); // Размер изображения
image.onload = drawImageActualSize; // Рисуем изображение, когда оно будет загружено

// load an image of intrinsic size 300x227 in CSS pixels
image.src = "rhino.jpg";

function drawImageActualSize() {
  // use the intrinsic size of image in CSS pixels for the canvas element
  canvas.width = this.naturalWidth;
  canvas.height = this.naturalHeight;

  // will draw the image as 300x227 ignoring the custom size of 60x45
  // given in the constructor
  ctx.drawImage(this, 0, 0);

  // To use the custom size we'll have to specify the scale parameters
  // using the element's width and height properties - lets draw one
  // on top in the corner:
  ctx.drawImage(this, 0, 0, this.width, this.height);
}
```

#### Результат

{{EmbedLiveSample('Понимание_размеров_изображения-источника', 700, 360)}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Дополнительно

- `drawImage()` корректно работает с {{domxref("HTMLVideoElement")}} только в том случае, когда {{domxref("HTMLMediaElement.readyState")}} **больше единицы** (т.е., событие **seek** корректно вызывается после установки свойства `currentTime`)
- `drawImage()` будет использовать внутренний размер элемента-источника, выраженный в CSS-пикселях, при рисовании, фрагментировании или масштабировании.
- `drawImage()` проигнорирует все EXIF-данные изображений, в том числе и `Orientation`. Такое поведение метода особенно проблематично для iOS-устройств. Вам потребуется распознать ориентацию самостоятельно и использовать `rotate()` для её корректировки.

## Смотрите также

- Родительский интерфейс метода {{domxref("CanvasRenderingContext2D")}}.
