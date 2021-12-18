---
title: CanvasRenderingContext2D.textAlign
slug: Web/API/CanvasRenderingContext2D/textAlign
translation_of: Web/API/CanvasRenderingContext2D/textAlign
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.textAlign`** de l'API Canvas 2D indique l'alignement de texte courant à utiliser lors du dessin de texte. Faites attention au fait que l'alignement a pour base la valeur x de la méthode `CanvasRenderingContext2D.fillText` Ainsi, si textAlign="center", le texte sera alors dessiné en x-50%\*width.

## Syntaxe

    ctx.textAlign = "left" || "right" || "center" || "start" || "end";

### Options

Valeurs possibles :

- left
  - : Le texte est aligné à gauche.
- right
  - : Le texte est aligné à droite.
- center
  - : Le texte est centré.
- start
  - : Le texte est aligné au début normal de la ligne (aligné à gauche pour les systèmes d'écriture de gauche à droite, aligné à droite pour les systèmes d'écriture de droite à gauche).
- end
  - : Le texte est aligné à la fin normale de la ligne (aligné à droite pour les systèmes d'écriture de gauche à droite, aligné à gauche pour les systèmes d'écriture de droite à gauche).

La valeur pa défaut est `start`.

## Exemples

### Utilisation de la propriété `textAlign`

Ceci est seulement un fragment de code simple utilisant la propriété `textAlign pour indiquer un alignement de texte`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.textAlign = 'left';
ctx.strokeText('Hello world', 0, 100);
```

Modifier le code ci-dessous et voyez vos changements mis à jour en temps réel dans le canevas :

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = '48px serif';
ctx.textAlign = 'left';
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

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

## Spécifications

| Spécification                                                                                                                                    | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-textalign", "CanvasRenderingContext2D.textAlign")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité des navigateurs

{{Compat("api.CanvasRenderingContext2D.textAlign")}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}.
