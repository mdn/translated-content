---
title: CanvasRenderingContext2D.quadraticCurveTo()
slug: Web/API/CanvasRenderingContext2D/quadraticCurveTo
---

{{APIRef}}

o método **`CanvasRenderingContext2D.quadraticCurveTo()`** da API Canvas 2D adiciona uma Curva de Bézier quadrática ao caminho. São exigidos dois pontos. O primeiro ponto é um ponto de controle e o segundo é o ponto final. The starting point is the last point in the current path, which can be changed using `moveTo()` before creating the quadratic Bézier curve.

## Sintaxe

```
void ctx.quadraticCurveTo(cpx, cpy, x, y);
```

### Parâmetros

- `cpx`
  - : O eixo X da coordenada para o ponto de controle.
- `cpy`
  - : O eixo Y da coordenada para o ponto de controle.
- `x`
  - : O eixo X da coordenada para o ponto final.
- `y`
  - : O eixo Y da coordenada para o ponto final.

## Exemplos

### Usando o método `quadraticCurveTo`

This is just a simple code snippet drawing a quadratic bezier curve. The control point is red and the start and end points are blue.

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
ctx.quadraticCurveTo(230, 30, 50, 100);
ctx.stroke();

ctx.fillStyle = "blue";
// start point
ctx.fillRect(50, 20, 10, 10);
// end point
ctx.fillRect(50, 100, 10, 10);

ctx.fillStyle = "red";
// control point
ctx.fillRect(230, 30, 10, 10);
```

{{ EmbedLiveSample('Using_the_quadraticCurveTo_method', 315, 165) }}

### Trying the `quadraticCurveTo` parameters

Edit the code below and see your changes update live in the canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(50,20);
ctx.quadraticCurveTo(230, 30, 50, 100);
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

{{ EmbedLiveSample('Trying_the_quadraticCurveTo_parameters', 700, 360) }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
- [WikiPedia article on Bézier curves](http://en.wikipedia.org/wiki/B%C3%A9zier_curve).
