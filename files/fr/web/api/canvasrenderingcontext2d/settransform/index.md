---
title: CanvasRenderingContext2D.setTransform()
slug: Web/API/CanvasRenderingContext2D/setTransform
---

{{APIRef}}

La méthode **`CanvasRenderingContext2D.setTransform()`** de l'API Canvas 2D réinitialise (remplace) la transformation en cours à la matrice identité et appelle ensuite la transformation décrite par les arguments de cette méthode.

Voir aussi la méthode {{domxref("CanvasRenderingContext2D.transform()", "transform()")}}, qui ne replace pas la matrice de transformation en cours et la multiplie par celle donnée..

## Syntaxe

```js
void ctx.setTransform(a, b, c, d, e, f);
```

La matrice de transformation est décrite par : <math><semantics><mrow><mo>[</mo><mtable columnalign="center center center" rowspacing="0.5ex"><mtr><mtd><mi>a</mi></mtd><mtd><mi>c</mi></mtd><mtd><mi>e</mi></mtd></mtr><mtr><mtd><mi>b</mi></mtd><mtd><mi>d</mi></mtd><mtd><mi>f</mi></mtd></mtr><mtr><mtd><mn>0</mn></mtd><mtd><mn>0</mn></mtd><mtd><mn>1</mn></mtd></mtr></mtable><mo>]</mo></mrow><annotation encoding="TeX">\left[ \begin{array}{ccc} a &#x26; c &#x26; e \\ b &#x26; d &#x26; f \\ 0 &#x26; 0 &#x26; 1 \end{array} \right]</annotation></semantics></math>

### Paramètres

- `a (m11)`
  - : Échelle horizontale.
- _`b (m12)`_
  - : Inclinaison horizontale.
- `c (m21)`
  - : Inclinaison verticale.
- `d (m22)`
  - : Échelle verticale.
- `e (dx)`
  - : Déplacement horizontal.
- `f (dy)`
  - : Déplacement vertical.

## Exemples

### Utilisation de la méthode `setTransform`

Ceci est seulement un fragment de code simple qui utilise la méthode `setTransform`.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.setTransform(1, 1, 0, 1, 0, 0);
ctx.fillRect(0, 0, 100, 100);
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
ctx.setTransform(1,1,0,1,0,0);
ctx.fillRect(0,0,100,100);</textarea
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
- {{domxref("CanvasRenderingContext2D.transform()")}}
