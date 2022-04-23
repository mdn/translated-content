---
title: CanvasRenderingContext2D.rotate()
slug: Web/API/CanvasRenderingContext2D/rotate
translation_of: Web/API/CanvasRenderingContext2D/rotate
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.rotate()`** de l'API Canvas 2D ajoute une rotation à la matrice de transformation. L'argument `angle` représente un angle de rotation horaire et il est exprimé en radians.

## Syntaxe

    void ctx.rotate(angle);

![](canvas_grid_rotate.png)

### Paramètres

- `angle`
  - : L'angle de rotation horaire en radians. Vous pouvez utiliser `degrés * Math.PI / 180` si vous voulez faire la conversion à partir d'une valeur en degrés.

Le centre de la rotation est toujours l'origine du canevas. Pour changer le centre, il faudra déplacer le canevas en utilisant la méthode {{domxref("CanvasRenderingContext2D.translate", "translate()")}}.

## Exemples

### Utilisation de la méthode `rotate`

Ceci est seulement un fragment de code simple qui utilise la méthode `rotate`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70, 0, 100, 30);

// réinitialise la matrice de transformation courante à la matrice identité
ctx.setTransform(1, 0, 0, 1, 0, 0);
```

Modifiez le code ci-dessous et voyez vos changements mis à jour en temps réel dans le canevas:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.rotate(45 * Math.PI / 180);
ctx.fillRect(70,0,100,30);
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

| Spécification                                                                                                                            | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-rotate", "CanvasRenderingContext2D.rotate")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité navigateurs

{{Compat("api.CanvasRenderingContext2D.rotate")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
