---
title: "HTMLInputElement : propriété formEnctype"
short-title: formEnctype
slug: Web/API/HTMLInputElement/formEnctype
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formEnctype`** de l'interface {{DOMxRef("HTMLInputElement")}} correspond au {{Glossary("MIME_type", "type MIME")}} du contenu envoyé au serveur lorsque l'élément `<input>` avec `formEnctype` est utilisé pour la soumission du formulaire. Elle reflète la valeur de l'attribut [`formenctype`](/fr/docs/Web/HTML/Reference/Elements/input#formenctype) de l'élément HTML `<input>`.

Cette propriété n'est valide que pour les éléments `<input>` de type [`submit`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image).

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.enctype", "enctype")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le champ de saisie. Cette propriété peut être lue ou modifiée. Si elle n'est pas définie, la valeur est une chaîne vide (`""`).

## Valeur

Une chaîne de caractères.

## Exemples

```js
inputElement.formEnctype = "application/x-www-form-urlencoded";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.formAction")}}
- La propriété {{DOMxRef("HTMLInputElement.formMethod")}}
- La propriété {{DOMxRef("HTMLInputElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.formTarget")}}
- La propriété {{DOMxRef("HTMLFormElement.enctype")}}
- L'élément HTML `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}`
- L'élément HTML `{{HTMLElement("input/image", "&lt;input type=\"image\"&gt;")}}`
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
