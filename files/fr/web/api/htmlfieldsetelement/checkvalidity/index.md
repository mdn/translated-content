---
title: "HTMLFieldSetElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLFieldSetElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLFieldSetElement")}} vérifie si l'élément est valide, mais retourne toujours vrai car les éléments HTML {{HTMLElement("fieldset")}} ne sont jamais candidats à la [validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation).

> [!NOTE]
> Les pseudo-classes CSS {{CSSxRef(":valid")}} et {{CSSxRef(":invalid")}} sont appliquées aux éléments `<fieldset>` en fonction de la validité de leurs contrôles de formulaire descendants, et non du fieldset lui-même.

## Syntaxe

```js-nolint
checkValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Un booléen, `true`.

## Exemples

Dans l'exemple suivant, l'appel à `checkValidity()` retourne `true`.

```js
const element = document.getElementById("myFieldSet");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFieldSetElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("fieldset")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation côté client des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation par contrainte](/fr/docs/Web/HTML/Guides/Constraint_validation)
