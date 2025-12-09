---
title: "HTMLFieldSetElement : propriété validationMessage"
short-title: validationMessage
slug: Web/API/HTMLFieldSetElement/validationMessage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`validationMessage`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} retourne une chaîne de caractères représentant un message localisé décrivant les contraintes de validation que le contrôle {{HTMLElement("fieldset")}} ne satisfait pas (le cas échéant). Il s'agit de la chaîne vide, car les éléments `<fieldset>` ne sont pas candidats à la validation par contrainte ({{DOMxRef("HTMLFieldSetElement.willValidate")}} est `false`).

## Valeur

La chaîne vide, `""`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("fieldset")}}
- L'interface {{DOMxRef("HTMLFieldSetElement")}}
- La propriété {{DOMxRef("HTMLFieldSetElement.willValidate")}}
- La propriété {{DOMxRef("HTMLFieldSetElement.validity")}}
- La méthode {{DOMxRef("HTMLFieldSetElement.checkValidity()")}}
- La méthode {{DOMxRef("HTMLFieldSetElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLFieldSetElement.setCustomValidity()")}}
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
- Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}}
