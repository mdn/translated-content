---
title: "HTMLElement : propriété offsetLeft"
short-title: offsetLeft
slug: Web/API/HTMLElement/offsetLeft
l10n:
  sourceCommit: 7cd51a73ad94df604db79ccacbbe0513d0967650
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`offsetLeft`** de l'interface {{DOMxRef("HTMLElement")}} retourne le nombre de pixels de décalage du _coin supérieur gauche_ de l'élément courant vers la gauche à l'intérieur du nœud {{DOMxRef("HTMLElement.offsetParent")}}.

Pour les éléments de type bloc, `offsetTop`, `offsetLeft`, `offsetWidth` et `offsetHeight` décrivent la boîte de bordure de l'élément par rapport à l'`offsetParent`.

Cependant, pour les éléments en ligne (comme une étendue) qui peuvent passer d'une ligne à l'autre, `offsetTop` et `offsetLeft` décrivent la position de la _première_ boîte de bordure (utilisez {{DOMxRef("Element.getClientRects()")}} pour obtenir sa largeur et sa hauteur), tandis que `offsetWidth` et `offsetHeight` décrivent les dimensions de la boîte de bordure _englobante_ (utilisez {{DOMxRef("Element.getBoundingClientRect()")}} pour obtenir sa position). Ainsi, une boîte avec la gauche, le haut, la largeur et la hauteur de `offsetLeft`, `offsetTop`, `offsetWidth` et `offsetHeight` ne sera pas une boîte englobante pour une étendue (<i lang="en">span</i>) avec un retour à la ligne.

## Valeur

Un entier.

### Exemple

```js
const colorTable = document.getElementById("t1");
const tOLeft = colorTable.offsetLeft;

if (tOLeft > 5) {
  // grand décalage à gauche : faire quelque chose ici
}
```

Cet exemple montre une «&nbsp;longue&nbsp;» phrase qui déborde dans un bloc avec une bordure bleue, et une boîte rouge dont on pourrait croire qu'elle décrit les limites de l'étendue.

![Une phrase qui dit : Courte étendue. Ce texte est entièrement dans un bloc avec une bordure bleue. Une phrase qui dit : Longue étendue qui déborde dans ce bloc. Les mots « longue étendue qui déborde » sont dans une boîte à bordure rouge. Les mots « dans ce bloc » sont dans le bloc à bordure bleue.](offsetleft.jpg)

```html
<div class="span-container">
  <span>Courte étendue.</span>
  <span id="long-span">Longue étendue qui déborde dans ce bloc.</span>
</div>

<div id="box"></div>
```

```css
.span-container {
  width: 300px;
  border-color: blue;
  border-style: solid;
  border-width: 1px;
}

#box {
  position: absolute;
  border-color: red;
  border-width: 1px;
  border-style: solid;
  z-index: 10;
}
```

```js
const box = document.getElementById("box");
const longSpan = document.getElementById("long-span");
box.style.left = `${longSpan.offsetLeft}${document.body.scrollLeft}px`;
box.style.top = `${longSpan.offsetTop}${document.body.scrollTop}px`;
box.style.width = `${longSpan.offsetWidth}px`;
box.style.height = `${longSpan.offsetHeight}px`;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("Element.clientLeft")}}
- La propriété {{DOMxRef("Element.scrollLeft")}}
- La propriété {{DOMxRef("HTMLElement.offsetHeight")}}
- La propriété {{DOMxRef("HTMLElement.offsetWidth")}}
- La propriété {{DOMxRef("HTMLElement.offsetTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
