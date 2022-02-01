---
title: CanvasRenderingContext2D.strokeRect()
slug: Web/API/CanvasRenderingContext2D/strokeRect
translation_of: Web/API/CanvasRenderingContext2D/strokeRect
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.strokeRect()`** de l'API 2D des Canvas dessine le contour d'un rectangle aux coordonnées de l'angle haut gauche _(x, y)_ et aux dimensions déterminées par *largeur* et *hauteur* dans la balise canvas, et en utilisant l'actuel `strokeStyle`.

## Syntaxe

    void ctx.strokeRect(x, y, largeur, hauteur);

### Paramètres

- `x`
  - : L'abcisse *x* des coordonnées du point de départ du rectangle.
- `y`
  - : L'ordonnée _y_ des coordonnées du point de départ du rectangle.
- largeur
  - : La largeur du rectangle.
- `hauteur`
  - : La hauteur de rectangle.

## Exemples

### Utilisation de la méthode `strokeRect`

Ceci est juste un extrait de code qui utilise la méthode `strokeRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);
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
ctx.strokeStyle = "green";
ctx.strokeRect(10, 10, 100, 100);</textarea>
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

| Spécification                                                                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-strokerect", "CanvasRenderingContext2D.strokeRect")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.strokeRect")}}

## Voir aussi

- l'interface qui la définit, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeStyle")}}
- {{domxref("CanvasRenderingContext2D.clearRect()")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
