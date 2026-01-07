---
title: "HTMLElement : propriété tabIndex"
short-title: tabIndex
slug: Web/API/HTMLElement/tabIndex
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`tabIndex`** de l'interface {{DOMxRef("HTMLElement")}} représente l'ordre de tabulation de l'élément actuel.

L'ordre de tabulation fonctionne selon l'algorithme suivant&nbsp;:

1. Pour les éléments avec une valeur positive de `tabIndex`. La navigation entre les éléments qui ont des valeurs `tabIndex` identiques se fait dans leur ordre d'apparition. La navigation suit l'ordre croissant des valeurs de `tabIndex`.
2. Pour les éléments qui ne prennent pas en charge l'attribut `tabIndex` ou pour lesquels `tabIndex` a la valeur `0`, la navigation se fait dans l'ordre d'apparition.

Les éléments qui sont désactivés ne participent pas au calcul de l'ordre de tabulation.

Les valeurs ne doivent pas nécessairement être adjacentes et il n'y a pas de valeur de départ particulière obligatoire. Elles peuvent même être négatives. Toutefois les navigateurs écrètent les valeurs très grandes.

## Valeur

Un entier.

## Exemples

```js
const b1 = document.getElementById("bouton1");

b1.tabIndex = 1;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Accessibilité des widgets JavaScript utilisant la navigation au clavier](/fr/docs/Web/Accessibility/Guides/Keyboard-navigable_JavaScript_widgets)
- L'attribut global HTML [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
