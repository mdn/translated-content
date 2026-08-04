---
title: "Element : évènement mousemove"
short-title: mousemove
slug: Web/API/Element/mousemove_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("UI Events")}}

L'évènement `mousemove` est déclenché sur un élément lorsqu'un dispositif de pointage (généralement une souris) est déplacé alors que le point chaud du curseur se trouve à l'intérieur de celui-ci.

Ces évènements se produisent que des boutons de la souris soient enfoncés ou non. Ils peuvent se déclencher à un rythme très élevé, en fonction de la rapidité avec laquelle l'utilisateur·ice déplace la souris, de la rapidité de la machine, des autres tâches et processus en cours, etc.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété gestionnaire d'évènement.

```js-nolint
addEventListener("mousemove", (event) => { })

onmousemove = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("MouseEvent")}}. Hérite de {{DOMxRef("UIEvent")}} et de {{DOMxRef("Event")}}.

{{InheritanceDiagram("MouseEvent")}}

## Exemples

L'exemple suivant utilise les évènements {{DOMxRef("Element/mousedown_event", "mousedown")}}, `mousemove` et {{DOMxRef("Element/mouseup_event", "mouseup")}} pour permettre à l'utilisateur·ice de dessiner sur un [canevas](/fr/docs/Web/API/Canvas_API) HTML. Le dessin est simple&nbsp;: une ligne dont l'épaisseur vaut 1 et dont la couleur est toujours noire.

Lorsque la page se charge, les constantes `mesImages` et `contexte` sont créées pour stocker une référence au canevas et au contexte 2D que nous utilisons pour dessiner.

Le dessin commence lorsque l'évènement `mousedown` est déclenché. On stocke d'abord les coordonnées x et y du pointeur de la souris dans les variables `x` et `y`, puis on passe `isDrawing` à true.

Lorsque la souris se déplace sur la page, l'évènement `mousemove` est déclenché. Si `isDrawing` vaut true, le gestionnaire d'évènement appelle la fonction `dessinerLigne` pour dessiner une ligne entre les coordonnées `x` et `y` stockées et la position actuelle.

Lorsque la fonction `dessinerLigne()` a fini son exécution, on ajuste les coordonnées et on les stocke dans `x` et `y`.

L'évènement `mouseup` dessine le segment final, passe `x` et `y` à `0` et arrête le dessin en passant `isDrawing` à `false`.

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
// Lorsque true, déplacez la souris dessine sur le canevas
let isDrawing = false;
let x = 0;
let y = 0;

const mesImages = document.getElementById("myPics");
const context = mesImages.getContext("2d");

// event.offsetX, event.offsetY donne le décalage (x,y) par rapport au bord du canevas.

// Ajout des écouteurs d'évènements pour mousedown, mousemove et mouseup
mesImages.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

mesImages.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    dessinerLigne(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

window.addEventListener("mouseup", (e) => {
  if (isDrawing) {
    dessinerLigne(context, x, y, e.offsetX, e.offsetY);
    x = 0;
    y = 0;
    isDrawing = false;
  }
});

function dessinerLigne(context, x1, y1, x2, y2) {
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

- [Apprendre&nbsp;: Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- L'évènement {{DOMxRef("Element/mousedown_event", "mousedown")}}
- L'évènement {{DOMxRef("Element/mouseup_event", "mouseup")}}
- L'évènement {{DOMxRef("Element/click_event", "click")}}
- L'évènement {{DOMxRef("Element/dblclick_event", "dblclick")}}
- L'évènement {{DOMxRef("Element/mouseover_event", "mouseover")}}
- L'évènement {{DOMxRef("Element/mouseout_event", "mouseout")}}
- L'évènement {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- L'évènement {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- L'évènement {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- L'évènement {{DOMxRef("Element/pointermove_event", "pointermove")}}
