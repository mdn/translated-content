---
title: CanvasRenderingContext2D.fill()
slug: Web/API/CanvasRenderingContext2D/fill
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.fill()`** de l'API Canvas 2D remplit le chemin courant ou donné avec la couleur de fond en cours, en utilisant la règle de remplissage extérieur/intérieur non nul ou la règle de remplissage pair/impair.

## Syntaxe

```js
void ctx.fill([fillRule]);
void ctx.fill(path[, fillRule]);
```

### Paramètres

- `fillRule`

  - : L'algorithme utilisé pour déterminer si un point est à l'intérieur ou à l'extérieur du chemin.
    Valeurs possible:

    - `nonzero`
      - : La [règle de remplissage extérieur/intérieur non nul](http://en.wikipedia.org/wiki/Nonzero-rule), qui est la règle par défaut.
    - `evenodd`
      - : La [règle de remplissage pair/impair](http://en.wikipedia.org/wiki/Even%E2%80%93odd_rule).

- `path`
  - : Un chemin {{domxref("Path2D")}} à remplir.

## Exemples

### Utiliser la méthode `fill`

Ceci est un simple snippet de code qui utilise la méthode `fill` pour remplir un chemin.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.fill();
```

Éditez le code ci-dessous pour voir vos changements apportés au canvas en direct:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
ctx.fill();</textarea
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

### Utiliser l'option `fillRule`

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(96.5, 50.0);
ctx.bezierCurveTo(96.5, 62.84, 0.22, 99.82, 50.74, 47.17);
ctx.bezierCurveTo(100.18, 0.58, 62.84, 96.5, 50.0, 96.5);
ctx.bezierCurveTo(24.32, 96.5, 3.5, 75.68, 3.5, 50.0);
ctx.bezierCurveTo(3.5, 24.32, 24.32, 3.5, 50.0, 3.5);
ctx.bezierCurveTo(75.68, 3.5, 96.5, 24.32, 96.5, 50.0);
ctx.closePath();

ctx.fillStyle = "lightblue";
ctx.lineWidth = 2;
ctx.fill("nonzero");
ctx.stroke();
```

Éditez le code ci-dessous pour voir vos changements apportés au canvas en direct:

#### Code jouable 2

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.beginPath();
ctx.moveTo(96.50,50.00);
ctx.bezierCurveTo(96.50,62.84,0.22,99.82,50.74,47.17);
ctx.bezierCurveTo(100.18,0.58,62.84,96.50,50.00,96.50);
ctx.bezierCurveTo(24.32,96.50,3.50,75.68,3.50,50.00);
ctx.bezierCurveTo(3.50,24.32,24.32,3.50,50.00,3.50);
ctx.bezierCurveTo(75.68,3.50,96.50,24.32,96.50,50.00);
ctx.closePath();

ctx.fillStyle = "lightblue";
ctx.lineWidth = 2;
ctx.fill("nonzero");
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

{{EmbedLiveSample('Code_jouable_2', 700, 360)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface qui définit cette méthode, {{domxref("CanvasRenderingContext2D")}}.
