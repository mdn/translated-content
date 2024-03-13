---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.moveTo()`**, предоставляемый Canvas 2D API, перемещает начальную точку нового фрагмента контура в координаты `(x, y)`.

## Синтаксис

```
void ctx.moveTo(x, y);
```

### Параметры

- `x`
  - : Координата точки по оси x.
- `y`
  - : Координата точки по оси y.

## Примеры

### Использование метода `moveTo`

Ниже представлен простой фрагмент кода, использующий метод `moveTo` для того, чтобы переместить указатель в начальную позицию для рисования линии.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200, 50);
ctx.stroke()</textarea
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
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
