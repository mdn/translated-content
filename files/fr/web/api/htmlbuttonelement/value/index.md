---
title: "HTMLButtonElement : propriété value"
short-title: value
slug: Web/API/HTMLButtonElement/value
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLButtonElement")}} représente la valeur de l'élément {{HTMLElement("button")}} sous forme de chaîne de caractères, ou la chaîne vide si aucune valeur n'est définie. Elle reflète l'attribut [`value`](/fr/docs/Web/HTML/Reference/Elements/button#value) de l'élément.

## Valeur

Une chaîne de caractères contenant la valeur de l'élément {{HTMLElement("button")}}.

## Exemples

```js
const buttonElement = document.getElementById("given-name");
console.log(`valeur : ${buttonElement.value}`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("button")}}
- La propriété {{DOMxRef("HTMLButtonElement.type")}}
- La propriété {{DOMxRef("HTMLButtonElement.labels")}}
