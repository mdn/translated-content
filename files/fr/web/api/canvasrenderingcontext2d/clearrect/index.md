---
title: CanvasRenderingContext2D.clearRect()
slug: Web/API/CanvasRenderingContext2D/clearRect
translation_of: Web/API/CanvasRenderingContext2D/clearRect
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.clearRect()`** de l'API 2D des Canvas met en noir transparent tous les pixels dans le rectangle défini par le point de départ de coordonnées _(x, y)_ et par les tailles _(largeur, hauteur)_, supprimant tout contenu précédemment dessiné.

## Syntaxe

    void ctx.clearRect(x, y, largeur, hauteur);

### Paramètres

- `x`
  - : La coordonnée sur l'axe des *x* du point de départ du rectangle.
- `y`
  - : La coordonnée sur l'axe des *y* du point de départ du rectangle.
- `largeur`
  - : La largeur du rectangle.
- `hauteur`
  - : La hauteur de rectangle.

## Notes d'utilisation

Un problème classique avec `clearRect` est qu'il peut apparaître comme ne fonctionnant pas si l'on n'[utilise pas les trajets de façon appropriée](/fr/docs/Tutoriel_canvas/Formes_g%C3%A9om%C3%A9triques#Drawing_paths). N'oubliez pas d'appeler {{domxref("CanvasRenderingContext2D.beginPath", "beginPath()")}} avant de commencer à dessiner une nouvelle image après avoir appelé `clearRect`.

## Exemples

### Utilisation de la méthode `clearRect`

Ceci est seulement un fragment de code simple qui utilise la méthode `clearRect`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById("canvas");
var ctx = canevas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // dessine la dernière ligne du triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);

// effacer le canevas entièrement
// ctx.clearRect(0, 0, canvas.width, canvas.height);
```

Modifiez le code suivant et voyez vos changements en direct dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:140px;">
ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // dessine la dernière ligne du triangle
ctx.stroke();

ctx.clearRect(10, 10, 100, 100);</textarea>
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

{{ EmbedLiveSample('Code_jouable', 700, 400) }}

## Spécifications

| Spécification                                                                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-clearrect", "CanvasRenderingContext2D.clearRect")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.clearRect")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillRect()")}}
- {{domxref("CanvasRenderingContext2D.strokeRect()")}}
