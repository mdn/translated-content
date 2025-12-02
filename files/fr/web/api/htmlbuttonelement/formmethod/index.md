---
title: "HTMLButtonElement : propriété formMethod"
short-title: formMethod
slug: Web/API/HTMLButtonElement/formMethod
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formMethod`** de l'interface {{DOMxRef("HTMLButtonElement")}} correspond à la méthode {{Glossary("HTTP")}} utilisée pour soumettre le {{HTMLElement("form")}} si l'élément {{HTMLElement("button")}} est le contrôle qui soumet le formulaire. Elle reflète la valeur de l'attribut [`formmethod`](/fr/docs/Web/HTML/Reference/Elements/button#formmethod) de l'élément `<button>`.

La valeur remplace la propriété {{DOMxRef("HTMLFormElement.method", "method")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le bouton. Cette propriété peut être lue ou définie. Si elle est définie avec une valeur vide ou invalide, la valeur par défaut invalide est `"get"`. Si elle n'est pas définie, la valeur est la chaîne vide (`""`).

## Valeur

Une chaîne de caractères&nbsp;; `"post"`, `"get"`, `"dialog"` ou `""`.

## Exemples

```js
btnEl.formMethod = "post";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLButtonElement.formAction")}}
- La propriété {{DOMxRef("HTMLButtonElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLButtonElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.formTarget")}}
- La propriété {{DOMxRef("HTMLFormElement.method")}}
- [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
