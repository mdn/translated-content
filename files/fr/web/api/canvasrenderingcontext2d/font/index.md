---
title: CanvasRenderingContext2D.font
slug: Web/API/CanvasRenderingContext2D/font
translation_of: Web/API/CanvasRenderingContext2D/font
---
{{APIRef}}

La propriété **`CanvasRenderingContext2D.font`** de l'API Canvas 2D API spécifie le style de texte à utiliser pour dessiner du texte. Cette chaîne utilise la même syntaxe que le spécificateur de [police CSS](/fr-FR/docs/Web/CSS/font). La police par défaut est 10px sans-serif.

## Syntaxe

    ctx.font = value;

### Options

- `valeur`
  - : Une valeur {{domxref("DOMString")}} analysée comme une valeur de {{cssxref("font")}} CSS. La police par défaut est 10px sans-serif.

## Exemples

### Utilisation de la propriété `font`

Ceci est seulement un fragment de code simple utilisant la propriéte font pour indiquer une taille de police et une famille de police différentes.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.font = '48px serif';
ctx.strokeText('Hello world', 50, 100);
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
ctx.strokeText('Hello world', 50, 100);</textarea>
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

### Chargement de polices avec l'API CSS Font Loading

A l'aide de l'API {{domxref("FontFace")}}, vous pouvez explicitement charger des polices avant de les utiliser dans un canevas.

```js
var f = new FontFace('test', 'url(x)');

f.load().then(function() {
  // Prêt à utiliser la police dans un contexte de canevas
});
```

## Spécifications

| Spécification                                                                                                                        | Statut                           | Commentaire |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-font", "CanvasRenderingContext2D.font")}} | {{Spec2('HTML WHATWG')}} |             |

## Compatibilité navigateurs

{{Compat("api.CanvasRenderingContext2D.font")}}

## Notes spécifiques à Gecko

- Dans les navigateurs basés sur Gecko, tels que Firefox, une propriété non standard et désapprouvée `ctx.mozTextStyle` est implémentée en plus de cette propriété. Ne l'utilisez pas.

### Notes relatives à Quantum

- Un bug ({{bug(1374885)}}) a été corrigé avec Quantum et qui empêchait de récupérer la police d'un contexte lorsqu'une police système était utilisée. Cela a été corrigée avec [Stylo](https://wiki.mozilla.org/Quantum/Stylo) qui a été publié avec Firefox 57.

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
