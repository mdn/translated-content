---
title: Пиксельная манипуляция с холстом
slug: Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}

До сих пор мы не смотрели на фактические пиксели нашего объекта canvas (далее "холст"). С объектом `ImageData` вы можете напрямую читать и писать массив данных для управления пиксельными данными. Мы также рассмотрим, как можно сгладить сглаживание изображения (сглаживание) и как сохранить изображения с вашего холста.

## Объект `ImageData`

Объект {{domxref ("ImageData")}} представляет базовые пиксельные данные области объекта холста. Он содержит следующие атрибуты только для чтения:

- `width`
  - : Ширина изображения в пикселях.
- `height`
  - : Высота изображения в пикселях.
- `data`
  - : A {{jsxref ("Uint8ClampedArray")}} представляет собой одномерный массив, содержащий данные в порядке RGBA, с целыми значениями от `0` до `255` (в комплекте).

Свойство `data` возвращает {{jsxref ("Uint8ClampedArray")}}, к которому можно получить доступ, чтобы посмотреть на необработанные пиксельные данные; каждый пиксель представлен четырьмя однобайтовыми значениями (красный, зелёный, синий и альфа в этом порядке, то есть формат «RGBA»). Каждый компонент цвета представлен целым числом от 0 до 255. Каждому компоненту присваивается последовательный индекс внутри массива, причём красный компонент верхнего левого пикселя находится в индексе 0 внутри массива. Затем пиксели идут слева направо, затем вниз, по всему массиву.

{{Jsxref ("Uint8ClampedArray")}} содержит высоту × ширину × 4 байта данных, значения индекса варьируются от 0 до (высота × ширина × 4) -1.

Например, чтобы прочитать значение синего компонента из пикселя в столбце 200, строка 50 на изображении, вы должны сделать следующее:

```js
blueComponent = imageData.data[50 * (imageData.width * 4) + 200 * 4 + 2];
```

Вы можете получить доступ к размеру массива пикселей в байтах, прочитав атрибут `Uint8ClampedArray.length`:

```js
var numBytes = imageData.data.length;
```

## Создание объекта `ImageData`

Чтобы создать новый пустой объект `ImageData` , вы должны использовать метод {{domxref ("CanvasRenderingContext2D.createImageData", "createImageData ()")}}. Существуют две версии метода `createImageData()` :

```js
var myImageData = ctx.createImageData(width, height);
```

Это создаёт новый объект `ImageData` с указанными параметрами. Все пиксели заданы прозрачным черным.

Вы также можете создать новый объект `ImageData` ImageData с теми же размерами, что и объект, заданный `anotherImageData` . Все пиксели нового объекта установлены на прозрачный чёрный. **Это не копирует данные изображения!**

```js
var myImageData = ctx.createImageData(anotherImageData);
```

## Получение пиксельных данных для контекста

Чтобы получить объект `ImageData` , содержащий копию пиксельных данных для контекста холста, вы можете использовать метод `getImageData()` :

```js
var myImageData = ctx.getImageData(left, top, width, height);
```

Этот метод возвращает объект `ImageData` , представляющий пиксельные данные для области холста, углы которого представлены точками (`left` , `top`), (`left+width` , `top`), (`left` , `top+height`) и (`left+width` , `top+height`). Координаты задаются в единицах пространства координат холста.

> **Примечание:** Любые пиксели за пределами холста возвращаются как прозрачный чёрный цвет в результирующий объект `ImageData` .

Этот метод также показан в статье [Manipulating video using canvas](/ru/docs/Web/API/Canvas_API/Manipulating_video_using_canvas).

### Выбор цвета

В этом примере мы используем метод [getImageData()](/ru/docs/Web/API/CanvasRenderingContext2D/getImageData) для отображения цвета под курсором мыши. Для этого нам нужна текущая позиция мыши с `layerX` и `layerY`, затем мы просматриваем пиксельные данные в этой позиции в массиве пикселей, который предоставляет нам [getImageData()](/ru/docs/Web/API/CanvasRenderingContext2D/getImageData). Наконец, мы используем данные массива для установки цвета фона и текста `<div>` для отображения цвета.

