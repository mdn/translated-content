---
title: CanvasRenderingContext2D.fill()
slug: Web/API/CanvasRenderingContext2D/fill
---

{{APIRef}}

**`CanvasRenderingContext2D.fill()`** метод Canvas 2D API заполняет текущий или заданный путём с текущим стилем заливки, используя одно из двух правил - ненулевого индекса или чётно-нечётное.

## Синтаксис

```
void ctx.fill([fillRule]);
void ctx.fill(path[, fillRule]);
```

### Параметры

- `fillRule`

  - : Выбор алгоритма заливки фигуры
    Возможные значения:

    - `nonzero`
      - : [Правило ненулевого индекса](https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B0%D0%B2%D0%B8%D0%BB%D0%BE_%D0%BD%D0%B5%D0%BD%D1%83%D0%BB%D0%B5%D0%B2%D0%BE%D0%B3%D0%BE_%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81%D0%B0), значение по умолчанию
    - `evenodd`
      - : [Чётно-нечётное правило](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule)

- `path`
  - : {{domxref("Path2D")}} путь для заливки.

## Пример

### Использование метода `fill`

Это всего лишь простой фрагмент кода, который использует метод `fill` для заполнения пути.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();
```

Отредактируйте приведённый ниже код и посмотрите, как обновляется ваше обновление на холсте:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.fill();</textarea
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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс определяющий этот метод, {{domxref("CanvasRenderingContext2D")}}.
