---
title: element.offsetLeft
slug: Web/API/HTMLElement/offsetLeft
---

{{ ApiRef() }}

### Résumé

Renvoie le nombre de pixels dont le
_coin supérieur gauche_
de l'élément courant est décalé vers la gauche au sein du nœud [`offsetParent`](/fr/DOM/element.offsetParent).

### Syntaxe

```js
left = element.offsetLeft;
```

`left` est un entier représentant le décalage vers la gauche en pixels.

### Note

`offsetLeft` renvoie la position du coin supérieur gauche de l'élément&nbsp;; pas nécessairement du «&nbsp;vrai&nbsp;» bord gauche de l'élément. C'est important pour les éléments **span** dans les textes continus qui s'étendent sur plusieurs lignes. Le span peut commencer au milieu de la page et continuer au début de la ligne suivante. La propriété `offsetLeft` fera référence au coin gauche de départ du span, pas le bord gauche du texte au début de la seconde ligne. Par conséquent, une boîte avec les valeurs left, top, width et height correspondant à `offsetLeft, offsetTop, offsetWidth` et `offsetHeight` ne contiendra pas forcément un span avec débordement de texte.

### Exemple

```js
var colorTable = document.getElementById("t1");
var tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // grand décalage à gauche&nbsp;: faire quelque chose ici
}
```

### Exemple

Comme noté plus haut, cet exemple montre une «&nbsp;longue&nbsp;» phrase qui déborde dans un div avec une bordure bleue, et une boîte rouge dont on pourrait croire qu'elle décrit les limites du span.

![](offsetleft.jpg)

Note&nbsp;: il s'agit d'une image de l'exemple, pas d'un rendu direct dans le navigateur. En effet, il n'est pas possible d'intégrer des scripts dans la page du wiki.

```html
<div
  style="width: 300px; border-color:blue;
  border-style:solid; border-width:1;">
  <span>Short span. </span>
  <span id="long">Long span that wraps withing this div.</span>
</div>

<div
  id="box"
  style="position: absolute; border-color: red;
  border-width: 1; border-style: solid; z-index: 10"></div>

<script>
  var box = document.getElementById("box");
  var long = document.getElementById("long");
  box.style.left = long.offsetLeft + document.body.scrollLeft;
  box.style.top = long.offsetTop + document.body.scrollTop;
  box.style.width = long.offsetWidth;
  box.style.height = long.offsetHeight;
</script>
```

### Voir aussi

[`offsetParent`](/fr/DOM/element.offsetParent), [`offsetTop`](/fr/DOM/element.offsetTop), [`offsetWidth`](/fr/DOM/element.offsetWidth), [`offsetHeight`](/fr/DOM/element.offsetHeight)

### Spécification

Cette propriété ne fait partie d'aucun standard ou recommandation technique du W3C.

[MSDN: offsetLeft](http://msdn.microsoft.com/workshop/author/dhtml/reference/properties/offsetleft.asp)
