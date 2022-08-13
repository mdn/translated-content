---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
translation_of: Web/API/CanvasRenderingContext2D/textAlign
---
{{APIRef}}

Die **`CanvasRenderingContext2D`\*\***`.textAlign`\*\* Eigenschaft der Canvas 2D API spezifiert die aktuelle Textausrichtung welche beim zeichnen von Text verwendet wird.

Nehmen Sie in Acht, dass die Ausrichtung auf dem x Wert der {{domxref("CanvasRenderingContext2D.fillText", "fillText()")}} Methode basiert. Wenn `textAlign` `"center"` ist, dann würde der Text an der Stelle `x - (width / 2)` gezeichnet werden.

## Syntax

    ctx.textAlign = "left" || "right" || "center" || "start" || "end";

### Optionen

Mögliche Werte:

- `left`
  - : Der Text wird linksbündig ausgerichtet.
- `right`
  - : Der Text wird rechtsbündig ausgerichtet.
- `center`
  - : Der Text wird zentiert ausgerichtet.
- `start`
  - : Der Text wird am normalen Start der Zeile ausgerichtet. (Links -oder rechtsbündig, je nach Sprache).
- `end`
  - : Der Text wird am normalen Ende der Zeile ausgerichtet (Links -oder rechtsbündig, je nach Sprache).

Der Standardwert ist `start`.

## Beispiele

### Benutzung der `textAlign` Eigenschaft

Ein einfaches Beispiel welches die `textAlign` Eigenschaft benutzt um die Textausrichtung zu ändern.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.textAlign = 'left';
ctx.strokeText('Hello world', 0, 100);
```

Ändern Sie den Code um Ihre Änderungen im Canvas zu sehen:

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = '48px serif';
ctx.textAlign = 'left';
ctx.strokeText('Hello world', 0, 100);</textarea>
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

## Spezifikationen

| Specification                                                                                                                                    | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-textalign", "CanvasRenderingContext2D.textAlign")}} | {{Spec2('HTML WHATWG')}} |         |

## Browserkompatibilität

{{Compat("api.CanvasRenderingContext2D.textAlign")}}

## Siehe auch

- Das Interface welches es definiert, {{domxref("CanvasRenderingContext2D")}}.
