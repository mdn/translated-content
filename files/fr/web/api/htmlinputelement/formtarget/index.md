---
title: "HTMLInputElement : propriété formTarget"
short-title: formTarget
slug: Web/API/HTMLInputElement/formTarget
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`formTarget`** de l'interface {{DOMxRef("HTMLInputElement")}} correspond à l'onglet, la fenêtre ou l'iframe où la réponse du {{HTMLElement("form")}} soumis doit s'afficher. Elle reflète la valeur de l'attribut [`formtarget`](/fr/docs/Web/HTML/Reference/Elements/input#formtarget) de l'élément HTML {{HTMLElement("input")}}.

Cette propriété n'est valide que pour les éléments `<input>` de type [`submit`](/fr/docs/Web/HTML/Reference/Elements/input/submit) et [`image`](/fr/docs/Web/HTML/Reference/Elements/input/image).

Sa valeur remplace la propriété {{DOMxRef("HTMLFormElement.target", "target")}} de l'interface {{DOMxRef("HTMLFormElement")}} si le formulaire est soumis via le champ de saisie. Cette propriété peut être lue ou modifiée. Si elle n'est pas définie, la valeur est une chaîne vide (`""`).

## Valeur

Une chaîne de caractères.

## Exemples

```js
inputElement.formTarget = "_blank";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.formAction")}}
- La propriété {{DOMxRef("HTMLInputElement.formEnctype")}}
- La propriété {{DOMxRef("HTMLInputElement.formNoValidate")}}
- La propriété {{DOMxRef("HTMLInputElement.formMethod")}}
- La propriété {{DOMxRef("HTMLFormElement.target")}}
- L'élément HTML `{{HTMLElement("input/submit", "&lt;input type=\"submit\"&gt;")}}`
- L'élément HTML `{{HTMLElement("input/image", "&lt;input type=\"image\"&gt;")}}`
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
