---
title: "HTMLButtonElement : propriété formEnctype"
short-title: formEnctype
slug: Web/API/HTMLButtonElement/formEnctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formEnctype`** de l'interface {{DOMxRef("HTMLButtonElement")}} correspond au {{Glossary("MIME_type", "type MIME")}} du contenu envoyé au serveur lors de la soumission du formulaire. Elle reflète la valeur de l'attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/button#formenctype) de l'élément `<button>`.

La valeur remplace la propriété {{DOMxRef("HTMLFormElement.enctype", "enctype")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le bouton de soumission. Cette propriété peut être lue ou définie. Si elle n'est pas définie, la valeur est la chaîne vide (`""`).

## Valeur

Une chaîne de caractères.

## Exemples

```js
btnEl.formEnctype = "application/x-www-form-urlencoded";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLButtonElement.formAction")}}
- La propriété {{DOMxRef("HTMLButtonElement.formMethod")}}
- La propriété {{DOMxRef("HTMLButtonElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.formTarget")}}
- La propriété {{DOMxRef("HTMLFormElement.enctype")}}
- [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
