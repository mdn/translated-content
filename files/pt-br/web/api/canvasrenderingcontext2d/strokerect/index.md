---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
---

{{APIRef}}

O método **`CanvasRenderingContext2D.strokeRect()`** da API Canvas 2D desenha um retângulo na posição _(x, y)_, que possui uma largura (_width_) _w_ e uma altura (_height_) _h_, e não tem nenhum preenchimento (estilo _stroke_).

## Sintaxe

```
void ctx.strokeRect(x, y, width, height);
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

### Usando o método `strokeRect`

Isto é só um simples trecho de código que usa o método `strokeRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);
```

Edite o código abaixo e veja as alterações instantâneas no canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);</textarea
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
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
