---
title: CanvasRenderingContext2D.lineWidth
slug: Web/API/CanvasRenderingContext2D/lineWidth
---

{{APIRef}}

`Свойство CanvasRenderingContext2D`**`.lineWidth`**, предоставляемое Canvas 2D API задаёт толщину линий в пикселах. При получении свойства возвращается его текущее значение. При задании свойства, присваиваемое значение должно быть положительным числом, ноль, отрицательные числа, {{jsxref("Infinity")}} и {{jsxref("NaN")}} игнорируются.

Смотрите также главу [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) в [Canvas Tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

## Синтаксис

```
ctx.lineWidth = value;
```

### Значения

- `value`
  - : Число, задающее толщину линии в пикселах. Ноль, отрицательные числа, {{jsxref("Infinity")}} и {{jsxref("NaN")}} игнорируются.

## Примеры

### Использование свойства lineWidth

Ниже представлен простой фрагмент кода, использующий lineWidth.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineWidth = 15;
ctx.lineTo(100, 100);
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
ctx.moveTo(0,0);
ctx.lineWidth = 15;
ctx.lineTo(100, 100);
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

- Интерфейс, предоставляющий это свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
