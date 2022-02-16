---
title: CanvasRenderingContext2D.rect()
slug: Web/API/CanvasRenderingContext2D/rect
translation_of: Web/API/CanvasRenderingContext2D/rect
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.rect()`** de l'API Canvas 2D crée un chemin de rectangle à la position _(x, y)_ et de dimensions *width* et *height*. Ces quatre points sont connectés par des lignes droites et le sous-chemin est directement fermé, vous pouvez donc utiliser `fill` ou `stroke` pour dessiner ce rectangle.

## Syntaxe

    void ctx.rect(x, y, width, height);

### Paramètres

- `x`
  - : La coordonnée x pour le côté gauche du rectangle.
- `y`
  - : La coordonnée y pour le haut du rectangle.
- `width`
  - : La largeur du rectangle.
- `height`
  - : La hauteur du rectangle.

## Exemples

### Utiliser la méthode `rect`

Ceci est un simple bout de code qui utilise la méthode `rect` pour dessiner un chemin. Pour réellement dessiner ce chemin sur le canvas, vous devez utiliser la méthode {{domxref("CanvasRenderingContext2D.fill", "fill()")}} ou {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}}. Voir également les méthodes {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} et {{domxref("CanvasRenderingContext2D.strokeRect", "strokeRect()")}}, qui peuvent le faire en une seule étape.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
ctx.rect(10, 10, 100, 100);
ctx.fill();
```

Éditez le code ci-dessous pour voir vos mises à jour apportées au canvas directement:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.fill();</textarea>
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

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

## Spécifications

| Specification                                                                                                                        | Status                           | Comment |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-rect", "CanvasRenderingContext2D.rect")}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.rect")}}

## Voir aussi

- L'interface qui définit cette méthode, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
- {{domxref("CanvasRenderingContext2D.fill()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
