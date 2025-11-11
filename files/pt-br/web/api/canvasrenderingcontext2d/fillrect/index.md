---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
---

{{APIRef}}

O método **`CanvasRenderingContext2D.fillRect()`** da API Canvas 2D desenha um retângulo preenchido na posição _(x, y)_, no qual o tamanho é determinado pela _width_ (largura) e pela _height_ (altura), e cujo o estilo é determinado pelo atributo `fillStyle`.

## Sintaxe

```
void ctx.fillRect(x, y, width, height);
```

### Parâmetros

- `x`
  - : O valor da coordenada x para o ponto inicial do retângulo.
- `y`
  - : O valor da coordenada y para o ponto inicial do retângulo.
- `width`
  - : A largura do retângulo.
- `height`
  - : A altura do retângulo.

## Exemplos

### Usando o método `fillRect`

Isto é só um simples trecho de código que usa o método `fillRect`.

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

// preenche todo o canvas
// ctx.fillRect(0, 0, canvas.width, canvas.height);
```

Edite o código abaixo e veja as alterações instantâneas no canvas:

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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A definição da interface {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
