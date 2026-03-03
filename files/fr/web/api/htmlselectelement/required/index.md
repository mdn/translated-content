---
title: "HTMLSelectElement : propriété required"
short-title: required
slug: Web/API/HTMLSelectElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`required`** de l'interface {{DOMxRef("HTMLSelectElement")}} indique que l'utilisateur·ice doit sélectionner une option avec une valeur de chaîne de caractères non vide avant de soumettre un formulaire. Elle reflète l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/select#required) de l'élément HTML {{HTMLElement("select")}}.

## Valeur

Un booléen.

## Exemples

```js
const selectElement = document.getElementById("fruits");
console.log(selectElement.required);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- La propriété {{DOMxRef("HTMLSelectElement.validity")}}
- La pseudo-classe CSS {{CSSxRef(":required")}}
