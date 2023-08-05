---
title: Dessin de texte avec canvas
slug: Web/API/Canvas_API/Tutorial/Drawing_text
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Tutoriel_canvas/Ajout_de_styles_et_de_couleurs", "Tutoriel_canvas/Utilisation_d'images")}}

Après avoir vu comment [appliquer les styles et les couleurs](/fr/docs/Tutoriel_canvas/Ajout_de_styles_et_de_couleurs) dans le chapitre précédent, nous allons maintenant voir comment dessiner du texte sur canvas.

## Dessin de texte

Le contexte de rendu du canevas fournit deux méthodes pour le rendu du texte :

- {{domxref("CanvasRenderingContext2D.fillText", "fillText(text, x, y [, maxWidth])")}}
  - : Remplit un texte donné à la position (x, y). Facultatif, avec une largeur maximale à dessiner.
- {{domxref("CanvasRenderingContext2D.strokeText", "strokeText(text, x, y [, maxWidth])")}}
  - : Trait d'un texte donné à la position (x, y). Facultatif, avec une largeur maximale à dessiner.

### Un exemple fillText

Le texte est rempli en utilisant le `fillStyle` actuel.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.fillText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Un_exemple_fillText", 310, 110)}}

### Un exemple de strokeText

Le texte est rempli en utilisant le `strokeStyle` courant.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  ctx.font = "48px serif";
  ctx.strokeText("Hello world", 10, 50);
}
```

```html hidden
<canvas id="canvas" width="300" height="100"></canvas>
```

```js hidden
draw();
```

{{EmbedLiveSample("Un_exemple_de_strokeText", 310, 110)}}

## Style de texte

Dans les exemples ci-dessus, nous utilisons déjà la propriété de police pour rendre le texte un peu plus grand que la taille par défaut. Il existe d'autres propriétés qui vous permettent d'ajuster la façon dont le texte est affiché sur le canevas :

- {{domxref("CanvasRenderingContext2D.font", "font = value")}}
  - : Le style de texte actuel utilisé lors du dessin du texte. Cette chaîne utilise la même syntaxe que la propriété CSS {{cssxref ("font")}}. La police par défaut est 10px sans-serif.
- {{domxref("CanvasRenderingContext2D.textAlign", "textAlign = value")}}
  - : Paramètre d'alignement du texte. Valeurs possibles : `start` _(début)_, `end` _(fin)_, `left` _(gauche)_, `right` _(droite)_ ou `center` _(centre)_. La valeur par défaut est `start`.
- {{domxref("CanvasRenderingContext2D.textBaseline", "textBaseline = value")}}
  - : Paramètre d'alignement de base. Valeurs possibles : `top` _(haut)_, `hanging` _(suspendu)_, `middle` _(moyen)_, `alphabetic` _(alphabétique)_, `ideographic` _(idéographique)_, `bottom` _(en bas)_. La valeur par défaut est `alphabetic`.
- {{domxref("CanvasRenderingContext2D.direction", "direction = value")}}
  - : Directionnalité. Valeurs possibles: `ltr` _(de gauche à droite)_, `rtl` _(de droite à gauche)_, `inherit` _(hérité)_. La valeur par défaut est `inherit`.

Ces propriétés peuvent vous être familières si vous avez déjà travaillé avec CSS.

Le diagramme suivant du [WHATWG](http://www.whatwg.org/) illustre les différentes lignes de base prises en charge par la propriété `textBaseline.`

![The top of the em square is
roughly at the top of the glyphs in a font, the hanging baseline is
where some glyphs like आ are anchored, the middle is half-way
between the top of the em square and the bottom of the em square,
the alphabetic baseline is where characters like Á, ÿ,
f, and Ω are anchored, the ideographic baseline is
where glyphs like 私 and 達 are anchored, and the bottom
of the em square is roughly at the bottom of the glyphs in a
font. The top and bottom of the bounding box can be far from these
baselines, due to glyphs extending far outside the em square.](http://www.whatwg.org/specs/web-apps/current-work/images/baselines.png)

### Un exemple de textBaseline

Modifiez le code ci-dessous et visualisez vos mises à jour en direct dans le canevas :

```js
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);
```

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.font = "48px serif";
ctx.textBaseline = "hanging";
ctx.strokeText("Hello world", 0, 100);</textarea
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

## Mesures de texte avancées

Dans le cas où vous avez besoin d'obtenir plus de détails sur le texte, la méthode suivante vous permet de le mesurer.

- {{domxref("CanvasRenderingContext2D.measureText", "measureText()")}}
  - : Retourne un objet {{domxref("TextMetrics")}} contenant la largeur en pixels, sur la base duquel le texte spécifié sera dessiné dans le style de texte actuel.

L'extrait de code suivant montre comment vous pouvez mesurer un texte et obtenir sa largeur.

```js
function draw() {
  var ctx = document.getElementById("canvas").getContext("2d");
  var text = ctx.measureText("foo"); // objet TextMetrics
  text.width; // 16;
}
```

## Notes spécifiques à Gecko

Dans Gecko (le moteur de rendu de Firefox, Firefox OS et d'autres applications basées sur Mozilla), certaines API préfixées ont été implémentées dans des versions antérieures pour dessiner du texte sur un canevas. Ceux-ci sont maintenant déconseillés et supprimés, et leur fonctionnement n'est pas garanti.

{{PreviousNext("Tutoriel_canvas/Ajout_de_styles_et_de_couleurs", "Tutoriel_canvas/Utilisation_d'images")}}
