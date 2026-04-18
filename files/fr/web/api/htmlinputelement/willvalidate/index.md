---
title: "HTMLInputElement : propriété willValidate"
short-title: willValidate
slug: Web/API/HTMLInputElement/willValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`willValidate`** de l'interface {{DOMxRef("HTMLInputElement")}} indique si l'élément HTML {{HTMLElement("input")}} est un candidat à la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation). Elle vaut `false` si certaines conditions l'empêchent de participer à la validation des contraintes, notamment&nbsp;:

- Son {{DOMxRef("HTMLInputElement.type", "type")}} est soit `hidden`, `reset` ou `button`&nbsp;;
- Il a un ancêtre {{HTMLElement("datalist")}}&nbsp;;
- Sa propriété {{DOMxRef("HTMLInputElement.disabled", "disabled")}} vaut `true`.

## Valeur

Une valeur booléenne.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLInputElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("input")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Valider les formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
