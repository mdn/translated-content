---
title: "HTMLQuoteElement : propriété cite"
short-title: cite
slug: Web/API/HTMLQuoteElement/cite
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`cite`** de l'interface {{DOMxRef("HTMLQuoteElement")}} indique l'URL de la source de la citation. Elle reflète l'attribut [`cite`](/fr/docs/Web/HTML/Reference/Elements/q#cite) de l'élément {{HTMLElement("q")}}.

## Valeur

Une chaîne de caractères représentant une URL.

## Exemple

```js
const quote = document.querySelector("q");
console.log(`Source d'origine : ${quote.cite}`); // valeur actuelle
quote.cite = "https://exemple.fr/citations"; // met à jour la valeur
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLQuoteElement")}}
- La propriété {{DOMxRef("HTMLModElement.cite")}}
