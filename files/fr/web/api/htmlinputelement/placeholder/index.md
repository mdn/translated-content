---
title: "HTMLInputElement : propriété placeholder"
short-title: placeholder
slug: Web/API/HTMLInputElement/placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`placeholder`** de l'interface {{DOMxRef("HTMLInputElement")}} représente une indication pour l'utilisateur·ice sur ce qui peut être saisi dans le champ. Elle reflète l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/input#placeholder) de l'élément HTML {{HTMLElement("input")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const inputElement = document.getElementById("phone");
console.log(inputElement.placeholder);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- Le pseudo-élément CSS {{CSSxRef("::placeholder")}}
- La pseudo-classe CSS {{CSSxRef(":placeholder-shown")}}
