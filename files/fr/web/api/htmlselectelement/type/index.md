---
title: "HTMLSelectElement : propriété type"
short-title: type
slug: Web/API/HTMLSelectElement/type
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`type`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne le `type` du contrôle de formulaire.

## Valeur

L'une des valeurs suivantes&nbsp;:

- `"select-multiple"` si plusieurs valeurs peuvent être sélectionnées.
- `"select-one"` si une seule valeur peut être sélectionnée.

## Exemples

```js
switch (select.type) {
  case "select-multiple":
    // Plusieurs valeurs peuvent être sélectionnées
    break;
  case "select-one":
    // Une seule valeur peut être sélectionnée
    break;
  default:
  // Valeur non standard (ou ce n'est pas un élément SELECT)
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}, qui implémente cette interface.
