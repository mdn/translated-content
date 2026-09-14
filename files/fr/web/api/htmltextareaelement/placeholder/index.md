---
title: "HTMLTextAreaElement : propriété placeholder"
short-title: placeholder
slug: Web/API/HTMLTextAreaElement/placeholder
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`placeholder`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} représente une indication à l'utilisateur·ice sur ce qui peut être saisi dans le contrôle. Elle reflète l'attribut [`placeholder`](/fr/docs/Web/HTML/Reference/Elements/textarea#placeholder) de l'élément HTML {{HTMLElement("textarea")}}.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.placeholder);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.value")}}
