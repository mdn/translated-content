---
title: CanvasRenderingContext2D.rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
---

{{APIRef}}

Метод **`CanvasRenderingContext2D.rotate()`** из Canvas 2D API добавляет поворот в матрицу преобразования. Параметр angle - это угол поворота по часовой стрелке, в радианах.

## Syntax

```
void ctx.rotate(angle);
```

![](canvas_grid_rotate.png)

### Parameters

- `angle`
  - : Угол поворота по часовой стрелке, в радианах. Вы также можете использовать `degree * Math.PI / 180` если вы хотите использовать для угла значение градуса (degree).

Центром вращения всегда является начало холста. Для изменения центра вращения, нам необходимо передвинуть холст, используя метод {{domxref("CanvasRenderingContext2D.translate", "translate()")}}.

## Примеры

### Использование метода `rotate`

Ниже приведён простой пример кода, который использует метод `rotate`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.rotate((45 * Math.PI) / 180);
ctx.fillRect(70, 0, 100, 30);

// reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

Отредактируйте приведённый ниже код и посмотрите, как обновляются ваши изменения на холсте:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70,0,100,30);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea
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

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
