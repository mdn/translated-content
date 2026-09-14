---
title: "HTMLElement : propriété offsetTop"
short-title: offsetTop
slug: Web/API/HTMLElement/offsetTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`offsetTop`** de l'interface {{DOMxRef("HTMLElement")}} retourne la distance entre la bordure extérieure de l'élément courant (y compris sa marge) et le bord supérieur du remplissage de l'{{DOMxRef("HTMLElement.offsetParent", "offsetParent")}}, c'est-à-dire l'élément ancêtre positionné le plus proche.

## Valeur

Un nombre.

## Exemples

```js
const d = document.getElementById("div1");
const topPos = d.offsetTop;

if (topPos > 10) {
  // si le décalage est supérieur
  // à 10 pixels par rapport au parent
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("Element.clientTop")}}
- La propriété {{DOMxRef("Element.scrollTop")}}
- La propriété {{DOMxRef("HTMLElement.offsetHeight")}}
- La propriété {{DOMxRef("HTMLElement.offsetWidth")}}
- La propriété {{DOMxRef("HTMLElement.offsetLeft")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
