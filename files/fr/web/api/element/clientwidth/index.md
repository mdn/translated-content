---
title: "Element : propriété clientWidth"
short-title: clientWidth
slug: Web/API/Element/clientWidth
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

La propriété en lecture seule **`clientWidth`** de l'interface {{DOMxRef("Element")}} vaut zéro pour les éléments en ligne et pour les éléments sans CSS. Dans les autres cas, sa valeur correspond à la largeur intérieure d'un élément, exprimée en pixels. Elle inclut le remplissage, mais exclut les bordures, les marges et les barres de défilement verticales (le cas échéant).

Lorsqu'une `clientWidth` est utilisée sur l'élément racine (l'élément `<html>`) (ou sur `<body>` si le document est en mode <i lang="en">quirks</i>), la largeur de la zone d'affichage (sans tenir compte des barres de défilement) est retournée.

## Valeur

Un entier.

## Exemples

![Un exemple d'élément avec un grand remplissage, une bordure et une marge. clientWidth est la largeur intérieure de l'élément incluant son remplissage, et excluant sa marge, sa bordure et la barre de défilement verticale.](dimensions-client.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetWidth")}}
- La propriété {{DOMxRef("Element.scrollWidth")}}
- La propriété {{DOMxRef("Element.clientHeight")}}
- La propriété {{DOMxRef("Element.clientLeft")}}
- La propriété {{DOMxRef("Element.clientTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
