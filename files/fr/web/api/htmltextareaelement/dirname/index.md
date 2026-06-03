---
title: "HTMLTextAreaElement : propriété dirName"
short-title: dirName
slug: Web/API/HTMLTextAreaElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`dirName`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} correspond à la direction de l'élément. Elle reflète la valeur de l'attribut [`dirName`](/fr/docs/Web/HTML/Reference/Attributes/dirname) de l'élément HTML {{HTMLElement("textarea")}}. Cette propriété peut être lue ou définie.

L'attribut `dirname` contrôle la façon dont la direction de l'élément est envoyée. Lorsqu'il est présent, le contrôle de formulaire sera envoyé avec deux paires nom/valeur : la première étant le [`name`](/fr/docs/Web/API/HTMLTextAreaElement/name) et la [`value`](/fr/docs/Web/API/HTMLTextAreaElement/value) du `<textarea>`, et la seconde étant la valeur de l'attribut [`dirname`](/fr/docs/Web/HTML/Reference/Elements/textarea#dirname) comme nom, avec une valeur `ltr` ou `rtl` définie par le navigateur.

## Valeur

Une chaîne de caractères. La direction de l'élément.

## Exemples

```js
textareaElement.dirName = "rtl";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLInputElement.dirName")}}
- [L'attribut `dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
- [Envoi de données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
