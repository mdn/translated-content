---
title: CanvasRenderingContext2D.fill()
slug: Web/API/CanvasRenderingContext2D/fill
---

{{APIRef}}

O método **`CanvasRenderingContext2D.fill()`** da API Canvas 2D preenche um dado _path_ ou o _path_ atual com o estilo atual de preenchimento usando uma regra de controle diferente de zero, ou uma regra par-ímpar.

## Syntax

```
void ctx.fill();
void ctx.fill(fillRule);
void ctx.fill(path, fillRule);
```

### Parâmetros

- `fillRule`

  - : O algoritmo que determina se um ponto está do lado de dentro do path ou do lado fora do path.
    Possíveis valores:

    - `nonzero`
      - : A [regra de controle não-zero](http://en.wikipedia.org/wiki/Nonzero-rule), que é a regra padrão.
    - `evenodd`
      - : A [regra de controle par-ímpar](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Um _path_ de [`Path2D`](/pt-BR/docs/Web/API/Path2D) para preenchimento.

## Exemplos

### Usando o método `fill`

Isto é só um simples trecho de código que usa o métod `fill` para contornar um _path_.

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

- A definição da interface {{domxref("CanvasRenderingContext2D")}}.
