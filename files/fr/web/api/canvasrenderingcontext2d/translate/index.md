---
title: CanvasRenderingContext2D.translate()
slug: Web/API/CanvasRenderingContext2D/translate
translation_of: Web/API/CanvasRenderingContext2D/translate
---
{{APIRef}}

La méthode **CanvasRenderingContext2D.translate()** de l'API Canvas 2D ajoute une transformation de translation en déplaçant le canevas et son origine x horizontalement et y verticalement sur la grille.

## Syntaxe

    void ctx.translate(x, y);

![](canvas_grid_translate.png)

### Paramètres

- `x`
  - : Distance de déplacement dans le sens horizontal.
- y
  - : Distance de déplacement dans le sens vertical.

## Exemples

### Utilisation de la méthode `translate`

Il s'agit seulement d'un extrait de code simple qui utilise la méthode translate.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.translate(50, 50);
ctx.fillRect(0, 0, 100, 100);

// Réinitialise la matrice de transformation en cours à la matrice identité
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

Modifiez le code ci-dessous et voyez vos modifications mises à jour en direct sur le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.translate(50, 50);
ctx.fillRect(0,0,100,100);
ctx.setTransform(1, 0, 0, 1, 0, 0);</textarea>
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

| Spécification                                                                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-translate", "CanvasRenderingContext2D.translate")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.translate")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
