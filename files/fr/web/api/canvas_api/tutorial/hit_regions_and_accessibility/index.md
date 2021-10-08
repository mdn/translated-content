---
title: Hit regions and accessibility
slug: Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility
translation_of: Web/API/Canvas_API/Tutorial/Hit_regions_and_accessibility
original_slug: Web/API/Canvas_API/Tutoriel_canvas/Hit_regions_and_accessibility
---
{{CanvasSidebar}} {{ PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas") }}

L'élément {{HTMLElement("canvas")}} lui-même est juste un bitmap et ne fourni aucune information sur les objets dessinés. Le contenu des canvas n'est pas sujet aux outils d'accessibility comme l'est la sémantique HTML. En général vous devriez éviter d'utiliser les canvas sur les sites ou les applications accessibles. Le marche à suivre suivante peut vous aider à les rendre plus accessibles.

## Moyen de repli

Le contenu à l'intérieur d'un tag `<canvas> ... </canvas>` peut être utilisé comme moyen de secours pour les navigteurs qui ne supportent pas le rendu de canvas. C'est aussi très utile pour les utilisateurs qui utilisent des technologies adaptées (comme les lecteurs d'écran) qui peuvent lire et interpréter les éléments du DOM. Un bon exemple sur [html5accessibility.com](http://www.html5accessibility.com/tests/canvas.html) demontre comment cela peut être fait.

```html
<canvas>
  <h2>Shapes</h2>
  <p>A rectangle with a black border.
   In the background is a pink circle.
   Partially overlaying the <a href="http://en.wikipedia.org/wiki/Circle" onfocus="drawCircle();" onblur="drawPicture();">circle</a>.
   Partially overlaying the circle is a green
   <a href="http://en.wikipedia.org/wiki/Square" onfocus="drawSquare();" onblur="drawPicture();">square</a>
   and a purple <a href="http://en.wikipedia.org/wiki/Triangle" onfocus="drawTriangle();" onblur="drawPicture();">triangle</a>,
   both of which are semi-opaque, so the full circle can be seen underneath.</p>
</canvas>
```

Jetez un oeil à la [video comment NVDA lit cet exemple par Steve Faulkner](https://www.youtube.com/watch?v=ABeIFlqYiMQ) (en anglais).

## Les règles ARIA

Accessible Rich Internet Applications **([ARIA](/en-US/docs/Web/Accessibility/ARIA))** (≈ [Les applications Internet Accessibles Riches)](https://fr.wikipedia.org/wiki/Accessible_Rich_Internet_Applications) défini des pistes pour rendre le contenu Web et les applications Web plus accessibles pour les personnes ayant un handicap. Vous pouvez utiliser les attributs ARIA pour decrire le comportement et le but de vos éléments canvas. Allez voir [ARIA](/en-US/docs/Web/Accessibility/ARIA) et [les techniques ARIA](/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques) pour plus d'informations.

```html
<canvas id="button" tabindex="0" role="button" aria-pressed="false" aria-label="Start game"></canvas>
```

## Zones cibles (hit Region)

Que les coordonnés de la souris soient dans une zone particulière des canvas, est un problème fréquent à résoudre. L'API de la "hit region" vous permet de definir une zone de votre canvas et offre une autre possibilité pour proposer du contenu interactif dans les canvas a destination des outils d'accessibilité. Il permet de rendre la "hit detection" plus simple easier and vous laisser envoyer des événements aux éléments du DOM. L'API a les trois methodes suivantes (qui sont encore expérimentales dans les navigateurs actuel ; reportez-vous au tableau des comptibilités des navigateurs).

- {{domxref("CanvasRenderingContext2D.addHitRegion()")}} {{experimental_inline}}
  - : Ajoute une "hit region" au canvas..
- {{domxref("CanvasRenderingContext2D.removeHitRegion()")}} {{experimental_inline}}
  - : Supprime la "hit region" avec l'`id` spécifiée venant du canvas.
- {{domxref("CanvasRenderingContext2D.clearHitRegions()")}} {{experimental_inline}}
  - : Retire toutes les "hit regions" du cnavas.

Vous pouvez ajouter une "hit region" à votre chemin et vérifier la propriété {{domxref("MouseEvent.region")}} pour tester si votre souris entre dans votre région, par exemple.

```html
<canvas id="canvas"></canvas>
<script>
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

ctx.beginPath();
ctx.arc(70, 80, 10, 0, 2 * Math.PI, false);
ctx.fill();
ctx.addHitRegion({id: 'circle'});

canvas.addEventListener('mousemove', function(event) {
  if (event.region) {
    alert('hit region: ' + event.region);
  }
});
</script>
```

La méthode `addHitRegion()` accepte aussi une option de `control` pour envoyer des événement vers un élément (c'est un enfant des canvas):

```js
ctx.addHitRegion({control: element});
```

Cela peut être utile pour le routage d'éléments {{HTMLElement("input")}}, par exemple. Regardez aussi [codepen demo](http://codepen.io/adobe/pen/BhcmK).

## Focus rings

Quand on travaille avec le clavier, focus rings (anneaux de mise au point) sont utilies pour aider dans la navigation sur une page. Pour dessiner des "focus ring" dans un dessin de canvas, la propriété `drawFocusIfNeeded` peut être utilisée.

- {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} {{experimental_inline}}
  - : Si un élément donné est ciblé, cette méthode dessine un anneaud de mise ne valeur autoure du chemin courant.

De plus, la méthode `scrollPathIntoView()` peut être utilisée pour rendre visible un élément dans une page s'il est ciblé, par exemple.

- {{domxref("CanvasRenderingContext2D.scrollPathIntoView()")}} {{experimental_inline}}
  - : Affiche le chemin courant ou le chemin donné.

## See also

- [Canvas accessibility use cases](https://www.w3.org/WAI/PF/HTML/wiki/Canvas_Accessibility_Use_Cases)
- [Canvas element accessibility issues](https://www.w3.org/html/wg/wiki/AddedElementCanvas)
- [HTML5 Canvas Accessibility in Firefox 13 – by Steve Faulkner](http://www.paciellogroup.com/blog/2012/06/html5-canvas-accessibility-in-firefox-13/)
- [Best practices for interactive canvas elements](https://html.spec.whatwg.org/multipage/scripting.html#best-practices)

{{ PreviousNext("Web/API/Canvas_API/Tutorial/Pixel_manipulation_with_canvas", "Web/API/Canvas_API/Tutorial/Optimizing_canvas") }}
