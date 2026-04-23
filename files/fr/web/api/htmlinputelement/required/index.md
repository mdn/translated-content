---
title: "HTMLInputElement : propriété required"
short-title: required
slug: Web/API/HTMLInputElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`required`** de l'interface {{DOMxRef("HTMLInputElement")}} définit que l'utilisateur·ice doit remplir une valeur avant de soumettre un formulaire. Elle reflète l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/input#required) de l'élément HTML {{HTMLElement("input")}}.

Alors que l'attribut HTML booléen `required` est ignoré si le type est `hidden`, `range`, `color`, `submit`, `reset`, `button` et `image`, la propriété `required` est `true` pour ces types d'entrée si l'attribut est présent, `false` sinon.

Si un champ requis n'a pas de valeur, la propriété en lecture seule {{DOMxRef("ValidityState.valueMissing", "valueMissing")}} de l'objet {{DOMxRef("ValidityState")}} vaut `true`.

## Valeur

Un booléen.

## Exemples

```js
const inputElement = document.getElementById("name");
console.log(inputElement.required);
inputElement.required = true;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.validity")}}
- La pseudo-classe CSS {{CSSxRef(":required")}}
