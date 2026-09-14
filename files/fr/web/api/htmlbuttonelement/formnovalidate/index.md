---
title: "HTMLButtonElement : propriété formNoValidate"
short-title: formNoValidate
slug: Web/API/HTMLButtonElement/formNoValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formNoValidate`** de l'interface {{DOMxRef("HTMLButtonElement")}} est une valeur booléenne qui indique si le formulaire ({{HTMLElement("form")}}) contournera la [validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) lorsqu'il est soumis via un {{HTMLElement("button")}}. Elle reflète l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/button#formnovalidate) de l'élément `<button>`.

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.noValidate", "noValidate")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le bouton. Cette propriété peut être lue ou définie.

## Valeur

Un booléen.

## Exemples

```js
const buttonElement = document.getElementById("myButton");
console.log(buttonElement.formNoValidate);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{DOMxRef("HTMLButtonElement.reportValidity()")}}
- La fonction {{DOMxRef("HTMLButtonElement.checkValidity()")}}
- La propriété {{DOMxRef("HTMLButtonElement.formAction")}}
- La propriété {{DOMxRef("HTMLButtonElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLButtonElement.formMethod")}}
- La propriété {{DOMxRef("HTMLButtonElement.formTarget")}}
- L'élément HTML {{HTMLElement("form")}}
- La propriété {{DOMxRef("HTMLFormElement.noValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.formNoValidate")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation de contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
