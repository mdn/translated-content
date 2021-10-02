---
title: Element.scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/scrollIntoViewIfNeeded
---
{{APIRef("DOM")}}{{Non-standard_header}}

La méthode **`Element.scrollIntoViewIfNeeded()`** fait défiler l'élément en cours dans la zone visible de la fenêtre du navigateur s'il n'y est pas déjà. Si l'élément est déjà dans la zone visible de la fenêtre du navigateur, aucun défilement n'a lieu. Cette méthode est une variante propriétaire de la méthode standard [`Element.scrollIntoView()`](/en-US/docs/Web/API/Element/scrollIntoView).

## Syntaxe

À faire.

### Paramètres

- _`opt_center`_

  - : Est une valeur {{jsxref("Boolean")}} facultative avec la valeur `true` par défaut :

    - Si `true` (_vrai_), l'élément sera aligné sur le centre de la zone visible de l'ancêtre défilable.
    - Si `false` (_faux_), l'élément sera aligné sur le bord le plus proche de la zone visible de l'ancêtre défilable. Selon le bord de la zone visible le plus proche de l'élément, soit le haut de l'élément sera aligné sur le bord supérieur de la zone visible, soit le bord inférieur de l'élément sera aligné sur le bord inférieur de la zone visible .

## Exemple

À faire

## Spécifications

Ne fait partie d'aucune spécification. C'est une méthode propriétaire propre à WebKit.

## Compatibilité des navigateurs

{{Compat("api.Element.scrollIntoViewIfNeeded")}}

## Voir aussi

- [W3C CSSOM bug 17152 : Support centrant un élément lors du défilement dans la vue.](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (demande de fonctionnalité pour un équivalent standardisé à `scrollIntoViewIfNeeded`)
