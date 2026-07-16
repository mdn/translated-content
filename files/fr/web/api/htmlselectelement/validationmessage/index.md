---
title: "HTMLSelectElement : propriété validationMessage"
short-title: validationMessage
slug: Web/API/HTMLSelectElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLSelectElement")}} retourne une chaîne de caractères représentant un message localisé qui décrit les contraintes de validation que le contrôle {{HTMLElement("select")}} ne respecte pas (le cas échéant). Il s'agit d'une chaîne vide si le contrôle n'est pas candidat à la validation des contraintes ({{DOMxRef("HTMLSelectElement.willValidate")}} vaut `false`), ou s'il respecte ses contraintes.

Si l'élément `<select>` est candidat à la validation des contraintes (`willValidate` vaut `true`) et que les contraintes ne sont pas respectées (la propriété `valid` de l'objet {{DOMxRef("HTMLSelectElement.validity")}} vaut `false`), la valeur est le message d'erreur qui serait affiché à l'utilisateur·ice lors de la validation.

## Valeur

Une chaîne de caractères.

## Exemple

```js
const select = document.getElementById("mySelect");
const errorMessage = select.validationMessage;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}
- L'interface {{DOMxRef("HTMLSelectElement")}}
- La propriété {{DOMxRef("HTMLSelectElement.willValidate")}}
- La propriété {{DOMxRef("HTMLSelectElement.validity")}}
- La méthode {{DOMxRef("HTMLSelectElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLSelectElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLSelectElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
