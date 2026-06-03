---
title: "HTMLElement : propriété offsetHeight"
short-title: offsetHeight
slug: Web/API/HTMLElement/offsetHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`offsetHeight`** de l'interface {{DOMxRef("HTMLElement")}} retourne la hauteur d'un élément, y compris le remplissage vertical (<i lang="en">padding</i>) et les bordures, sous forme d'entier.

En général, `offsetHeight` est une mesure en pixels de la hauteur CSS de l'élément, incluant les bordures, le remplissage et les barres de défilement horizontales (si elles sont affichées). Elle n'inclut pas la hauteur des pseudo-éléments comme `::before` ou `::after`. Pour l'objet body du document, la mesure inclut la hauteur totale du contenu linéaire au lieu de la hauteur CSS de l'élément. Les éléments flottants qui dépassent sous d'autres contenus linéaires sont ignorés.

Si l'élément est caché (par exemple, en définissant `style.display` sur l'élément ou l'un de ses ancêtres à `"none"`), alors la valeur retournée est `0`.

## Valeur

Un entier.

## Exemples

![Un élément exemple avec un grand remplissage, une bordure et une marge. offsetHeight est la hauteur de mise en page de l'élément, incluant son remplissage et sa bordure, mais excluant sa marge.](dimensions-offset.png)

L'image ci-dessus montre une barre de défilement et un `offsetHeight` qui s'adapte à la fenêtre. Cependant, les éléments non défilants peuvent avoir des valeurs `offsetHeight` importantes, bien supérieures au contenu visible. Ces éléments sont généralement contenus dans des éléments défilants&nbsp;; par conséquent, ils peuvent être totalement ou partiellement invisibles, selon la valeur de `scrollTop` du conteneur défilant.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("Element.clientHeight")}}
- La propriété {{DOMxRef("Element.scrollHeight")}}
- La propriété {{DOMxRef("HTMLElement.offsetWidth")}}
- La propriété {{DOMxRef("HTMLElement.offsetLeft")}}
- La propriété {{DOMxRef("HTMLElement.offsetTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
