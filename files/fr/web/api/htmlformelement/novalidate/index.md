---
title: "HTMLFormElement : propriété noValidate"
short-title: noValidate
slug: Web/API/HTMLFormElement/noValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`noValidate`** de l'interface {{DOMxRef("HTMLFormElement")}} est une valeur booléenne indiquant si l'élément {{HTMLElement("form")}} contourne la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) lors de la soumission. Elle reflète l'attribut [`novalidate`](/fr/docs/Web/HTML/Reference/Elements/form#novalidate) de l'élément `<form>`&nbsp;; si l'attribut est présent, la valeur est `true`.

Si cet attribut n'est pas défini ou si sa valeur est `false`, le formulaire est soumis avec validation. Cela peut être contourné en réglant la propriété {{DOMxRef("HTMLInputElement.formNoValidate")}} ou {{DOMxRef("HTMLButtonElement.formNoValidate")}} à `true`, soit via JavaScript, soit via l'attribut HTML `formnovalidate` sur le contrôle utilisé pour soumettre le formulaire.

Cette propriété est lisible et modifiable.

## Valeur

Un booléen.

## Exemples

```js
const element = document.getElementById("myForm");
console.log(element.noValidate);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLFormElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLFormElement.checkValidity()")}}
- La propriété {{DOMxRef("HTMLFormElement.action")}}
- La propriété {{DOMxRef("HTMLFormElement.enctype")}}
- La propriété {{DOMxRef("HTMLFormElement.method")}}
- La propriété {{DOMxRef("HTMLFormElement.target")}}
- L'élément HTML {{HTMLElement("form")}}
- [Apprendre&nbsp;: Validation des formulaires côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
