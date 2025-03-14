---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.strokeRect()`**, предоставляемый Canvas 2D API, рисует на холсте прямоугольник, имеющий начальную точку с координатами _(x, y)_, а так же ширину _w_ и высоту _h_, используя текущий стиль линий.

## Синтаксис

```
void ctx.strokeRect(x, y, width, height);
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

### Использование метода `strokeRect`

Ниже представлен простой фрагмент кода, использующий метод `strokeRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);</textarea
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
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
