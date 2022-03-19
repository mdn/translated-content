---
title: CanvasRenderingContext2D.strokeText()
slug: Web/API/CanvasRenderingContext2D/strokeText
translation_of: Web/API/CanvasRenderingContext2D/strokeText
---
{{APIRef}}

La méthode **`CanvasRenderingContext2D.strokeText()`** de l'API Canvas 2D trace le texte fourni à la position donnée _(x, y)_. Si le quatrième paramètre optionnel indiquant une largeur maximale est fourni, le texte sera mis à l'échelle pour tenir dans cette cette largeur.

Voir aussi la méthode {{domxref("CanvasRenderingContext2D.fillText()")}} pour dessiner un texte rempli.

## Syntaxe

    void ctx.strokeText(texte, x, y [, largeurMax]);

### Paramètres

- `texte`
  - : Le texte à tracer en utilisant les valeurs en cours de {{domxref("CanvasRenderingContext2D.font","font")}}, {{domxref("CanvasRenderingContext2D.textAlign","textAlign")}}, {{domxref("CanvasRenderingContext2D.textBaseline","textBaseline")}}, et {{domxref("CanvasRenderingContext2D.direction","direction")}}.

<!---->

- `x`
  - : La coordonnée sur l'axe des x du point de départ du texte.
- `y`
  - : La coordonnée sur l'axe des y du point de départ du texte.
- `largeurMax` {{optional_inline}}
  - : La largeur maximum à dessiner.  Si spécifiée et si la chaîne est calculée comme étant plus large que cette largeur, la police est ajustée pour utiliser une police plus condensée horizontalement (si une est disponible ou si une raisonnablement lisible lisible peut être synthétisée en mettant à l'échelle horizontalement la police courante), ou une police plus petite.

## Exemples

### Utilisation de la méthode `strokeText`

Il ne s'agit que d'un extrait de code simple qui utilise la méthode `strokeText`.

#### HTML

```html
<canvas id="canevas"></canvas>
```

#### JavaScript

```js
var canevas = document.getElementById('canevas');
var ctx = canevas.getContext('2d');

ctx.font = '48px serif';
ctx.strokeText('Hello world', 50, 100);
```

Modifiez le code ci-dessous et voyez vos modifications mises à jour en direct dans le canevas:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.strokeText("Hello world", 50, 100);</textarea>
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

| Spécification                                                                                                                                        | Statut                           | Commentaire |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-stroketext", "CanvasRenderingContext2D.strokeText")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.strokeText")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.fillText()")}}
