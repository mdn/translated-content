---
title: "HTMLButtonElement : propriété type"
short-title: type
slug: Web/API/HTMLButtonElement/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`type`** de l'interface {{DOMxRef("HTMLButtonElement")}} est une chaîne de caractères qui indique le type de comportement de l'élément HTML {{HTMLElement("button")}}.

Elle reflète l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/button#type) de l'élément HTML {{HTMLElement("button")}}.

## Valeur

Une chaîne de caractères représentant le type.

Les valeurs possibles sont listées dans la section [types de bouton](/fr/docs/Web/HTML/Reference/Elements/button#type) de l'attribut.

## Exemples

### HTML

```html
<button id="button" type="reset">type</button>
```

### JavaScript

```js
const buttonElement = document.querySelector("#button");
console.log(buttonElement.type); // "reset"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.type")}}
- La propriété {{DOMxRef("HTMLInputElement.type")}}
