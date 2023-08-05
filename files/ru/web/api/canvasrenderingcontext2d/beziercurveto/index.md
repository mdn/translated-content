---
title: CanvasRenderingContext2D.bezierCurveTo()
slug: Web/API/CanvasRenderingContext2D/bezierCurveTo
---

{{APIRef}}

## Сводка

Метод **`CanvasRenderingContext2D.bezierCurveTo()`**, предоставляемый Canvas 2D API, добавляет кубическую кривую Безье к контуру. Для построения требуются три точки. Первые две точки являются контрольными, а третья - конечной. Начальной точкой является последняя точка в текущем контуре, и она может быть изменена методом {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} перед созданием кривой Безье.

## Синтаксис

```
void ctx.bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y);
```

### Параметры

- `cp1x`
  - : Координата первой контрольной точки по оси x.
- `cp1y`
  - : Координата первой контрольной точки по оси y.
- `cp2x`
  - : Координата второй контрольной точки по оси x.
- `cp2y`
  - : Координата второй контрольной точки по оси y.
- `x`
  - : Координата конечной точки по оси x.
- `y`
  - : Координата конечной точки по оси y.

## Примеры

### Использование метода `bezierCurveTo`

Ниже представлен простой фрагмент кода, рисующий кривую Безье. Контрольные точки нарисованы красным цветом, а начальная и конечная точки - синим.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 20);
ctx.bezierCurveTo(230, 30, 150, 60, 50, 100);
ctx.stroke();

ctx.fillStyle = "blue";
// начальная точка
ctx.fillRect(50, 20, 10, 10);
// конечная точка
ctx.fillRect(50, 100, 10, 10);

ctx.fillStyle = "red";
// первая контрольная точка
ctx.fillRect(230, 30, 10, 10);
// вторая контрольная точка
ctx.fillRect(150, 70, 10, 10);
```

{{ EmbedLiveSample('Использование_метода_bezierCurveTo', 315, 165) }}

### Практическое применение `bezierCurveTo`

Вы можете редактировать код, представленный ниже, и внесённые вами изменения отобразятся на холсте в режиме реального времени:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.bezierCurveTo(50, 100, 180, 10, 20, 10);
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

{{ EmbedLiveSample('Практическое_применение_bezierCurveTo', 700, 360) }}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Интерфейс, предоставляющий данный метод: {{domxref("CanvasRenderingContext2D")}}
- [Статья в Википедии про кривые Безье](https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%B2%D0%B0%D1%8F_%D0%91%D0%B5%D0%B7%D1%8C%D0%B5).
