---
title: Рисование текста
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

После того, как мы увидели в предыдущей главе, как [применять стили и цвета](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors), взглянем на написание текста в canvas.

## Рисование текста

Контекст рендеринга canvas предоставляет два метода для рисования текста:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Вставляет заданный текст в положении (x,y). Опционально может быть указана максимальная ширина.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Вставляет контур заданного текста в положении (x,y). Опционально может быть указана максимальная ширина.

### Пример `fillText`

Текст вставлен с использованием текущего `fillStyle`.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_fillText", 310, 110)}}

### Пример `strokeText`

Текст вставлен с использованием текущего `strokeStyle`.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Пример_strokeText", 310, 110)}}

## Стилизация текста

В примерах выше мы уже использовали свойство font для изменения размера текста. Кроме него существуют ещё несколько свойств, позволяющие настроить вывод текста на canvas:

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : Это основной стиль, который будет использоваться для вывода текста. Строка имеет такой же синтаксис, как [CSS](/ru/docs/Web/CSS)-свойство {{cssxref("font")}}. По умолчанию - sans-serif высотой 10px.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Настройка выравнивания текста. Возможные значения: `start`, `end`, `left`, `right` или `center`. По умолчанию - `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Настройка выравнивания текста по вертикали. Возможные значения: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. По умолчанию - `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Направление текста. Возможные значения: `ltr`, `rtl`, `inherit`. По умолчанию - `inherit`.

Эти свойства могут быть вам знакомы если вы работали с CSS.

Изображение от [WHATWG](http://www.whatwg.org/) ниже показывает различные варианты свойства `textBaseline`.![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### Пример textBaseline

Редактируя код ниже, вы можете видеть, как меняется отображение текста на canvas в реальном времени:

```js
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world!", 0, 100);
```

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);</textarea
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

## Измерение ширины текста

Для измерения ширины текста (без рисования его на canvas) можно воспользоваться следующим методом:

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Возвращает объект {{domxref("TextMetrics")}}, содержащий ширину текста в пикселах, до отрисовки на canvas.

Пример ниже показывает, как можно измерить ширину текста.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Примечания

В ранних версиях Gecko (движок рендеринга в Firefox, Firefox OS и других приложениях Mozilla) были реализованы [методы API с префиксами](/ru/docs/Web/API/CanvasRenderingContext2D#Prefixed_APIs) для рисования текста на canvas. На данный момент они устарели и уже, возможно, удалены, поэтому их правильная работа не гарантируется.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
