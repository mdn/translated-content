---
title: Composition et découpe
slug: Web/API/Canvas_API/Tutorial/Compositing
translation_of: Web/API/Canvas_API/Tutorial/Compositing
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Composition
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

Dans tous nos [exemples précédents](/en-US/docs/Web/API/Canvas_API/Tutorial/Transformations), les formes étaient toutes dessinées les unes au dessus des autres. C'est plus que suffisant pour la plupart des situations, mais cela limite l'ordre dans lequel les formes composées sont construites. Nous pouvons cependant changer ce comportement en définissant la propriété `globalCompositeOperation`. En complément, la propriété `clip` nous permet de cacher les parties des formes que nous ne désirons pas.

## `globalCompositeOperation`

Nous pouvons non seulement dessiner de nouvelles formes derrière des formes existantes mais nous pouvons aussi les utiliser pour masquer certaines zones, supprimer des sections du canvas (ce n'est pas limité aux rectangles comme pour la méthode {{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}}) et davantage.

- {{domxref("CanvasRenderingContext2D.globalCompositeOperation", "globalCompositeOperation = type")}}
  - : Cela configure le type d'opération de composition à appliquer lorsqu'on dessine de nouvelles formes, où le type correspond à une string qui fait référence à une des douze opérations de composition possibles.

Reportez-vous aux [exemples de compositon](/fr/docs/Tutoriel_canvas/Composition/Example) pour le code des exemples suivants.

{{EmbedLiveSample("globalCompositeOperation", 750, 6750, "" ,"/Tutoriel_canvas/Composition/Example")}}

## Détourage

Un détourage (_clipping path_ en anglais) est comme une forme de canvas standard, à la différence près qu'elle sert à masquer certaines parties du canvas. Voyez l'image de droite, la forme rouge (en étoile) est un détourage du canvas. Tout ce qui est en dehors du chemin n'est pas dessiné sur le canvas.

![](canvas_clipping_path.png)

Si nous comparons le détourage à la propriété `globalCompositeOperation` vue précédemment, nous voyons deux modes de composition qui ont plus ou moins les mémes effets qu'avec `source-in` et `source-atop`. La différence la plus significative entre les deux est que le détourage n'est jamais dessiné sur le canvas à proprement parler et il n'est jamais affecté par l'ajout de nouvelles formes. Ça le rend idéal pour dessiner plusieurs formes dans une zone restreinte.

Dans le chapitre "[dessiner des formes avec le canevas](/en-US/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes)", nous n'avions mentionné que les méthodes `stroke()` et `fill()`, mais il y en a une troisième: `clip()` — elle permet de faire des détourages.

- {{domxref("CanvasRenderingContext2D.clip", "clip()")}}
  - : Transforme le chemin en cours de création en détourage effectif.

Il faut utiliser `clip()` plutot que `closePath()` pour fermer un chemin et enfaire un détourage.

Par défault, l'élément {{HTMLElement("canvas")}} possède un détourage aux mêmes dimensions que le canvas lui-même. Donc, par défaut aucune découpe n'est apparente.

### Un exemple de `clip`

Dans cet exemple, nous allons utiliser un détourage circulaire pour restreindre le dessin d'un essemble d'étoiles aléatoires à une zone particulière (et circulaire...).

```js
function draw() {
  var ctx = document.getElementById('canvas').getContext('2d');
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // Create a circular clipping path
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // draw background
  var lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, '#232256');
  lingrad.addColorStop(1, '#143778');

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // draw stars
  for (var j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = '#fff';
    ctx.translate(75 - Math.floor(Math.random() * 150),
                  75 - Math.floor(Math.random() * 150));
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }

}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (var i = 0; i < 9; i++) {
    ctx.rotate(Math.PI / 5);
    if (i % 2 === 0) {
      ctx.lineTo((r / 0.525731) * 0.200811, 0);
    } else {
      ctx.lineTo(r, 0);
    }
  }
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}
```

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```js hidden
draw();
```

Dans les premières lignes de code, nous dessinons un rectangle noir ayant la même taille que le canvas comme toile de fond puis nous déplaçons l'origine au centre de l'image. Ensuite, nous créons le détourage circulaire en dessinant un arc (complet) et en faisant appelle à `clip()`. Les détourages font aussi partie de l'état de sauvegarde des canvas. Si on voulait garder le détourage d'origine, on pourrait par exemple sauvegarder l'état du canvas au préalable.

Tout ce qui sera dessiné après la création du détourage n'apparaîtra qu'à l'intérieur de ce chemin. Vous pouvez voir ça clairement avec le dégradé linéaire qui est dessiné après. Ensuite, un ensemble de 50 étoiles aléatoires est dessiné, en utilisant la fonction `drawStar()`. Nous pouvons voir, une fois de plus, que les éléments (ici les étoiles) n'apparaissent qu'à l'intérieur du détourage.

{{EmbedLiveSample("Un_exemple_de_clip", "180", "180", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
