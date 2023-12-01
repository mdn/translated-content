---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.clearRect()`**, предоставляемый Canvas 2D API, устанавливает прозрачный чёрный цвет для всех пикселей, расположенных внутри прямоугольника, заданного начальной точкой _(x, y)_ и размерами _(width, height)_, таким образом стирая любое ранее нарисованное содержимое.

## Синтаксис

```
void ctx.clearRect(x, y, width, height);
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

### Использование метода `clearRect`

Ниже представлен простой фрагмент кода, использующий метод `clearRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.lineTo(120, 120);
ctx.closePath(); // рисует последнюю линию треугольника
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);

// очистить весь холст
// ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:140px;">
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // рисует последнюю линию треугольника
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);</textarea
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

{{ EmbedLiveSample('Playable_code', 700, 400) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
