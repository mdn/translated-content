---
title: Motifs
slug: Web/SVG/Tutorial/Patterns
---

{{ PreviousNext("Web/SVG/Tutoriel/Gradients", "Web/SVG/Tutoriel/Texts") }}

Les motifs (_patterns_ en anglais) sont sans aucun doute les types de remplissages les plus complexes à utiliser en SVG. Ce sont également des outils très puissants, ils méritent donc d'être abordés pour que vous en connaissiez les fondamentaux. Comme les dégradés, l'élément {{SVGElement('pattern')}} doit être placé dans la section `<defs>` du fichier SVG.

## Exemple

```html
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>
```

{{ EmbedLiveSample('Exemple','220','220') }}

À l'intérieur de l'élément `pattern`, vous pouvez inclure toutes les formes de bases de SVG et les styliser de la même manière que d'habitude (remplissage, contour, dégradés, opacité, etc). Dans notre exemple, on a dessiné un cercle et deux rectangles (qui se chevauchent et dont l'un est deux fois plus grand que l'autre pour remplir le motif en entier).

La partie pouvant apporter le plus de confusion avec les motifs est le système d'unité et la taille des éléments.

## Unités du motif: objectBoundingBox

Les attributs `width` et `height` sur l'élément `pattern` décrivent jusqu'où le motif doit aller avant de se répéter. Les attributs `x` et `y` sont également disponibles si vous souhaitez décaler le point de départ du motif à l'intérieur du dessin.

Même principe que l'attribut `gradientUnits` (que nous avons vu précédemment avec les dégradés), les motifs peuvent prendre un attribut `patternUnits`, pour spécifier l'unité utilisée par le motif. La valeur par défaut est "objectBoundingBox", ainsi une taille de 1 remplira entièrement la hauteur/largeur de l'objet auquel le motif est appliqué. Puisque dans notre cas, on veut que le motif se répète 4 fois horizontalement et verticalement, on a définit `height` et `width` à 0.25. Cela signifie que la hauteur et largeur du pattern sera de 25% celle de l'objet.

De même, pour que le motif commence à 10 pixels du bord supérieur-gauche de l'objet, il faudrait définir les valeurs de `x` et `y` à 0.05 (10/200 = 0.05).

## Unités du contenu: userSpaceOnUse

Contrairement aux dégradés, les motifs ont un deuxième argument, `patternContentUnits`, qui lui spécifie l'unité utilisée par les formes à l'intérieur du motif. La valeur par défaut est "userSpaceOnUse", l'opposé de l'attribut `patternUnits`. Cela signifie qu'à moins de définir ces attributs aurement (`patternContentUnits` et/ou `patternUnits`), les formes que vous dessinez à l'intérieur du motif ont un système de coordonnées différent du motif, ce qui peut rendre les choses un peu déroutantes si vous écrivez le code à la main.

Pour que cela fonctionne dans l'exemple ci-dessus, nous avons dû prendre en compte la taille du rectangle sur lequel est appliqué le motif (200px) et le fait que l'on veut répéter le motif 4 fois horizontalement et verticalement, donc que le motif sera un carré de 50x50. Les deux rectangles et le cercle à l'intérieur du motif ont été dimensionnés pour tenir dans un carré de 50x50. Tout ce qui sortirait en dehors ne serait pas affiché.

La chose à retenir est que si l'objet change de taille, le motif lui-même sera mis à l'échelle mais les objets à l'intérieur non. Ainsi, alors qu'on aura toujours 4 motifs qui se répètent horizontalement et verticalement, les objets à l'intérieur du motif garderont la même taille, et une zone vide sera affichée.

### Exemple

```html hidden
<svg
  width="600"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  id="svg"
  class="playable-svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="0" y="0" width=".25" height=".25">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>

<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
rect.setAttribute('width', 300);</textarea
>
```

```js hidden
var svg = document.getElementById("svg"),
  rect = svg.lastElementChild;

var textarea = document.getElementById("code"),
  reset = document.getElementById("reset"),
  edit = document.getElementById("edit"),
  code = textarea.value;

function drawSvg() {
  eval(textarea.value);
}
reset.addEventListener("click", function () {
  textarea.value = code;
  drawSvg();
});
edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawSvg);
window.addEventListener("load", drawSvg);
```

{{ EmbedLiveSample('Exemple_2','220','350') }}

## Unités du contenu: objectBoundingBox

En changeant l'attribut `patternContentUnits`, on peut utiliser le même système d'unité pour tous les éléments:

