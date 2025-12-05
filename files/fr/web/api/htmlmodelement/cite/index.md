---
title: "HTMLModElement : propriété cite"
short-title: cite
slug: Web/API/HTMLModElement/cite
l10n:
  sourceCommit: 4dd8392c92824cf3258715256514599aaf21c04b
---

{{APIRef("HTML DOM")}}

La propriété **`cite`** de l'interface {{DOMxRef("HTMLModElement")}} indique l'URL de la ressource expliquant la modification. Elle reflète l'attribut `cite` des éléments {{HTMLElement("del")}} et {{HTMLElement("ins")}}.

## Valeur

Une chaîne de caractères représentant une URL.

## Exemple

```js
const mod = document.querySelector("edit");
console.log(`Explication : ${mod.cite}`); // valeur actuelle
mod.cite = "https://example.com/edits"; // met à jour l'attribut cite de l'élément
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLModElement.dateTime")}}
- La propriété {{DOMxRef("HTMLQuoteElement.cite")}}
