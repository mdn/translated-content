---
title: "HTMLFieldSetElement : méthode reportValidity()"
short-title: reportValidity()
slug: Web/API/HTMLFieldSetElement/reportValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`reportValidity()`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} effectue les mêmes étapes de vérification de validité que la méthode {{DOMxRef("HTMLFieldSetElement.checkValidity", "checkValidity()")}}. Elle retourne toujours une valeur vraie car les éléments HTML {{HTMLElement("fieldset")}} ne sont jamais candidats à la [validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation).

## Syntaxe

```js-nolint
reportValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Un booléen, `true`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFieldSetElement.checkValidity()")}}
- L'élément HTML {{HTMLElement("fieldset")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
