---
title: CanvasRenderingContext2D.stroke()
slug: Web/API/CanvasRenderingContext2D/stroke
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.stroke()`** de l'API Canvas 2D dessine le chemin actuel ou donné avec le style de trait actuel utilisant la règle d'enroulement non nulle.

## Syntaxe

```js
void ctx.stroke();
void ctx.stroke(path);
```

### Paramètres

- `path`
  - : Un chemin {{domxref("Path2D")}} à dessiner.

## Exemples

### Utilisation de la méthode `stroke`

Il s'agit d'un extrait de code simple utilisant la méthode `stroke` pour tracer un chemin.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
ctx.rect(10, 10, 100, 100);
ctx.stroke();
```

Editer le code en dessous et voir vos modifications mises à jour en direct dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rect(10, 10, 100, 100);
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

- L'interface qui le définit, {{domxref("CanvasRenderingContext2D")}}.
