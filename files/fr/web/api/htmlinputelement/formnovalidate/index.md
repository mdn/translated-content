---
title: "HTMLInputElement : propriété formNoValidate"
short-title: formNoValidate
slug: Web/API/HTMLInputElement/formNoValidate
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formNoValidate`** de l'interface {{DOMxRef("HTMLInputElement")}} est une valeur booléenne indiquant si le {{HTMLElement("form")}} contournera la [validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation) lorsqu'il est soumis via {{HTMLElement("input")}}. Elle reflète l'attribut [`formnovalidate`](/fr/docs/Web/HTML/Reference/Elements/input#formnovalidate) de l'élément HTML `<input>`.

Cette propriété n'est valide que pour les éléments `<input>` de type [`submit`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image).

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.noValidate", "noValidate")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le champ de saisie. Cette propriété peut être lue ou modifiée.

## Valeur

Un booléen.

## Exemples

```js
const inputElement = document.getElementById("myInput");
console.log(inputElement.formNoValidate);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("HTMLInputElement.reportValidity()")}}
- La méthode {{DOMxRef("HTMLInputElement.checkValidity()")}}
- La propriété {{DOMxRef("HTMLInputElement.formAction")}}
- La propriété {{DOMxRef("HTMLInputElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLInputElement.formMethod")}}
- La propriété {{DOMxRef("HTMLInputElement.formTarget")}}
- L'élément HTML `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}`
- L'élément HTML `{{HTMLElement("input/image", "&lt;input type=\"image\"&gt;")}}`
- L'élément HTML {{HTMLElement("form")}}
- La propriété {{DOMxRef("HTMLFormElement.noValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.formNoValidate")}}
- [Apprendre&nbsp;: Validation de formulaire côté client](/fr/docs/Learn_web_development/Extensions/Forms/Form_validation)
- [Guide&nbsp;: Validation des contraintes](/fr/docs/Web/HTML/Guides/Constraint_validation)
