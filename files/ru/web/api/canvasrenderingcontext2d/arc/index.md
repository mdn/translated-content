---
title: CanvasRenderingContext2D.arc()
slug: Web/API/CanvasRenderingContext2D/arc
---

{{APIRef}}

**`CanvasRenderingContext2D.arc()`** метод Canvas 2D API добавляет дугу к пути с центром _(x, y)_ и с радиусом _r_ с началом в _startAngle_ и с концом _endAngle_ и с направлением против часовой стрелки (по умолчанию по часовой стрелке).

## Синтаксис

```
void ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);
```

### Параметры

- `x`
  - : X координата центра дуги.
- `y`
  - : Y координата центра дуги.
- `radius`
  - : Радиус.
- `startAngle`
  - : Угол начала дуги. Измеряется по часовой стрелке от положительной оси Х, выражается в радианах.
- `endAngle`
  - : Угол завершения дуги. Измеряется по часовой стрелке от положительной оси Х, выражается в радианах.
- `anticlockwise` {{optional_inline}}
  - : Необязательный {{jsxref("Boolean")}}. Задаёт направление рисования дуги.
    Если `true` - против часовой, `false` - по часовой.

## Примеры

### Использование метода `arc`

Ниже приведён пример простого кода который рисует круг.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

Вы можете редактировать код, представленный ниже, и сделанные вами изменения отобразятся на холсте в режиме реального времени (убедитесь, что вы используете браузер, поддерживающий данное свойство - смотрите таблицу совместимости):

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
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

### Демонстрация разных форм дуг

В этом примере нарисованные разные формы чтобы показать возможности метода `arc()`.

```html hidden
<canvas id="canvas" width="150" height="200"></canvas>
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Draw shapes
for (i = 0; i < 4; i++) {
  for (j = 0; j < 3; j++) {
    ctx.beginPath();
    var x = 25 + j * 50; // x coordinate
    var y = 25 + i * 50; // y coordinate
    var radius = 20; // Arc radius
    var startAngle = 0; // Starting point on circle
    var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    var anticlockwise = i % 2 == 1; // Draw anticlockwise

    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
```

{{ EmbedLiveSample('Different_shapes_demonstrated', 160, 210, "canvas_arc.png") }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс `Canvas`, {{domxref("CanvasRenderingContext2D")}}
