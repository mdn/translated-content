---
title: CanvasRenderingContext2D.scale()
slug: Web/API/CanvasRenderingContext2D/scale
---

{{APIRef}}

La méhode **`CanvasRenderingContext2D.scale()`** de l'API Canvas 2D ajoute une transformation de mise à l'échelle des unités du canevas, de x horizontalement et de y verticalement.

Par défaut, une unité sur le canevas est exactement un pixel. Si on applique, par exemple, un facteur d'échelle de 0,5, l'unité résultante deviendra 0,5 pixel et ainsi, les formes seront dessinées en taille moitié. De façon similaire, mettre le facteur d'échelle à 2,0 augmentera la taille de l'unité et une unité deviendra alors deux pixels. Cela aura pour résultat que les formes seront dessinées deux fois plus grandes.

## Syntaxe

```js
void ctx.scale(x, y);
```

### Paramètres

- `x`
  - : Facteur d'échelle dans la direction horizontale.
- y
  - : Facteur d'échelle dans la direction verticale.

## Exemples

### Utilisation de la méthode `scale`

Ceci est seulement un fragment de code simple qui utilise la méthode `scale`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.scale(10, 3);
ctx.fillRect(10, 10, 10, 10);

// remet la matrice de transformation courante à la matrice identité
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

Modifiez le code ci-dessous et voyez vos changements mis à jour en temps réel dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.scale(10, 3);
ctx.fillRect(10,10,10,10);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea
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

### Utilisation de `scale` pour un retournement horizontal ou vertical

Vous pouvez utiliser `ctx.scale(-1, 1)` pour retourner le contexte horizontalement et `ctx.scale(1, -1)` pour le retourner verticalement.

#### Code jouable 2

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.scale(-1, 1);
ctx.font = "48px serif";
ctx.fillText("Hello world!", -320, 120);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea
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

{{ EmbedLiveSample('Code_jouable_2', 700, 360) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
