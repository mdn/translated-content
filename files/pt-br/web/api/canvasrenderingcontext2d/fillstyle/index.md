---
title: CanvasRenderingContext2D.fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
---

{{APIRef}}

A propriedade **`CanvasRenderingContext2D.fillStyle`** da API do Canvas 2D especifica a cor ou o estilo para usar regiões internas. O valor inicial é `#000` (preto).

Veja também o capítulo [Aplicando estilos e cores](/pt-BR/docs/Web/Guide/HTML/Canvas_tutorial/Applying_styles_and_colors) no [Canvas Tutorial](/pt-BR/docs/Web/Guide/HTML/Canvas_tutorial).

## Sintaxe

```
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### Opções

- `color`
  - : Um {{domxref("DOMString")}} passado como um valor de CSS {{cssxref("&lt;color&gt;")}}.
- `gradient`
  - : Um objeto {{domxref("CanvasGradient")}} (um gradiente linear ou radial).
- `pattern`
  - : Um objeto {{domxref("CanvasPattern")}} (uma imagem repetitiva).

## Examples

### Usando a propriedade `fillStyle` para definir uma cor diferente

Isto é apenas um trecho de código simples usando a propriedade `fillStyle` para definir uma cor diferente.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

Edite o código abaixo e veja as alterações atualizadas na tela:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = 'blue';
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

### Um exemplo de `fillStyle` com laços `for`

Neste exemplo, nós usamos dois laços `for` para desenhar uma grade de retângulos, cada um com uma cor diferente. A imagem resultante deve parecer algo como uma captura de tela. Não há nada de espetacular acontecendo aqui. Usamos as duas variáveis `i` é `j` para gerar uma cor RGB exclusiva para cada quadrado, e apenas modificamos os valores vermelho e verde. O canal azul tem um valor fixo. Ao modificar os canais, você pode gerar todos os tipos de paletas. Ao aumentar os valores, você pode conseguir algo que pareça com as paletas de cores que o Photoshop usa.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js
var ctx = document.getElementById("canvas").getContext("2d");
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.fillStyle =
      "rgb(" +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ",0)";
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

O resultado fica assim:

{{EmbedLiveSample("Um_exemplo_de_fillStyle_com_laços_for", 160, 160, "canvas_fillstyle.png")}}

## Especificações

{{Specifications}}

## Compatibibidade com o Navegador

{{Compat}}

## Veja também

- A interface que o define, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
