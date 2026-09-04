---
title: "HTMLTextAreaElement : propriété required"
short-title: required
slug: Web/API/HTMLTextAreaElement/required
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`required`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique que l'utilisateur·ice doit renseigner une valeur avant de soumettre un formulaire. Elle reflète l'attribut [`required`](/fr/docs/Web/HTML/Reference/Elements/textarea#required) de l'élément HTML {{HTMLElement("textarea")}}.

## Valeur

Un booléen.

## Exemples

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.required);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.validity")}}
- La pseudo-classe CSS {{CSSxRef(":required")}}
