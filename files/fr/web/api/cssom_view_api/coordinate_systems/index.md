---
title: Systèmes de coordonnées
slug: Web/API/CSSOM_view_API/Coordinate_systems
original_slug: Web/CSS/CSSOM_view/Coordinate_systems
l10n:
  sourceCommit: 896a41d7d9832367a1e24af567fb419e9d4182f8
---

{{DefaultAPISidebar("CSSOM view API")}}

Lorsqu'on définit l'emplacement d'un pixel dans un contexte graphique, on indique les coordonnées de ce point par rapport à un point fixe du contexte qu'on appelle l'origine. La position du pixel est donc indiquée comme le décalage de ce pixel par rapport à l'origine, sur les deux axes du plan.

Ce guide décrit les systèmes de coordonnées standard utilisés par le modèle objet de CSS. Les différences entre ces systèmes résident principalement dans l'emplacement de l'origine.

## Dimensions

Pour les systèmes de coordonnées utilisés sur le Web, on prend comme convention qu'un décalage horizontal est appelé coordonnée en X (une valeur négative indique une position à gauche de l'origine et une valeur positive indique une position à droite de l'origine) et qu'un décalage vertical est appelé coordonnée en Y (une valeur négative indique une position au dessus de l'origine et une valeur positive indique une position en dessous de l'origine).

L'origine par défaut, dans les contextes relatifs au Web, est située dans le coin supérieur gauche avec les valeurs verticales positives se situant sous l'origine. Ceci est donc différent des représentations mathématiques généralement utilisées où l'origine se situe en bas à gauche et où les valeurs positives en Y sont situées au dessus de l'origine.

Lorsqu'on dessine des graphiques en trois dimensions ou lorsqu'on utilise une troisième dimension pour empiler des objets de l'avant vers l'arrière, on utilise la coordonnée en Z. Celle-ci correspond à la distance entre le spectateur et l'objet. Elle est positive si l'objet est plus éloigné du spectateur que l'origine et négative s'il est plus proche.

> [!NOTE]
> Il est en fait possible de modifier les définitions et les orientations de ces systèmes de coordonnées grâce à des propriétés CSS telles que {{cssxref("transform")}}. Toutefois, nous évoquerons uniquement le système de coordonnées standard.

## Les systèmes de coordonnées CSSOM standard

Il existe quatre systèmes de coordonnées standard utilisé par le modèle objet de CSS.
Pour aider à visualiser les principaux systèmes, le diagramme suivant montre un moniteur avec une fenêtre de navigateur contenant du contenu défilé en dehors de la {{glossary("viewport")}}.
Le contenu de la page qui est défilé en dehors de la zone d'affichage est montré comme semi-transparent au-dessus de la fenêtre du navigateur pour indiquer où se situerait l'origine des coordonnées «&nbsp;page&nbsp;».
L'origine des systèmes de coordonnées «&nbsp;client&nbsp;», «&nbsp;page&nbsp;» et «&nbsp;viewport&nbsp;» est mise en évidence.

![Un grand écran avec une petite fenêtre de navigateur affichant la moitié inférieure d'une page Web ; la moitié supérieure est montrée comme défilée en dehors de la zone d'affichage du navigateur. Les coins supérieurs gauche de l'écran, de la page et de la zone d'affichage sont tous étiquetés avec des coordonnées de 0,0.](css-coords.svg)

### _Offset_

Les coordonnées indiquées selon ce modèle se situent relativement au coin supérieur gauche de l'élément qu'on examine ou qui a déclenché un évènement.

Ainsi, lorsqu'un {{domxref("MouseEvent", "évènement de souris", "", 1)}} se produit, la position de la souris telle qu'indiquée par les {{domxref("MouseEvent.offsetX", "offsetX")}} et {{domxref("MouseEvent.offsetY", "offsetY")}} est relative au coin supérieur gauche de l'élément sur lequel l'évènement a été produit. L'origine de ce système est décalée vers l'intérieure de la boîte de l'élément selon les distances fournies pour {{cssxref("padding-left")}} et {{cssxref("padding-top")}}.

### Client (_viewport_)

Le système de coordonnées «&nbsp;client&nbsp;» (ou «&nbsp;<i lang="en">viewport</i>&nbsp;») utilise comme origine le coin supérieur gauche de la zone d'affichage (<i lang="en">viewport</i>) ou du contexte de navigation dans lequel l'évènement s'est produit. C'est la zone de visualisation entière dans laquelle le document est présenté.

Sur un ordinateur de bureau, par exemple, les propriétés {{domxref("MouseEvent.clientX")}} et {{domxref("MouseEvent.clientY")}} indiquent la position du curseur de la souris au moment où l'évènement s'est produit, relativement au coin supérieur gauche de la {{domxref("window")}}.
Lorsqu'on utilise un stylet ou un pointeur, les coordonnées {{domxref("Touch.clientX")}} et {{domxref("Touch.clientY")}} dans un [évènement tactile](/fr/docs/Web/API/TouchEvent) sont relatives à la même origine.

