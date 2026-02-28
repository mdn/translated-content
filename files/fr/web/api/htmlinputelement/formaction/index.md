---
title: "HTMLInputElement : propriété formAction"
short-title: formAction
slug: Web/API/HTMLInputElement/formAction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formAction`** de l'interface {{DOMxRef("HTMLInputElement")}} correspond à l'URL du programme exécuté sur le serveur lorsque le formulaire auquel appartient ce contrôle est soumis. Elle reflète la valeur de l'attribut [`formaction`](/fr/docs/Web/HTML/Reference/Elements/input#formaction) de l'élément HTML `<input>`.

Cette propriété n'est valide que pour les éléments `<input>` de type [`submit`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image).

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.action", "action")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via l'input. Cette propriété peut être lue ou modifiée.

## Valeur

Une chaîne de caractères. L'URL de soumission du formulaire.

## Exemples

```js
inputElement.formAction = "/cgi-bin/publish";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLInputElement.formMethod")}}
- La propriété {{DOMxRef("HTMLInputElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.formTarget")}}
- L'élément HTML `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}`
- L'élément HTML `{{HTMLElement("input/image", "&lt;input type=\"image\"&gt;")}}`
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
