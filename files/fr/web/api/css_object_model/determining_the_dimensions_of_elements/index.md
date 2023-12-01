---
title: Déterminer les dimensions des éléments
slug: Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements
---

{{APIRef("CSSOM View")}}

Il y a plusieurs propriétés que vous pouvez regarder dans le but de déterminer la largeur et la hauteur des éléments, et il peut être difficile de déterminer quelle est la bonne pour vos besoins.

Cet article est conçu pour vous aider à prendre cette décision. Notez que toutes ces propriétés sont en lecture seule .

Si vous voulez définir la largeur et la hauteur d'un élément, utilisez [`width`](/fr/docs/Web/CSS/width) et [`height`](/fr/docs/Web/CSS/height); ou les propriétés [`min-width`](/fr/docs/Web/CSS/min-width), [`max-width`](/fr/docs/Web/CSS/max-width), [`min-height`](/fr/docs/Web/CSS/min-height) et [`max-height`](/fr/docs/Web/CSS/max-height).

## Que faut-il utiliser ?

Si vous avez besoin de connaître les dimensions totales de l'espace occupé par un élément, y compris la largeur du contenu visible, les barres de défilement (le cas échéant), le rembourrage, et les frontières, vous pouvez utiliser les propriétés [`offsetWidth`](/fr/DOM/element.offsetWidth) et [`offsetHeight`](/fr/DOM/element.offsetHeight).

La plupart du temps ce sont les mêmes que la largeur et la hauteur de [`getBoundingClientRect()`](/fr/DOM/element.getBoundingClientRect), quand il n'y a pas de transformations appliquées à l'élément. En cas de transformations, `offsetWidth` et `offsetHeight` renvoie la disposition de la largeur et la hauteur de l'élément, tandis que `getBoundingClientRect()` retourne le rendu de la largeur et de la hauteur.

A titre d'exemple, si l'élément a `width: 100px;` et `transform: scale(0.5);` `getBoundingClientRect()` retournera 50 comme largeur, tandis que `offsetWidth` retournera 100.

![](dimensions-offset.png)

## Quelle est la taille du contenu affiché ?

Si vous avez besoin de savoir combien prend d'espace le contenu réel affiché, y compris le rembourrage mais sans les frontières, les marges, ou les barres de défilement, vous pouvez utiliser les propriétés [`clientWidth`](/fr/DOM/element.clientWidth) et [`clientHeight`](/fr/DOM/element.clientHeight) :

![](dimensions-client.png)

## Grandeur totale

Si vous avez besoin de connaître la taille réelle d'un élement, peu importe sa visibilité, vous devez utiliser les propriétés [`scrollWidth`](/fr/DOM/element.scrollWidth) et [`scrollHeight`](/fr/docs/Web/API/Element.scrollHeight).

Elles retournent la largeur et la hauteur de l'ensemble du contenu d'un élément, même si seulement une partie de celui-ci est actuellement visible en raison de l'utilisation des barres de défilement.

Par exemple, si un élément de 600x400 pixels est affiché dans une boîte de défilement de 300x300 pixels, `scrollWidth` retourne 600 tandis que `scrollHeight` retourne 400.

## Voir aussi

- <http://www.w3.org/TR/cssom-view/>
- [MSDN: Measuring Element Dimension and Location](<https://docs.microsoft.com/en-us/previous-versions//hh781509(v=vs.85)>)
