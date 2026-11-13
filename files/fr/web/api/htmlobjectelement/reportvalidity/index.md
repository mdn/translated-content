---
title: "HTMLObjectElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLObjectElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLObjectElement")}} effectue les mêmes étapes de vérification de validité que la méthode {{DOMxRef("HTMLObjectElement.checkValidity", "checkValidity()")}}. Elle retourne toujours vrai car les éléments HTML {{HTMLElement("object")}} ne sont jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

## Syntaxe

```js-nolint
reportValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Une valeur booléenne, `true`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLObjectElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("object")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
