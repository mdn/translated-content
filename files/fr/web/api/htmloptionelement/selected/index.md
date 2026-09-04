---
title: "HTMLOptionElement : propriété selected"
short-title: selected
slug: Web/API/HTMLOptionElement/selected
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`selected`** de l'interface {{DOMxRef("HTMLOptionElement")}} définit l'état de sélection actuel de l'élément&nbsp;; c'est-à-dire si l'élément HTML {{HTMLElement("option")}} est sélectionné ou non.

La présence de l'attribut HTML [`selected`](/fr/docs/Web/HTML/Reference/Elements/option#selected) indique que l'option est sélectionnée par défaut. Cela n'indique pas si cette option est actuellement sélectionnée&nbsp;: si l'état de l'option change, l'attribut de contenu `selected` ne reflète pas le changement&nbsp;; seule la propriété IDL `selected` de `HTMLOptionElement` est mise à jour. L'attribut `selected` est reflété par la propriété {{DOMxRef("HTMLOptionElement.defaultSelected", "defaultSelected")}}.

## Valeur

Un booléen.

## Exemples

```js
const optionElement = document.getElementById("water");
console.log(optionElement.selected);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- L'élément HTML {{HTMLElement("select")}}
- La propriété {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- La propriété {{DOMxRef("HTMLOptionElement.index")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedIndex")}}
