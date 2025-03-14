---
title: CanvasRenderingContext2D.createLinearGradient()
slug: Web/API/CanvasRenderingContext2D/createLinearGradient
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.createLinearGradient()`** de l'API Canvas 2D crée un gradient le long de la ligne donnée par les coordonnées représentées par les paramètres.

![](mdn-canvas-lineargradient.png)

Cette méthode retourne un {{domxref("CanvasGradient")}} linéaire.

NOTE : les coordonnées sont globales, aussi soyez conscient du fait que, lors de l'utilisation "fillRect" (et de ses amis), les coordonnées NE sont PAS relatives aux coordonnées spécifiées dans les arguments de "fillRect".

## Syntaxe

```js
CanvasGradient ctx.createLinearGradient(x0, y0, x1, y1);
```

### Paramètres

- `x0`
  - : La coordonnée sur l'axe des x du point de début.
- `y0`
  - : La coordonnée sur l'axe des y du point de début.
- `x1`
  - : La coordonnée sur l'axe des x du point de fin.
- `y1`
  - : La coordonnée sur l'axe des y du point de fin.

### Valeur retournée

- {{domxref("CanvasGradient")}}
  - : Un `CanvasGradient linéaire` initialisé avec la ligne spécifiée.

## Exemples

### Utilisation de la méthode `createLinearGradient`

Ceci est seulement un simple fragment de code qui utilise la méthode `createLinearGradient` pour créer un {{domxref("CanvasGradient")}} avec les points de début et de fin spécifiés. Une fois créé, vous pouvez utiliser la méthode {{domxref("CanvasGradient.addColorStop()")}} pour définir de nouveaux arrêts sur le gradient, avec des déplacements et des couleurs spécifiés. Le gradient est appliqué si vous le mettez comme {{domxref("CanvasRenderingContext2D.fillStyle", "fillStyle")}} courant, et il est dessiné sur le canevas lors de l'utilisation de la méthode {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}}, par exemple.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var gradient = ctx.createLinearGradient(0, 0, 200, 0);
gradient.addColorStop(0, "green");
gradient.addColorStop(1, "white");
ctx.fillStyle = gradient;
ctx.fillRect(10, 10, 200, 100);
```

Modifiez le code ci-dessous et voyez vos changements mis à jour en temps réel sur le canevas :

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
ctx.fillRect(10,10,200,100);</textarea
>
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

reset.addEventListener("click", function () {
  textarea.value = code;
  drawCanvas();
});

edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawCanvas);
window.addEventListener("load", drawCanvas);
```

{{ EmbedLiveSample('Code_jouable', 700, 360) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface la définissant, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasRenderingContext2D.createRadialGradient()")}}
