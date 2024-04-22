---
title: CanvasRenderingContext2D.stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.stroke()`** Canvas 2D API обводит текущий или данный контур цветом `strokeStyle`.

Обводка выравнивается по центру контура, другими словами, половина линии обводки рисуется с внутренней стороны контура, и половина с внешней.

Обводка отрисовывается согласно правилу ненулевого индекса, а значит, пересекающиеся части контура также будут обведены.

## Синтаксис

```
void ctx.stroke();
void ctx.stroke(path);
```

### Параметры

- `path`
  - : {{domxref ("Path2D")}} - контур, который нужно обвести.

## Примеры

### Использование метода `stroke()`

В этом примере с помощью метода `rect()` создаётся прямоугольник, и затем с помощью `stroke()` отрисовывается на холсте.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.stroke();
```

Отредактируйте приведённый ниже код и посмотрите, как обновляется рисунок на холсте:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.stroke();</textarea
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

- Интерфейс, предоставляющий этот метод - {{domxref("CanvasRenderingContext2D")}}.
