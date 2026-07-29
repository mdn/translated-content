---
title: "Element : propriété clientHeight"
short-title: clientHeight
slug: Web/API/Element/clientHeight
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

La propriété en lecture seule **`clientHeight`** de l'interface {{DOMxRef("Element")}} vaut zéro pour les éléments sans CSS ou sans boîte de disposition en ligne/incise&nbsp;; sinon, c'est la hauteur interne d'un élément en pixels. Elle inclut le remplissage mais exclut les bordures, les marges et les barres de défilement horizontales (si présentes).

`clientHeight` peut être calculée comme&nbsp;: `height` CSS + `padding` CSS - hauteur de la barre de défilement horizontale (si présente).

Lorsqu'une `clientHeight` est utilisée sur l'élément racine (l'élément `<html>`), (ou sur `<body>` si le document est en mode <i lang="en">quirks</i>), la hauteur de la zone d'affichage (sans tenir compte des barres de défilement) est retournée.

## Valeur

Un entier.

## Exemples

![Comment la propriété clientHeight détermine la hauteur interne d'un élément en tenant compte de la hauteur et du padding](dimensions-client.png)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetHeight")}}
- La propriété {{DOMxRef("Element.scrollHeight")}}
- La propriété {{DOMxRef("Element.clientWidth")}}
- La propriété {{DOMxRef("Element.clientLeft")}}
- La propriété {{DOMxRef("Element.clientTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
