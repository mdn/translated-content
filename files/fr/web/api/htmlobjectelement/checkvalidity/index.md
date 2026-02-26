---
title: "HTMLObjectElement : méthode checkValidity()"
short-title: checkValidity()
slug: Web/API/HTMLObjectElement/checkValidity
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La méthode **`checkValidity()`** de l'interface {{DOMxRef("HTMLObjectElement")}} vérifie si l'élément est valide, mais retourne toujours vrai car les éléments {{HTMLElement("object")}} ne sont jamais candidats à la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation).

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
const element = document.getElementById("myObjectElement");
console.log(element.checkValidity());
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLObjectElement.reportValidity()")}}
- L'élément HTML {{HTMLElement("object")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
