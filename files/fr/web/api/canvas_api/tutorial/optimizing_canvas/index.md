---
title: Optimiser les Canvas
slug: Web/API/Canvas_API/Tutorial/Optimizing_canvas
translation_of: Web/API/Canvas_API/Tutorial/Optimizing_canvas
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Optimizing_canvas
---
{{CanvasSidebar}} {{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}

L'élément {{HTMLElement("canvas")}} est l'un des standards les plus utilisés pour le rendu graphique 2D sur le web. Il est surtout utilisé dans les jeux et les visualisations complexes. Cependant, les sites et applications web poussent les canvas à leurs limites, et les performances commencent à en pâtir. Cet article propose des suggestions pour optimiser votre utilisation de l'élément canvas, et pour être certain que votre site ou application web fonctionne bien.

## Conseils sur les performances

Ceci est une liste de conseils pour améliorer les performances

### Pré-rendre les primitifs similaires ou répéter les objects dans un canvas hors-champ

Si vous avez besoin d'ajouter un dessin complexe identique à chaque image rendue, préférez l'utilisation d'un canvas hors-champ, le rendre une fois (ou à chaque fois qu'il change) sur ce canvas, puis dessinez-le sur le canvas principal à chaque image rendue.

```js
myEntity.offscreenCanvas = document.createElement("canvas");
myEntity.offscreenCanvas.width = myEntity.width;
myEntity.offscreenCanvas.height = myEntity.height;
myEntity.offscreenContext = myEntity.offscreenCanvas.getContext("2d");

myEntity.render(myEntity.offscreenContext);
```

### Abandonnez les coordonnées décimales et utilisez des entiers à la place

Un rendu de sous-pixel est opéré quand on dessine des objets sur un canvas sans valeur entière.

```js
ctx.drawImage(myImage, 0.3, 0.5);
```

Cela pousse le navigateur à faire des calculs supplémentaires pour créer un effet d'anti-crénelage. Pour empêcher cela, il faut s'assurer d'arrondir les coordonnées utilisées pour {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.

### Ne pas redimensionner d'images avec `drawImage`

Préférez mettre en cache plusieurs dimensions de votre image dans un canvas hors-champ au lieu de les redimensionner constamment avec {{domxref("CanvasRenderingContext2D.drawImage", "drawImage()")}}.

### Utiliser des canvas empilés pour les scènes complexes

Pour des scènes complexes, on peut souvent remarquer que quelques éléments changent souvent tandis que d'autres ne changent jamais. Une optimisation possible dans ce cas consiste à utiliser plusieurs calques sous forme de canvas empilés.

Par exemple, on peut créer un calque UI, dessiné au-dessus de tous les autres uniquement lorsque l'utilisateur accède à un menu. En dessous, un calque _jeu_ où les entités du jeu sont souvent mises à jour. Et, à l'arrière, un calque de fond rarement modifié.

```html
<div id="stage">
  <canvas id="ui-layer" width="480" height="320"></canvas>
  <canvas id="game-layer" width="480" height="320"></canvas>
  <canvas id="background-layer" width="480" height="320"></canvas>
</div>

<style>
  #stage {
    width: 480px;
    height: 320px;
    position: relative;
    border: 2px solid black
  }
  canvas { position: absolute; }
  #ui-layer { z-index: 3 }
  #game-layer { z-index: 2 }
  #background-layer { z-index: 1 }
</style>
```

### Du CSS pour les grandes images de fond

Si comme pour la plupart des jeux, vous utilisez une image de fond statique, préférez utiliser un simple {{HTMLElement("div")}} en dessous du canvas avec les propriétés CSS {{cssxref("background")}} appropriées. Cela vous évitera de redessiner une grande image dans le canvas à chaque tick.

### Redimensionner les canvas avec CSS transform

[Les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS) sont plus rapides car elles utilisent le GPU. Le mieux est d'utiliser un canvas plus grand et de réduire sa taille. Pour Firefox OS, les dimensions sont de 480 x 320 px.

```js
var scaleX = window.innerWidth / canvas.width;
var scaleY = window.innerHeight / canvas.height;

var scaleToFit = Math.min(scaleX, scaleY);
var scaleToCover = Math.max(scaleX, scaleY);

stage.style.transformOrigin = "0 0"; //scale from top left
stage.style.transform = "scale(" + scaleToFit + ")";
```

### Utiliser l'attribut `moz-opaque` (Gecko only)

Si le canvas n'a pas besoin de transparence, ajouter l'attribut `moz-opaque` dans la balise canvas. Cette information peut être utilisée par le navigateur pour optimiser le rendu.

```html
<canvas id="mycanvas" moz-opaque></canvas>
```

### D'autres conseils

- Regrouper les appels canevas (par exemple, dessiner un chemin de plusieurs lignes plutôt que plusieurs lignes séparées).
- Éviter de refaire un rendu si ce n'est pas nécessaire.
- Rendre uniquement les différences, pas tout le canvas.
- Éviter la propriété {{domxref("CanvasRenderingContext2D.shadowBlur", "shadowBlur")}} quand c'est possible.
- Empêcher [le rendu de texte](/fr/docs/Dessin_de_texte_avec_canvas) quand c'est possible.
- Essayer différents moyens d'effacer le canvas : ({{domxref("CanvasRenderingContext2D.clearRect", "clearRect()")}} vs. {{domxref("CanvasRenderingContext2D.fillRect", "fillRect()")}} vs. redimensionner le canevas).
- Avec les animations, utiliser {{domxref("window.requestAnimationFrame()")}} plutôt que {{domxref("window.setInterval()")}}.
- Faire attention aux bibliothèques physiques lourdes.
- Tester les performances avec [JSPerf](http://jsperf.com).

## Voir aussi

- [Improving HTML5 Canvas Performance – HTML5 Rocks](http://www.html5rocks.com/en/tutorials/canvas/performance/#toc-ref)
- [Optimizing your JavaScript game for Firefox OS – Mozilla Hacks](https://hacks.mozilla.org/2013/05/optimizing-your-javascript-game-for-firefox-os/)

{{PreviousNext("Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility", "Web/API/Canvas_API/Tutorial/Finale")}}
