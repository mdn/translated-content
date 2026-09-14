---
title: "HTMLInputElement : propriété validationMessage"
short-title: validationMessage
slug: Web/API/HTMLInputElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLInputElement")}} retourne une chaîne de caractères représentant un message localisé décrivant les contraintes de validation que le contrôle {{HTMLElement("input")}} ne satisfait pas (le cas échéant).

Si l'élément `<input>` n'est pas un candidat à la validation des contraintes ({{DOMxRef("HTMLInputElement.willValidate")}} est `false`), ou s'il satisfait ses contraintes, la valeur est une chaîne de caractères vide (`""`).

Si l'élément est un candidat à la validation des contraintes (`willValidate` est `true`) et que les contraintes ne sont pas respectées (la propriété `valid` de l'objet {{DOMxRef("HTMLInputElement.validity")}} est `false`), la valeur est le message d'erreur qui serait affiché à l'utilisateur·ice lors de la validation.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const input = document.getElementById("myInput");
const errorMessage = input.validationMessage;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("input")}}
- L'interface {{DOMxRef("HTMLInputElement")}}
- La propriété {{DOMxRef("HTMLInputElement.willValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.validity")}}
- La méthode {{DOMxRef("HTMLInputElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLInputElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLInputElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Valider les formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
