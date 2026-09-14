---
title: "HTMLOutputElement : propriété validationMessage"
short-title: validationMessage
slug: Web/API/HTMLOutputElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLOutputElement")}} retourne une chaîne de caractères représentant un message localisé décrivant les contraintes de validation que le contrôle {{HTMLElement("output")}} ne satisfait pas (le cas échéant). Il s'agit d'une chaîne vide car les éléments `<output>` ne sont pas candidats à la validation de contraintes ({{DOMxRef("HTMLOutputElement.willValidate")}} vaut `false`).

## Valeur

Une chaîne de caractères vide, `""`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("output")}}
- L'interface {{DOMxRef("HTMLOutputElement")}}
- La propriété {{DOMxRef("HTMLOutputElement.willValidate")}}
- La propriété {{DOMxRef("HTMLOutputElement.validity")}}
- La méthode {{DOMxRef("HTMLOutputElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLOutputElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLOutputElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
