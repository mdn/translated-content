---
title: CanvasRenderingContext2D.arc()
slug: Web/API/CanvasRenderingContext2D/arc
translation_of: Web/API/CanvasRenderingContext2D/arc
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.arc()`** de l'API Canvas 2D permet d'ajouter un arc de cercle au tracé, en le centrant aux positions _(x, y)* et avec un rayon *r* qui démarre à *angleDépart* et qui finit à *angleFin*, dans la direction de *sensAntiHoraire* (par défaut en sens horaire).

## Syntaxe

    void ctx.arc(x, y, rayon, angleDépart, angleFin, sensAntiHoraire);

### Paramètres

- `x`
  - : La position en x du centre de l'arc.
- `y`
  - : La position en y du centre de l'arc.
- `radius` _(rayon)_
  - : Le rayon de l'arc.
- `startAngle` _(angle départ)_
  - : La valeur de l'angle avec laquelle démarre l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
- `endAngle` _(angle fin)_
  - : La valeur de l'angle avec laquelle se finit l'arc de cercle, mesurée dans le sens horaire à partir de l'axe x positif et exprimé en radians.
- `anticlockwise` _(sens anti-horaire)_ {{optional_inline}}
  - : Un {{jsxref("Booléen")}} facultatif qui, si à `true`_(vrai),_ indique que l'arc sera dessiné dans le sens inverse des aiguilles d'une montre entre les deux angles. Par défaut, la valeur est le sens des aiguilles d'une montre.

## Exemples

### En utilisant la méthode `arc`

Voici un code simple permettant de dessiner un cercle .

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(75, 75, 50, 0, 2 * Math.PI);
ctx.stroke();
```

Modifiez le code ci-dessous et voyez les changements en direct sur le canvas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.arc(50, 50, 50, 0, 2 * Math.PI, false);
ctx.stroke();</textarea>
```

```js
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

### Exemple avec différentes formes

Dans cet exemple, plusieurs formes différentes sont dessinées, afin de montrer les possibilités offertes par `arc()`.

```html hidden
<canvas id="canvas" width="150" height="200"></canvas>
```

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

// Draw shapes
for (var i = 0; i < 4; i++) {
  for(var j = 0; j < 3; j++) {
    ctx.beginPath();
    var x              = 25 + j * 50;               // x coordinate
    var y              = 25 + i * 50;               // y coordinate
    var radius         = 20;                    // Arc radius
    var startAngle     = 0;                     // Starting point on circle
    var endAngle       = Math.PI + (Math.PI * j) /2; // End point on circle
    var anticlockwise  = i % 2 == 1;                // Draw anticlockwise

    ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    if (i > 1) {
      ctx.fill();
    } else {
      ctx.stroke();
    }
  }
}
```

{{ EmbedLiveSample('Exemple_avec_différentes_formes', 160, 210, "canvas_arc.png") }}

## Spécifications

| Spécification                                                                                                                    | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-arc", "CanvasRenderingContext2D.arc")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.arc")}}

## Notes spécifiques à Gecko

Avec Gecko 2.0 {{geckoRelease("2.0")}}:

- Le paramètre `anticlockwise` est optionnel,
- Une valeur négative pour le rayon lance une erreur de type {{domxref("DOMError", "IndexSizeError")}} ( "L'index ou la taille est négatif ou supérieur à la valeur autorisée" ).

## Voir aussi

- L'Interface JavaScript à laquelle appartient la méthode : {{domxref("CanvasRenderingContext2D")}}
