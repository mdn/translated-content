---
title: "HTMLTextAreaElement : propriété textLength"
short-title: textLength
slug: Web/API/HTMLTextAreaElement/textLength
l10n:
  sourceCommit: 3e097148b4c6cb9c6d8824275599f855ca63827b
---

{{ APIRef("HTML DOM") }}

La propriété en lecture seule **`textLength`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} est un entier non négatif représentant le nombre de caractères, en {{Glossary("UTF-16", "unités de code UTF-16")}}, de la valeur de l'élément {{HTMLElement("textarea")}}. Il s'agit d'un raccourci pour accéder à la longueur ({{JSxRef("String/length", "length")}}) sur sa propriété {{DOMxRef("HTMLTextAreaElement/value", "value")}}.

## Valeur

Un entier qui n'est pas négatif.

## Exemples

```js
const textareaElement = document.getElementById("comment");
console.log(textareaElement.textLength);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.rows")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.cols")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.minLength")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.maxLength")}}
