---
title: "HTMLTextAreaElement : propriété name"
short-title: name
slug: Web/API/HTMLTextAreaElement/name
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} indique le nom de l'élément HTML {{HTMLElement("textarea")}}. Elle reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/textarea#name) de l'élément.

## Valeur

Une chaîne de caractères représentant le nom de l'élément.

## Exemple

```js
const textareaElement = document.querySelector("#message");
console.log(`Nom de l'élément : ${textareaElement.name}`);
textareaElement.name = "response"; // définit ou met à jour le nom de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLTextAreaElement.value")}}
- La propriété {{DOMxRef("HTMLTextAreaElement.textLength")}}
