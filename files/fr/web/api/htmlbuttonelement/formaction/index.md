---
title: "HTMLButtonElement : propriété formAction"
short-title: formAction
slug: Web/API/HTMLButtonElement/formAction
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formAction`** de l'interface {{DOMxRef("HTMLButtonElement")}} correspond à l'URL du programme exécuté sur le serveur lorsque le formulaire auquel ce contrôle appartient est soumis. Elle reflète la valeur de l'attribut [`formaction`](/fr/docs/Web/HTML/Reference/Elements/button#formaction) de l'élément `<button>`.

La valeur remplace la propriété {{DOMxRef("HTMLFormElement.action", "action")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le bouton. Cette propriété peut être lue ou définie.

## Valeur

Une chaîne de caractères. L'URL de soumission du formulaire.

## Exemples

```js
btnEl.formAction = "/cgi-bin/publish";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLButtonElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLButtonElement.formMethod")}}
- La propriété {{DOMxRef("HTMLButtonElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.formTarget")}}
- [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