```html hidden
<canvas id="canvas" width="300" height="227" style="float:left"></canvas>
<div id="color" style="width:200px;height:50px;float:left"></div>
```

```js
var img = new Image();
img.src = "rhino.jpg";
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
img.onload = function () {
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
};
var color = document.getElementById("color");
function pick(event) {
  var x = event.layerX;
  var y = event.layerY;
  var pixel = ctx.getImageData(x, y, 1, 1);
  var data = pixel.data;
  var rgba =
    "rgba(" +
    data[0] +
    ", " +
    data[1] +
    ", " +
    data[2] +
    ", " +
    data[3] / 255 +
    ")";
  color.style.background = rgba;
  color.textContent = rgba;
}
canvas.addEventListener("mousemove", pick);
```

{{ EmbedLiveSample('Выбор_цвета', 610, 240) }}

## Отображение пиксельных данных в контекст

Вы можете использовать метод [putImageData()](/ru/docs/Web/API/CanvasRenderingContext2D/putImageData) для рисования пиксельных данных в контексте:

```js
ctx.putImageData(myImageData, dx, dy);
```

Параметры `dx` и `dy` указывают координаты устройства в контексте, в котором будет отображаться верхний левый угол пиксельных данных, которые вы хотите нарисовать.

Например, чтобы нарисовать все изображение, представленное `myImageData`, в верхнем левом углу контекста, вы можете просто сделать следующее:

```js
ctx.putImageData(myImageData, 0, 0);
```

### Оттенки серого цвета и инвертирование цветов

