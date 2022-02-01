---
title: CanvasRenderingContext2D.moveTo()
slug: Web/API/CanvasRenderingContext2D/moveTo
translation_of: Web/API/CanvasRenderingContext2D/moveTo
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.moveTo()`** de l'API Canvas 2D déplace le point de départ d'un nouveau sous-chemin vers les coordonnées `(x, y)`.

## Syntaxe

    void ctx.moveTo(x, y);

### Paramètres

- `x`
  - : L'axe des x du point.
- `y`
  - : L'axe des y du point.

## Exemples

### Utiliser la méthode `moveTo`

Ceci est un simple snippet de code qui utilise la méthode `moveTo` pour déplacer le stylo à une position de départ pour dessiner une ligne.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.lineTo(200, 50);
ctx.stroke();
```

Éditez le code ci-dessous pour voir vos changements mettre à jour le canvas en direct:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(200, 50);
ctx.stroke()</textarea>
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

| Specification                                                                                                                            | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-moveto", "CanvasRenderingContext2D.moveTo")}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.moveTo")}}

## Voir aussi

- L'interface qui définit cette méthode, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.lineTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
