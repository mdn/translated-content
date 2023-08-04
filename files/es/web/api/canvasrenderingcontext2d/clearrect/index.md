---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

El método **`CanvasRenderingContext2D.clearRect()`** del API Canvas 2D convierte todos los pixeles en el rectangulo definido por el punto de inicio (x, y) y tamaño _(width, height)_ a negro transparente, borrando cualquier contenido dibujado anteriormente.

## Syntaxis

### HTML Content

```html
void ctx.clearRect(x, y, width, height);
```

### Parametros

- **x**
  - : El eje **x** de la coordenada para el punto de inicio del rectangulo.
- y
  - : El eje **y** de la coordenada para el punto de inicio del rectangulo.
- width
  - : El ancho del rectangulo.
- heigth
  - : el alto del rectangulo.

## Notas de uso

Un problema común con **`clearRect`** es que puede parecer que no funciona cuando no se usan las [trayectorias de dibujo](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths) ([paths](/es/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths)) de forma adecuada. No olvide llamar {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} antes de comenzar a dibujar el nuevo cuadro después de llamar **`clearRect`**.

## Ejemplos

### Usando el método `clearRect`

Este es un simple fragmento (snippet) de código que usa el método **`clearRect`**.

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
ctx.closePath(); // draws last line of the triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);

// clear the whole canvas
// ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Edite el código de abajo y vea sus cambios actualizados en vivo en el canvas:

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
ctx.closePath(); // draws last line of the triangle
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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea También

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
