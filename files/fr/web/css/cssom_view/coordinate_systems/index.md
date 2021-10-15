---
title: Systèmes de coordonnées
slug: Web/CSS/CSSOM_View/Coordinate_systems
tags:
  - CSS
  - CSSOM
  - Coordonnées
  - Guide
translation_of: Web/CSS/CSSOM_View/Coordinate_systems
original_slug: Web/CSS/CSSOM_View/Systèmes_de_coordonnées
---
{{cssref}}

Lorsqu'on définit l'emplacement d'un pixel dans un contexte graphique, on indique les coordonnées de ce point par rapport à un point fixe du contexte qu'on appelle l'origine. La position du pixel est donc indiquée comme le décalage de ce pixel par rapport à l'origine, sur les deux axes du plan.

Ce guide décrit les systèmes de coordonnées standard utilisés par le modèle objet de CSS. Les différences entre ces systèmes résident principalement dans l'emplacement de l'origine.

## Dimensions

Pour les systèmes de coordonnées utilisés sur le Web, on prend comme convention qu'un décalage horizontal est appelé coordonnée en X (une valeur négative indique une position à gauche de l'origine et une valeur positive indique une position à droite de l'origine) et qu'un décalage vertical est appelé coordonnée en Y (une valeur négative indique une position au dessus de l'origine et une valeur positive indique une position en dessous de l'origine).

L'origine par défaut, dans les contextes relatifs au Web, est située dans le coin supérieur gauche avec les valeurs verticales positives se situant sous l'origine. Ceci est donc différent des représentations mathématiques généralement utilisées où l'origine se situe en bas à gauche et où les valeurs positives en Y sont situées au dessus de l'origine.

Lorsqu'on dessine des graphiques en trois dimensions ou lorsqu'on utilise une troisième dimension pour empiler des objets de l'avant vers l'arrière, on utilise la coordonnée en Z. Celle-ci correspond à la distance entre le spectateur et l'objet. Elle est positive si l'objet est plus éloigné du spectateur que l'origine et négative s'il est plus proche.

> **Note :** Il est en fait possible de modifier les définitions et les orientations de ces systèmes de coordonnées grâce à des propriétés CSS telles que {{cssxref("transform")}}. Toutefois, nous évoquerons uniquement le système de coordonnées standard.

## Les systèmes de coordonnées CSSOM standard

Il existe quatre systèmes de coordonnées standard utilisé par le modèle objet de CSS.

### _Offset_

Les coordonnées indiquées selon ce modèle se situent relativement au coin supérieur gauche de l'élément qu'on examine ou qui a déclenché un évènement.

Ainsi, lorsqu'un {{domxref("MouseEvent", "évènement de souris", "", 1)}} se produit, la position de la souris telle qu'indiquée par les {{domxref("MouseEvent.offsetX", "offsetX")}} et {{domxref("MouseEvent.offsetY", "offsetY")}} est relative au coin supérieur gauche de l'élément sur lequel l'évènement a été produit. L'origine de ce système est décalée vers l'intérieure de la boîte de l'élément selon les distances fournies pour {{cssxref("padding-left")}} et {{cssxref("padding-top")}}.

### Client

Ce système de coordonnées utilise le coin supérieur gauche de la zone d'affichage (_viewport_) ou du contexte de navigation comme origine.

Sur un ordinateur de bureau, par exemple, les propriétés {{domxref("MouseEvent.clientX")}} et {{domxref("MouseEvent.clientY")}} indiquent la position du curseur de la souris au moment où l'évènement se produit et relativement au coin supérieur gauche de la fenêtre du navigateur. Le coin supérieur gauche de la zone d'affichage fournie par la fenêtre est toujours situé en (0, 0), quel que soit le contenu du document et peu importe le défilement ayant eu lieu. Autrement dit, le défilement du document modifiera les coordonnées d'un élément donné du document.

### Page

