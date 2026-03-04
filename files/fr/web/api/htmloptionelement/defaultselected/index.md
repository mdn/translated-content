---
title: "HTMLOptionElement: propriété defaultSelected"
short-title: defaultSelected
slug: Web/API/HTMLOptionElement/defaultSelected
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`defaultSelected`** de l'interface {{DOMxRef("HTMLOptionElement")}} définit l'état sélectionné par défaut de l'élément. Cette propriété reflète l'attribut [`selected`](/fr/docs/Web/HTML/Reference/Elements/option#selected) de l'élément HTML {{HTMLElement("option")}}. La présence de l'attribut `selected` définit la propriété `defaultSelected` à `true`.

## Valeur

Un booléen.

## Exemples

```js
const optionElement = document.getElementById("water");
console.log(optionElement.defaultSelected);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- La propriété {{DOMxRef("HTMLOptionElement.selected")}}
- La propriété {{DOMxRef("HTMLOptionElement.index")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
- La pseudo-classe {{CSSxRef(":default")}}
