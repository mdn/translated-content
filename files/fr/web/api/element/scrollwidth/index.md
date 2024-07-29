---
title: "Element : propriété scrollWidth"
short-title: scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("DOM")}}

**`Element.scrollWidth`** est une propriété en lecture seule correspondant à la mesure de la largeur du contenu d'un élément, incluant le contenu qui ne serait pas visible à l'écran en raison d'un dépassement.

La valeur `scrollWidth` est égale à la largeur minimale dont l'élément aurait besoin pour s'adapter à tout le contenu de la fenêtre sans utiliser de barre de défilement horizontale. La largeur est mesurée de la même manière que [`clientWidth`](/fr/docs/Web/API/Element/clientWidth)&nbsp;: elle inclut le remplissage (<i lang="en">padding</i>) de l'élément, mais pas sa bordure, sa marge ou sa barre de défilement verticale (si présente). Elle peut également inclure la largeur des pseudo-éléments tels que [`::before`](/fr/docs/Web/CSS/::before) ou [`::after`](/fr/docs/Web/CSS/::after). Pour un élément donné, si son contenu peut s'adapter sans avoir besoin d'une barre de défilement horizontale, `scrollWidth` sera égale à [`clientWidth`](/fr/docs/Web/API/Element/clientWidth).

> [!NOTE]
> Cette propriété arrondira la valeur à un nombre entier. Si vous avez besoin d'une valeur fractionnaire, utilisez [`element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect).

## Valeur

Un nombre.

## Exemples

### HTML

```html
<div id="uneDiv">TotoTruc-TotoTruc-TotoTruc-TotoTruc</div>
<button id="unBouton">Vérifier le débordement</button>

<div id="uneAutreDiv">TotoTruc-TotoTruc-TotoTruc-TotoTruc</div>
<button id="unAutreBouton">Vérifier le débordement</button>
```

### CSS

```css
div {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#uneDiv {
  width: 100px;
}

button {
  margin-bottom: 2em;
}
```

### JavaScript

```js
const boutonUn = document.getElementById("unBouton");
const boutonDeux = document.getElementById("unAutreBouton");
const blocUn = document.getElementById("uneDiv");
const blocDeux = document.getElementById("uneAutreDiv");

// vérifie pour déterminer si un débordement se produit
function isOverflowing(element) {
  return element.scrollWidth > element.offsetWidth;
}

function alertOverflow(element) {
  if (isOverflowing(element)) {
    alert("Le contenu a débordé du cadre.");
  } else {
    alert("Aucun débordement !");
  }
}

boutonUn.addEventListener("click", () => {
  alertOverflow(blocUn);
});
boutonDeux.addEventListener("click", () => {
  alertOverflow(blocDeux);
});
```

### Résultat

{{EmbedLiveSample('')}}

## Spécifications

{{Specifications}}

## Compabilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`Element.clientWidth`](/fr/docs/Web/API/Element/clientWidth)
- La propriété [`HTMLElement.offsetWidth`](/fr/docs/Web/API/HTMLElement/offsetWidth)
- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
