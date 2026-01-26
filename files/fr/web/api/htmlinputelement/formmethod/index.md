---
title: "HTMLInputElement : propriété formMethod"
short-title: formMethod
slug: Web/API/HTMLInputElement/formMethod
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formMethod`** de l'interface {{DOMxRef("HTMLInputElement")}} est la méthode {{Glossary("HTTP")}} utilisée pour soumettre le {{HTMLElement("form")}} si l'élément HTML {{HTMLElement("input")}} est le contrôle qui soumet le formulaire. Elle reflète la valeur de l'attribut [`formmethod`](/fr/docs/Web/HTML/Reference/Elements/input#formmethod) de l'élément HTML `<input>`.

Cette propriété n'est valide que pour les éléments [`submit`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image) `<input>`.

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.method", "method")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le champ de saisie. Cette propriété peut être lue ou modifiée. Si elle est définie avec une valeur vide ou invalide, la valeur par défaut invalide est `"get"`. Si elle n'est pas définie, la valeur est une chaîne vide (`""`).

## Valeur

Une chaîne de caractères&nbsp;; `"post"`, `"get"`, `"dialog"` ou `""`.

## Exemples

```js
inputElement.formMethod = "post";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.formAction")}}
- La propriété {{DOMxRef("HTMLInputElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLInputElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.formTarget")}}
- La propriété {{DOMxRef("HTMLFormElement.method")}}
- L'élément HTML `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}`
- L'élément HTML `{{HTMLElement("input/image", "&lt;input type=\"image\"&gt;")}}`
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
