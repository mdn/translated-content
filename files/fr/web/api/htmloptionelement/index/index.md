---
title: "HTMLOptionElement : propriété index"
short-title: index
slug: Web/API/HTMLOptionElement/index
l10n:
  sourceCommit: 9a1384feb06620002bbb01e8085c0d9f1e30df4f
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`index`** de l'interface {{DOMxRef("HTMLOptionElement")}} définit l'indice (commençant à 0) de l'élément&nbsp;; c'est-à-dire, la position de l'élément HTML {{HTMLElement("option")}} dans la liste d'options à laquelle il appartient, selon l'ordre de l'arbre, sous forme d'entier. Si `<option>` ne fait pas partie d'une liste d'options, la valeur est `0`.

## Valeur

Un nombre.

## Exemples

```js
const optionElement = document.getElementById("myOption");
console.log(optionElement.index);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("option")}}
- L'élément HTML {{HTMLElement("select")}}
- L'élément HTML {{HTMLElement("datalist")}}
- La propriété {{DOMxRef("HTMLOptionElement.defaultSelected")}}
- La propriété {{DOMxRef("HTMLOptionElement.selected")}}
- La propriété {{DOMxRef("HTMLSelectElement.selectedIndex")}}
- L'interface {{DOMxRef("HTMLOptionsCollection")}}
