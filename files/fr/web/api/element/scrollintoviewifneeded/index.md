---
title: "Element : méthode scrollIntoViewIfNeeded()"
short-title: scrollIntoViewIfNeeded()
slug: Web/API/Element/scrollIntoViewIfNeeded
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La méthode **`scrollIntoViewIfNeeded()`** de l'interface {{DOMxRef("Element")}} fait défiler l'élément courant dans la zone visible de la fenêtre du navigateur si celui-ci n'est pas déjà dans la zone visible. Si l'élément est déjà dans la zone visible de la fenêtre du navigateur, aucun défilement n'a lieu. Cette méthode est une variation propriétaire de la méthode standard [`Element.scrollIntoView()`](/fr/docs/Web/API/Element/scrollIntoView) .

## Syntaxe

```js-nolint
scrollIntoViewIfNeeded()
scrollIntoViewIfNeeded(centerIfNeeded)
```

### Paramètres

- `centerIfNeeded` {{Optional_Inline}}
  - : Une valeur booléenne facultative dont la valeur par défaut est `true`&nbsp;:
    - Si `true`, l'élément est aligné de sorte à être centré dans la zone défilable visible de l'ancêtre.
    - Si `false`, l'élément est aligné sur le bord le plus proche de la zone défilable visible de l'ancêtre. Selon le bord de la zone visible le plus proche de l'élément, le haut de l'élément est aligné sur le bord supérieur de la zone visible, ou le bord inférieur de l'élément est aligné sur le bord inférieur de la zone visible.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const element = document.getElementById("mon-el");

element.scrollIntoViewIfNeeded(); // Centre l'element dans la zone visible
element.scrollIntoViewIfNeeded(false); // Aligne l'element sur le bord le plus proche dans la zone visible
```

## Spécifications

Ne fait partie d'aucune spécification. C'est une méthode propriétaire propre à WebKit.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [W3C CSSOM bogue 17152&nbsp;: Support centrant un élément lors du défilement dans la vue <sup>(angl.)</sup>](https://www.w3.org/Bugs/Public/show_bug.cgi?id=17152) (demande de fonctionnalité pour un équivalent standardisé à `scrollIntoViewIfNeeded`)
