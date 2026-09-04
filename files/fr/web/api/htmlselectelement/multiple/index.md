---
title: "HTMLSelectElement : propriété multiple"
short-title: multiple
slug: Web/API/HTMLSelectElement/multiple
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`multiple`** de l'interface {{DOMxRef("HTMLSelectElement")}} indique que l'utilisateur·ice peut sélectionner plusieurs options dans la liste. Elle reflète l'attribut [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple) de l'élément HTML {{HTMLElement("select")}}.

## Valeur

Un booléen.

## Exemples

```js
const selectElement = document.getElementById("comment");
console.log(selectElement.multiple);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedOptions")}}
- La propriété {{DOMxRef("HTMLSelectElement.length")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedIndex")}}
