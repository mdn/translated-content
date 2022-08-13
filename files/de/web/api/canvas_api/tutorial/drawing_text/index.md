---
title: Text zeichnen
slug: Web/API/Canvas_API/Tutorial/Drawing_text
tags:
  - Canvas
  - Fortgeschritten
  - Grafik
  - Tutorial
translation_of: Web/API/Canvas_API/Tutorial/Drawing_text
original_slug: Web/Guide/HTML/Canvas_Tutorial/Drawing_text
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}

Nachdem wir im vorigen Kapitel gesehen haben, wie man [Gestaltung und Farben anwendet](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) , werden wir nun einen Blick darauf werfen, wie man Text auf ein `canvas` zeichnet.

## Text zeichnen

Der Rendering-Kontext hält zwei Methoden zum zeichnen von Text bereit:

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Füllt einen gegebenen Text an den gegebenen (x,y)-Koordinaten. Optional mit einer maximalen Breite, die zu zeichnen ist.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Umrandet einen gegebenen Text an den gegebenen (x,y)-Koordinaten. Optional mit einer maximalen Breite, die zu zeichnen ist.

### ein `fillText`-Beispiel

Der Text wird mit dem aktuellen `fillStyle` gefüllt.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.fillText('Hello world', 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_fillText_example", 310, 110)}}

### ein `strokeText`-Beispiel

Der Text wird mit dem aktuellen `strokeStyle` umrandet.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.font = '48px serif';
  ctx.strokeText('Hello world', 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("A_strokeText_example", 310, 110)}}

## Text gestalten

In den obigen Beispielen nutzen wir bereits die `font`-Eigentschaft, um den Text ein wenig größer als standardmäßig zu machen. Es gibt ein paar mehr Eigenschaften, die es erlauben, das Zeichnen von Text auf dem `canvas` zu beeinflussen:

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : Der aktuell genutzte Text-Stil, der zum Zeichnen genutzt wird. Dieser String nutzt die selbe Syntax wie die [CSS](/de/docs/Web/CSS) {{cssxref("font")}}-Eigenschaft. Die Standard-Schriftart ist `10px sans-serif`.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Einstellung der Text-Ausrichtung. Mögliche Werte: `start`, `end`, `left`, `right` oder `center`. Der Standard-Wert ist `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Baseline alignment setting. Possible values: `top`, `hanging`, `middle`, `alphabetic`, `ideographic`, `bottom`. The default value is `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Directionality. Possible values: `ltr`, `rtl`, `inherit`. The default value is `inherit`.

These properties might be familiar to you, if you have worked with CSS before.

The following diagram from the [WHATWG](http://www.whatwg.org/) demonstrates the various baselines supported by the `textBaseline` property.![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### A textBaseline example

Edit the code below and see your changes update live in the canvas:

```js
ctx.font = '48px serif';
ctx.textBaseline = 'hanging';
ctx.strokeText('Hello world', 0, 100);
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
ctx.strokeText("Hello world", 0, 100);</textarea>
```

```js hidden
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

## Advanced text measurements

In the case you need to obtain more details about the text, the following method allows you to measure it.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Returns a {{domxref("TextMetrics")}} object containing the width, in pixels, that the specified text will be when drawn in the current text style.

The following code snippet shows how you can measure a text and get its width.

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  var text = ctx.measureText('foo'); // TextMetrics object
  text.width; // 16;
}
```

## Gecko-specific notes

In Gecko (the rendering engine of Firefox, Firefox OS and other Mozilla based applications), some [prefixed APIs](/de/docs/Web/API/CanvasRenderingContext2D#Prefixed_APIs) were implemented in earlier versions to draw text on a canvas. These are now deprecated and removed, and are no longer guaranteed to work.

{{PreviousNext("Web/API/Canvas_API/Tutorial/Applying_styles_and_colors", "Web/API/Canvas_API/Tutorial/Using_images")}}
