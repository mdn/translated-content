---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
---

{{APIRef}}

O método **`CanvasRenderingContext2D.rect()`** da Canvas 2D API cria um _path_ (trajeto) para um retângulo na posição _(x, y)_, cujo tamanho é determinado pelo _width_ (largura) e _height_ (altura). Esses quatro pontos estão conectados por linhas retas e o _sub-path_ (sub-trajeto) é marcado como fechado, para que você possa `fill (preencher)` ou `stroke (contornar)` o retângulo.

## Sintaxe

```
void ctx.rect(x, y, width, height);
```

### Parameters

- `x`
  - : O valor da coordenada x que indica ponto de início (superior esquerdo) do retângulo.
- `y`
  - : O valor da coordenada y que indica ponto de início (superior esquerdo) do retângulo.
- `width`
  - : A largura do retângulo.
- `height`
  - : A altura do retângulo.

## Exemplos

### Usando o método `rect`

Isto é somente um simples fragmentode código que usa o método `rect` para criar um _path_. Para verdadeiramente desenhar um _path_ no canvas, você pode usar o método {{domxref("CanvasRenderingContext2D.fill", "fill()")}} ou o {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}. Veja também os métodos {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} e {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}}, que podem fazer isto em um único passo.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();
```

Edite o código abaixo e veja as alterações instantâneas no canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.fill();</textarea
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

- A interface que a define, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