Ce système de coordonnées fournit la position d'un pixel par rapport au coin supérieur gauche de tout le {{domxref("Document")}} sur lequel le pixel est situé. Cela signifie qu'un point donné sur un élément conservera les mêmes coordonnées sur la page (sauf si l'élément est déplacé avec un changement de position ou à cause de l'ajout d'autres éléments sur la page ou à cause d'un redimensionnement d'un autre élément par exemple).

Les propriétés pour les évènements de la souris {{domxref("MouseEvent.pageX", "pageX")}} et {{domxref("MouseEvent.pageY", "pageY")}} fournissent la position de la souris au moment de l'évènement, relativement au coin supérieur gauche du document.

### Écran

Pour le système de coordonnées lié à l'écran, l'origine est situé dans le coin supérieur gauche de l'écran. Cela signifie que la position d'un point donné évoluera si l'utilisateur déplace la fenêtre du navigateur ou s'il change de résolution (voire s'il ajoute des écrans).

Les propriétés {{domxref("MouseEvent.screenX")}} et {{domxref("MouseEvent.screenY")}} fournissent les coordonnées de la souris lors de l'évènement, relativement à l'origine de l'écran.

## Exemples

Dans cet exemple simple, nous allons créé un ensemble de boîtes imbriquées. Lorsque la souris entrera sur la surface de ces boîtes, se déplacera ou quittera la surface correspondante, l'évènement déclenché est géré afin de mettre à jour les messages informatifs au sein de la boîte pour afficher les différentes coordonnées du pointeur selon les quatre systèmes de coordonnées.

### JavaScript

Décomposons ce script en deux parties. Dans la première, le code permet d'afficher les coordonnées à l'écran. Ce code sera appelé par le gestionnaire d'évènements pour les différents évènements liés à la souris et qui nous intéressent ici.

#### Afficher les coordonnées

Comme nous le verrons après avec le code HTML, la boîte interne (celle sur laquelle on écoute les évènements) contient plusieurs paragraphes : un pour chacun des systèmes de coordonnées.

```js
let inner = document.querySelector(".inner");
let log = document.querySelector(".log");

function setCoords(e, type) {
  let idX = type + "X";
  let idY = type + "Y";

  document.getElementById(idX).innerText = e[idX];
  document.getElementById(idY).innerText = e[idY];
}
```

Dans `inner` On récupère une référence à l'élément {{HTMLElement("div")}} situé dans la boîte intérieure et qui contient les paragraphes qui serviront à afficher les informations liées aux coordonnées.

La fonction `setCoords()` prend en charge deux arguments : l'évènement {{domxref("MouseEvent")}} ainsi que le nom de l'origine utilisée pour obtenir les coordonnées. Les variables `idX` et `idY` sont des chaînes de caractères correspondant aux noms des propriétés à utiliser dans le système de coordonnées. Par exemple, si `type` vaut `"page"`, alors `idX` vaudra `"pageX"` et `idY` vaudra `"pageY"`.

#### Gérer les évènements liés à la souris

`setCoords()` est appelé par le gestionnaire d'évènements `update()` qui est lui même utilisé sur les différents évènements :

```js
function update(e) {
  setCoords(e, "offset");
  setCoords(e, "client");
  setCoords(e, "page");
  setCoords(e, "screen");
}

inner.addEventListener("mouseenter", update, false);
inner.addEventListener("mousemove", update, false);
inner.addEventListener("mouseleave", update, false);
```

Le gestionnaire d'évènement `update()` appelle `setCoords()` pour chacun des systèmes de coordonnées et lui repasse en argument l'évènement qui s'est produit.

Les trois dernières lignes correspondent à l'enregistrement du gestionnaire d'évènements sur la boîte intérieure grâce aux appels de {{domxref("EventTarget.addEventListener", "addEventListener()")}} pour chaque type d'évènement : {{event("mouseenter")}}, {{event("mousemove")}} et {{event("mouseleave")}}.

### HTML

Voici le code HTML utilisé pour l'exemple. On notera qu'à l'intérieur de l'élément `<div>` avec l'identifiant `"log"`, on dispose d'un paragraphe pour chaque système de coordonnées. Un élément {{domxref("span")}} est utilisé pour chaque paragraphe afin de recevoir et d'afficher les coordonnées dans le système concerné.

```html
<div class="outer">
  <div class="inner">
    <div class="log">
      <p>
        Système de coordonnées Offset : <span id="offsetX">0</span>,
        <span id="offsetY">0</span>
      </p>
      <p>
        Système de coordonnées Client : <span id="clientX">0</span>,
        <span id="clientY">0</span>
      </p>
      <p>
        Système de coordonnées Page : <span id="pageX">0</span>,
        <span id="pageY">0</span>
      </p>
      <p>
        Système de coordonnées Écran : <span id="screenX">0</span>,
        <span id="screenY">0</span>
      </p>
    </div>
  </div>
</div>
```

### CSS

Le code CSS est uniquement utilisé à des fins stylistiques. La classe `"outer"` est utilisée pour la boîte englobante qu'on rend volontairement trop large pour la fenêtre de MDN afin de pouvoir _scroller_ horizontalement. La boîte `"inner"` est celle sur laquelle on suit les évènements.

```css
.outer {
  width: 1000px;
  height: 200px;
  background-color: red;
}

.inner {
  position: relative;
  width: 500px;
  height: 150px;
  top: 25px;
  left: 100px;
  background-color: blue;
  color: white;
  cursor: crosshair;
  user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-select: none;
}

.log {
  position: relative;
  width: 100%;
  text-align: center;
}
```

### Résultat

Voici ci-après le résultat obtenu avec ces éléments. Vous pouvez voir comment les coordonnées en X et en Y évoluent lorsque vous déplacez la souris à l'intérieur ou en dehors de la boîte bleue selon les différents systèmes de coordonnées. On peut également voir que le défilement horizontal n'a pas d'impact sur la valeur `pageX`.

{{EmbedLiveSample("Exemples", 600, 250)}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Using_CSS_transforms) : comment modifier un système de coordonnées
- Les coordonnées relatives aux évènements de la souris :

  - {{domxref("MouseEvent.offsetX")}} et {{domxref("MouseEvent.offsetY")}}
  - {{domxref("MouseEvent.clientX")}} et {{domxref("MouseEvent.clientY")}}
  - {{domxref("MouseEvent.pageX")}} et {{domxref("MouseEvent.pageY")}}
  - {{domxref("MouseEvent.screenX")}} et {{domxref("MouseEvent.screenY")}}
