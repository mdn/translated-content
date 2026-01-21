---
title: "HTMLInputElement : propriété dirName"
short-title: dirName
slug: Web/API/HTMLInputElement/dirName
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`dirName`** de l'interface {{DOMxRef("HTMLInputElement")}} correspond à la direction du texte de l'élément et permet la soumission de cette valeur. Elle reflète la valeur de l'attribut [`dirName`](/fr/docs/Web/HTML/Reference/Attributes/dirname) de l'élément HTML {{HTMLElement("input")}}. Cette propriété peut être lue ou modifiée.

Valide uniquement pour les `<input>` types [`hidden`](/fr/docs/Web/HTML/Reference/Elements/input/hidden), [`text`](/fr/docs/Web/HTML/Reference/Elements/input/text), [`search`](/fr/docs/Web/HTML/Reference/Elements/input/search), [`url`](/fr/docs/Web/HTML/Reference/Elements/input/url), [`tel`](/fr/docs/Web/HTML/Reference/Elements/input/tel) et [`email`](/fr/docs/Web/HTML/Reference/Elements/input/email), l'attribut `dirname` contrôle la façon dont la direction du texte de l'élément est soumise. Lorsqu'il est présent, le contrôle de formulaire sera soumis avec deux paires nom/valeur&nbsp;: la première étant le [`name`](/fr/docs/Web/HTML/Reference/Elements/input#name) et le [`value`](/fr/docs/Web/HTML/Reference/Elements/input#value), la seconde étant la valeur de l'attribut [`dirname`](/fr/docs/Web/HTML/Reference/Elements/input#dirname) comme nom, avec pour valeur `ltr` ou `rtl` selon le navigateur.

## Valeur

Une chaîne de caractères. La direction de l'élément.

## Exemples

```js
inputElement.dirName = "rtl";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.dirName")}}
- [L'attribut `dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
- [Envoyer des données de formulaire](/fr/docs/Learn_web_development/Extensions/Forms/Sending_and_retrieving_form_data)
