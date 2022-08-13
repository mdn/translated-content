---
title: CanvasRenderingContext2D.scale()
slug: Web/API/CanvasRenderingContext2D/scale
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Méthode
  - Referenz
translation_of: Web/API/CanvasRenderingContext2D/scale
---
{{APIRef}}

Die Methode **`CanvasRenderingContext2D.scale()`** der Canvas 2D API skaliert das Canvas-Element um den Faktor x horizontal und um den Faktor y vertikal.

Normalerweise ist eine Einheit auf dem Canvas genau ein Pixel. Wenn wir zum Beispiel einen Skalierungsfaktor von 0,5 Pixeln anwenden, ist eine Einheit 0,5 Pixel und alle Objekte werden mit der halben Größe gezeichnet. Analog dazu vergößert der Skalierungsfaktor 2,0 die Längeneinheit auf zwei Pixel. Die Objekte werden dann doppelt so groß gezeichnet.

## Syntax

    void ctx.scale(x, y);

### Parameter

- `x`
  - : Skalierungsfaktor in horizontaler Richtung.
- `y`
  - : Skalierungsfaktor in vertikaler Richtung

## Beispiele

### Die Methode `scale` verwenden

Dies ist nur ein kurzes Beispiel, das die Methode `scale` benutzt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.scale(10, 3);
ctx.fillRect(10, 10, 10, 10);

// reset current transformation matrix to the identity matrix
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

Editieren Sie den folgenden Code und sehen Sie die Änderungen sofort im Canvas:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.scale(10, 3);
ctx.fillRect(10,10,10,10);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea>
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

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code', 700, 360) }}

### `scale` verwenden, um horizontal oder vertikal zu spiegeln

Sie können `ctx.scale(-1, 1)` benutzen, um den Inhalt horizontal zu spiegeln und `ctx.scale(1, -1)`, um ihn vertikal zu spiegeln.

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.scale(-1, 1);
ctx.font = "48px serif";
ctx.fillText("Hello world!", -320, 120);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea>
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

reset.addEventListener("click", function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function() {
  textarea.focus();
})

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Playable_code2', 700, 360) }}

## Spezifikationen

| Specification                                                                                                                        | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-scale", "CanvasRenderingContext2D.scale")}} | {{Spec2('HTML WHATWG')}} |         |

## Browserkompabilität

{{Compat}}

## Siehe auch

- Das Interface, durch das es definiert wird, {{domxref("CanvasRenderingContext2D")}}
