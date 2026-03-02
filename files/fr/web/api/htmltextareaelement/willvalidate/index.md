---
title: "HTMLTextAreaElement : propriété willValidate"
short-title: willValidate
slug: Web/API/HTMLTextAreaElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`willValidate`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique si l'élément HTML {{HTMLElement("textarea")}} est candidat à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Elle vaut `false` si une condition l'empêche d'être candidat à la validation des contraintes, par exemple si sa propriété {{DOMxRef("HTMLTextAreaElement.disabled", "disabled")}} ou {{DOMxRef("HTMLTextAreaElement.readOnly", "readOnly")}} est à `true`.

## Valeur

Une valeur booléenne.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLTextAreaElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("textarea")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
