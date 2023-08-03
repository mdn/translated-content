---
title: Canvas
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

Элемент {{HTMLElement("canvas")}}, добавленный в [HTML5](/ru/docs/HTML/HTML5), предназначен для создания графики с помощью [JavaScript](/ru/docs/JavaScript). Например, его используют для рисования графиков, создания фотокомпозиций, анимаций и даже обработки и рендеринга видео в реальном времени.

_«Canvas»_ в переводе с английского означает _«холст»_.

Приложения от Mozilla поддерживают `<canvas>` начиная с Gecko 1.8 (т.е. [с Firefox 1.5](/ru/docs/Firefox_1.5_for_developers)). Этот элемент первоначально был представлен Apple для OS X [Dashboard](http://www.apple.com/macosx/features/dashboard/) и Safari. Internet Explorer поддерживает `<canvas>` начиная с 9 версии; для более ранних версий IE поддержку для \<canvas> можно добавить с помощью скрипта из проекта Google's [Explorer Canvas](http://excanvas.sourceforge.net/). Google Chrome и Opera 9 также поддерживают `<canvas>`.

Элемент `<canvas>` также используется технологией [WebGL](/ru/docs/WebGL) для отрисовки аппаратно-ускоренной 3D-графики на веб-страницах.

## Пример

Это простой пример использования {{domxref("CanvasRenderingContext2D.fillRect()")}} метода.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

Отредактируйте код ниже, чтобы увидеть результат на холсте.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);</textarea
>
```

```js hidden
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
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

## Справочные материалы

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("TextMetrics")}}
- {{domxref("Path2D")}} {{experimental_inline}}

Интерфейсы, связанные с `WebGLRenderingContext`, ссылаются на [WebGL](/ru/docs/Web/WebGL).

## Руководства

- [Canvas tutorial](/ru/docs/Web/API/Canvas_API/Tutorial)
  - : Подробный учебник, охватывающий как основное использование `<canvas>`, так и его расширенные функции.
- [Фрагменты кода: Canvas](/en-US/Add-ons/Code_snippets/Canvas)
  - : Некоторые фрагменты кода, ориентированные на разработчиков, с использованием `<canvas>`.
- [Demo: A basic ray-caster](/ru/docs/Web/API/Canvas_API/A_basic_ray-caster)
  - : Демо анимации трассировки-лучей используя canvas.
- [Drawing DOM objects into a canvas](/ru/docs/Web/API/Canvas_API/Drawing_DOM_objects_into_a_canvas)
  - : Как рисовать DOM контент, таких как HTML-элементы, в canvas.
- [Manipulating video using canvas](/ru/docs/Web/API/Canvas_API/Manipulating_video_using_canvas)
  - : Объединяет {{HTMLElement("video")}} и {{HTMLElement("canvas")}} для манипулирования видео данных в реальном времени.

## Ресурсы

### Основное

- [HTML5 Canvas Deep Dive](http://joshondesign.com/p/books/canvasdeepdive/title.html)
- [Справочник по Canvas](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html)

### Библиотеки

- [Fabric.js](http://fabricjs.com) это canvas библиотека с открытым исходным кодом с возможностями SVG парсинга.
- [Kinetic.js](https://github.com/ericdrowell/KineticJS) это canvas библиотека с открытым исходным кодом ориентированная на интерактивность для настольных и мобильных приложений.
- [Paper.js](http://paperjs.org/) это программируемый фреймворк векторной графики с открытым исходным кодом который запускается на HTML5 Canvas.
- [libCanvas](http://libcanvas.github.com/) это мощный и лёгкий canvas фреймворк.
- [Processing.js](http://processingjs.org) является портом языка обработки визуализации.
- [PlayCanvas](https://playcanvas.com/) игровой движок с открытым исходным кодом.
- [Pixi.js](http://www.pixijs.com/) игровой движок с открытым исходным кодом.
- [PlotKit](http://www.liquidx.net/plotkit/) библиотека создание графиков и графики.
- [Rekapi](https://github.com/jeremyckahn/rekapi) API анимации для canvas.
- [PhiloGL](http://senchalabs.github.com/philogl/) WebGL фреймворк для визуализации данных, для креативного написания кода и разработки игр.
- [JavaScript InfoVis Toolkit](http://thejit.org/) создаёт интерактивные 2D Canvas визуализации данных для интернета.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [WebGL](/ru/docs/Web/WebGL)
