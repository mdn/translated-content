---
title: CanvasRenderingContext2D.textBaseline
slug: Web/API/CanvasRenderingContext2D/textBaseline
---

{{APIRef}}

La propriété **`CanvasRenderingContext2D.textBaseline`** de l'API Canvas 2D spécifie la ligne de base de texte à utiliser lors du dessin d'un texte.

## Syntaxe

```js
ctx.textBaseline =
  "top" || "hanging" || "middle" || "alphabetic" || "ideographic" || "bottom";
```

### Options

Valeurs possibles :

- top
  - : La ligne de base du texte est le haut du cadratin.
- hanging
  - : La ligne de base du texte est la ligne de base supérieure.
- middle
  - : La ligne de base du texte est le milieu du cadratin.
- alphabetic
  - : La ligne de base du texte est la ligne de base normale alphabétique.
- ideographic
  - : La ligne de base du texte est la ligne de base idéographique ; c'est le bas du corps des caractères, si le corps principal des caractères fait saillie en dessous de la ligne de base alphabétique.
- bottom
  - : La ligne de base du texte est le bas du cadre. Cela diffère de ligne de base idéographique en ce que la ligne de base idéographique ne prend pas en considération les jambages.

La valeur par défaut est `alphabetic`.

## Exemples

### Utilisation de la propritété `textBaseline`

Ceci est seulement un fragment de code simple utilisant la propriété `textBaseline` pour définir un réglage différent de ligne de base de texte.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
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
ctx.font = '48px serif';
ctx.textBaseline = 'hanging';
ctx.strokeText('Hello world', 0, 100);</textarea
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

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.
