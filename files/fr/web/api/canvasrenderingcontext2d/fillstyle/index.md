---
title: CanvasRenderingContext2D.fillStyle
slug: Web/API/CanvasRenderingContext2D/fillStyle
---

{{APIRef}}

La propriété **`CanvasRenderingContext2D.fillStyle`** de l'API Canvas 2D spécifie la couleur ou style à utiliser à l'intérieur des formes. La valeur par défaut est `#000` (black).

Voir également le chapitre [Ajout de styles et de couleurs](/fr/docs/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs) dans le [Tutoriel canvas](/fr/docs/Tutoriel_canvas).

## Syntaxe

```js
ctx.fillStyle = color;
ctx.fillStyle = gradient;
ctx.fillStyle = pattern;
```

### Options

- `color`
  - : Une {{domxref("DOMString")}} analysée comme valeur CSS {{cssxref("&lt;color&gt;")}}.
- `gradient`
  - : Un objet {{domxref("CanvasGradient")}} (un gradient linéaire ou radial).
- `pattern`
  - : Un objet {{domxref("CanvasPattern")}} (une image répétée).

## Exemples

### Utiliser la propriété `fillStyle` pour définir une couleur différente

Ceci est un simple snippet de code utilisant la propriété `fillStyle` pour définir une couleur différente.

#### HTML

```html
<canvas id="canvas"></canvas>
```

#### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "blue";
ctx.fillRect(10, 10, 100, 100);
```

Éditez le code ci-dessous pour voir vos changements mettre à jour le canvas directement:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = 'blue';
ctx.fillRect(10, 10, 100, 100);</textarea
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

### Un exemple `fillStyle` avec les boucles `for`

Dans cet exemple, nous allons utiliser deux boucles `for` pour dessiner une grille de rectangles, chacun avec une couleur différente. L'image qui en résulte devrait ressembler à la capture d'écran. Il n'y a rien de très extraordinaire ici, nous utilisons deux variables `i` et `j` pour générer une couleur RGB unique pour chaque carré, en modifiant uniquement les valeurs de rouge et vert; le canal bleu a une valeur fixe. En modifiant les canaux, vous pouvez générer toutes sorte de palettes. En augmentant le nombre, vous pouvez générer quelque chose de ressemblant aux palettes de couleurs utilisées par Photoshop.

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
var ctx = document.getElementById("canvas").getContext("2d");
for (var i = 0; i < 6; i++) {
  for (var j = 0; j < 6; j++) {
    ctx.fillStyle =
      "rgb(" +
      Math.floor(255 - 42.5 * i) +
      "," +
      Math.floor(255 - 42.5 * j) +
      ",0)";
    ctx.fillRect(j * 25, i * 25, 25, 25);
  }
}
```

Le résultat devrait ressembler à ça:

{{EmbedLiveSample("Un_exemple_fillStyle_avec_les_boucles_for", 160, 160, "canvas_fillstyle.png")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface définissant cette méthode, {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasPattern")}}
