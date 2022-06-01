---
title: CanvasRenderingContext2D.fillRect()
slug: Web/API/CanvasRenderingContext2D/fillRect
translation_of: Web/API/CanvasRenderingContext2D/fillRect
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.fillRect()`** de l'API 2D des Canvas dessine un rectangle plein aux coordonnées _(x, y)_, aux dimensions déterminées par *largeur* et *hauteur* et au style déterminé par l'attribut `fillStyle`.

## Syntaxe

    void ctx.fillRect(x, y, largeur, hauteur);

### Paramètres

- `x`
  - : L'ordonnée *x* des coordonnées du point de départ du rectangle.
- `y`
  - : L'abscisse *y* des coordonnées du point de départ du rectangle.
- `largeur`
  - : La largeur du rectangle.
- `hauteur`
  - : La hauteur de rectangle.

## Exemples

### Utilisation de la méthode `fillRect`

Ceci est juste un extrait de code qui utilise la méthode `fillRect`.

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

// remplir la balise entièrement
// ctx.fillRect(0, 0, canvas.width, canvas.height);
```

Éditez le code suivant pour voir les changements en direct dans la balise canvas:

#### Code jouable

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

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

## Spécifications

| Spécification                                                                                                                                | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-fillrect", "CanvasRenderingContext2D.fillRect")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.fillRect")}}

## Voir aussi

- L'interface qui le définit, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
