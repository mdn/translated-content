---
title: CanvasRenderingContext2D.lineTo()
slug: Web/API/CanvasRenderingContext2D/lineTo
translation_of: Web/API/CanvasRenderingContext2D/lineTo
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.lineTo()`** de l'API Canvas 2D connecte le dernier point du sous-chemin en cours aux coordonnées `x, y` spécifiées avec une ligne droite (sans tracer réellement le chemin).

## Syntaxe

    void ctx.lineTo(x, y);

### Paramètres

- `x`
  - : L'abscisse _x_ du point d'arrivée.
- `y`
  - : L'ordonnée _y_ du point d'arrivée.

## Exemples

### Utilisation de la méthode `lineTo`

Ceci est un extrait de code utilisant la méthode `lineTo`. Il faut utiliser la méthode {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} pour débuter un dessin, pour ensuite pouvoir dessiner une ligne dessus. On peut déplacer le crayon avec la méthode {{domxref("CanvasRenderingContext2D.moveTo", "moveTo()")}} et utiliser la méthode {{domxref("CanvasRenderingContext2D.stroke", "stroke()")}} pour rendre la ligne visible.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(100, 100);
ctx.stroke();
```

Éditez le code suivant pour voir les changements en direct:

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
ctx.lineTo(100, 100);
ctx.stroke();</textarea>
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

| Spécification                                                                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-lineto", "CanvasRenderingContext2D.lineTo")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.lineTo")}}

## Voir aussi

- l'interface qui la définit, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.moveTo()")}}
- {{domxref("CanvasRenderingContext2D.stroke()")}}
