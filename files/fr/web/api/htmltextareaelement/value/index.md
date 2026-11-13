---
title: "HTMLTextAreaElement : propriété value"
short-title: value
slug: Web/API/HTMLTextAreaElement/value
l10n:
  sourceCommit: 45eeb37ecd89511a64b756af9469189d7a59b95e
---

{{APIRef("HTML DOM")}}

La propriété **`value`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} représente la valeur de l'élément HTML {{HTMLElement("textarea")}} sous forme de chaîne de caractères, qui est une chaîne de caractères vide si le widget ne contient aucun contenu. Elle retourne ou définit la valeur brute contenue dans le contrôle.

## Valeur

Une chaîne de caractères contenant le contenu de l'élément HTML {{HTMLElement("textarea")}}.

## Exemples

```js
const textareaElement = document.getElementById("comment");
const oldText = textareaElement.value;
textareaElement.value = oldText.toUpperCase();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.labels")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionStart")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.selectionEnd")}}
