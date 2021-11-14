---
title: CanvasRenderingContext2D.setLineDash()
slug: Web/API/CanvasRenderingContext2D/setLineDash
translation_of: Web/API/CanvasRenderingContext2D/setLineDash
---
{{APIRef}}

La méthode **`setLineDash()`** de l'interface Canvas 2D API's {{domxref("CanvasRenderingContext2D")}} définit le modèle à utiliser pour les pointillés lors du dessin de la ligne, en utilisant un tableau de valeurs qui spécifie les longueurs des alternances entre pleins et creux.

> **Note :** Pour renvoyer une ligne pleine, configurez la liste pour les pointillés avec un tableau vide.

## Syntaxe

    ctx.setLineDash(segments);

### Paramètres

- `segments`
  - : Un tableau {{jsxref("Array")}} de nombres qui spécifie les distances qui vont alternativement dessiner pleins et creux (dans l'unité du système de coordonnées). Si le nombre d'éléments du tableau est impair, les éléments du tableau sont recopiés et concaténés. Par exemple, `[5, 15, 25]` est transformé en `[5, 15, 25, 5, 15, 25]`. Si le tableau est vide, le pointillé est supprimé, et la ligne devient pleine.

### Valeur de retour

`undefined`.

## Exemples

C'est simplement un fragment de code qui utilise la méthode `setLineDash()` pour dessiner une ligne pointillée au dessus d'une ligne pleine.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

```js
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(400, 50);
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 150);
ctx.lineTo(400, 150);
ctx.stroke();
```

### Essayez le

Editez le code ci-dessous et observez les changements se produire dans le canvas:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code" style="height:150px">
ctx.beginPath();
ctx.setLineDash([5, 15]);
ctx.moveTo(0, 50);
ctx.lineTo(400, 50);
ctx.stroke();

ctx.beginPath();
ctx.setLineDash([]);
ctx.moveTo(0, 150);
ctx.lineTo(400, 150);
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

{{ EmbedLiveSample('Code_jouable', 10, 410) }}

## Spécifications

| Specification                                                                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', "scripting.html#dom-context-2d-setlinedash", "CanvasRenderingContext2D.setLineDash")}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navivgateurs

{{Compat("api.CanvasRenderingContext2D.setLineDash")}}

## Notes spécifiques pour Gecko

- Depuis  Gecko 7.0 {{geckoRelease("7.0")}}, la propriété non standard et dépréciée `mozDash` a été implémentée  comme liste de définition pour les pointillés. Cette propriété sera dépréciée et supprimée dans le futur, voir {{bug(931643)}}. Utilisez `setLineDash()` à la place.

## Notes spécifiques pour WebKit

- Dans les navigateurs à base de WebKit (e.g. Safari), la propriété non standard et dépréciée `webkitLineDash` est implémentée en plus de cette méthode. Utilisez `setLineDash()` à la place.

## Voir aussi

- L'interface qui la définit, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.getLineDash()")}}
- {{domxref("CanvasRenderingContext2D.lineDashOffset")}}
