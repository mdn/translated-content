---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.fillRect()`**, предоставляемый Canvas 2D API, рисует залитый прямоугольник в позиции _(x, y),_ размер которого определяется аргументами _width_ и _height_, и стиль которого определяется атрибутом {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}}.

## Синтаксис

```
void ctx.fillRect(x, y, width, height);
```

### Параметры

- `x`
  - : Координата начальной точки прямоугольника по оси x.
- `y`
  - : Координата начальной точки прямоугольника по оси y.
- `width`
  - : Ширина прямоугольника.
- `height`
  - : Высота прямоугольника.

## Примеры

### Использование метода `fillRect`

Ниже представлен простой фрагмент кода, использующий метод `fillRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// залить canvas целиком
// ctx.fillRect(0, 0, canvas.width, canvas.height);
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
