---
title: CanvasGradient.addColorStop()
slug: Web/API/CanvasGradient/addColorStop
tags:
  - API
  - Canvas
  - CanvasGradient
  - Méthode
  - Reference
translation_of: Web/API/CanvasGradient/addColorStop
---
{{APIRef("Canvas API")}}

La méthode CanvasGradient.addColorStop () ajoute un nouvel arrêt, défini par un `décalage` et une `couleur`, au dégradé. Si le décalage n'est pas compris entre 0 et 1, une erreur INDEX_SIZE_ERR est générée, si la couleur ne peut pas être analysée en tant que {{cssxref ("&lt;color&gt;")}} CSS, une erreur SYNTAX_ERR est générée.

## Syntaxe

    void gradient.addColorStop(décalage, couleur);

### Paramètres

- décalage
  - : Un nombre entre 0 et 1. Une erreur INDEX_SIZE_ERR est générée, si le nombre n'est pas dans cette plage.
- couleur
  - : Une {{cssxref ("&lt;color&gt;")}} CSS. Une erreur SYNTAX_ERR est générée, si la valeur ne peut pas être analysée en tant que valeur \<color> CSS.

## Exemples

### Utilisation de la méthode `addColorStop` 

Il s'agit seulement d'un simple fragment de code qui utilise la méthode `addColorStop` avec un objet {{domxref("CanvasGradient")}}.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

var degrade = ctx.createLinearGradient(0, 0, 200, 0);
degrade.addColorStop(0, 'green');
degrade.addColorStop(1, 'white');
ctx.fillStyle = degrade;
ctx.fillRect(10, 10, 200, 100);
```

Modifiez le code ci-dessous et voyez vos modifications mises à jour en direct dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
var gradient = ctx.createLinearGradient(0,0,200,0);
gradient.addColorStop(0,"green");
gradient.addColorStop(1,"white");
ctx.fillStyle = gradient;
ctx.fillRect(10,10,200,100);</textarea>
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
| {{SpecName('HTML WHATWG', "scripting.html#dom-canvasgradient-addcolorstop", "CanvasGradient.addColorStop")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasGradient.addColorStop")}}

## Voir aussi

- L'interface ladéfinissant, {{domxref("CanvasGradient")}}
- {{domxref("CanvasRenderingContext2D.createLinearGradient()")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
