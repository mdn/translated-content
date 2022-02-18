---
title: CanvasRenderingContext2D.direction
slug: Web/API/CanvasRenderingContext2D/direction
translation_of: Web/API/CanvasRenderingContext2D/direction
---
{{APIRef}} {{SeeCompatTable}}

La propriété **`CanvasRenderingContext2D.direction`** de l'API Canvas 2D indique la direction de texte courante utilisé lors du dessin de texte.

## Syntaxe

    ctx.direction = "ltr" || "rtl" || "inherit";

### Options

Valeurs possibles :

- ltr
  - : La direction du texte est de gauche à droite.
- rtl
  - : La direction du texte est de droite à gauche.
- inherit
  - : La direction du texte est héritée de l'élément {{HTMLElement("canvas")}} ou du {{domxref("Document")}} comme approprié.

La valeur par défaut est `inherit`.

## Exemples

### Utilisation de la propriété `direction`

Ceci est seulement un fragment de code simple utilisant la propriété `direction` pour indiquer un réglage de ligne de base différent.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.direction = 'ltr';
ctx.strokeText('Hello world', 0, 100);
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
ctx.direction = 'ltr';
ctx.strokeText('Hello world', 0, 100);</textarea>
```

```js hidden
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var edit = document.getElementById('edit');
var code = textarea.value;

function drawCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener('click', function() {
  textarea.focus();
})

textarea.addEventListener('input', drawCanvas);
window.addEventListener('load', drawCanvas);
```

{{EmbedLiveSample('Code_jouable', 700, 360)}}

## Spécifications

| Spécification                                                                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-direction", "CanvasRenderingContext2D.direction")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.direction")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.
