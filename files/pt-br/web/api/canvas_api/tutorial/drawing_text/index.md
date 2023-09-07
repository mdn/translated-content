---
title: Drawing text
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Após entender como [aplicar estilos e cores](/pt-BR/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) no capítulo anterior, nós veremos agora como desenhar texto dentro do contexto de uma canvas.

## Desenhando texto

O context de renderização da canvas fornece dois métodos para renderização textual:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Preenche com um determinado texto as cordenadas (x,y) recebidas. Opcionalmente com uma largura máxima para o desenho.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Traçeja um determinado texto nas cordenadas (x,y) recebidas. Opcionalmente com uma largura máxima para o desenho.

### Um exemplo com `fillText`

O texto a seguir é rederizado utilizando `fillStyle`.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### Um exemplo com `strokeText`

O texto é preenchido usando o strokeStyle atual.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## Estilo de Texto

Nos exemplos anteriores, já usamos a propriedade font para tornar o texto um pouco maior que o tamanho padrão. Existem mais algumas propriedades que permitem ajustar a maneira como o texto é exibido no canvas:

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : The current text style being used when drawing text. This string uses the same syntax as the [CSS](/pt-BR/docs/Web/CSS) {{cssxref("font")}} property. The default font is 10px sans-serif.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Text alignment setting. Possible values: `start`, `end`, `left`, `right` or `center`. The default value is `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. The default value is `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Directionality. Possible values: `ltr`, `rtl`, `inherit`. The default value is `inherit`.

Essas propriedades podem ser similares para você, se você trabalhou com CSS antes.

O diagrama seguinte do [WHATWG](http://www.whatwg.org/) demonstra as várias baselines suportadas pela propriedade do `textBaseline`![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### O exemplo de uma textBaseline

Edite o código abaixo e veja as atualizações em tempo real no canvas.

```js
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
```

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);</textarea
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

## Advanced text measurements

In the case you need to obtain more details about the text, the following method allows you to measure it.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object containing the width, in pixels, that the specified text will be when drawn in the current text style.

The following code snippet shows how you can measure a text and get its width.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // TextMetrics object
  text.width; // 16;
}
```

## Notas específicas - Gecko

No Gecko (a engine de renderização do Firefox, Firefox OS e outras aplicações Mozilla), algumas APIs prefixadas foram implementadas em versões anteriores para escrever texto em um canvas. Essas APIs agora estão depreciadas e removidas, e não são mais garantidas para uso.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
