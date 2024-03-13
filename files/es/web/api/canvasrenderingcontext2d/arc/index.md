---
title: CanvasRenderingContext2D.arc()
slug: Web/API/CanvasRenderingContext2D/arc
---

{{APIRef}}

El método **`CanvasRenderingContext2D`** **`.arc()`** de la API de Canvas 2D añade un arco a la trayectoria centrada en la posición _(x, y)_ con el radio _r_ comenzando en _startAngle_ y terminando en _endAngle que_ va en la dirección dada en sentido _antihorario_ (predeterminado en sentido horario) .

## Sintaxis

```
Void ctx .arc (x, y, radio, startAngle, endAngle, antihorario);
```

### Parámetros

- `x`
  - : La coordenada x del centro del arco.
- `y`
  - : La coordenada y del centro del arco.
- `radius`
  - : El radio del arco.
- `startAngle`
  - : El ángulo en el que se inicia el arco, medido en sentido horario desde el eje x positivo y expresado en radianes.
- `endAngle`
  - : El ángulo en el que termina el arco, medido en sentido horario desde el eje x positivo y expresado en radianes.
- `anticlockwise` Opcional
  - : Un [`Boolean`](/es/docs/Web/JavaScript/Reference/Global_Objects/Boolean) opcional que, si es `true` , hace que el arco se dibuje en sentido contrario a las agujas del reloj entre los dos ángulos. De forma predeterminada, se dibuja en el sentido de las agujas del reloj.

## Ejemplos

### Utilizando el método del `arc`

Esto es sólo un simple fragmento de código dibujando un círculo.

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

Edite el código de abajo y vea su actualización de cambios en vivo en el lienzo:

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

### Diferentes formas demostradas

En este ejemplo se dibujan diferentes formas para mostrar lo que es posible al usar `arc()` .

```html hidden
<canvas id="canvas" width="150" height="200"></canvas>
```

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Draw shapes
for (var i = 0; i < 4; i++) {
  for (var j = 0; j < 3; j++) {
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

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La interfaz que lo define, [`CanvasRenderingContext2D`](/es/docs/Web/API/CanvasRenderingContext2D)
