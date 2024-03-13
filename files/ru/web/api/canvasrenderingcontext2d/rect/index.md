---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.rect()`**, предоставляемый Canvas 2D API, создаёт контур прямоугольника в позиции _(x, y)_, размеры которого устанавливаются аргументами _width_ и _height_. Четыре точки прямоугольника соединяются прямыми линиями, и получившийся фрагмент контура отмечается как замкнутый, так что вы можете выполнить его заливку или обрисовать контур.

## Синтаксис

```
void ctx.rect(x, y, width, height);
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

### Использование метода `rect`

Ниже представлен простой фрагмент кода, использующий метод `rect` для создания контура. Для того чтобы нарисовать контур на холсте вы можете воспользоваться методами {{domxref("CanvasRenderingContext2D.fill", "fill()")}} или {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}. Обратите внимание так же на методы {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} и {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}} которые могут сделать тоже самое за один раз .

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

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени:

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

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
