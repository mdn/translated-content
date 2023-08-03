---
title: CanvasRenderingContext2D.miterLimit
slug: Web/API/CanvasRenderingContext2D/miterLimit
---

{{APIRef}}

Свойство **CanvasRenderingContext2D.miterLimit** устанавливает/возвращает максимальную длину среза.

Длина среза это расстояние между внутренним и внешнем углом, образованным пересечением двух линий.

> **Примечание:** For more info about miters, see [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) in the [Canvas tutorial](/ru/docs/Web/API/Canvas_API/Tutorial).

## Синтаксис

```
ctx.miterLimit = число;
```

### Options

- `число`
  - : Положительное число, определяющее максимальную длину среза. Если текущая длина среза будет превышать заданное значение, то угол будет отображаться как при значении `bevel` свойства `lineJoin`.

## Примеры

### Using the `miterLimit` property

See the chapter [Applying styles and color](/ru/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#A_demo_of_the_miterLimit_property) in the [Canvas tutorial](/ru/docs/Web/API/Canvas_API/Tutorial) for more information.

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

{{EmbedLiveSample("Using_the_miterLimit_property", "100%", "400", "canvas_miterlimit.png")}}

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## See also

- Интерфейс, определяющий это свойство: {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineCap")}}
- {{domxref("CanvasRenderingContext2D.lineJoin")}}
