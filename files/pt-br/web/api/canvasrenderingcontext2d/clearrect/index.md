---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
---

{{APIRef}}

O método **`CanvasRenderingContext2D.clearRect()`** da API Canvas 2D limpa todos os pixels de um retângulo definido na posição _(x, y)_ e tamanho (_width_ (largura), _height_ (altura)) para uma cor preta transparente, apagando algum conteúdo anterior.

## Sintaxe

```
void ctx.clearRect(x, y, width, height);
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

## Notas de uso

Um problema comum com `clearRect` que pode acontecer, é que pode não funcionar corretamente, caso não seja usada alguma [propriedade de _path_](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes#Drawing_paths). Não esqueça de usar {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} antes de começar um novo frame depois de chamar `clearRect`.

## Exemplos

### Usando o método `clearRect`

Isto é só um simples trecho de código que usa o método `clearRect`.

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

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- A definição da interface {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
