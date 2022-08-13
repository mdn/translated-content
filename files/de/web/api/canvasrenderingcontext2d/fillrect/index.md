---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
tags:
  - API
  - Canvas
  - CanvasRenderingContext2D
  - Method
  - Methode(2)
  - Reference
  - Referenz
translation_of: Web/API/CanvasRenderingContext2D/fillRect
---
{{APIRef}}

Die Methode **`CanvasRenderingContext2D.fillRect()`** der Canvas 2D API zeichnet ein ausgefülltes Rechteck an der Position _(`x`, `y`)_. Die Größe wird über die Parameter `width` und `height` bestimmt. Die Füllfarbe wird über das Attribut `fillStyle` des Context-Objekts festgelegt.

## Syntax

    void ctx.fillRect(x, y, width, height);

### Parameter

- `x`
  - : Die Koordinate auf der x-Achse als horizontaler Startpunkt des Rechtecks.
- `y`
  - : Die Koordinate auf der y-Achse als vertikaler Startpunkt des Rechtecks.
- `width`
  - : Die Breite des Rechtecks.
- `height`
  - : Die Höhe des Rechtecks.

## Beispiele

### Benutzung der Methode `fillRect`

Dies ist ein einfaches Code-Beispiel, welches die `fillRect` Methode nutzt.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);

// fill the whole canvas
// ctx.fillRect(0, 0, canvas.width, canvas.height);
```

Ändern Sie den unten gezeigten Code und sehen Sie Ihre Änderungen live im Canvas-Element:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);</textarea>
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

## Spezifikationen

| Spezifikation                                                                                                                                | Status                           | Kommentar |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-fillrect", "CanvasRenderingContext2D.fillRect")}} | {{Spec2('HTML WHATWG')}} |           |

## Browserkompatibilität

{{Compat}}

## Siehe auch

- Das zugehörige Interface, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
