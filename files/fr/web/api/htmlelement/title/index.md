---
title: "HTMLElement : propriété title"
short-title: title
slug: Web/API/HTMLElement/title
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`title`** de l'interface {{DOMxRef("HTMLElement")}} représente le titre de l'élément&nbsp;: le texte généralement affiché dans une «&nbsp;info-bulle&nbsp;» lorsque la souris survole le nœud.

## Valeur

Une chaîne de caractères.

## Exemples

```js
const link = document.createElement("a");
link.innerText = "raisins";
link.href = "https://fr.wikipedia.org/wiki/Raisin";
link.title = "Page Wikipédia sur les raisins";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut HTML universel [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
