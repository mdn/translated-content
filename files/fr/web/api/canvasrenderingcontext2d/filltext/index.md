---
title: CanvasRenderingContext2D.fillText()
slug: Web/API/CanvasRenderingContext2D/fillText
translation_of: Web/API/CanvasRenderingContext2D/fillText
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.fillText()`** de l'API Canvas 2D écrit un texte donné à la position _(x, y)_ donnée. Si le quatrième paramètre optionnel donnant une largeur maximum est fourni, le texte sera mis à l'échelle pour s'adapter à cette largeur.

Voir aussi la méthode {{domxref("CanvasRenderingContext2D.strokeText()")}} pour dessiner un texte mis en forme.

## Syntaxe

    void ctx.fillText(texte, x, y [, largeurMax]);

### Paramètres

- `texte`
  - : Le texte à représenter en utilisant les valeurs en cours de {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}, et de {{domxref("CanvasRenderingContext2D.direction","direction")}}.

<!---->

- `x`
  - : La valeur de la coordonnée sur l'axe des x du point de début du texte.
- `y`
  - : La valeur de la coordonnée sur l'axe des y du point de fin du texte.
- `largeurMax` {{optional_inline}}
  - : La largeur maximum à dessiner. Si spécifiée, et si la longueur calculée de la chaîne est supérieure à cette largeur, la police est ajustée pour utiliser une police plus condensée horizontalement (s'il en existe une ou s'il peut en être synthétisée une raisonnablement lisible en mettant à l'échelle horizontalement la police en cours) ou une plus petite police.

## Exemples

### Utilisation de la méthode `fillText`

Ceci est seulement un fragment de code simple utilisant la méthode `fillText`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.fillText('Hello world', 50, 100);
```

Modifiez le code ci-dessous et voyez vos changements être mis à jour en temps réel dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.fillText("Hello world", 50, 100);</textarea>
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

| Spécification                                                                                                                                | Statut                           | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-filltext", "CanvasRenderingContext2D.fillText")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.fillText")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.strokeText()")}}