В этом примере мы перебираем все пиксели для изменения их значений, а затем помещаем модифицированный массив пикселей обратно в canvas с помощью [putImageData()](/ru/docs/Web/API/CanvasRenderingContext2D/putImageData). Функция инвертирования просто вычитает каждый цвет из максимального значения 255. Функция оттенков серого просто использует среднее значение красного, зелёного и синего. Вы также можете использовать средневзвешенное значение, заданное формулой `x = 0.299r + 0.587g + 0.114b`, например. Для дополнительной информации см. [Grayscale](http://en.wikipedia.org/wiki/Grayscale) в Википедии.

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<div>
  <input id="grayscalebtn" value="Grayscale" type="button" />
  <input id="invertbtn" value="Invert" type="button" />
</div>
```

```js
var img = new Image();
img.src = "rhino.jpg";
img.onload = function () {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  var data = imageData.data;

  var invert = function () {
    for (var i = 0; i < data.length; i += 4) {
      data[i] = 255 - data[i]; // red
      data[i + 1] = 255 - data[i + 1]; // green
      data[i + 2] = 255 - data[i + 2]; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var grayscale = function () {
    for (var i = 0; i < data.length; i += 4) {
      var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i] = avg; // red
      data[i + 1] = avg; // green
      data[i + 2] = avg; // blue
    }
    ctx.putImageData(imageData, 0, 0);
  };

  var invertbtn = document.getElementById("invertbtn");
  invertbtn.addEventListener("click", invert);
  var grayscalebtn = document.getElementById("grayscalebtn");
  grayscalebtn.addEventListener("click", grayscale);
}
```

{{ EmbedLiveSample('Оттенки_серого_цвета_и_инвертирование_цветов', 330, 270) }}

## Масштабирование и сглаживание

С помощью метода {{domxref ("CanvasRenderingContext2D.drawImage", "drawImage ()")}}, второго холста и свойства {{domxref ("CanvasRenderingContext2D.imageSmoothingEnabled", "imageSmoothingEnabled")}} мы способны увеличить изображение и посмотреть его более детально.

Мы получаем положение мыши и обрезаем изображение на 5 пикселей левее и выше и на 5 пикселей правее и ниже положения мыши. Затем мы копируем его на другой холст и изменяем размер изображения до размера, который мы хотим. При масштабировании мы изменяем холст с исходного размера 10×10 пикселей до 200×200.

```js
zoomctx.drawImage(
  canvas,
  Math.abs(x - 5),
  Math.abs(y - 5),
  10,
  10,
  0,
  0,
  200,
  200,
);
```

Поскольку по умолчанию включено сглаживание, мы можем захотеть отключить сглаживание, чтобы увидеть чёткие пиксели. Вы можете переключить флажок, чтобы увидеть эффект свойства `imageSmoothingEnabled` (которому нужны префиксы для разных браузеров).

```html hidden
<canvas id="canvas" width="300" height="227"></canvas>
<canvas id="zoom" width="300" height="227"></canvas>
<div>
  <label for="smoothbtn">
    <input type="checkbox" name="smoothbtn" checked="checked" id="smoothbtn" />
    Enable image smoothing
  </label>
</div>
```

```js
var img = new Image();
img.src = "rhino.jpg";
img.onload = function () {
  draw(this);
};

function draw(img) {
  var canvas = document.getElementById("canvas");
  var ctx = canvas.getContext("2d");
  ctx.drawImage(img, 0, 0);
  img.style.display = "none";
  var zoomctx = document.getElementById("zoom").getContext("2d");

  var smoothbtn = document.getElementById("smoothbtn");
  var toggleSmoothing = function (event) {
    zoomctx.imageSmoothingEnabled = this.checked;
    zoomctx.mozImageSmoothingEnabled = this.checked;
    zoomctx.webkitImageSmoothingEnabled = this.checked;
    zoomctx.msImageSmoothingEnabled = this.checked;
  };
  smoothbtn.addEventListener("change", toggleSmoothing);

  var zoom = function (event) {
    var x = event.layerX;
    var y = event.layerY;
    zoomctx.drawImage(
      canvas,
      Math.abs(x - 5),
      Math.abs(y - 5),
      10,
      10,
      0,
      0,
      200,
      200,
    );
  };

  canvas.addEventListener("mousemove", zoom);
}
```

{{ EmbedLiveSample('Масштабирование_и_сглаживание', 620, 490) }}

## Сохранение изображений

{{Domxref ("HTMLCanvasElement")}} предоставляет метод `toDataURL()`, который полезен при сохранении изображений. Он возвращает [data URI](/ru/docs/Web/HTTP/data_URIs), содержащий представление изображения в формате, заданном параметром `type` (по умолчанию используется в [PNG](https://en.wikipedia.org/wiki/Portable_Network_Graphics) ). Возвращаемое изображение имеет разрешение 96 точек на дюйм.

- **Примечание:**
  - : Имейте в виду, что если холст содержит пиксели, полученные из другого {{Glossary ("origin")}} без использования CORS, холст будет **испорчен**, и его содержимое больше не будет считываться и сохраняться. Смотрите [Безопасность и испорченные холсты](/ru/docs/Web/HTML/CORS_enabled_image#безопасность_и_испорченные_холсты_canvas)
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/png')")}}
  - : Настройки по умолчанию. Создаёт изображение в формате PNG.
- {{domxref("HTMLCanvasElement.toDataURL", "canvas.toDataURL('image/jpeg', quality)")}}
  - : Создаёт изображение в формате JPG. Дополнительно вы можете задать параметр "качество" (quality) в диапазоне от 0 до 1, причём единица задаёт лучшее качество и 0 - почти не распознаваемый, но небольшой по размеру файл.

После того как вы создали URI данные из своего холста, вы можете использовать его как источник любого {{HTMLElement ("image")}} или поместить его в гиперссылку с [download attribute](/ru/docs/Web/HTML/Element/a#attr-download), чтобы сохранить его на диске, например.

Вы также можете создать {{domxref ("Blob")}} из холста.

- {{domxref("HTMLCanvasElement.toBlob", "canvas.toBlob(callback, type, encoderOptions)")}}
  - : Создаёт объект `Blob`, представляющий изображение, содержащееся в холсте.

## Смотрите также

- {{domxref("ImageData")}}
- [Manipulating video using canvas](/ru/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
- [Canvas, images and pixels – by Christian Heilmann](https://codepo8.github.io/canvas-images-and-pixels/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Advanced_animations", "Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility")}}