```xml
 <pattern id="Pattern" width=".25" height=".25" patternContentUnits="objectBoundingBox">
   <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
   <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
   <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Maintenant, parce le contenu du motif utilise le même système d'unité que le motif, le motif redimensionne automatiquement son contenu. Cela contraste avec le système "userSpaceOnUse" par défaut, où lorsque le motif change le taille, le contenu garde la même taille.

### Code jouable 2

```html hidden
<svg width="600" height="200" xmlns="http://www.w3.org/2000/svg" id="svg" class="playable-svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white"/>
      <stop offset="95%" stop-color="blue"/>
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red"/>
      <stop offset="95%" stop-color="orange"/>
    </linearGradient>

    <pattern id="Pattern" width=".25" height=".25" patternContent
      <rect x="0" y="0" width=".25" height=".25" fill="skyblue"/>
      <rect x="0" y="0" width=".125" height=".125" fill="url(#Gradient2)"/>
         <circle cx=".125" cy=".125" r=".1" fill="url(#Gradient1)" fill-opacity="0.5"/>
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200"/>
</svg>

<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
rect.setAttribute('width', 300);</textarea>
```

```js hidden
var svg = document.getElementById("svg"),
  rect = svg.lastElementChild;

var textarea = document.getElementById("code"),
  reset = document.getElementById("reset"),
  edit = document.getElementById("edit"),
  code = textarea.value;

function drawSvg() {
  eval(textarea.value);
}
reset.addEventListener("click", function () {
  textarea.value = code;
  drawSvg();
});
edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawSvg);
window.addEventListener("load", drawSvg);
```

{{ EmbedLiveSample('Code_jouable_2','220','350') }}

> **Note :** Dans Gecko, les cercles semblent avoir du mal à être dessinés si le rayon est inférieur à 0.075 (on ignore s'il s'agit d'un bug de l'élément pattern ou non). Pour contourner ce problème, il est probablement préférable d'éviter de dessiner des cercles dans des unités "objectBoundingBox".

## Unités du motif: userSpaceOnUse

Aucune des utilisations vu jusqu'ici ne correspond à l'usage habituel des motifs (tel qu'on le ferait en CSS): les motifs ont généralement une taille définie et se répètent indépendamment de la taille de l'objet sur lequel il est appliqué. Pour créer quelque chose comme ça, le motif et le contenu doivent être dessiné en mode "userSpaceOnUse":

```xml
 <pattern id="Pattern" x="10" y="10" width="50" height="50" patternUnits="userSpaceOnUse">
   <rect x="0" y="0" width="50" height="50" fill="skyblue"/>
   <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)"/>
   <circle cx="25" cy="25" r="20" fill="url(#Gradient1)" fill-opacity="0.5"/>
 </pattern>
```

Bien sûr, cela veut dire que le motif ne sera pas mis à l'échelle si vous modifiez la taille de l'objet ultérieurement.

### Exemple jouable

```html hidden
<svg
  width="600"
  height="200"
  xmlns="http://www.w3.org/2000/svg"
  id="svg"
  class="playable-svg">
  <defs>
    <linearGradient id="Gradient1">
      <stop offset="5%" stop-color="white" />
      <stop offset="95%" stop-color="blue" />
    </linearGradient>
    <linearGradient id="Gradient2" x1="0" x2="0" y1="0" y2="1">
      <stop offset="5%" stop-color="red" />
      <stop offset="95%" stop-color="orange" />
    </linearGradient>

    <pattern id="Pattern" x="10" y="10" width="50" height="50">
      <rect x="0" y="0" width="50" height="50" fill="skyblue" />
      <rect x="0" y="0" width="25" height="25" fill="url(#Gradient2)" />
      <circle
        cx="25"
        cy="25"
        r="20"
        fill="url(#Gradient1)"
        fill-opacity="0.5" />
    </pattern>
  </defs>

  <rect fill="url(#Pattern)" stroke="black" width="200" height="200" />
</svg>

<div class="playable-buttons">
  <input id="edit" type="button" value="Edit" />
  <input id="reset" type="button" value="Reset" />
</div>
<textarea id="code" class="playable-code">
rect.setAttribute('width', 300);</textarea
>
```

```js hidden
var svg = document.getElementById("svg"),
  rect = svg.lastElementChild;

var textarea = document.getElementById("code"),
  reset = document.getElementById("reset"),
  edit = document.getElementById("edit"),
  code = textarea.value;

function drawSvg() {
  eval(textarea.value);
}
reset.addEventListener("click", function () {
  textarea.value = code;
  drawSvg();
});
edit.addEventListener("click", function () {
  textarea.focus();
});

textarea.addEventListener("input", drawSvg);
window.addEventListener("load", drawSvg);
```

{{ EmbedLiveSample('Exemple_jouable','220','350') }}

## Récapitulatif

Les trois exemples sont illustrés ci-dessous sur un rectangle allongé à une hauteur de 300px:

![](svg_pattern_comparison_of_units.png)

{{ PreviousNext("Web/SVG/Tutoriel/Gradients", "Web/SVG/Tutoriel/Texts") }}
