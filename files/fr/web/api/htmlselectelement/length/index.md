---
title: "HTMLSelectElement : propriété length"
short-title: length
slug: Web/API/HTMLSelectElement/length
l10n:
  sourceCommit: 92d955aff6f18961777d0b5a9ba01b8431a64131
---

{{APIRef("HTML DOM")}}

La propriété **`length`** de l'interface {{DOMxRef("HTMLSelectElement")}} indique le nombre d'éléments HTML {{HTMLElement("option")}} dans l'élément HTML {{HTMLElement("select")}}. Elle représente le nombre de nœuds dans la collection {{DOMxRef("HTMLSelectElement.options", "options")}}. Lorsqu'elle est définie, elle agit comme ({{DOMxRef("HTMLOptionsCollection.length")}}).

## Valeur

Un nombre.

## Exemples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.length);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("option")}}
- La propriété {{DOMxRef("HTMLSelectElement.options")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedOptions")}}
- La propriété {{DOMxRef("HTMLSelectElement.multiple")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedIndex")}}
