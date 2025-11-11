---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
---

{{APIRef}}

O método **`CanvasRenderingContext2D.lineTo()`** da API Canvas 2D conecta o último ponto do sub-caminho (_sub-path_) para as coordenadas `x, y`, através de uma linha (mas na realidade não a desenha).

## Sintaxe

```
void ctx.lineTo(x, y);
```

### Parâmetros

- `x`
  - : O valor da coordenada x que indica o fim da linha.
- `y`
  - : O valor da coordenada y que indica o fim da linha.

## Exemplos

### Usando o método `lineTo`

sto é só um simples trecho de código que usa o método `lineTo`. Use o {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} para indicar o _path_ onde será desenhada a linha, mova a caneta (_pen_) com {{domxref("CanvasRenderingContext.moveTo", "moveTo()")}} e use o método {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} para desenhar a linha.

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
ctx.lineTo(100, 100);
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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A definição da interface {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
