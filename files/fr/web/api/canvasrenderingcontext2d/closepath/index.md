---
title: CanvasRenderingContext2D.closePath()
slug: Web/API/CanvasRenderingContext2D/closePath
translation_of: Web/API/CanvasRenderingContext2D/closePath
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.closePath()`** de l'API Canvas 2D provoque le retour du stylo au point de départ du sous-traçé courant. Il le fait en ajoutant une ligne droite entre le point courant et le point rejoint. Si la figure a déjà été fermée ou n'est constituée que d'un seul point, cette méthode ne provoque rien.

## Syntax

    void ctx.closePath();

## Exemples

### Utiliser la méthode `closePath`

Voici un exemple d'utilisation de la méthode closePath.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(20,20);
ctx.lineTo(200,20);
ctx.lineTo(120,120);
ctx.closePath(); // ferme le triangle par une ligne droite
ctx.stroke();
```

Editez le code ci-dessous et observez les répercutions dans le canvas:

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
ctx.closePath(); // draws last line of the triangle
ctx.stroke();</textarea>
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
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-closepath", "CanvasRenderingContext2D.closePath")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité navigateurs

{{Compat("api.CanvasRenderingContext2D.closePath")}}

## Voir également

- The interface defining it, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.beginPath()")}}