Le coin supérieur gauche de la fenêtre est toujours `(0, 0)`, quel que soit le contenu du document ou tout défilement qui a pu avoir lieu. Autrement dit, le défilement du document modifiera les coordonnées de la zone d'affichage d'une position donnée dans le document.

### Page

Le système de coordonnées «&nbsp;page&nbsp;» donne la position d'un pixel par rapport au coin supérieur gauche de l'ensemble du {{domxref("Document")}} rendu.
Cela signifie qu'un point donné sur un élément conservera les mêmes coordonnées sur la page (sauf si l'élément est déplacé avec un changement de position ou à cause de l'ajout d'autres éléments sur la page ou à cause d'un redimensionnement d'un autre élément par exemple).

Les propriétés pour les évènements de la souris {{domxref("MouseEvent.pageX", "pageX")}} et {{domxref("MouseEvent.pageY", "pageY")}} fournissent la position de la souris au moment de l'évènement, relativement au coin supérieur gauche du document.
{{domxref("Touch.pageX")}} et {{domxref("Touch.pageY")}} dans un [évènement tactile](/fr/docs/Web/API/TouchEvent) sont relatives à la même origine.

### Écran

Pour le système de coordonnées lié à l'écran, l'origine est situé dans le coin supérieur gauche de l'écran. Cela signifie que la position d'un point donné évoluera si l'utilisateur·ice déplace la fenêtre du navigateur ou s'il change de résolution (voire s'il ajoute des écrans).

Les propriétés {{domxref("MouseEvent.screenX")}} et {{domxref("MouseEvent.screenY")}} fournissent les coordonnées de la souris lors de l'évènement, relativement à l'origine de l'écran.

## Exemples

Dans cet exemple simple, nous allons créé un ensemble de boîtes imbriquées. Lorsque la souris entrera sur la surface de ces boîtes, se déplacera ou quittera la surface correspondante, l'évènement déclenché est géré afin de mettre à jour les messages informatifs au sein de la boîte pour afficher les différentes coordonnées du pointeur selon les quatre systèmes de coordonnées.

### JavaScript

Pour le JavaScript, le code configure les gestionnaires d'événements sur la boîte intérieure en appelant {{domxref("EventTarget.addEventListener", "addEventListener()")}} pour chacun des types {{domxref("Element/mouseenter_event", "mouseenter")}}, {{domxref("Element/mousemove_event", "mousemove")}}, et {{domxref("Element/mouseleave_event", "mouseleave")}}.
Pour chacun des événements, nous appelons la fonction `setCoords()` qui définit le texte interne de l'élément `<p>` avec les coordonnées pour chaque système.

```js
const log = document.querySelector(".log");
const inner = document.querySelector(".inner");

function setCoords(e) {
  log.innerText = `
    Décalage X/Y : ${e.offsetX}, ${e.offsetY}
    Zone d'affichage X/Y : ${e.clientX}, ${e.clientY}
    Page X/Y : ${e.pageX}, ${e.pageY}
    Écran X/Y : ${e.screenX}, ${e.screenY}`;
}

inner.addEventListener("mousemove", setCoords);
inner.addEventListener("mouseenter", setCoords);
inner.addEventListener("mouseleave", setCoords);
```

### HTML

Le HTML contient un `<p>` avec la classe `"log"`, qui affiche les données des événements de la souris.

```html
<div class="outer">
  <div class="inner">
    <p class="log">
      Passez la souris sur cette section pour afficher les coordonnées.
    </p>
  </div>
</div>
```

### CSS

La classe `"outer"` pour la boîte contenant est intentionnellement trop large pour voir les effets des coordonnées de la souris lorsque le contenu est défilé.
Le paragraphe `"inner"` est l'endroit où les événements de la souris sont suivis et enregistrés.

```css
.outer {
  width: 1000px;
}

.inner {
  font-family: monospace;
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: darkblue;
  color: white;
  cursor: crosshair;
  user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### Résultat

Ici, vous pouvez voir les résultats en action. Lorsque vous déplacez la souris dans et autour de la boîte bleue, regardez les valeurs des coordonnées X et Y de la souris changer dans les différents systèmes de coordonnées.

{{EmbedLiveSample("exemples", 600, 250)}}

## Voir aussi

- Le [concept de viewport](/fr/docs/Web/CSS/Guides/CSSOM_view/Viewport_concepts)
- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using) : comment modifier un système de coordonnées
- Les coordonnées relatives à {{domxref("MouseEvent")}}&nbsp;:
  - {{domxref("MouseEvent.offsetX")}} et {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} et {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} et {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} et {{domxref("MouseEvent.screenY")}}

- Les coordonnées relatives à {{domxref("Touch")}}&nbsp;:
  - {{domxref("Touch.clientX")}} et {{domxref("Touch.clientY")}}
  - {{domxref("Touch.pageX")}} et {{domxref("Touch.pageY")}}
  - {{domxref("Touch.screenX")}} et {{domxref("Touch.screenY")}}
