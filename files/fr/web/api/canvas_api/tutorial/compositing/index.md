---
title: Composition et découpe
slug: Web/API/Canvas_API/Tutorial/Compositing
l10n:
  sourceCommit: 3c67eed7b0d2c91198ec95bcc9b1a570f6c0f585
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}

Dans tous nos [exemples précédents](/fr/docs/Web/API/Canvas_API/Tutorial/Transformations), les formes étaient toujours dessinées les unes au-dessus des autres. C'est plus que suffisant pour la plupart des situations, mais cela limite l'ordre dans lequel les formes composées sont construites. Nous pouvons cependant changer ce comportement en définissant la propriété `globalCompositeOperation`. En complément, la propriété `clip` nous permet de cacher les parties des formes que nous ne désirons pas.

## `globalCompositeOperation`

Nous pouvons non seulement dessiner de nouvelles formes derrière des formes existantes, mais nous pouvons aussi les utiliser pour masquer certaines zones, supprimer des sections du canevas (sans que ce soit limité aux rectangles comme avec la méthode [`clearRect()`](/fr/docs/Web/API/CanvasRenderingContext2D/clearRect)) et davantage.

- [`globalCompositeOperation = type`](/fr/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)
  - : Cela configure le type d'opération de composition à appliquer lorsqu'on dessine de nouvelles formes, où le type correspond à une chaîne de caractères faisant référence à une des douze opérations de composition possibles.

Reportez-vous aux [exemples de composition](/fr/docs/Web/API/Canvas_API/Tutorial/Compositing/Example) pour le code des exemples suivants.

{{EmbedLiveSample("Exemple_de_composition", 750, 7000, "" ,"Web/API/Canvas_API/Tutorial/Compositing/Example")}}

## Détourage

Un détourage (<i lang="en">clipping path</i> en anglais) ressemble à une forme de canevas standard, mais sert à masquer certaines parties du canevas. Voyez l'image de droite, la forme rouge (en étoile) est un détourage du canevas. Tout ce qui est en dehors du chemin n'est pas dessiné sur le canevas.

![Un canevas avec une étoile dont le contour est tracé en rouge. L'intérieur de l'étoile est transparent, comme on peut le voir aux carrés de la grille en dessous qui sont clairement visibles alors que ceux à l'extérieur de l'étoile sont floutés.](canvas_clipping_path.png)

Si nous comparons le détourage à la propriété `globalCompositeOperation` vue précédemment, nous voyons deux modes de composition qui ont plus ou moins les mêmes effets qu'avec `source-in` et `source-atop`. La différence la plus significative entre les deux est que le détourage n'est jamais dessiné sur le canevas à proprement parler et il n'est jamais affecté par l'ajout de nouvelles formes. Ça le rend idéal pour dessiner plusieurs formes dans une zone restreinte.

Dans le chapitre sur [le dessin des formes](/fr/docs/Web/API/Canvas_API/Tutorial/Drawing_shapes), nous avions uniquement mentionné les méthodes `stroke()` et `fill()`, mais il en existe une troisième&nbsp;: `clip()`, qui permet de faire des détourages.

- [`clip()`](/fr/docs/Web/API/CanvasRenderingContext2D/clip)
  - : Transforme le chemin en cours de création en chemin de détourage courant.

Il faut utiliser `clip()` plutôt que `closePath()` pour fermer un chemin et en faire un détourage.

Par défaut, l'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) possède un détourage aux mêmes dimensions que le canevas lui-même. Autrement, par défaut aucune découpe n'est effectuée.

### Un exemple de `clip`

Dans cet exemple, nous allons utiliser un détourage circulaire pour restreindre le dessin d'un ensemble d'étoiles aléatoires à une zone particulière.

```js
function draw() {
  const ctx = document.getElementById("canvas").getContext("2d");
  ctx.fillRect(0, 0, 150, 150);
  ctx.translate(75, 75);

  // On crée un chemin de découpe circulaire
  ctx.beginPath();
  ctx.arc(0, 0, 60, 0, Math.PI * 2, true);
  ctx.clip();

  // On dessine l'arrière-plan
  const lingrad = ctx.createLinearGradient(0, -75, 0, 75);
  lingrad.addColorStop(0, "#232256");
  lingrad.addColorStop(1, "#143778");

  ctx.fillStyle = lingrad;
  ctx.fillRect(-75, -75, 150, 150);

  // On dessine les étoiles
  for (let j = 1; j < 50; j++) {
    ctx.save();
    ctx.fillStyle = "#fff";
    ctx.translate(
      75 - Math.floor(Math.random() * 150),
      75 - Math.floor(Math.random() * 150),
    );
    drawStar(ctx, Math.floor(Math.random() * 4) + 2);
    ctx.restore();
  }
}

function drawStar(ctx, r) {
  ctx.save();
  ctx.beginPath();
  ctx.moveTo(r, 0);
  for (let i = 0; i < 9; i++) {
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

Dans les premières lignes de code, nous dessinons un rectangle noir ayant la même taille que le canevas comme toile de fond, puis nous déplaçons l'origine au centre de l'image. Ensuite, nous créons le détourage circulaire en dessinant un arc (complet) et en faisant appelle à `clip()`. Les détourages font aussi partie de l'état de sauvegarde des canevas. Si on voulait garder le détourage d'origine, on pourrait par exemple sauvegarder l'état du canevas au préalable.

Tout ce qui sera dessiné après la création du détourage n'apparaîtra qu'à l'intérieur de ce chemin. C'est ce qu'on peut voir clairement avec le dégradé linéaire qui est dessiné après. Ensuite, un ensemble de 50 étoiles aléatoires est dessiné, en utilisant la fonction `drawStar()`. Nous pouvons voir, une fois de plus, que les étoiles n'apparaissent qu'à l'intérieur du détourage.

{{EmbedLiveSample("", "180", "190", "canvas_clip.png")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial/Transformations", "Web/API/Canvas_API/Tutorial/Basic_animations")}}
