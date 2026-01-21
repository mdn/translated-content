---
title: "HTMLTextAreaElement: validationMessage property"
short-title: validationMessage
slug: Web/API/HTMLTextAreaElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} retourne une chaîne de caractères représentant un message localisé qui décrit les contraintes de validation que le contrôle {{HTMLElement("textarea")}} ne respecte pas (le cas échéant). Il s'agit d'une chaîne de caractères vide si le contrôle n'est pas candidat à la validation des contraintes ({{DOMxRef("HTMLTextAreaElement.willValidate")}} est `false`), ou s'il respecte ses contraintes.

Si l'élément `<textarea>` est candidat à la validation des contraintes (`willValidate` égal à `true`) et que les contraintes ne sont pas respectées (la propriété `valid` de l'objet {{DOMxRef("HTMLTextAreaElement.validity")}} est égale `false`), la valeur est le message d'erreur qui serait affiché à l'utilisateur·ice lors de la validation.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const textarea = document.getElementById("myTextArea");
const errorMessage = textarea.validationMessage;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTextAreaElement.willValidate")}}
- {{DOMxRef("HTMLTextAreaElement.validity")}}
- {{DOMxRef("HTMLTextAreaElement.checkValidity()")}}
- {{DOMxRef("HTMLTextAreaElement.reportValidity()")}}
- {{DOMxRef("HTMLTextAreaElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
