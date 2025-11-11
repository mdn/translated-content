---
title: CanvasRenderingContext2D.ellipse()
slug: Web/API/CanvasRenderingContext2D/ellipse
---

{{APIRef}} {{SeeCompatTable}}

La méthode **`CanvasRenderingContext2D.ellipse()`** de l'API Canvas 2D ajoute une ellipse au trajet, centrée en _(x, y)_, les rayons _rayonX_ et _rayonY_ commençant à _angleDeDébut_ et se terminant à _angleDeFin_ en allant dans le sens indiqué par _antiHoraire_ (par défaut, horaire).

## Syntaxe

```js
void ctx.ellipse(
  x,
  y,
  rayonX,
  rayonY,
  rotation,
  angleDébut,
  angleFin,
  antihoraire,
);
```

### Paramètres

- `x`
  - : La coordonnée sur l'axe des x du centre de l'ellipse.
- `y`
  - : La coordonnée sur l'axe des y du centre de l'ellipse.
- `rayon`X
  - : Le rayon du grand axe de l'ellipse.
- `rayon`Y
  - : Le rayon du petit axe de l'ellipse.
- `rotation`
  - : La rotation pour cette ellipse, exprimée en radians.
- `angleDébut`
  - : L'angle de début, mesuré à partir de l'axe des x, à partir duquel elle sera dessinée, exprimé en radians.
- `angleFin`
  - : L'angle de fin de l'ellipse, jusqu'auquel elle sera dessinée, exprimé in radians.
- `antihoraire` {{optional_inline}}
  - : Un {{jsxref("Boolean")}} optionnel qui, si `true`, dessine l'ellipse dans le sens antihoraire, sinon dans le sens horaire.

## Exemples

### Utilisation de la méthode `ellipse`

Ceci est seulement un fragment de code simple dessinant une ellipse.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById("canevas");
var ctx = canevas.getContext("2d");

ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, (45 * Math.PI) / 180, 0, 2 * Math.PI);
ctx.stroke();
```

Modifiez le code ci-dessous et voyez vos changements mis à jour en temps réel dans le canevas (vérifiez le support de votre navigateur dans la table de compatibilité si aucune ellipse n'est tracée) :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.ellipse(100, 100, 50, 75, 45 * Math.PI/180, 0, 2 * Math.PI);
ctx.stroke();</textarea
>
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

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
