---
title: "HTMLButtonElement : propriété formTarget"
short-title: formTarget
slug: Web/API/HTMLButtonElement/formTarget
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formTarget`** de l'interface {{DOMxRef("HTMLButtonElement")}} correspond à l'onglet, la fenêtre ou l'iframe où la réponse du {{HTMLElement("form")}} soumis doit s'afficher. Elle reflète la valeur de l'attribut [`formtarget`](/fr/docs/Web/HTML/Reference/Elements/button#formtarget) de l'élément HTML {{HTMLElement("button")}}.

La valeur remplace la propriété {{DOMxRef("HTMLFormElement.target", "target")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le bouton. Cette propriété peut être lue ou définie. Si elle n'est pas définie, la valeur est la chaîne vide (`""`).

## Valeur

Une chaîne de caractères.

## Exemples

```js
btnEl.formTarget = "_self";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLButtonElement.formAction")}}
- La propriété {{DOMxRef("HTMLButtonElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLButtonElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLButtonElement.formMethod")}}
- La propriété {{DOMxRef("HTMLFormElement.target")}}
- [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
