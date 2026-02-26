---
title: "HTMLButtonElement : propriété validationMessage"
short-title: validationMessage
slug: Web/API/HTMLButtonElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLButtonElement")}} retourne une chaîne de caractères représentant un message localisé qui décrit les contraintes de validation que le contrôle {{HTMLElement("button")}} ne satisfait pas (le cas échéant). Il s'agit d'une chaîne vide si le contrôle n'est pas candidat à la validation de contrainte (le [`type`](/fr/docs/Web/HTML/Reference/Elements/button#type) du `<button>` est `button` ou `reset`), ou s'il satisfait ses contraintes.

Si le `<button>` est candidat à la validation de contrainte (le `type` est défini ou vaut par défaut `submit` et {{DOMxRef("HTMLButtonElement.willValidate")}} vaut `true`) et que les contraintes ne sont pas respectées (il existe un {{DOMxRef("ValidityState.customError")}} non nul), la valeur est le message d'erreur qui serait affiché à l'utilisateur·ice lors de la validation de l'élément.

## Valeur

Une chaîne de caractères.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("button")}}
- L'interface {{DOMxRef("HTMLButtonElement")}}
- La propriété {{DOMxRef("HTMLButtonElement.willValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.validity")}}
- La méthode {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLButtonElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLButtonElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
