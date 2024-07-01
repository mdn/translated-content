---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
---

{{APIRef}}

El método **`CanvasRenderingContext2D.fillRect()`** de la API Canvas 2D dibuja un rectángulo relleno en la posición ( x, y ). El tamaño del rectángulo se determina por width (anchura) y height (altura). El estilo de relleno se determina por el atributo `fillStyle`.

## Sintaxis

```
void ctx.fillRect(x, y, width, height);
```

### Parámetros

- `x`
  - : La componente x de la coordenada para el punto de comienzo del rectángulo.
- `y`
  - : La componente y de la coordenada para el punto de comienzo del rectángulo.
- `width`
  - : La anchura del rectángulo.
- `height`
  - : La altura del rectángulo.

## Ejemplos

### Usando el método `fillRect`

El siguiente fragmento de código usa el método `fillRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// Rellenar el canvas completo
// ctx.fillRect(0, 0, canvas.width, canvas.height);
```

Edita el código que se encuentra a continuación y observa en vivo los cambios actualizados en el canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);</textarea
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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Documentos relacionados

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
