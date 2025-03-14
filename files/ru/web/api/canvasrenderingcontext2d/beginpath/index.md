---
title: CanvasRenderingContext2D.beginPath()
slug: Web/API/CanvasRenderingContext2D/beginPath
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.beginPath()`** Canvas 2D API запускает новый путь, опуская список подпутей. Вызовите этот метод, когда хотите создать новый путь.

## Синтаксис

```
void ctx.beginPath();
```

## Примеры

### Использование `beginPath` метода

Это простой фрагмент кода, использующий `beginPath` метод.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Первый путь
ctx.beginPath();
ctx.strokeStyle = "blue";
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();

// Второй путь
ctx.beginPath();
ctx.strokeStyle = "green";
ctx.moveTo(20, 20);
ctx.lineTo(120, 120);
ctx.stroke();
```

Отредактируйте код ниже чтобы увидеть изменения в canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:200px">
// First path
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.stroke();

// Second path
ctx.beginPath();
ctx.strokeStyle = 'green';
ctx.moveTo(20,20);
ctx.lineTo(120, 120);
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

{{ EmbedLiveSample('Playable_code', 700, 460) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, определяющий это, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.closePath()")}}
