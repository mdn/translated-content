---
title: "HTMLInputElement : propriété pattern"
short-title: pattern
slug: Web/API/HTMLInputElement/pattern
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`pattern`** de l'interface {{DOMxRef("HTMLInputElement")}} représente une [expression régulière](/fr/docs/Web/JavaScript/Guide/Regular_expressions) à laquelle une valeur non nulle de {{HTMLElement("input")}} doit correspondre. Elle reflète l'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern) de l'élément HTML {{HTMLElement("input")}}.

La propriété `pattern` est valide pour les types `text`, `search`, `url`, `tel`, `email` et `password`. Elle définit une expression régulière que la propriété {{DOMxRef("HTMLInputElement.value", "value")}} de l'élément de saisie doit respecter pour que la valeur soit acceptée lors de la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

Si une valeur non nulle ne respecte pas les contraintes définies par la valeur de `pattern`, la propriété en lecture seule {{DOMxRef('ValidityState.patternMismatch','patternMismatch')}} de l'objet {{DOMxRef('ValidityState')}} sera vraie.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const inputElement = document.getElementById("year");
console.log(inputElement.pattern);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML{{HTMLElement("input")}}
- La propriété {{DOMxRef("HTMLInputElement.value")}}
- [Validation côté client](/fr/docs/Web/HTML/Reference/Elements/input#validation_côté_client)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
