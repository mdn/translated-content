---
title: "HTMLOutputElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLOutputElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLOutputElement")}} vérifie si l'élément est valide, mais retourne toujours `true` car les éléments HTML {{HTMLElement("output")}} ne sont jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

## Syntaxe

```js-nolint
checkValidity()
```

### Paramètres

Aucun.

### Valeur de retour

Une valeur booléenne, `true`.

## Exemples

Dans l'exemple suivant, l'appel à `checkValidity()` retourne `true`.

```js
const element = document.getElementById("myOutput");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLOutputElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("output")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
