---
title: "HTMLElement : propriété offsetWidth"
short-title: offsetWidth
slug: Web/API/HTMLElement/offsetWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`offsetWidth`** de l'interface {{DOMxRef("HTMLElement")}} retourne la largeur de mise en page d'un élément, sous forme d'entier.

En général, `offsetWidth` est une mesure en pixels de la largeur CSS de l'élément, incluant les bordures, le remplissage et les barres de défilement verticales (si elles sont affichées). Elle n'inclut pas la largeur des pseudo-éléments comme `::before` ou `::after`.

Si l'élément est caché (par exemple, en définissant `style.display` sur l'élément ou l'un de ses ancêtres à `"none"`), alors la valeur retournée est `0`.

## Valeur

Un entier.

## Exemples

![Un élément exemple avec un grand remplissage, une bordure et une marge. offsetWidth est la largeur de mise en page de l'élément, incluant son remplissage et sa bordure, mais excluant sa marge.](dimensions-offset.png)

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("Element.clientWidth")}}
- La propriété {{DOMxRef("Element.scrollWidth")}}
- La propriété {{DOMxRef("HTMLElement.offsetHeight")}}
- La propriété {{DOMxRef("HTMLElement.offsetLeft")}}
- La propriété {{DOMxRef("HTMLElement.offsetTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
