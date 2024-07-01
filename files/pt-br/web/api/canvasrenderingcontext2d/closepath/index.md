---
title: CanvasRenderingContext2D.closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
---

{{APIRef}}

O método **`CanvasRenderingContext2D.closePath()`** da API Canvas 2D faz o ponto da caneta (_pen_) mover-se de volta para o início do sub-caminho (_sub-path_) atual. Tenta adicionar uma nova linha (mas não a desenha realmente) que conecta o ponto atual até o ponto inicial. Se a região (_shape_) já estiver fechada, ou tem somente um ponto na tela, esta função não funciona.

## Sintaxe

```
void ctx.closePath();
```

## Exemplos

### Usando o método `beginPath`

Isto é só um simples trecho de código que usa o método `fillRect`.

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
ctx.closePath(); // desenha a última linha do triângulo
ctx.stroke();
```

Edite o código abaixo e veja as alterações instantâneas no canvas:

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

{{ EmbedLiveSample('Playable_code', 700, 400) }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A definição da interface {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
