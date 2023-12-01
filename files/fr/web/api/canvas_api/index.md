---
title: API canvas
slug: Web/API/Canvas_API
---

{{DefaultAPISidebar("Canvas API")}}

Ajouté en [HTML5](/fr/docs/Web/Guide/HTML/HTML5), l'élément {{HTMLElement("canvas")}} est un nouvel élément qui peut être utilisé pour dessiner des graphismes via des scripts [JavaScript](/fr/docs/JavaScript). Par exemple, Il peut être utilisé pour dessiner des graphes, faire des compositions de photos, des animations, ou même faire du traitement ou de l'affichage de vidéos en temps réel.

Les applications Mozilla ont commencé à supporter `<canvas>` à partir de Gecko 1.8 (c'est-à-dire [Firefox 1.5](/fr/docs/Mozilla/Firefox/Releases/1.5)). L'élément a été introduit à l'origine par Apple pour le Dashboard d'OS X et pour Safari. Internet Explorer supporte `<canvas>` depuis la version 9 et ultérieures&nbsp;; pour les versions précédentes d'IE, une page peut effectuer ce support de `<canvas>` en incluant un script depuis le projet [«&nbsp;<i lang="en">Explorer Canvas</i>&nbsp;»](https://github.com/arv/explorercanvas) de Google.

L'élément \<canvas> est aussi utilisé par [WebGL](/fr/docs/Web/API/WebGL_API) pour afficher des graphismes 3D avec accélération matérielle sur des pages web.

## Exemple

Voilà un simple extrait de code qui utilise la méthode {{domxref("CanvasRenderingContext2D.fillRect()")}}.

### HTML

```html
<canvas id="canvas"></canvas>
```

### JavaScript

```js
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

ctx.fillStyle = "green";
ctx.fillRect(10, 10, 100, 100);
```

Éditez le code ci-dessous pour voir les changements avoir lieu directement dans le canvas:

#### Code jouable

```html hidden
<canvas id="canvas" width="400" height="200" class="playable-canvas"></canvas>
<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
ctx.fillStyle = 'green';
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

## Références

- {{domxref("HTMLCanvasElement")}}
- {{domxref("CanvasRenderingContext2D")}}
- {{domxref("CanvasGradient")}}
- {{domxref("CanvasImageSource")}}
- {{domxref("CanvasPattern")}}
- {{domxref("ImageBitmap")}}
- {{domxref("ImageData")}}
- {{domxref("RenderingContext")}}
- {{domxref("TextMetrics")}}
- {{domxref("OffscreenCanvas")}}{{experimental_inline}}
- {{domxref("Path2D")}} {{experimental_inline}}{{domxref("ImageBitmapRenderingContext")}}{{experimental_inline}}

Les interfaces liées au `WebGLRenderingContext` sont référencées sous [WebGL](/fr/docs/Web/WebGL).

{{domxref("CanvasCaptureMediaStream")}} est lié.

## Guides et tutoriels

- [Tutoriel canvas](/fr/docs/Tutoriel_canvas)
  - : Un tutoriel complet qui couvre à la fois l'usage élémentaire de `<canvas>` mais aussi ses fonctionnalités avancées.
- [Extraits de code : Canvas](/fr/docs/Extraits_de_code/Canvas)
  - : Quelques extraits de code orientés vers les développeurs d'extension qui utilisent `<canvas>`.
- [Demo: Un raycaster basique avec canvas](/fr/docs/Un_raycaster_basique_avec_canvas)
  - : Une démonstration d'animation utilisant le ray-tracing dans un élément canvas.
- [Dessiner des objets DOM dans un élément canvas](/fr/docs/Web/HTML/Canvas/Dessiner_des_objets_DOM_dans_un_element_canvas)
  - : Comment dessiner un contenu DOM, tel que des éléments HTML, dans un canvas.
- [Manipulation vidéo avec la balise canvas](/fr/docs/HTML/Manipulating_video_using_canvas)
  - : Combiner {{HTMLElement("video")}} et {{HTMLElement("canvas")}} pour manipuler des données video en temps réel.

## Ressources

### Général

- [HTML5 Canvas Deep Dive](http://joshondesign.com/p/books/canvasdeepdive/title.html) (en)
- [Canvas Handbook](http://bucephalus.org/text/CanvasHandbook/CanvasHandbook.html) (en)

### Bibliothèques

- [Fabric.js](http://fabricjs.com) est une bibliothèque open-source qui peut analyser du code SVG.
- [Kinetic.js](https://github.com/ericdrowell/KineticJS) est une bibliothèque open-source concentrée sur l'interactivité pour les applications mobiles et de bureau.
- [Paper.js](http://paperjs.org/) est une bibliothèque open-source qui rajoute un système de dessin vectoriel au canvas HTML5.
- [Origami.js](http://origamijs.com/docs/) est une bibliothèque légère open-source pour canvas.
- [libCanvas](http://libcanvas.github.com/) est un framework canvas puissant et léger.
- [Processing.js](http://processingjs.org) est un portage du langage de visualisation Processing.
- [PlayCanvas](https://playcanvas.com/) est un moteur de jeu open-source.
- [Pixi.js](http://www.pixijs.com/) est un moteur de jeu open-source.
- [PlotKit](http://www.liquidx.net/plotkit/) est une bibliothèque permettant de réaliser des diagrammes et des graphiques.
- [Rekapi](https://github.com/jeremyckahn/rekapi) est une API d'animation par key-framing pour Canvas.
- [PhiloGL](http://senchalabs.github.com/philogl/) est un framework WebGL pour la visualisation de données, pour la programmation créative et pour le developpement de jeux.
- [JavaScript InfoVis Toolkit](http://thejit.org/) crée des visualisations de données interactives en 2D avec canvas pour le Web.
- [EaselJS](http://www.createjs.com/easeljs) est une bibliothèque gratuite/open-source qui facilite l'utilisation de canvas pour faire des jeux ou de l'art
- [Scrawl-canvas](http://scrawl.rikweb.org.uk/) est une autre bibliothèque open-source pour créer et manipuler des éléments 2D dans canvas
- [heatmap.js](https://www.patrick-wied.at/static/heatmapjs/) est une bibliothèque open-source pour créer des cartes thermiques basées sur canvas

## Spécifications

{{Specifications}}

## Voir aussi

- [WebGL](/fr/docs/Web/WebGL)
