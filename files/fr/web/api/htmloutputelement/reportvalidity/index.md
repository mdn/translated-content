---
title: "HTMLOutputElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLOutputElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLOutputElement")}} effectue les mêmes étapes de vérification de validité que la méthode {{DOMxRef("HTMLOutputElement.checkValidity", "checkValidity()")}}. Elle retourne toujours `true` car les éléments HTML {{HTMLElement("output")}} ne sont jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

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

- La méthode {{DOMxRef("HTMLOutputElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("output")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
