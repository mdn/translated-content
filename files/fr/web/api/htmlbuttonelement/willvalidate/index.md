---
title: "HTMLButtonElement : propriété willValidate"
short-title: willValidate
slug: Web/API/HTMLButtonElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`willValidate`** de l'interface {{DOMxRef("HTMLButtonElement")}} indique si l'élément HTML {{HTMLElement("button")}} est candidat à la [validation de contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation). Elle vaut `false` si une des conditions suivantes empêche la validation de contrainte&nbsp;:

- Son {{DOMxRef("HTMLButtonElement.type", "type")}} est `reset` ou `button`&nbsp;;
- Il a un ancêtre {{HTMLElement("datalist")}}&nbsp;;
- La propriété {{DOMxRef("HTMLButtonElement.disabled", "disabled")}} vaut `true`.

## Valeur

Une valeur booléenne.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("button")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
