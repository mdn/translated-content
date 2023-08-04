---
title: CanvasRenderingContext2D.arcTo()
slug: Web/API/CanvasRenderingContext2D/arcTo
---

{{APIRef}}

O método **`CanvasRenderingContext2D.arcTo()`** da API 2D do Canvas adiciona um arco ao caminho quando fornecemos seus pontos de controle e raio.

O arco será parte de um círculo, nunca de uma elipse. Frequentemente é usado para fazer cantos arredoondados.

Pode-se imaginar o arco como dois segmentos de reta, partindo de um ponto inicial (ponto mais recente definido no caminho) até o primeiro ponto de controle e, em seguida, do primeiro ponto de controle até o segundo ponto de controle. Esses dois segmentos de reta formam um angulo, com o primeiro ponto de controle sendo a curva. Usando arcTo, o ângulo será formado de acordo com o raio fornecido.

O arco é tangencial ao dois segmentos de reta, e por vezes, pode produzir resultados inesperados se, por exemplo, o raio fornecido for maior que a distância entre o ponto inicial e o primeiro ponto de controle.

Se o raio fornecido não atingir o ponto inicial (ponto mais recente definido no caminho), o ponto inicial é conectado ao arco por um segmento de reta.

## Sintaxe

```
void ctx.arcTo(x1, y1, x2, y2, radius);
```

### Parâmetros

- `x1`
  - : coordenada do eixo x para o primeiro ponto de controle.
- `y1`
  - : coordenada do eixo y para o primeiro ponto de controle.
- `x2`
  - : coordenada do eixo x para o segundo ponto de controle.
- `y2`
  - : coordenada do eixo y para o segundo ponto de controle.
- `radius`
  - : O raio do arco.

## Exemplos

### Usando o método `arcTo`

Esse é um trecho simples de código que desenha um arco. O ponto de partida é azul e os pontos de controls são vermelhos.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150, 100, 50, 20, 30);
ctx.lineTo(50, 20);
ctx.stroke();

ctx.fillStyle = "blue";
// starting point
ctx.fillRect(150, 20, 10, 10);

ctx.fillStyle = "red";
// control point one
ctx.fillRect(150, 100, 10, 10);
// control point two
ctx.fillRect(50, 20, 10, 10);
```

{{ EmbedLiveSample('Using_the_arc_method', 315, 165) }}

### Treinando os parâmetros do `arcTo`

Altere o código abaixo e veja suas alterações atualizadas na tela:

```html hidden
<canvas id="canvas" class="playable-canvas" height="200" width="400"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(150, 20);
ctx.arcTo(150,100,50,100,20);
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

{{ EmbedLiveSample('Trying_the_arcTo_parameters', 700, 360) }}

## Espeficicações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
