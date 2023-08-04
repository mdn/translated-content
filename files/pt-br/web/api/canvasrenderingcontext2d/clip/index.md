---
title: CanvasRenderingContext2D.clip()
slug: Web/API/CanvasRenderingContext2D/clip
---

{{APIRef}}

O método **`CanvasRenderingContext2D.clip()`** da API do Canvas 2D transforma o caminho atualmente construido em um caminho atual de recorte.

## Sintaxe

```
void ctx.clip();
void ctx.clip(fillRule);
void ctx.clip(path, fillRule);
```

### Parâmetros

![](canvas_clipping_path.png)

- `fillRule`

  - : O algoritmo pelo qual determina se um ponto esta dentro de um caminho ou fora de um caminho.
    Valores Possíveis:

    - `nonzero`
      - : A [regra contorno diferente de zero](http://en.wikipedia.org/wiki/Nonzero-rule), que é a regra padrão.
    - `evenodd`
      - : A [regra do contorno par ou ímpar](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Um {{domxref("Path2D")}} caminho para recorte.

## Exemplos

### Usando do método de corte

Isso é só um simples fragmento de código que usa o método de corte para criar uma região de recorte.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

// Cria uma região de recorte
ctx.arc(100, 100, 75, 0, Math.PI * 2, false);
ctx.clip();

ctx.fillRect(0, 0, 100, 100);
```

Edite o código abaixo e veja suas mudanças atualizadas ao vivo no canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.arc(100, 100, 75, 0, Math.PI*2, false);
ctx.clip();
ctx.fillRect(0, 0, 100,100);</textarea
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

> **Nota:** Tenha consciência de que o `clip()` só funciona com formas adicionadas ao caminho; ele não funciona com uma forma primitiva, como retângulos criados com {{domxref("CanvasRenderingContext2D.fillRect()","fillRect()")}}. Nesse caso você teria que usar {{domxref("CanvasRenderingContext2D.rect()","rect()")}} para desenhar um caminho de forma retângular para ser recortado.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Ver também

- A interface como defini-la, {{domxref("CanvasRenderingContext2D")}}.
