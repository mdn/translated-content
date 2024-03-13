---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
---

{{APIRef}}

O método **`CanvasRenderingContext2D.moveTo()`** da API Canvas 2D move o ponto inicial de um novo sub-caminho (sub-path) para as coordenadas `(x, y)`.

## Sintaxe

```
void ctx.moveTo(x, y);
```

### Parâmetros

- `x`
  - : O valor da coordenada x.
- `y`
  - : O valor da coordenada y.

## Exemplos

### Usando o método `moveTo`

Isto é só um simples trecho de código que usa o método `moveTo` para mover a caneta (_pen_) para um deteminado ponto onde vai iniciar o desenho.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();
```

Edite o código abaixo e veja as alterações instantâneas no canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200, 50);
ctx.stroke()</textarea
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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A definição da interface {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
