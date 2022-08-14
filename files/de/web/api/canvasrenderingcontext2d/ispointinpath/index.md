---
title: CanvasRenderingContext2D.isPointInPath()
slug: Web/API/CanvasRenderingContext2D/isPointInPath
translation_of: Web/API/CanvasRenderingContext2D/isPointInPath
---
{{APIRef}}

Die Methode **`CanvasRenderingContext2D`\*\***`.isPointInPath()`\*\* der Canvas 2D API entscheidet darüber, ob ein Punkt in einem gegeben Pfad enthalten ist.

## Syntax

    boolean ctx.isPointInPath(x, y);
    boolean ctx.isPointInPath(x, y, fillRule);

    boolean ctx.isPointInPath(path, x, y);
    boolean ctx.isPointInPath(path, x, y, fillRule);

### Parameter

- x
  - : Die X-Koordinate des zu prüfenden Punktes.
- y
  - : Die Y-Koordinate des zu prüfenden Punktes.
- `fillRule`
  - : Der Algorithmus, der prüft, ob der Punkt innerhalb oder außerhalb des Pfades liegt.
    Mögliche Werte:\* **`"nonzero`**": Die [non-zero winding Regel](http://en.wikipedia.org/wiki/Nonzero-rule), sie ist standardmäßig eingestellt.
    - **`"evenodd"`**: Die [even-odd winding Regel](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).
- `path`
  - : Ein {{domxref("Path2D")}} Objekt.

### Rückgabewert

- {{jsxref("Boolean")}}
  - : Ein Boolean, welcher `true` ist, wenn der gegebene Punkt innerhalb des gegeben Pfades liegt, ansonsten `false`.

## Beispiele

### Benutzung der Methode `isPointInPath`

Dies ist ein einfaches Snippet, welches die `isPointinPath` Methode nutzt, um zu prüfen, ob ein Punkt in gegebenem Pfad enthalten ist.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.rect(10, 10, 100, 100);
ctx.stroke();
console.log(ctx.isPointInPath(10, 10)); // true
```

Editieren Sie den folgenden Quelltext. Die Änderungen werden in Echtzeit übernommen und Log-Ausgaben in die [console](/de/docs/Tools/Browser_Console) ausgegeben:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.stroke();
console.log(ctx.isPointInPath(10, 10)); // true</textarea>
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

## Specifications

| Specification                                                                                                                                                | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-ispointinpath", "CanvasRenderingContext2D.isPointInPath")}} | {{Spec2('HTML WHATWG')}} |         |

## Browser compatibility

{{Compat}}

## Compatibility notes

- Prior to Gecko 7.0 (Firefox 7.0 / Thunderbird 7.0 / SeaMonkey 2.4), this method incorrectly failed to multiply the specified point's coordinates by the current transformation matrix before comparing it to the path. Now this method works correctly even if the context is rotated, scaled, or otherwise transformed.

## See also

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}.
