---
title: "Element : évènement mousemove"
slug: Web/API/Element/mousemove_event
---

{{APIRef}}

L'évènement `mousemove` est déclenché à partir d'un élément lorsqu'un dispositif de pointage (ex. une souris) est déplacé lorsque le curseur est à l'intérieur de l'élément.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Se propage/remonte dans le DOM</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Annulable</th>
      <td>Oui</td>
    </tr>
    <tr>
      <th scope="row">Interface</th>
      <td>{{domxref("MouseEvent")}}</td>
    </tr>
    <tr>
      <th scope="row">Propriété pour la gestion d'évènement</th>
      <td>
        {{domxref("GlobalEventHandlers.onmousemove", "onmousemove")}}
      </td>
    </tr>
  </tbody>
</table>

## Exemples

Dans l'exemple suivant, on utilise les évènements [`mousedown`](/fr/docs/Web/API/Element/mousedown_event), [`mousemove`](/fr/docs/Web/API/Element/mousemove_event) et [`mouseup`](/fr/docs/Web/API/Element/mouseup_event) pour permettre à l'utilisateur de dessiner sur un [canevas](/fr/docs/Web/API/Canvas_API) HTML (le dessin est simple : une ligne dont l'épaisseur vaut 1 et dont la couleur est toujours noire).

Lors du chargement de la page, les constantes `myPics` et `context` sont créées comme références au canevas et au contexte 2D qui seront utilisés pour le dessin. Enfin, la constante `rect` permet de stocker les coordonnées relatives du canevas par rapport à la page.

Le dessin commence quand l'évènement `mousedown` est déclenché. On stocke les coordonnées du pointeur dans les variables `x` et `y` puis on passe la variable `isDrawing` à `true` pour indiquer qu'un dessin est en cours.

Lorsque le pointeur se déplace sur la page, l'évènement `mousemove` est déclenché. Si `isDrawing` vaut `true`, le gestionnaire d'évènement appelle la fonction `drawLine()` afin de dessiner une ligne entre le point de coordonnées `x` et `y` (stockées dans ces variables) et la position actuelle (N.B. les coordonnées `x` et `y` sont "corrigées" avec la constante `rect` pour tenir compte du décalage entre le canevas et la page).

Lorsque la fonction `drawLine()` a fini son exécution, on ajuste les coordonnées courante en les stockant dans `x` et `y`.

Lorsque l'évènement `mouseup` est déclenché, on dessine le segment final du dessin en cours, on passe `x` et `y` à `0` puis on arrête le dessin en passant `isDrawing` à `false`.

### HTML

```html
<h1>Dessiner grâce aux évènements de souris</h1>
<canvas id="myPics" width="560" height="360"></canvas>
```

### CSS

```css
canvas {
  border: 1px solid black;
  width: 560px;
  height: 360px;
}
```

### JavaScript

```js
// Un booléen qui, lorsqu'il est vrai, indique que le déplacement de
// la souris entraîne un dessin sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

const myPics = document.getElementById("myPics");
const context = myPics.getContext("2d");

// On récupère le décalage du canevas en x et y par rapport aux bords
// de la page
const rect = myPics.getBoundingClientRect();

// On ajoute les gestionnaires d'évènements pour mousedown, mousemove
// et mouseup
myPics.addEventListener("mousedown", (e) => {
  x = e.clientX - rect.left;
  y = e.clientY - rect.top;
  isDrawing = true;
});

myPics.addEventListener("mousemove", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = e.clientX - rect.left;
    y = e.clientY - rect.top;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing === true) {
    drawLine(context, x, y, e.clientX - rect.left, e.clientY - rect.top);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}
```

### Résultat

{{EmbedLiveSample("Exemples", 640, 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une introduction aux évènements](/fr/docs/Apprendre/JavaScript/Building_blocks/Evènements)
- D'autres évènements connexes

  - [`mouseup`](/fr/docs/Web/API/Element/mouseup_event)
  - [`mousedown`](/fr/docs/Web/API/Element/mousedown_event)
  - [`click`](/fr/docs/Web/API/Element/click_event)
  - [`dblclick`](/fr/docs/Web/API/Element/dblclick_event)
  - [`mouseout`](/fr/docs/Web/API/Element/mouseout_event)
  - [`mouseover`](/fr/docs/Web/API/Element/mouseover_event)
  - [`mouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
  - [`mouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
  - [`contextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
